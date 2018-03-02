//解决Android 手机下, input 或 textarea 元素聚焦时, 输入法遮盖输入框bug
function androidInputBugFix() {
  if (/Android/gi.test(navigator.userAgent)) {
    window.addEventListener('resize', function () {
      if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
        window.setTimeout(function () {
          document.activeElement.scrollIntoViewIfNeeded();
        }, 0);
      }
    })
  }
};
export default androidInputBugFix;