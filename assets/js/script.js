const main=document.querySelector("body>main");

fetch("https://raw.githubusercontent.com/U38cI6HAghXBUZXEEn5WmPnMelniPdRPGbU1/memo/main/6589/memo.json").then((res)=>res.json()).then((d)=>{
    d.forEach(m => {
        const div=document.createElement("div");
        div.classList.add("d");
        div.innerHTML=`
            <div><strong>Title : </strong>${m.title}</div>
            <div>${m.text}</div>
        `;
        main.appendChild(div);
    });
});
