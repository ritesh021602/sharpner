let h=document.getElementById('main-header');
h.style.borderBottom='solid 3px #000';
console.log("hi");
let items=document.getElementsByClassName('list-group-item');
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
    items[i].style.backgroundColor="#f4f4f4";
}
items[2].style.color="green";
