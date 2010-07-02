if( !_urlBZA0ACE07137B84F21AAA7 ) {
	var _urlBZA0ACE07137B84F21AAA7 = null;
	var scripts = document.getElementsByTagName("script");
	for( var i=0;i<scripts.length;i++ ) {
		var s = scripts[i];
		if( s.src && s.src.match(/bzLoader\.js/) ) {
			if (s.src.length>11) {
				_urlBZA0ACE07137B84F21AAA7 = s.src.substring(0,s.src.length-11);
			} else {
				_urlBZA0ACE07137B84F21AAA7 = "./";
			}
		}
	}
}
var _scriptsBZA0ACE07137B84F21AAA7 = new Array();
_scriptsBZA0ACE07137B84F21AAA7[0] = 'swfobject.js';
_scriptsBZA0ACE07137B84F21AAA7[1] = 'bz.js';
for( var i=0;i<_scriptsBZA0ACE07137B84F21AAA7.length;i++ ) {
	var urlC = _urlBZA0ACE07137B84F21AAA7+_scriptsBZA0ACE07137B84F21AAA7[i];
	document.write('<script type="text/javascript" src="'+ urlC +'"><\/script>');
}