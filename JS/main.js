

function my1Function(i){
    
    let modal = document.getElementById("myModal");
    let img = i.src;
    console.log(img);
    document.getElementById("img1").setAttribute("src", img);
    modal.style.display = "block";
    document.getElementById('h').style.display="none";
}
document.addEventListener('keydown', close);
function close(e){
    var x = e.keyCode;
  if (x == 27) { 
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.getElementById('h').style.display="block";
  }
}
document.getElementById("myModal").addEventListener('click', close1);
function close1(){
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.getElementById('h').style.display="block";
}

function prev(j){
  console.log('prev');
  let pre = j.previousSibling;
  let pre1=pre.src;
  document.getElementById("img1").setAttribute("src", pre1);
   
}
function next(j){
  console.log('next');
  let nex = j.nextSibling;
  let nex1=nex.src;
  document.getElementById("img1").setAttribute("src", nex1);
   
}