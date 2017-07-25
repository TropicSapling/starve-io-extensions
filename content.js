var link = document.createElement('link')

link.type = 'text/css'
link.rel = 'stylesheet'
link.href = chrome.extension.getURL('lib/sweetalert.css');

document.head.appendChild(link);

var s = document.createElement('script');
s.src = chrome.extension.getURL('lib/sweetalert.min.js');

document.head.appendChild(s);

var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');

document.body.appendChild(s);