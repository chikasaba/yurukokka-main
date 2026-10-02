const GOATCOUNTER_CODE = "chikaservermc";

const url =
    `https://${GOATCOUNTER_CODE}.goatcounter.com/counter/TOTAL.json`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("pageviews").textContent = data.count;
    });