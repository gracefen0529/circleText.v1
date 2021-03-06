let radius = 200;
let tubeRadius = 100;
var useData=[]
var txt=[]
let textTexture;
function easeOutQuart(x) {
return 1 - pow(1 - x, 4);
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(0)

}

function draw() {
	background(0)
	translate(width/2,height/2)
	let animationProgress = easeOutQuart(map(frameCount,0,200,0,1,true)) //剛開始從0開始，到300秒後1停止(用true限制)
	let animationProgress1 = easeOutQuart(map(frameCount,150,250,0,1,true)) //剛開始從0開始，到300秒後1停止(用true限制)
	fill(255)
	stroke(255)
		for(var i=0;i<300;i+=2){
			stroke(255,30)
			let lastAng = (i-10)/1+ frameCount/36
			let ang = i/10 + frameCount/50
			let r = i + noise(i/100)*map(mouseX,0,width,0,1)*50
			fill(255,80)
			line(r*cos(lastAng),r*sin(lastAng),r*cos(ang),r*sin(ang))
			textSize(10)
			
			push()
				text("Hello"[i%6],cos(ang)*r,sin(ang)*r)
			pop()
		}
}

