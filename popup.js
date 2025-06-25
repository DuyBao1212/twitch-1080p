const toggleButton = document.getElementById('toggleButton');
const statusText = document.getElementById('status');

function updateUI(isEnabled) {
  if (isEnabled) {
    statusText.textContent = 'Статус: Включен';
    toggleButton.textContent = 'Выключить';
  } else {
    statusText.textContent = 'Статус: Выключен';
    toggleButton.textContent = 'Включить';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(['proxyEnabled'], (result) => {
    updateUI(result.proxyEnabled);
  });
});

toggleButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: "toggleProxy" }, (response) => {
    if (response) {
      updateUI(response.enabled);
    }
  });
});