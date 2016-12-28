var textfield;
var output;
var submit;
var txt;
function setup(){
  noCanvas();
  textfield = select("#input");
  //textfield.changed(newText);
  output= select("#output");
  submit = select("#submit");
  submit.mousePressed(newText);

}

function newText(){
  var s = textfield.value();
  txt = splitTokens(s," ");
  txt = txt.join(" ");

       var r = /(\d{3})([-.])(\d{4})/g;

    var replace = txt.replace(r,'$1$2xxxx');

       createP(replace);
      //  var matches = s.match(r);

      // var result = r.exec(s);

      // var result;
      // while( result = r.exec(s)){
      //   result[2]=="xxxx";
      //   result[5] == "xxxx";
      //   createP(s.match(r));
      //   //  createP(result[1]);
      // }
      //



      // for(var i = 0; i < matches.length;i++){
      //   createP(matches[i]);
      //
      // }
}
