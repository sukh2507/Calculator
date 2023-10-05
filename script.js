let n = document.getElementsByClassName('n');
let scr=document.querySelector(".scr")
let op=document.getElementsByClassName('op')
let insc=""
let plus;
let left;
let right;
let dal;

for (const box of n) {
  box.addEventListener('click', function onClick() {
    scr.innerText+=box.innerText;

    // function eval(){
      insc=scr.innerText
      // console.log(insc)
      plus=insc.indexOf("+")
      // console.log(plus);
      left=scr.innerText.slice(0,plus)
      right=scr.innerText.slice(plus+1,)
      // console.log(right);
      // console.log(left);
      left=parseInt(left)
      right=parseInt(right)
      dal=left+right;
      console.log(left+right);
      for (const boxs of op){
        boxs.addEventListener('click',function clicky(){
          if (boxs.id=="eq"){
            scr.innerText=dal;
          }
        })
      }
    // }
    // eval()
   
  })}

for(const box of op) {
    box.addEventListener('click', function onClick() {
    // console.dir(box)
    // if (scr.innerText[0]== "+" ||"-" || "/" || "*"){
    //     scr.innerText+=" ";
    // }
    if (box.id=="bs"||box.id=="eq"){
        scr.innerText-=scr.innerText;
    }
    else if (box.id=="ope"){
        scr.innerText+=box.innerText;
    }
    });
  }
