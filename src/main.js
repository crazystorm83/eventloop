// Event Loop 데모를 위한 메인 JavaScript 파일
console.log('Event Loop 데모가 시작되었습니다!');

// 간단한 이벤트 루프 데모
function demonstrateEventLoop() {
    console.log('1. 동기 코드 실행');
    
    // 매크로태스크 (setTimeout)
    setTimeout(() => {
        console.log('4. 매크로태스크 실행 (setTimeout)');
    }, 0);
    
    // 마이크로태스크
    queueMicrotask(() => {
        console.log('3. 마이크로태스크 실행 (Promise)');
    });
    
    console.log('2. 동기 코드 완료');
}

async function demonstrateEventLoop2() {
    const listeners = [listener1, listener2, listener3];

    console.log('1. 동기 코드 실행');

    for (const listener of listeners) {
       listener();
    }

    console.log('1. 동기 코드 완료');
}

async function listener1() {
    console.log('1. 리스너 1 실행');

    await callback1();

    queueMicrotask(() => {
        console.log('1. 마이크로태스크 실행 (listener1)');
    });

    queueMicrotask(() => {
        console.log('1. 마이크로태스크 실행 (listener2)');
    });

    queueMicrotask(() => {
        console.log('1. 마이크로태스크 실행 (listener3)');
    });

    console.log('1. 리스너 1 끝');
}

async function listener2() {
    console.log('1. 리스너 2 실행');

    await callback2();

    queueMicrotask(() => {
        console.log('1. 마이크로태스크 실행 (listener20)');
    });

    console.log('1. 리스너 2 끝');
}

async function listener3() {
    console.log('1. 리스너 3 실행');

    await callback3();

    queueMicrotask(() => {
        console.log('1. 마이크로태스크 실행 (listener30)');
    });

    console.log('1. 리스너 3 끝');
}

async function callback1() {
    console.log('1. 콜백 1 실행');

    document.getElementById('input').removeEventListener('blur', blurListener);
    document.getElementById('input2').focus();
    document.getElementById('input').addEventListener('blur', blurListener);

    // 이벤트 실행하는 방법 코드 알려줘

    await callback11();

    console.log('1. 콜백 1 끝');
}

async function callback11() {
    console.log('1. 콜백 11 실행');

    await new Promise((resolver) => {
        console.log('1. 콜백 11 PROMISE 내부 실행');
        setTimeout(() => {
            console.log('1. 콜백 11 PROMISE 내부 실행2');
            resolver();
        }, 1000 * 10);
        console.log('1. 콜백 11 PROMISE 내부 끝');
    });

    console.log('1. 콜백 11 끝');
}

async function callback2() {
    console.log('1. 콜백 2 실행');

    await callback22();

    console.log('1. 콜백 2 끝');
}

async function callback22() {
    console.log('1. 콜백 22 실행');
}

async function callback3() {
    console.log('1. 콜백 3 실행');

    await callback33();

    console.log('1. 콜백 3 끝');
}

async function callback33() {
    console.log('1. 콜백 33 실행');
}

// 페이지 로드 시 이벤트 루프 데모 실행
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('input').addEventListener('input', (e) => {
        console.log('1. 입력 이벤트 실행');
    });

    document.getElementById('input').addEventListener('blur', blurListener);

    document.getElementById('input').addEventListener('focus', (e) => {
        console.log('1. 포커스 이벤트 실행');
    });

    document.getElementById('input').addEventListener('keydown', (e) => {
        console.log('1. 키다운 이벤트 실행');
        
        e.keyCode === 65 && e.stopPropagation();

        demonstrateEventLoop2();
        // showPopup();
    });

    document.getElementById('input').addEventListener('change', (e) => {
        console.log('1. 체인지 이벤트 실행');
    });

    document.getElementById('input2').addEventListener('focus', (e) => {
        console.log('1. 포커스 이벤트 실행2');
    });
    
    // UI에 결과 표시
    const app = document.getElementById('app');
    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = `
        <h2>이벤트 루프 실행 순서:</h2>
        <ol>
            <li>동기 코드 실행</li>
            <li>동기 코드 완료</li>
            <li>마이크로태스크 실행 (Promise)</li>
            <li>매크로태스크 실행 (setTimeout)</li>
        </ol>
        <p>콘솔을 확인하여 실행 순서를 보세요!</p>
    `;
    app.appendChild(resultDiv);
});

async function showPopup() {
    const popup = window.open('popup.html', 'Popup', {
        width: 400,
        height: 300,
        left: 100,
        top: 100
    });
}


function blurListener(e) {
    console.log('1. 블러 이벤트 실행');
}