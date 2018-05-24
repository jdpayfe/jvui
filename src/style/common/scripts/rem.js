// (function (doc, win) {
//     let docEl = doc.documentElement;
//     let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
//     let recalc = function () {
//         var clientWidth = docEl.clientWidth;
//         if (!clientWidth) return;
//         docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
//     };
//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
//     let devicePixelRatio = window.devicePixelRatio;
//     docEl.setAttribute('data-dpr', devicePixelRatio);
// })(document, window);

export const setBaseFont = function (doc, win, baseFont) {
    let docEl = doc.documentElement;
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    let recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = baseFont * (clientWidth / 375) + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    let devicePixelRatio = window.devicePixelRatio;
    docEl.setAttribute('data-dpr', devicePixelRatio);
};
