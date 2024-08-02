let fullname=document.querySelector("#name");
let email=document.querySelector("#email");
let phone=document.querySelector("#phone");
let theme=document.querySelector("#theme");
let college=document.querySelector("#college");
let team=document.querySelector("#team");

let arr=[];
function submit(){
    if(college=="")
        localStorage.setItem("College","none");
    
    else
        localStorage.setItem("College",college.value);
    if(team=="")
        localStorage.setItem("Team","none");
    else
        localStorage.setItem("Team",team.value);
    localStorage.setItem("Name",fullname.value);
    localStorage.setItem("Email",email.value);
    localStorage.setItem("Phone no",phone.value);
    localStorage.setItem("Theme",theme.value);

    alert("Your form has been successfully submitted!");
}


