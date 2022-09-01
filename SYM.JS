$(document).ready(function(){
    $(".homepage ul li a").on( "click",function(e){
        e.preventDefault();
            $(this).parent().addClass("active").siblings().removeClass("active");
    })
    $(".homepage ul li").each(function(){
$(this).on("click",function(){
    $($(this).data("p")).removeClass("d-none").siblings().addClass("d-none");
    $(".gallery .all").hide()
    var show = $($(this).data("pro"))
    $(show).fadeIn(1500)
})
})

$(".fa-bars").on("click", function(){

    $(".side-par").toggle(function(){

        $(this).animate({
            left:0,
        },500)

        
    })
})

$("body").children().addClass("opa").css({
    transition: 1.5 + "s",
})
$(".nav , .home, .footer,.scroll").removeClass("opa")

$(window).scroll(function(){
    
    console.log($(this).scrollTop())
    if ($(this).scrollTop() >= 2500){


    

        $(".scroll").removeClass("d-none");

        $(".scroll").addClass("reight8") 
        $(".scroll").on("click",function(){
            $(window).scrollTop(0);
        })  

    }
    else{
        $(".scroll").addClass("d-none")
        $(".scroll").animate({
            right:-40 +"px"
        })


    }


if ($(this).scrollTop() >= $(".nav").offset().top - 400){

    $(".nav").removeClass("opa")

}
if ($(this).scrollTop() >= ($(".home").offset().top -400 )){

    $(".home").removeClass("opa")

}
if ($(this).scrollTop() >= $(".pargraph2").offset().top - 400){

    $(".pargraph2").removeClass("opa")

}if ($(this).scrollTop() >= $(".portiolio").offset().top - 400){

    $(".portiolio").removeClass("opa")

}
if ($(this).scrollTop() >= $(".img-shop").offset().top - 400){

    $(".img-shop").removeClass("opa")

}
if ($(this).scrollTop() >= $(".homepage").offset().top - 400){

    $(".homepage").removeClass("opa")

}
if ($(this).scrollTop() >= $(".parent").offset().top - 400){

    $(".parent").removeClass("opa")

}
if ($(this).scrollTop() >= $(".gallery").offset().top - 400){

    $(".gallery").removeClass("opa")

}
if ($(this).scrollTop() >= $(".pargraph").offset().top - 400){

    $(".pargraph").removeClass("opa")

}
if ($(this).scrollTop() >= $(".slid").offset().top - 400){

    $(".slid").removeClass("opa")

}
if ($(this).scrollTop() >= $(".Achievements").offset().top - 400){

    $(".Achievements").removeClass("opa")

}
if ($(this).scrollTop() >= $(".theme").offset().top - 400){

    $(".theme").removeClass("opa")

}
if ($(this).scrollTop() >= $(".Free").offset().top - 400){

    $(".Free").removeClass("opa")

}
if ($(this).scrollTop() >= $(".Especialy").offset().top - 400){

    $(".Especialy").removeClass("opa")

}
if ($(this).scrollTop() >= $(".Customizability").offset().top - 400){

    $(".Customizability").removeClass("opa")

}
if ($(this).scrollTop() >= $(".Clients").offset().top - 400){

    $(".Clients").removeClass("opa")

}
if ($(this).scrollTop() >= $(".slid2").offset().top - 400){

    $(".slid2").removeClass("opa")

}
if ($(this).scrollTop() >= $(".Apps").offset().top - 400){

    $(".Apps").removeClass("opa")

}
if ($(this).scrollTop() >= $(".bay").offset().top - 400){

    $(".bay").removeClass("opa")

}
if ($(this).scrollTop() >= $(".footer").offset().top - 400){

    $(".footer").removeClass("opa")

}



})


// $(".icon-next").on("click",function(){
//     $(".slid .card-1").each(function(){
//         let val1 = parseFloat($(this).css('transform').split(',')[4]) - 200;
//         $(this).css({
//             transform : "translateX("+val1+"px)"
//         })
    
//     })
//     let child1 = $('.slid .card-1:first-child');
//     let child2 = $('.slid .card-1:last-child');
//     let val2 = parseFloat($(child1).css('transform').split(',')[4]) - 200;
//     console.log(val2);


//         child1.remove();
//     $(".slid .container-fluid").append(child1);
//     child1.css({
//         transform : "px !important"
//     })

// })
// $(".icon-prev").on("click",function(){
//     $(".slid .card-1").each(function(){
//         let val2 = parseFloat($(this).css('transform').split(',')[4]) + 200;
//         $(this).css({
//             transform : "translateX("+val2+"px)"
//         })
 
//     })
//     let child1 = $('.slid .card-1:first-child');
//     let child2 = $('.slid .card-1:last-child');
//     console.log(child2);
//     $(child2).before(child1)
//     child2.remove()
// })












})

