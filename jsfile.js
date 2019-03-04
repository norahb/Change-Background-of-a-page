
function changeStyle()
{
  if( document.body.style.backgroundColor == "black")
  {document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.getElementById('moonImg').src = "moon.png"
}
  else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById('moonImg').src = "sun.png"
  }
}


function changeText(){
  document.getElementById('p1').innerHTML="Welcome";
}
