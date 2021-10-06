var gridSize = 40;
var subGrid = gridSize/2
var grid;
var toggle = -1;
var textBox;
var inText;
var toggled = [0,0,0,0];

var cols=[[249,122,14,255],
          [250,44,140,255],
          [14,177,166,255],
          [252,5,0,255],
          [241,80,244,255],
          [57,140,191,255],
          [181,236,231,255],
          [242,172,87,255]]; 

var colorin = cols;

//var cols=['#F97A0E','#FA2C8C','#0EB1A6','#FC0500','#F150F4',]

//var inText = 'the quick drown fox jumped over the lazy dog sphinx of the black quartz judge my vow wowowowo heehoo';

//colors
/* Donkey Kong Color Paleette
.Donkey-Kong-Arcade-Screen-1-hex { color: #F97A0E; }
.Donkey-Kong-Arcade-Screen-2-hex { color: #FA2C8C; }
.Donkey-Kong-Arcade-Screen-3-hex { color: #0EB1A6; }
.Donkey-Kong-Arcade-Screen-4-hex { color: #FC0500; }
.Donkey-Kong-Arcade-Screen-5-hex { color: #F150F4; }
*/

let clone = arr => Array.from(arr, item => Array.isArray(item) ? clone(item) : item);

function mouseClick(button, ind){

  if (toggled[ind]) {
          button.style.top = "0%";
          toggled[ind] = 0;
  }else{
        toggled[ind] = 1;
        button.style.top = "10%";
  }

  colorin=clone(cols);
  for(i=0; i<countIndex(); i++){
    colorin.push(colorin.shift());
  }

}

function getKey(){
  stri = 'KEY: ';

  stri += toggled[0];
  stri += toggled[1];
  stri += toggled[2];
  stri += toggled[3];

  
  return stri;
}

function countIndex(){
  return 1*toggled[0]+2*toggled[1]+4*toggled[2]+9*toggled[3];
}

function getSymbol(n){
  var code = n.charCodeAt(0);
  return code;
}

function getColor(symbol){

  

  if(symbol>96){
    symbol = symbol - 96;
    rem = symbol % 7;
    switch(rem){
      case 1:
        return colorin[0]; //RED
      case 2:
        return colorin[1]; //i dont know
      case 3:
        return colorin[2];
      case 4:
        return colorin[3];
      case 5:
        return colorin[4];
      case 6:
        return colorin[5];
      case 0:
        return colorin[6];
      default:
        return color('black');
    }
    // switch(rem){
    //   case 1:
    //     return color('#F97A0E'); //RED
    //   case 2:
    //     return color('#FA2C8C'); //i dont know
    //   case 3:
    //     return color('#0EB1A6');
    //   case 4:
    //     return color('#FC0500');
    //   case 5:
    //     return color('#F150F4');
    //   case 6:
    //     return color('#398CBF');
    //   case 0:
    //     return color('#B5ECE7');
    //   default:
    //     return color('black');
    // }
  }else if(symbol>32 && symbol<65){
    symbol = symbol - 31;
    rem = symbol % 8;
     switch(rem){
      case 1:
        return colorin[0]; //RED
      case 2:
        return colorin[1]; //i dont know
      case 3:
        return colorin[2];
      case 4:
        return colorin[3];
      case 5:
        return colorin[4];
      case 6:
        return colorin[5];
      case 7:
        return colorin[6]
      case 0:
        return colorin[7];
      default:
        return color('black');
    }
    // switch(rem){
    //   case 1:
    //     return color('#F97A0E'); //RED
    //   case 2:
    //     return color('#FA2C8C'); //i dont know
    //   case 3:
    //     return color('#0EB1A6');
    //   case 4:
    //     return color('#FC0500');
    //   case 5:
    //     return color('#F150F4');
    //   case 6:
    //     return color('#398CBF');
    //   case 7:
    //     return color('#B5ECE7');
    //   case 0:
    //     return color('#F2AC57');
    //   default:
    //     return color('black');
    // }
  }else{
    return color('black');
  }

  
}

function getChar(symbol){
  if(symbol>96){
    symbol = symbol - 96;
    rem = ceil(symbol/7);
    if(rem==1){
      return [0,0];
    }else if(rem==2){
      return [1,0];
    }else if(rem==3){
      return [0,1];
    }else if(rem==4){
      return [1,1];
    }else{
      return [1,1];
    }
  }else if(symbol>31 && symbol<65){
    symbol = symbol - 31;
    rem = ceil(symbol/8);
    if(rem==1){
      return [0,0];
    }else if(rem==2){
      return [1,0];
    }else if(rem==3){
      return [0,1];
    }else if(rem==4){
      return [1,1];
    }else{
      return [1,1];
    }
  }else{
    return [1,1];
  }

  

}

function anim(inText){
  noFill();
          
  symbol = getSymbol(inText[gridno]);
  loc = getChar(symbol);
  

  if(symbol>31 && symbol<65){
    //fill('#F2F2F2');
    //rect(x,y,gridSize,gridSize);

    noStroke();
    fill(getColor(symbol));
    circle(x+(gridSize/2), y+(gridSize/2), 15);

    fill('#000');
  }else{
    noStroke();
    fill(getColor(symbol));
    circle(x+(gridSize/2), y+(gridSize/2), 15);

    fill('#fff');
  }
  
  rect(x+(subGrid*loc[0])+1,y+(subGrid*loc[1])+1,subGrid-1,subGrid-1);

  gridno++; //REMOVE

  
}

function setup() {
  createCanvas(440, 440);
  var grid = 400*400/gridSize;

  textBox = select('.form-control');
  //textBox.position(20,20);
  
  //textBox = createInput('the quick brown fox jumped over the lazy dog'); 
  //textBox.addClass('form-control');
  //textBox.attribute('aria-label','input');
  //textBox.attribute('aria-describedby','inputGroup-sizig-lg');
}



function draw() {
  background('#000');
  

  inText = textBox.value();
  inText = inText.toLowerCase();
  gridno = 0; //REMOVE

  
  
  for(y=20; y<width-20; y+=gridSize){
    for(x=20; x<height-20; x+= gridSize){
      if(gridno<inText.length){
        if(toggle == 1){
          anim(inText);
        }else{
          fill(255);
          text(inText[gridno], x+(gridSize/2), y+(gridSize/2));
          gridno++;
        }
      }
    }
  }
  
  /*if(toggle == 1){
      for(y=20; y<width-20; y+=gridSize){
      for(x=20; x<height-20; x+= gridSize){
        noFill();
        stroke(50);
        rect(x,y,gridSize,gridSize);
      }
    }
  }*/
  
  
}

function keyPressed(){
  if(keyCode == SHIFT){
   toggle *= -1;
  }
}

function decoderEnable(){
  document.getElementByClassName('encoder').style.visibility = 'hidden';
  document.getElementByClassName('decoder').style.visibility = 'visible';
}

function encoderEnable(){
  document.getElementByClassName('decoder').style.visibility = 'hidden';
  document.getElementByClassName('encoder').style.visibility = 'visible';
}

