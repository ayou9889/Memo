const sname=document.querySelector("body>h1>strong#iname");
let n=null,p=null;
if(localStorage.getItem("n") && localStorage.getItem("pw")){
    n=localStorage.getItem("n");
    p=localStorage.getItem("pw");
    sname.innerHTML = `${n[0].toUpperCase()}${n.slice(1)}`;
}
