const app = document.querySelector("#app");

if (app === null) {
    throw new Error("#appが見つからない");
}

const target = app;

function render(): void {
    const page = location.hash;

    if (page === "#detail") {
        target.innerHTML = `
            <h1>画面切り替えの詳細</h1>
            <p>URLのハッシュを読み取って、画面を切り替えています。</p>
        `;
    } else {
        target.innerHTML = `
            <h1>画面生成方式の比較</h1>
            <p>違いを比較します。</p>
        `;
    }
}

render();

window.addEventListener("hashchange", render);