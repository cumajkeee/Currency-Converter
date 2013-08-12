var body = document.getElementsByTagName('body')[0];
var text = document.getElementsByTagName('p')[0];

var selectedText = '';

function convert(e) {
    e = e || window.event;

    event.preventDefault ? event.preventDefault() : (event.returnValue=false);


    if (window.getSelection) {
        selectedText = window.getSelection().toString();
    } else if (document.getSelection) {
        selectedText = document.getSelection();
    } else if (document.selection) {
        selectedText = document.selection.createRange().text;
    }

    if(selectedText.length == 0 || isNaN(selectedText)){
        return false;
    }


    selectedText /= 1.3;
    selectedText.toFixed(2);

    var popup = document.createElement('div');
    popup.innerHTML = selectedText.toFixed(2)+"EUR";
    body.appendChild(popup);
    popup.style.position = 'absolute';
    popup.style.top = e.clientY-20+'px';
    popup.style.left = e.clientX+'px';

    setTimeout(function() {
        if(popup){
            popup.parentNode.removeChild(popup);
        }
    }, 3000);

}

text.addEventListener ('contextmenu', convert, false);