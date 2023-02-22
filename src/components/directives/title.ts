let TitleTipNode = document.querySelector("#m-title-tip-id");
let triangle = document.querySelector("m-title-triangle-id");
let textNode = document.querySelector("#m-title-text-id");
const setTitleTip = (el,binding) =>{
    if(!binding.value) return;
    const { text,position } = binding.value; 

    if((!TitleTipNode || !triangle || !textNode)){
        TitleTipNode = document.createElement("div");
        TitleTipNode.id = "m-title-tip-id";
        TitleTipNode.className = "m-title-tip-name";

        triangle = document.createElement("div");
        triangle.id = "m-title-triangle-id";

        const textNode = document.createElement("div");
        textNode.id = "m-title-text-id";
        
        TitleTipNode.appendChild(textNode);
        document.body.appendChild(TitleTipNode);
        document.body.appendChild(triangle);
    }
    const {x,y,height,width} = el?.getBoundingClientRect();

    if(position === "right"){
        let len = text.length * 7 + 10;
        len = len > 300 ? 300 : len;
        const l = len - width;
        const num = l > 0 ? (x - l) : x;
        const triX = l > 0 ? width / 2 + x : (x + 16);
        TitleTipNode.style =`top:${y + height + 14}px;left:${num}px`;
        triangle.style =`top:${y + height - 2}px;left:${triX}px`;
    }else{
        triangle.style =`top:${y + height - 2}px;left:${x+8}px`;
        TitleTipNode.style =`top:${y + height + 14}px;left:${x}px`;
    }
    textNode = document.querySelector("#m-title-text-id");
    textNode.innerHTML = text;
};

export default {
    mounted(el,binding) {
        el.addEventListener("mouseover",(e)=>{
            setTitleTip(el,binding);
            TitleTipNode.style.display = "block";
            triangle.style.display = "block";
        });
    
        el.addEventListener("mouseout",()=>{
            TitleTipNode.style.display = "none";
            triangle.style.display = "none";
        });
    },
    updated(el,binding) {
        el.addEventListener("mouseover",()=>{
            setTitleTip(el,binding);
            TitleTipNode.style.display = "block";
            triangle.style.display = "block";
        });
    
        el.addEventListener("mouseout",()=>{
            TitleTipNode.style.display = "none";
            triangle.style.display = "none";
        });
    },
};