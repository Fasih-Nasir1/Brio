var num1=40;
var num2=0;
var num3=0;
setInterval(() => {
    num1++;
    num2++;
    num3++;
    document.getElementById("num1").innerHTML=num1;
    document.getElementById("num2").innerHTML=num2;
    document.getElementById("num3").innerHTML=num3;
        if(num1>200){
num1=0;
    }
    if(num2>50){
        num2=0;
            }
            if(num3>70){
                num3=0;
                    }
}, 200);


// SLIDER
const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
swiperEl.initialize();