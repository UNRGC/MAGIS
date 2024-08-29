const usd = 1;
const eur = 0.9;
const mxn = 19.68;

const price1 = 9.0;
const price2 = 26.99;
const price3 = 50.99;
const price4 = 90.99;

try {
    if (localStorage.getItem("moneda") === null) {
        localStorage.setItem("moneda", "USD");
    } else {
        var currency = document.getElementById("currency");
        if (currency) {
            currency.value = localStorage.getItem("moneda");
            convert();
        }
    }
} catch (error) {
    alert("No se puede guardar la moneda, por favor habilite las cookies.");
}

function convertCurrency(amount, currency) {
    if (currency === "USD") {
        return amount * usd;
    } else if (currency === "EUR") {
        return amount * eur;
    } else if (currency === "MXN") {
        return amount * mxn;
    }
}

function convert() {
    const currency = document.getElementById("currency").value;
    const result1 = convertCurrency(price1, currency).toFixed(2);
    const result2 = convertCurrency(price2, currency).toFixed(2);
    const result3 = convertCurrency(price3, currency).toFixed(2);
    const result4 = convertCurrency(price4, currency).toFixed(2);

    document.getElementById("price1").innerHTML = "$" + result1.split(".")[0] + "<small>." + result1.split(".")[1] + "</small>";
    document.getElementById("price2").innerHTML = "$" + result2.split(".")[0] + "<small>." + result2.split(".")[1] + "</small>";
    document.getElementById("price3").innerHTML = "$" + result3.split(".")[0] + "<small>." + result3.split(".")[1] + "</small>";
    document.getElementById("price4").innerHTML = "$" + result4.split(".")[0] + "<small>." + result4.split(".")[1] + "</small>";
    localStorage.setItem("moneda", currency);
}
