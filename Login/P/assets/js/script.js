const sname=document.querySelector("body>h1>strong#iname");
if(sessionStorage.getItem("n") && sessionStorage.getItem("pw")){
    n=sessionStorage.getItem("n");
    p=sessionStorage.getItem("pw");
    sname.innerHTML = `${sname[0].toUpperCase()}${s.name.slice(1)}`;
}