const submit=document.querySelector("input[type='submit']");

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const n=document.querySelector("[name='name']").value;
    const pw=document.querySelector("[name='password']").value;
    if(n === ""){
        alert("You should write your name.");
        return;
    }
    else if(n.length < 5){
        alert("Your name should have at least 5 character.");
        return;
    }
    if(pw === ""){
        alert("You should write your password.");
        return;
    }
    else if(pw.length < 7){
        alert("Your password should have at least 7 character.");
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
