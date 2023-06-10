const thead = document.getElementById("table-heading-row");
const tbody = document.getElementById("table-body");
const columns=26;
const rows = 100;
let currCell;

const boldbtn = document.getElementById("bold-btn");
const italic = document.getElementById("italic-btn");
const underline = document.getElementById("underline-btn");

const textcolor = document.getElementById("text-color");
const bgcolor = document.getElementById("bg-color");

const leftalign = document.getElementById("left-align");
const rightalign = document.getElementById("right-align");
const center = document.getElementById("center");

const fontsize = document.getElementById("font-size");
const fontfamily = document.getElementById("font-family");

const cutbtn = document.getElementById("cut-btn");
const copybtn = document.getElementById("copy-btn");
const pastebtn = document.getElementById("paste-btn");
let cutvalue = {};

for(let column=0;column<columns;column++)
{
    let th = document.createElement("th");
    th.innerText=String.fromCharCode(65+column);
    thead.appendChild(th);
}

for(let row=0;row<rows;row++)
{
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.innerText=row+1;
    tr.appendChild(th);

    for (let col = 0; col < columns; col++) {
        let td = document.createElement("td");
        td.setAttribute("contenteditable", "true");
        td.setAttribute("spellcheck", "false");
        td.setAttribute("id", `${String.fromCharCode(65 + col)}${row + 1}`);
        td.addEventListener("focus", (event) => onFocusFnc(event));
        td.addEventListener("input", (event) => onInputFnc(event));
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
function onInputFnc(event) 
{
    updateJson(event.target);
}
  
  function onFocusFnc(event) 
{
    console.log("In focus:", event.target);
    currCell = event.target;
    document.getElementById("current-cell").innerText = event.target.id;
    console.log(currCell.style.cssText);
    console.log(currCell.innerText);
    console.log(currCell.id);
}

boldbtn.addEventListener("click",()=>{
if(currCell.style.fontWeight == "bold")
{
    currCell.style.fontWeight = "normal";
}else{
    currCell.style.fontWeight ="bold";
}
});

italic.addEventListener("click",()=>{
    if(currCell.style.fontStyle == "italic")
    {
        currCell.style.fontStyle = "normal";
    }else{
        currCell.style.fontStyle ="italic";
    }
});

underline.addEventListener("click",()=>{
    if(currCell.style.textDecoration == "underline")
        {
            currCell.style.textDecoration = null;
    }else{
            currCell.style.textDecoration ="underline";
    }
});

textcolor.addEventListener("input",()=>{
    currCell.style.color=textcolor.value;
});

bgcolor.addEventListener("input",()=>{
    currCell.style.backgroundColor = bgcolor.value;
});

leftalign.addEventListener("click",()=>{
    currCell.style.textAlign ="left";
});

rightalign.addEventListener("click",()=>{
    currCell.style.textAlign ="right";
});

center.addEventListener("click",()=>{
    currCell.style.textAlign ="center";
});

fontsize.addEventListener("change",()=>{
    currCell.style.fontSize = fontsize.value;
});

fontfamily.addEventListener("change",()=>{
    currCell.style.fontFamily = fontfamily.value;
});

cutbtn.addEventListener("click",()=>{
    cutvalue = {
        style:currCell.style.cssText,
        text:currCell.innerText,
    }
    currCell.style = null;
    currCell.innerText = null;
});

copybtn.addEventListener("click",()=>{
    cutvalue = {
        style:currCell.style.cssText,
        text:currCell.innerText,
    }
});    

pastebtn.addEventListener("click",()=>{
    currCell.style.cssText = cutvalue.style;
    currCell.innerText = cutvalue.text;
})