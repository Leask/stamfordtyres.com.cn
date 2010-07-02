function bzGetFlashPlayerBZA0ACE07137B84F21AAA7() {
	var div = document.getElementById('SWBZA0ACE07137B84F21AAA7');
	if (div) {
		div.innerHTML = '<p style="background-color:#ffffff;color:#000000;padding:1em;">You have an old version of Flash Player. <a href="http://www.adobe.com/go/getflash/" target="_top">Get the latest Flash player.</a></p>';
	} else {
		alert("no SWBZA0ACE07137B84F21AAA7 div");
	}
}
function checkLocalWarning() {
	var path = _urlBZA0ACE07137B84F21AAA7.substring(0,8);
	if (path.match('file:\/\/')) {
		var element = document.getElementById('local-warning');
		element.style.display = '';
	}
}
function bzEmbedSWFBZA0ACE07137B84F21AAA7() {
	if (swfobject.hasFlashPlayerVersion("9.0.45")) {
		var flashvars = {
			swfId: "SWBZA0ACE07137B84F21AAA7",
			xmlPath: _urlBZA0ACE07137B84F21AAA7 + "bz.xml",
			imgPath: _urlBZA0ACE07137B84F21AAA7 + "img",
			urlType: "_top",
			showInfo: "1",
			themeMode: "2"
		};
		var params = {
			wmode: "transparent",
			allowscriptaccess: "always"
		};
		var attributes = {};
		swfobject.embedSWF(_urlBZA0ACE07137B84F21AAA7 + "bzAnimation.swf", "SWBZA0ACE07137B84F21AAA7", "900", "230", "9.0.45", false, flashvars, params, attributes);
		swfobject.addDomLoadEvent(checkLocalWarning);
	} else {
		swfobject.addDomLoadEvent(bzGetFlashPlayerBZA0ACE07137B84F21AAA7);
	}
}
bzEmbedSWFBZA0ACE07137B84F21AAA7();
