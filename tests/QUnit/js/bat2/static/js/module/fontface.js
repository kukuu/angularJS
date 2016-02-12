(function(){

    function webfontSupport() {
		// short cut windows devices, IE5+ supports font-face, but not Windows Phones
		if (!(!/*@cc_on@if(@_jscript_version>=5)!@end@*/0)) {
			return (!navigator.userAgent.match(/Phone/)) ? true : false;
		}
				
		// Android 2.0 & 2.1 don't do web fonts
		if (!!navigator.userAgent.match(/Android (2.0|2.1)/)) {
		    return false;
		}
		
		var sheet, 
		    doc = document,
			head = doc.getElementsByTagName('head')[0],
			style = doc.createElement("style"),
			impl = doc.implementation || { hasFeature: function() { return false; } };
		 
		style.type = 'text/css';
		head.insertBefore(style, head.firstChild);
		sheet = style.sheet || style.styleSheet;
		  
		var supportAtRule = impl.hasFeature('CSS2', '') ?
		    function(rule) {
		        if (!(sheet && rule)) return false;
		        var result = false;
		        try {
		            sheet.insertRule(rule, 0);
		            result = !(/unknown/i).test(sheet.cssRules[0].cssText);
		            sheet.deleteRule(sheet.cssRules.length - 1);
		        } catch(e) { }
		        return result;
		    } :
		    function(rule) {
		        if (!(sheet && rule)) return false;
		        sheet.cssText = rule;
		
		        return sheet.cssText.length !== 0 && !(/unknown/i).test(sheet.cssText) &&
		          sheet.cssText
		                .replace(/\r+|\n+/g, '')
		                .indexOf(rule.split(' ')[0]) === 0;
		    };
		
		if(supportAtRule('@font-face { font-family: "font"; src: "://"; }')) {
		    return true;
		}
		
		return false;
	
	}
		
	// append 'ff' class on to the body if we detect @font-face support
	if (webfontSupport()){
		document.getElementsByTagName('html')[0].className += ' ff';
	}

})();