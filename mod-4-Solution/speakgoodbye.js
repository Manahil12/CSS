
(function (window){
	var byeSpeaker = {};
	var speakWord = "GoodBye";
	byeSpeaker.speakWord = function (name) {
       console.log(speakWord + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);