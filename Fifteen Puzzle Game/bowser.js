document.write('<body onload="load()">');
document.write('<p id="p1"></p>');
	document.write('<table align="center" border="1" bgcolor="black">\n');
		document.write('<tr>');
			document.write('<td><a href="javascript:change(0)"><img src="Bowser/1.jpg" name="tile0"></a></td><td><a href="javascript:change(1)"><img src="Bowser/2.jpg" name="tile1"></a></td><td><a href="javascript:change(2)"><img src="Bowser/3.jpg" name="tile2"></a></td><td><a href="javascript:change(3)"><img src="Bowser/4.jpg" name="tile3"></a></td>');
		document.write('</tr>');
		document.write('<tr>');
			document.write('<td><a href="javascript:change(4)"><img src="Bowser/5.jpg" name="tile4"></a></td><td><a href="javascript:change(5)"><img src="Bowser/6.jpg" name="tile5"></a></td><td><a href="javascript:change(6)"><img src="Bowser/7.jpg" name="tile6"></a></td><td><a href="javascript:change(7)"><img src="Bowser/8.jpg" name="tile7"></a></td>');
		document.write('</tr>');
		document.write('<tr>');
			document.write('<td><a href="javascript:change(8)"><img src="Bowser/9.jpg" name="tile8"></a></td><td><a href="javascript:change(9)"><img src="Bowser/10.jpg" name="tile9"></a></td><td><a href="javascript:change(10)"><img src="Bowser/11.jpg" name="tile10"></a></td><td><a href="javascript:change(11)"><img src="Bowser/12.jpg" name="tile11"></a></td>');
		document.write('</tr>');
		document.write('<tr>');
			document.write('<td><a href="javascript:change(12)"><img src="Bowser/13.jpg" name="tile12"></a></td><td><a href="javascript:change(13)"><img src="Bowser/14.jpg" name="tile13"></a></td><td><a href="javascript:change(14)"><img src="Bowser/15.jpg" name="tile14"></a></td><td><a href="javascript:change(15)"><img src="Bowser/16.jpg" name="tile15"></a></td>');
		document.write('</tr>');
	document.write('</table>');	
	document.write('<table align="center">');
		document.write('<tr>');
		document.write('<tr><td><form><input type="button" value="Shuffle Me!" onClick="shuffle()"></td><td><input type="button" value="Fix Me!" onClick="parent.location=\'bowser.html\'"></form></td></tr>\n');
		document.write('</tr>');
	document.write('</table>');
	document.write('<table align="center">');
		document.write('<tr><td><button type="button" onclick="parent.location=\'luigi.html\'">Luigi</button></td><td><button type="button" onclick="parent.location=\'mario.html\'">Mario</button></td><td><button type="button" onclick="parent.location=\'toad.html\'">Toad</button></td></tr>');
		document.write('</tr>');
	document.write('</table>');
document.write('</body>');




var game = new Array(16);
var empty = 15;

function load(){
	for(var x=0; x<16; x++)
		for (var y=0; y<16; y++)
			if (document.images[y].name == "tile" + x)
				game[x] = y;
}

function check(){
	var won ='yes';
	
	for(var x=0; x<16; x++){
		str = document.images[x].src.substr(-6);
		
		if(str.substr(0,1) == '/'){
			if ( str.substring(1,2) != (x+1)){
				won = 'no';
			}
		}else if ( str.substring(0,2) != (x+1)){
				won = 'no';
		}
	}
	if(won == 'yes'){
	document.getElementById("p1").innerHTML="You Win!!!!!!!!!";
	
		
	}	
}


function shuffle(){
document.getElementById("p1").innerHTML="";
	for(var x=0; x<200; x++){
		var temp = 0
		var random1 = Math.floor(Math.random()*16);
		do{
			var random2 = Math.floor(Math.random()*16);
			if(random1 != random2)
				temp++;
		}
		while(temp = 0)
		swap(random1,random2);
		if(random1 == empty)
			empty = random2;
		else if(random2 == empty)
			empty = random1;
	}
}

function swap(x,y){
	pick = game[x];
	blank = game[y];
	var BLANK = document.images[blank].src
	document.images[blank].src = document.images[pick].src;
	document.images[pick].src = BLANK;
}

function change(box){
	var distance = empty - box;
	if (distance < 0)
		distance = -(distance);
	if (distance == 1 || distance == 4){
		swap(box,empty);
		empty = box;
	}	
	check();
}
