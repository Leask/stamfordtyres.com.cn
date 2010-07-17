var requiredFlashPlayerVersion = "9.0.45";
if( !_urlBZA0ACE07137B84F21AAA7 ) {
	var _urlBZA0ACE07137B84F21AAA7 = null;
	var scripts = document.getElementsByTagName("script");
	for( var i=0;i<scripts.length;i++ ) {
		var s = scripts[i];
		var ssrc = "";
		try {
			ssrc = s.src;
		} catch( e ) {
			ssrc = "";
		}
		if (typeof ssrc != "undefined") {
			if( ssrc && ssrc.match(/bzLoader\.js/) ) {
				if (ssrc.length>11) {
					_urlBZA0ACE07137B84F21AAA7 = ssrc.substring(0,ssrc.length-11);
				} else {
					_urlBZA0ACE07137B84F21AAA7 = "./";
				}
			}
		}
	}
	_urlBZA0ACE07137B84F21AAA7 = _urlBZA0ACE07137B84F21AAA7.replace("&","%26");
}
function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) {
        //IE
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" ||
				script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        //Others
        script.onload = function() {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
function includeJS(filename) {
    var fileref = document.createElement('script');
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("src", filename);
    document.getElementsByTagName('head')[0].appendChild(fileref);
}
function includeCSS(filename) {
    var fileref = document.createElement('link');
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    document.getElementsByTagName('head')[0].appendChild(fileref);
}

function mootoolsLoadedBZA0ACE07137B84F21AAA7() {
   loadScript(_urlBZA0ACE07137B84F21AAA7+"slideshow/js/slideshow.js",slideshowLoadedBZA0ACE07137B84F21AAA7);
}
function slideshowLoadedBZA0ACE07137B84F21AAA7() {
   loadScript(_urlBZA0ACE07137B84F21AAA7+"bz.js",bzLoadedBZA0ACE07137B84F21AAA7);
}
function bzLoadedBZA0ACE07137B84F21AAA7() {
    bzEmbedSWFBZA0ACE07137B84F21AAA7();
}
function swfobjectLoadedBZA0ACE07137B84F21AAA7() {
	if (typeof insertHTMLCodeFlag != "undefined") {
        insertHTMLCode();
    }
    if (typeof swfobject != "undefined") {
		if (!swfobject.hasFlashPlayerVersion(requiredFlashPlayerVersion)) {
			includeCSS(_urlBZA0ACE07137B84F21AAA7+"slideshow/css/slideshow.css");
			includeCSS(_urlBZA0ACE07137B84F21AAA7+"slideshow/css/bzSlideshow.css");
			loadScript(_urlBZA0ACE07137B84F21AAA7+"slideshow/js/mootools-1.2.3.1-core-more.js",mootoolsLoadedBZA0ACE07137B84F21AAA7);
		} else {
			
			loadScript(_urlBZA0ACE07137B84F21AAA7+"bz.js",bzLoadedBZA0ACE07137B84F21AAA7);
		}
    }
}
function swfobjectLoaded() {
	swfobjectLoadedBZA0ACE07137B84F21AAA7();
}
function loadFilesBZA0ACE07137B84F21AAA7() {
    if (typeof swfobject == "undefined") {
        document.write('<script type="text/javascript" src="'+_urlBZA0ACE07137B84F21AAA7+"swfobject.js"+'"></script>');
    } else {
        swfobjectLoadedBZA0ACE07137B84F21AAA7();
    }
}
loadFilesBZA0ACE07137B84F21AAA7();
