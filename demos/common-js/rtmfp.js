/**
 * Depends on those js libs:
 * 
 */
Rtmfp = function(pathSwf,config) {
	var pub = {};
	
	var idSwfObject = "rtmfp";
	var refSwfObject = null;
	
	function init() {
		$("body").append("<div id='"+idSwfObject+"'/>");
		
		var flashvars = config;
		
		swfobject.embedSWF(pathSwf,idSwfObject, "0", "0", "10.0.0",
			"expressInstall.swf",flashvars , {}, {},
			function (res) {
				if(res.success) {
					refSwfObject = document.getElementById(idSwfObject);
					console.info("testaaaaaaaaa"+refSwfObject);
				}
			});
	}
	
	pub.connectToPeer = function (peerId) {
		refSwfObject.connectToPeer(peerId);
	}
	
	pub.send = function(command,parameters) {
		console.info("sendimng"+command);
		refSwfObject.send(command+"|"+$.toJSON(parameters));
	}
	
	init()
	
	return pub;
}