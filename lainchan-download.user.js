// ==UserScript==
// @name        lainchan download as original
// @namespace   i-cant-git
// @include     https://lainchan.org/*
// @version     1.0.0
// @downloadURL https://github.com/i-cant-git/lainchan-download/raw/master/build/lainchan-download.user.js
// @grant       none
// ==/UserScript==

Array.prototype.slice.call(document.querySelectorAll('.postfilename')).forEach(function(el) { 
  var filename = el.getAttribute('title') || el.innerHTML;
  var details = el.parentElement;
  var href = details.previousElementSibling.href;
    
  $(el).replaceWith(`<input onclick="this.select();" type="text" value="${filename}" />`);  
  $(`<span>&nbsp;[<a href="${href}" download="${filename}" title="${filename}">&#x1F4BE;</a>]</span>`).insertAfter(details);
});
