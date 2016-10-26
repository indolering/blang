window.setInterval(function () {
  var blinks = document.getElementsByTagName("blink");
  var b = blinks.length;
  while(b--){
    blinks[b].style.visibility = (blinks[b].style.visibility == 'visible') ? 'hidden' : 'visible';
  }
}, 250);

String.prototype.blink = function () {
  var blink = document.createElement("blink");
  var text = document.createTextNode(this.valueOf());
  blink.appendChild(text);
  return blink;
};