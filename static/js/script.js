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


var swiper=new Swiper('.mySwiper',{
    loop:true,
    loopFillGroupWithBlank: true,
    spaceBetween: 30,

    grabCursor:true,
    centeredSlides:true,
    slidesPerView:3,
    pagination:{
        el:".swiper-pagination",
        clickable: true,

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});


// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     });