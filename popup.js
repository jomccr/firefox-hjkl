document.addEventListener("DOMContentLoaded", () => {
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const save = document.getElementById("save");
    const restore = document.getElementById("restore");

    // Load current bindings
    browser.storage.local.get("bindings").then(result => {
      const bindings = result.bindings || { up: "k", down: "j", left: "h", right: "l" };
      up.value = bindings.up;
      down.value = bindings.down;
      left.value = bindings.left;
      right.value = bindings.right;
    });

    save.addEventListener("click", () => {
      const bindings = {
        up: up.value.toLowerCase(),
        down: down.value.toLowerCase(),
        left: left.value.toLowerCase(),
        right: right.value.toLowerCase()
      };

      browser.storage.local.set({ bindings }).then(() => {
        window.close(); // 👈 closes the popup
      });
    });

    restore.addEventListener("click", () => {
      up.value = "k";
      down.value = "j";
      left.value = "h";
      right.value = "l";
    });
  }
);
