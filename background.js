console.log("Background extension running");
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    // console.log(tab);
    var msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
    console.log("hello");
}
