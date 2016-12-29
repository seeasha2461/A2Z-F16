var input;
var output;
var submit;


function setup() {
  console.log(this);
  noCanvas();
  input = select('#textinput');
  button = select('#submit');
  output = select('#output');
  // What to do when button pressed
  button.mousePressed(newText);

  loadStrings('files/rainbow.txt', fileLoaded);



}
function fileLoaded(data) {
  var txt = data.join('\n');
  input.html(txt);
}

function highlight(){
  console.log(this.html());
  // this.html('rainbow');
  var c = color(random(255),random(255),random(255));
  this.style('background-color',c);
  // console.log('hover');
}

function newText(){
  var s = input.value();

  var words= s.split(/(\W+)/);
  console.log(words);
  for(var i=0; i<words.length;i++){
    var span = createSpan(words[i]);
    span.parent(output);
    if(!/\W+/.test(words[i])){
    // span.style('background-color',color(random(255),random(255),random(255)));
    span.mouseOver(highlight);
    }


  }
  //console.log(s);
  //createP(s);
}
