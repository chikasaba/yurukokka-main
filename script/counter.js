const GOATCOUNTER_CODE = "chikaservermc";


// ========================================
// カウンターAPI
// ========================================

const COUNTER_URL =
    `https://${GOATCOUNTER_CODE}.goatcounter.com/counter//.json`;



// ========================================
// PV取得
// ========================================

async function loadPageViews() {

    // <span id="pageviews"> を取得
    const element =
        document.getElementById("pageviews");


    // HTML側に存在しなければ何もしない
    if (!element) {
        console.error(
            'id="pageviews" が見つかりません。'
        );

        return;
    }


    try {

        // GoatCounterへアクセス
        const response =
            await fetch(COUNTER_URL);


        // HTTPエラー確認
        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }


        // JSONを取得
        const data =
            await response.json();


        // デバッグ用
        console.log("GoatCounter response:", data);


        // GoatCounterのcountを取得
        //
        // GoatCounterの仕様上、
        // countは文字列として返されます。
        //
        // 例:
        // {
        //     "count": "3"
        // }
        //
        const count = data.count;


        // countが存在するか確認
        if (
            count !== undefined &&
            count !== null
        ) {

            element.textContent = count;

        } else {

            element.textContent = "—";

            console.error(
                "GoatCounterからcountを取得できませんでした。",
                data
            );

        }


    } catch (error) {

        console.error(
            "GoatCounterからPVを取得できませんでした:",
            error
        );

        element.textContent = "—";

    }
}


// ========================================
// 実行
// ========================================

loadPageViews();