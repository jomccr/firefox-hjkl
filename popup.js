document.addEventListener("DOMContentLoaded", () => {
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const distance = document.getElementById("distance");
    const save = document.getElementById("save");
    const restore = document.getElementById("restore");

    // Load current bindings
    browser.storage.local.get(["bindings", "distance"]).then(result => {
      const bindings = result.bindings || { up: "k", down: "j", left: "h", right: "l" };
      up.value = bindings.up;
      down.value = bindings.down;
      left.value = bindings.left;
      right.value = bindings.right;

      const distanceValue = result.distance || 25;
      distance.value = distanceValue;
    });

    save.addEventListener("click", () => {
      const bindings = {
        up: up.value.toLowerCase(),
        down: down.value.toLowerCase(),
        left: left.value.toLowerCase(),
        right: right.value.toLowerCase()
      };

      browser.storage.local.set({ bindings, distance: Number(distance.value) }).then(() => {
        window.close(); // 👈 closes the popup
      });
    });

    restore.addEventListener("click", () => {
      up.value = "k";
      down.value = "j";
      left.value = "h";
      right.value = "l";
      distance.value = 25;
    });
  }
);
