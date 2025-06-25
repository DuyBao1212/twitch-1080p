const proxyHost = "proxy.moddychat.com";
const proxyPort = 8888; 

const pacScript = `
function FindProxyForURL(url, host) {
  if (shExpMatch(host, "usher.ttvnw.net")) {
    return "PROXY ${proxyHost}:${proxyPort}";
  }
  return "DIRECT";
}`;

const proxyConfig = {
  mode: "pac_script",
  pacScript: {
    data: pacScript
  }
};

function enableProxy() {
  chrome.proxy.settings.set({ value: proxyConfig, scope: "regular" }, () => {
    console.log("Прокси включен.");
  });
}

function disableProxy() {
  chrome.proxy.settings.clear({ scope: "regular" }, () => {
    console.log("Прокси выключен.");
  });
}

chrome.storage.sync.get(['proxyEnabled'], (result) => {
  if (result.proxyEnabled) {
    enableProxy();
  } else {
    disableProxy();
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleProxy") {
    chrome.storage.sync.get(['proxyEnabled'], (result) => {
      const newStatе = !result.proxyEnabled;
      if (newStatе) {
        enableProxy();
      } else {
        disableProxy();
      }
      chrome.storage.sync.set({ proxyEnabled: newStatе });
      sendResponse({ enabled: newStatе });
    });
    return true; 
  }
});