const hjkl = {
    bindings: {
        up: "k",
        down: "j",
        left: "h",
        right: "l"
    },
    distance: 25,

    init: function () {
        // Load current bindings from storage
        browser.storage.local.get(["bindings", "distance"]).then(result => {
            if (result.bindings) {
                hjkl.bindings = result.bindings;
            }
            if (result.distance !== undefined) {
                hjkl.distance = result.distance;
            }
        });

        // Listen for storage changes (e.g. from popup)
        browser.storage.onChanged.addListener((changes, area) => {
            if (area === "local" && changes.bindings) {
                hjkl.bindings = changes.bindings.newValue;
            }
            if (area === "local" && changes.distance) {
                hjkl.distance = changes.distance.newValue;
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
            window.scrollBy(0, hjkl.distance);
        } else if (key === hjkl.bindings.up) {
            window.scrollBy(0, -hjkl.distance);
        } else if (key === hjkl.bindings.left) {
            window.scrollBy(-hjkl.distance, 0);
        } else if (key === hjkl.bindings.right) {
            window.scrollBy(hjkl.distance, 0);
        }
    }
};

hjkl.init();
