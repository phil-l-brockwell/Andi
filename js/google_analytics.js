var tracking_code = "UA-122787245-1";

var script = document.createElement("script");
script.src = `https://www.googletagmanager.com/gtag/js?id=${tracking_code}`;
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", tracking_code);
