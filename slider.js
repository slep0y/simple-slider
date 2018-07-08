let counter = 0;
let width = $('.slider-wrapper').width();
let slides = $('.slide').length;
$('.next').on('click', ()=>{  
  if(counter < slides - 1){
    counter++;
     $('.slider').css("transform", `translateX(calc( -${counter} * ${width}px ))`);   
     } else {
       counter = slides - 1;
     }
});

$('.prev').on('click', ()=>{
  if(counter > 0){
     $('.slider').css("transform", `translateX(calc( -${counter - 1} * ${width}px ))`);
    counter--;
     } else {
       counter = 0;
     }  
});