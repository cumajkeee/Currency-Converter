var CurrencyConverter = (function () {
    var instance = {};

    instance.getSelectedText = function () {
        var selected;
        if (window.getSelection) {
            selected = window.getSelection().toString();
        } else if (document.getSelection) {
            selected = document.getSelection();
        } else if (document.selection) {
            selected = document.selection.createRange().text;
        }
        return selected;
    };

    instance.checkAndConvert = function (str) {
        if(str.length !== 0 && !isNaN(str)) {
            str /= 1.3;
            return str.toFixed(2);
        } else {
            return false;
        }
    };

    instance.createConvertedPopup = function (e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;
        event.preventDefault ? event.preventDefault() : (event.returnValue=false);
        var getAndConvert = instance.checkAndConvert(instance.getSelectedText());

        if(getAndConvert === false){
            return false;
        }

        var popup = document.createElement('div');
        popup.innerHTML =  getAndConvert+" EUR";
        target.parentNode.appendChild(popup);
        popup.style.position = 'absolute';
        popup.style.top = e.clientY-20+'px';
        popup.style.left = e.clientX+'px';

        setTimeout(function() {
            if(popup){
                popup.parentNode.removeChild(popup);
            }
        }, 3000);
    };

    CurrencyConverter = function () {
        return instance;
    };

    this.addEventListener ('contextmenu', instance.createConvertedPopup, false);
})();

