function myCallback(hypeDocument, element, event) {
    if (isScalePossible()){
      window.myHypeContainerId = hypeDocument.documentId();
      $('#' + window.myHypeContainerId).css({
        '-moz-transform-origin': '0% 0%',
        '-webkit-transform-origin': '0% 0%',
        '-ms-transform-origin': '0% 0%',
        '-o-transform-origin': '0% 0%',					
        'transform-origin': '0% 0%',
        margin: 0
      });

      scaleSite();
      $(window).resize(scaleSite);
    }
    return true;
  }

  if("HYPE_eventListeners" in window === false) {
    window.HYPE_eventListeners = Array();
  }
  window.HYPE_eventListeners.push({"type":"HypeDocumentLoad", "callback":myCallback});


  function scaleSite()
  {
  	var hypeContainer = $('#' + window.myHypeContainerId);
    var containerWidth = hypeContainer.width();
    var containerHeight = hypeContainer.height();
    var parentWidth = hypeContainer.parent().width();
    var parentHeight = hypeContainer.parent().height();
    var scaleWidth = parentWidth / containerWidth;
    var scaleHeight = parentHeight / containerHeight;
    var scale = Math.min(scaleWidth, scaleHeight);
    var left = (containerWidth * scale < parentWidth) ? ((parentWidth - (containerWidth * scale)) / 2) + 'px' : '0px';
    var top = (containerHeight * scale < parentHeight) ? ((parentHeight - (containerHeight * scale)) / 2) + 'px' : '0px' ;
    hypeContainer.css({
        "-moz-transform"    : "scale("+scale+")",
        "-webkit-transform" : "scale("+scale+")",
        "-ms-transform"     : "scale("+scale+")",
        "-o-transform"      : "scale("+scale+")",
        "transform"         : "scale("+scale+")",
        "left" : left,
        "top" : top
    });
  }

  function isScalePossible() 
  {
    can = 'MozTransform' in document.body.style;
    if(!can) can = 'webkitTransform' in document.body.style;
    if(!can) can = 'msTransform' in document.body.style;
    if(!can) can = 'OTransform' in document.body.style;
    if(!can) can = 'transform' in document.body.style;
    if(!can) can = 'Transform' in document.body.style;
    return can;
  }
