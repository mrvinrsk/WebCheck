browser.runtime.onMessage.addListener(commandRecieved);
function commandRecieved(message) {
    console.log("Communication.js: commandRecieved: " + message);

  switch (message.action) {
    case "getElement":
  }
}
