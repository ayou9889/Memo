const submit=document.querySelector("input[type='submit']");
const sname=document.querySelector("body>h1>strong#iname");

let n=null,p=null;
if(localStorage.getItem("n") && localStorage.getItem("pw")){
    n=localStorage.getItem("n");
    p=localStorage.getItem("pw");
    sname.innerHTML = `${n[0].toUpperCase()}${n.slice(1)}`;
    localStorage.clear();
}

let add=true;
submit.addEventListener("click",(e)=>{
    if(add){
        add=false;
        e.target.disabled=true;
        e.target.style.backgroundColor="#6e6e6e";
        e.preventDefault();
        fetch("https://p01-five.vercel.app/Add-Memo",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name:n,
                pw:p,
                title:document.querySelector("[name='title']").value,
                txt:document.querySelector("[name='txt']").value
            })
        }).then((res)=>res.json()).then((data)=>{
                if(data.s === 1){
                    alert("The memo was added successfully.");
                }
                else{
                    alert("An error occurred.");
                }
                add=true;
                e.target.disabled=false;
                e.target.style.backgroundColor="#171717";
            });
    }
});
