const submit=document.querySelector("input[type='submit']");
function a(){
    submit.style.backgroundColor="#171717";
}
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    submit.style.backgroundColor="#6e6e6e";
    const n=document.querySelector("[name='name']").value;
    const pw=document.querySelector("[name='password']").value;
    if(n === ""){
        alert("You should write your name.");
        a();
        return;
    }
    else if(n.length < 4){
        alert("Your name should have at least 4 character.");
        a();
        return;
    }
    if(pw === ""){
        alert("You should write your password.");
        a();
        return;
    }
    else if(pw.length < 7){
        alert("Your password should have at least 7 character.");
        a();
        return;
    }
    fetch("https://p01-five.vercel.app/",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            name:document.querySelector("[name='name']").value,
            password:document.querySelector("[name='password']").value
        })
    }).then((res)=>res.json()).then((data)=>{
            a();
            console.log("success",data.success);
            if(data.success){
                sessionStorage.setItem("n",n);
                sessionStorage.setItem("pw",pw);
                window.location.href="https://oufaddoul.com/Memo/Login/Add-Memo/";
            }
            else{
                alert("The username or password is incorrect.");
            }
        });
});
