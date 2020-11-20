function createStar(skybox,windowHeight,windowWidth){
	// create a bunch of stars!
	var star = document.createElement("div");
	var color_variation = [Math.floor(Math.random()*10) - 5,Math.floor(Math.random()*10) - 5,Math.floor(Math.random()*10)-5];
	var color_base = [233,243,246];
	var color = color_base.map( (x,id) => x + color_variation[id]);
	var left = Math.floor(Math.random()*windowWidth);
	var top = Math.floor(Math.random()*(windowHeight*0.6));
	var length = Math.floor(Math.random()*2) + 2;
	var animation_len = Math.floor(Math.random()*1000) + 2000;

	star.classList.add("star");
	star.style.background = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
	star.style.left = left + "px";
	star.style.top = top + "px";
	star.style.width = length + "px";
	star.style.height = length + "px";
	star.style.animationDuration = animation_len + "ms";
	skybox.appendChild(star);

	setTimeout(function(){
		skybox.removeChild(star);
	},animation_len);

	return star;
}

function animate_stars(){
	var skybox = document.getElementById("starbox");
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;

	var num_star = 15;

	for(var i = 0; i < num_star; i++){
    	createStar(skybox,windowHeight,windowWidth);
	}
	
	(function loop() {
	    var rand = Math.round(Math.random() * 500) + 500;
	    setTimeout(function() {
	    	var num_star = Math.floor(Math.random()*15);

	    	for(var i = 0; i < num_star; i++){
            	createStar(skybox,windowHeight,windowWidth);
        	}
            loop();
	    }, rand);
	}());
}



animate_stars();