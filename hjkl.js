const hjkl = {
    bindings: {
        up: "k",
        down: "j",
        left: "h",
        right: "l"
    },

    init: function () {
        // Load current bindings from storage
        browser.storage.local.get("bindings").then(result => {
            if (result.bindings) {
                hjkl.bindings = result.bindings;
            }
        });

        // Listen for storage changes (e.g. from popup)
        browser.storage.onChanged.addListener((changes, area) => {
            if (area === "local" && changes.bindings) {
                hjkl.bindings = changes.bindings.newValue;
            }
        });

        document.addEventListener("keydown", hjkl.onKeyPress, true);
    },

    onKeyPress: function (e) {
        if (
            e.target.nodeName === "INPUT" ||
            e.target.nodeName === "TEXTAREA" ||
            e.target.isContentEditable
        ) return;

        const key = e.key.toLowerCase();

        if (key === hjkl.bindings.down) {
            window.scrollBy(0, 25);
        } else if (key === hjkl.bindings.up) {
            window.scrollBy(0, -25);
        } else if (key === hjkl.bindings.left) {
            window.scrollBy(-25, 0);
        } else if (key === hjkl.bindings.right) {
            window.scrollBy(25, 0);
        }
    }
};

hjkl.init();
