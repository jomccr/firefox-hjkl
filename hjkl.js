// hjkl.js - a firefox extension that will keep your hand off your mouse.

//document.body.style.border = "15px solid red";

const hjkl = {
    init: function() {
        document.addEventListener("keydown", hjkl.onKeyPress, true);
    },

    keyMap: {
        // todo : fill out the functions for h and l
        j_pressed: function() { window.scrollBy(0, 25);  },
        k_pressed: function() { window.scrollBy(0, -25); },
        h_pressed: function() { window.scrollBy(-25, 0); },
        l_pressed: function() { window.scrollBy(25, 0);  }
    },

    onKeyPress: function(e) {
        let keyString = String.fromCharCode(e.keyCode)
        //console.log("Found a keypress = " + keyString);

        // don't scroll the window if you're in an input field 
        if (e.target.nodeName === "INPUT" || e.target.nodeName === "TEXTAREA") 
            return;

        if (keyString === "J") {
            hjkl.keyMap.j_pressed();
        } else if (keyString === "K") {
            hjkl.keyMap.k_pressed();
        } else if (keyString === "H") {
            hjkl.keyMap.h_pressed();
        } else if (keyString === "L") {
            hjkl.keyMap.l_pressed();
        } 
    }
}

document.onload = hjkl.init();

