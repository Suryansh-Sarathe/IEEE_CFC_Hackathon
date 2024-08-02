let ques=document.querySelectorAll(".questionBox");
let ans=document.querySelectorAll(".ansBox");

for(let i in ques){
    ques[i].addEventListener("click",()=>{
        ans[i].classList.toggle("hide");
    })
}