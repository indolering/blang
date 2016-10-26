window.setInterval(function () {
  blink(document.getElementsByTagName("blink"));
  blink(document.getElementsByClassName("blang"));

  function blink(elements) {
    var b = elements.length;
    while(b--){
      elements[b].style.visibility = (elements[b].style.visibility == 'visible') ? 'hidden' : 'visible';
    }
  }

}, 250);

String.prototype.blink = function () {
  var blink = document.createElement("blink");
  var text = document.createTextNode(this.valueOf());
  blink.appendChild(text);
  return blink;
};