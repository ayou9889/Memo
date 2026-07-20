const sname=document.querySelector("body>h1>strong#iname");
let n=null,p=null;
if(localStorage.getItem("n") && localStorage.getItem("pw")){
    n=localStorage.getItem("n");
    p=localStorage.getItem("pw");
    sname.innerHTML = `${sname[0].toUpperCase()}${s.name.slice(1)}`;
}
