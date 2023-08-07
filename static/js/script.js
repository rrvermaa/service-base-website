var marker=document.querySelector('#marker');
var item=document.querySelectorAll('#marker-item');
var element = document.getElementById("hide");




function indicator(e){
    marker.style.left=e.offsetLeft+"px";
    marker.style.width=e.offsetWidth+"px";
}

item.forEach(link =>{
    
    link.addEventListener("click", (e)=>{
        console.log(e);
        element.classList.remove("hide");
        indicator(e.target);
    })
})

var btn_mngmet=document.getElementById('marker-item-1')
var btn_idstry=document.getElementById('marker-item-2')
var management=document.getElementById('management-qualities')
var industry=document.getElementById('industry-qualities')

btn_mngmet.addEventListener("click", ()=>{
    management.style.display='block';
    industry.style.display='none';
})
btn_idstry.addEventListener('click', ()=>{
    management.style.display='none';
    industry.style.display='block';
});