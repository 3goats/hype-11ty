function layoutRequest(hypeDocument, element, event) {
  
    var hypeDocEl = document.getElementById(hypeDocument.documentId());
    var sceneElement = document.getElementById(hypeDocument.currentSceneId());

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
 var parentNodeWidth =  hypeDocEl.parentNode.getBoundingClientRect().width;
 
 var baseLayoutWidth = res['width'];
 var baseLayoutHeight = res['height'];
 
 var scaleFactor = (parentNodeWidth/baseLayoutWidth);
 
 sceneElement.style.transformOrigin = "left top";
 sceneElement.style.WebkitTransformOrigin = "left top";
 sceneElement.style.msTransformOrigin = "left top";

 sceneElement.style.transform = "scaleX(" + scaleFactor +  ") scaleY(" + scaleFactor + ")";
 sceneElement.style.WebkitTransform = "scaleX(" + scaleFactor +  ") scaleY(" + scaleFactor + ")";
 sceneElement.style.msTransform = "scaleX(" + scaleFactor +  ") scaleY(" + scaleFactor + ")";
 
 hypeDocEl.style.setProperty('width', parentNodeWidth + 'px');
 hypeDocEl.style.setProperty('height', (baseLayoutHeight * scaleFactor) + 'px')
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