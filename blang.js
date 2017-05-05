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

document.addEventListener("DOMContentLoaded", function() {
  var blangs = document.getElementsByTagName('blang');
  if(blangs.length > 0){
    document.body.innerHTML = '<blink id="blang" style="text-align: center; font-family: \'Comic Sans MS\'"><h1>You are a terrible human being</h1></blink>';
  }

  console.info("But we are totally accepting pull requests if you want to make this happen.");
});