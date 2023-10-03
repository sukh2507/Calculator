
let n = document.getElementsByClassName('n');
let scr=document.querySelector(".scr")
let op=document.getElementsByClassName('op')
// console.log(n); // 👉️ [div.box, div.box, div.box]

// ✅ addEventListener to first box
// n[0].addEventListener('click', function onClick() {
//   console.log(n.innertext);
// });

// ✅ addEventListener to all n
for (const box of n) {
  box.addEventListener('click', function onClick() {
    scr.innerText+=box.innerText;
  });
}

for (const box of op) {
    box.addEventListener('click', function onClick() {
    // console.dir(box)
    if (scr.innerText[0]== "+" ||"-" || "/" || "*"){
        scr.innerText+=" ";
    }
    if (box.id=="bs"||box.id=="eq"){
        scr.innerText-=scr.innerText;
    }
    else if (box.id=="ope"){
        scr.innerText+=box.innerText;
    }
    });
  }
