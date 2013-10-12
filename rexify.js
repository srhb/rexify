chrome.browserAction.onClicked.addListener(function(tab) {
    rexUrl = tab.url.replace(/\.([a-z]*)\//,".$1.ep.fjernadgang.kb.dk/");
    chrome.tabs.update(tab.id, {url: rexUrl}); 
}); 
