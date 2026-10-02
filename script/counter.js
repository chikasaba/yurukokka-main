    /*
     * GoatCounter cumulative page-view counter
     *
     * Replace YOURCODE with your GoatCounter site code.
     *
     * Example:
     * https://example.goatcounter.com/counter//.json
     */

    const goatCounterCode = "chikaservermc";

    const counterURL =
        `https://${goatCounterCode}.goatcounter.com/counter//.json`;


    async function loadPageViews() {

        const element = document.getElementById("pageviews");

        try {

            const response = await fetch(counterURL);

            if (!response.ok) {
                throw new Error("GoatCounter request failed");
            }

            const data = await response.json();

            /*
             * GoatCounter returns the cumulative count
             * for the requested path.
             */

            const count = Number(data.count);

            if (Number.isFinite(count)) {

                element.textContent =
                    count.toLocaleString();

            } else {

                element.textContent = "—";

            }

        } catch (error) {

            console.error(
                "Could not load GoatCounter statistics:",
                error
            );

            element.textContent = "—";
        }
    }


    loadPageViews();