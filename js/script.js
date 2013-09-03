var CurrencyConverter = (function (){

    function getSelectedText(){
        var selected;
        if (window.getSelection) {
            selected = window.getSelection().toString();
        } else if (document.getSelection) {
            selected = document.getSelection();
        } else if (document.selection) {
            selected = document.selection.createRange().text;
        }
        return selected;
    }

    function checkAndConvert(str){
        if(str.length !== 0 && !isNaN(str)){
            str /= 1.3;
            return str;
        } else {
            return false;
        }
    }

    function createConvertedPopup (e){
        var e = e || window.event;
        var target = e.target || e.srcElement;
        event.preventDefault ? event.preventDefault() : (event.returnValue=false);

        if(checkAndConvert(getSelectedText()) === false){
            return false;
        }

        var popup = document.createElement('div');
        popup.innerHTML =  checkAndConvert(getSelectedText()).toFixed(2)+" EUR";
        target.parentNode.appendChild(popup);
        popup.style.position = 'absolute';
        popup.style.top = e.clientY-20+'px';
        popup.style.left = e.clientX+'px';

        setTimeout(function() {
            if(popup){
                popup.parentNode.removeChild(popup);
            }
        }, 3000);
    }

    this.addEventListener ('contextmenu', createConvertedPopup, false);
})();