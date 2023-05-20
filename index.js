/**
 * Image On Click
*/
let zoomBg    = document.querySelector("#zoom_bg");
let zoomImg   = document.querySelector("#zoom_bg #zoom_img")
let zoomClose = document.querySelector("#zoom_bg #zoom_close")

function imgOnClick(el) {
    document.body.style.overflow="hidden";
    zoomBg.classList.remove("hide");
    zoomImg.src = el.src;
}

zoomClose.addEventListener("click", () => {
    document.body.style.overflow="auto";
    zoomBg.classList.add("hide");
    zoomImg.src = "";
})