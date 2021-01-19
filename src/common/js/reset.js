function resetFontSize() { 
    var wWeight = document.documentElement.clientWidth;
    var scale = wWeight / 375
    var fontSize = 16 * scale
    document.getElementsByTagName('html')[0].style.fontSize = fontSize + "px"
 }
 // 当浏览器大小变化更新
window.addEventListener('resize', function () {
    resetFontSize()
  }, false)
  resetFontSize()