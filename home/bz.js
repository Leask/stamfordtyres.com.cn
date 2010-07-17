function bzGetFlashPlayerBZA0ACE07137B84F21AAA7() {
	var div = document.getElementById('SWBZA0ACE07137B84F21AAA7');
	if (div) {
		div.innerHTML = '<div id="showBZA0ACE07137B84F21AAA7" class="slideshow"><img src="'+_urlBZA0ACE07137B84F21AAA7+'slideshow/images/7855A2F0-5C03-42CE-9173.png" alt="FALKEN" /></div>';
		var data = {
			'7855A2F0-5C03-42CE-9173.png': { caption: 'FALKEN', href: '../pd_show/index_falken.html' },
			'588825D9-FAD5-4AD5-8C69.png': { caption: 'SUMO TIRE', href: '../pd_show/index_sumo.html' },
			'2901A1E8-6A6A-43F7-81AD.png': { caption: 'FIRENZA', href: '../pd_show/index_firenza_car.html' },
			'556A8681-FDD8-45DC-82A7.png': { caption: 'SSW轮辋', href: '../pd_show/index_ssw.html' },
			'E55A4763-CF27-48B7-A6FA.png': { caption: 'ALL BRANDS', href: '../pd_show/' }
		};
		if (typeof Slideshow != "undefined") {
			var myHu = _urlBZA0ACE07137B84F21AAA7+'slideshow/images/';
			var myLoader = {'animate': [_urlBZA0ACE07137B84F21AAA7+'slideshow/css/loader-#.png', 12]};
			var myShow = new Slideshow('showBZA0ACE07137B84F21AAA7',data, {controller: false, width: 900, height: 230, thumbnails: false, hu: myHu, loader: myLoader});
		} else {
			alert("Slideshow not loaded");
		}
	} else {
		alert("no SWBZA0ACE07137B84F21AAA7 div");
	}
}
function checkLocalWarning() {
	if (typeof checkLocalWarningFlag != "undefined") {
		var path = _urlBZA0ACE07137B84F21AAA7.substring(0,8);
		if (path.match('file:\/\/')) {
			var element = document.getElementById('local-warning');
			element.style.display = '';
		}
	}
}
function bzEmbedSWFBZA0ACE07137B84F21AAA7() {
	if (swfobject.hasFlashPlayerVersion(requiredFlashPlayerVersion)) {
		var flashvars = {
			xmlPath: _urlBZA0ACE07137B84F21AAA7 + "bz.xml",
			imgPath: _urlBZA0ACE07137B84F21AAA7 + "img",
			soundPath: false,
			themeMode: "2"
		};
		var params = {
			wmode: "transparent",
			allowscriptaccess: "always"
		};
		var attributes = {};
		swfobject.embedSWF(_urlBZA0ACE07137B84F21AAA7 + "bzAnimation.swf", "SWBZA0ACE07137B84F21AAA7", "900", "230", requiredFlashPlayerVersion, false, flashvars, params, attributes);
		swfobject.addDomLoadEvent(checkLocalWarning);
	} else {
		swfobject.addDomLoadEvent(bzGetFlashPlayerBZA0ACE07137B84F21AAA7);
	}
}
