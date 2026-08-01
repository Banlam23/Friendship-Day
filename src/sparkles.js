console.log("Sparkles initialized");
export function initSparkles(){
    console.log("Creating sparkles...");

    const container=document.getElementById("sparkleContainer");

    if(!container) return;

    const amount=
        window.innerWidth<768 ? 12 : 22;
    const colors = [

        "#FFF8D6",   // soft cream

        "#FFE8A3",   // warm gold

        "#FFD76A",   // golden

        "#FFC94D"    // rich gold

        ];


    for(let i=0;i<amount;i++){

        const s=document.createElement("span");

        s.className="sparkle";

        const size=Math.random()*6+4;

        s.style.opacity =
        0.3 + Math.random()*0.7;
        s.style.width=size+"px";

        s.style.height=size+"px";

        s.style.left=Math.random()*100+"%";
        s.style.top = "-20px";

        s.style.animationDuration=
            (20+Math.random()*70)+"s";

        s.style.animationDelay =
            -(Math.random() * 36) + "s";

        container.appendChild(s);

    }

}