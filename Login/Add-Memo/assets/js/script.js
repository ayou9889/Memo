const submit=document.querySelector("input[type='submit']");

let n=null,p=null;
if(sessionStorage.getItem("n") && sessionStorage.getItem("pw")){
    n=sessionStorage.getItem("n");
    p=sessionStorage.getItem("pw");
    sessionStorage.clear();
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
                console.log("Data : ",data);
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
