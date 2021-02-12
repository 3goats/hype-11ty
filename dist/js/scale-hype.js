function layoutRequest(hypeDocument, element, event) {
  
   	var hypeDocEl = document.getElementById(hypeDocument.documentId());

    //returns [{name: xxx; height:xxx; width:xxx; breakpoint: xxx}, ...]
    var _layouts = hypeDocument.layoutsForSceneNamed(hypeDocument.currentSceneName());
    //current Layoutname
    var layoutName = hypeDocument.currentLayoutName();

    //get data for current Layout -> {name: xxx; height:xxx; width:xxx; breakpoint: xxx}
    var res = null;

    for (var i = 0; i < _layouts.length; i++) {
      var Obj = _layouts[i];
      if (Obj.name === layoutName) {
        res = Obj;
        break;
      }
    }


    if (res) {
	var wWidth =  window.innerWidth ||  (window.document.documentElement.clientWidth || window.document.body.clientWidth);
	
	var baseLayoutWidth = res['width'];

	var scaleFactor = (wWidth/baseLayoutWidth);
//	hypeDocEl.style.position = 'absolute';
	hypeDocEl.style.transformOrigin = "left top";
	hypeDocEl.style.WebkitTransformOrigin = "left top";
	hypeDocEl.style.msTransformOrigin = "left top";

	hypeDocEl.style.transform = "scaleX(" + scaleFactor +  ") scaleY(" + scaleFactor + ")";
	hypeDocEl.style.WebkitTransform = "scaleX(" + scaleFactor +  ") scaleY(" + scaleFactor + ")";
	hypeDocEl.style.msTransform = "scaleX(" + scaleFactor +  ") scaleY(" + scaleFactor + ")";
    }


hypeDocument.relayoutIfNecessary()

    return false

  }

if ("HYPE_eventListeners" in window === false) {
  window.HYPE_eventListeners = Array();
}
window.HYPE_eventListeners.push({
  "type": "HypeLayoutRequest",
  "callback": layoutRequest
}); 
