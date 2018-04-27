console.log("Content extension running");

let paragraphs = document.getElementsByTagName('p');
// for(elt of paragraphs){
//     elt.style['background-color'] = '#ff00ff'
// }

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(req, sender, res){
    console.log(req.txt);
}
