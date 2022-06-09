    // <⚠️ DONT DELETE THIS ⚠️>
    const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
    // <⚠️ /DONT DELETE THIS ⚠️>

    // over 녹색, leave파랑색, resize보라색, 오렌지색, rightclick 빨간색

    /*
    ✅ The text of the title should change when the mouse is on top of it.
    ✅ The text of the title should change when the mouse is leaves it.
    ✅ When the window is resized the title should change.
    ✅ On right click the title should also change.
    ✅ The colors of the title should come from a color from the colors array.
    ✅ DO NOT CHANGE .css, or .html files.
    ✅ ALL function handlers should be INSIDE of "superEventHandler"
    */
    const h2 = document.querySelector("h2");

    const superEventHandler = {
        resize_fn: function () {
            h2.style.color = colors[2];
            h2.textContent = "You just resized!";
        },
        mouseEnter_fn: function () {
            h2.style.color = colors[0];
            h2.textContent = "The mouse is here!";
        },
        mouseLeave_fn: function () {
            h2.style.color = colors[1];
            h2.textContent = "The mouse is gone!";
        },
        rightclick_fn: function () {
            h2.style.color = colors[4];
            h2.textContent = "That was a right click";
        }
    };

    window.addEventListener("resize", superEventHandler.resize_fn);
    window.addEventListener("contextmenu", superEventHandler.rightclick_fn);
    h2.addEventListener("mouseenter", superEventHandler.mouseEnter_fn);
    h2.addEventListener("mouseleave", superEventHandler.mouseLeave_fn);