/* 设计稿是750,采用1：100的比例,font-size为100 * (docEl.clientWidth * dpr / 750) */
let docEl = document.documentElement;
let metaEl = document.querySelector('meta[name="viewport"]');
const resizeEvt =
  "orientationchange" in window ? "orientationchange" : "resize";
let dpr = window.devicePixelRatio || 1;
let scale = 1 / dpr;
//设置viewport，进行缩放，达到高清效果
metaEl.setAttribute(
  "content",
  `width=device-width` +
    ",initial-scale=" +
    scale +
    ",maximum-scale=" +
    scale +
    ", minimum-scale=" +
    scale +
    ",user-scalable=no"
);
// 设置data-dpr属性，留作的css hack之用，解决图片模糊问题和1px细线问题
docEl.setAttribute("data-dpr", dpr.toString());
export function fnResize() {
  docEl.style.fontSize = docEl.clientWidth / 7.5 + "px";
}
window.addEventListener(resizeEvt, fnResize);
fnResize();
