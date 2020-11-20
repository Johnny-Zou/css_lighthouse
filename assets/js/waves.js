function createWave(wavebox,windowHeight,windowWidth){
	// create a bunch of waves!
	var wave = document.createElement("div");
	var color_variation = [Math.floor(Math.random()*10) - 5,Math.floor(Math.random()*10) - 5,Math.floor(Math.random()*10)-5];
	var color_base = [233,243,246];
	var color = color_base.map( (x,id) => x + color_variation[id]);
	var left = Math.floor(Math.random()*windowWidth);
	var bottom = Math.floor(Math.random()*(windowHeight*0.8)) + 0.1*windowHeight;
	var height = Math.floor(Math.random()*2) + 2;
	var width = Math.floor(Math.random()*200) + 25;
	var animation_len = Math.floor(Math.random()*2000) + 8000;
	var animation_delay = Math.floor(Math.random()*2000);

	wave.classList.add("wave");
	wave.style.background = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
	wave.style.left = left + "px";
	wave.style.bottom = bottom + "px";
	wave.style.width = width + "px";
	wave.style.height = height + "px";
	wave.style.animationDuration = animation_len + "ms";
	wave.style.animationDelay = animation_delay + 'ms';
	wavebox.appendChild(wave);

	setTimeout(function(){
		wavebox.removeChild(wave);
	},animation_len + animation_delay);

	return wave;
}

function animate_waves(){
	var wavebox = document.getElementById("wavebox");
	var windowHeight = wavebox.offsetHeight;
	var windowWidth = wavebox.offsetWidth;

	var num_wave = 5;

	for(var i = 0; i < num_wave; i++){
    	createWave(wavebox,windowHeight,windowWidth);
	}
	
	(function loop() {
	    var rand = Math.round(Math.random() * 1000) + 2000;
	    setTimeout(function() {
	    	var num_wave = Math.floor(Math.random()*3) + 1;

	    	for(var i = 0; i < num_wave; i++){
            	createWave(wavebox,windowHeight,windowWidth);
        	}
            loop();
	    }, rand);
	}());
}



animate_waves();