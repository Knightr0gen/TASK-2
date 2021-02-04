

function my1Function(i){
    let modal = document.getElementById("myModal");
    let img = i.src;
    console.log(img);
    document.getElementById("img1").setAttribute("src", img);
    modal.style.display = "block";
    document.getElementById('h').style.display="none";

    document.getElementById("prev").addEventListener("click", prev);
    document.getElementById("next").addEventListener("click", next);

    var x = i.id;
    
    function prev(){
      console.log('prev');
      let c = document.querySelector('#'+x);
      let pre = c.previousElementSibling;
      console.log(pre);
      let pre1=pre.src;
      document.getElementById("img1").setAttribute("src", pre1);
      x = pre.id;
      
       
    }

    function next(){
     
      console.log('next');
      
      let c = document.querySelector('#'+x);
      let nex = c.nextElementSibling;
      console.log(nex.src);
      if(nex == "null"){
        document.getElementById("img1").setAttribute("src", img);
        x="g_img1";
      }
      else{
        document.getElementById("img1").setAttribute("src", nex.src);
        x = nex.id;
      }
      
      
      
      
       
    }
  
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
document.getElementById("close").addEventListener('click', close1);
function close1(){
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.getElementById('h').style.display="block";
}

