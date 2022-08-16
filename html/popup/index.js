function getElement(selector) {
  browser.runtime.sendMessage({
    action: 'getElement',
    selector: selector
  });
}
