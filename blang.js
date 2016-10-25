window.setInterval(function () {
  var blinks = document.getElementsByTagName("blink");
  var b = blinks.length;
  while(b--){
    blinks[b].style.visibility = (blinks[b].style.visibility === 'visible') ? 'hidden' : 'visible';
  }
}, 250);