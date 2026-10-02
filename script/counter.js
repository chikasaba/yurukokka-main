// GoatCounterのサイトコード
const GOATCOUNTER_CODE = "chikaservermc";

// GoatCounterのカウンターAPI
const COUNTER_URL =
    `https://${GOATCOUNTER_CODE}.goatcounter.com/counter//.json`;

// PVを取得してHTMLに表示
async function loadPageViews() {

    // id="pageviews" のHTML要素を取得
    const element = document.getElementById("pageviews");

    // HTML側に対象要素がなければ終了
    if (!element) {
        return;
    }

    try {

        // GoatCounter APIにアクセス
        const response = await fetch(COUNTER_URL);

        // HTTPエラーの場合
        if (!response.ok) {
            throw new Error(
                `GoatCounter API Error: ${response.status}`
            );
        }

        // JSONとしてデータを取得
        const data = await response.json();

        // countを数字として取得
        const count = Number(data.count);

        // 正常な数字ならHTMLに表示
        if (Number.isFinite(count)) {

            element.textContent =
                count.toLocaleString("ja-JP");

        } else {

            // 数字として認識できなかった場合
            element.textContent = "—";
        }

    } catch (error) {

        // 通信エラーなど
        console.error(
            "ページビュー数の取得に失敗しました:",
            error
        );

        element.textContent = "—";
    }
}

// 関数を実行
loadPageViews();