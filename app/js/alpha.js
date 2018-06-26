$(function(){
    $(".alphaMenu a").on("click",function(){
        $("html,body").stop();
        $(this).addClass("active").siblings("a").removeClass("active");
        if($(this).index() == 0){
            $("html,body").animate({scrollTop:0},500);
        }else if($(this).index() == 1){
            $("html,body").animate({scrollTop:900},500);
        }else if($(this).index() == 2){
            $("html,body").animate({scrollTop:4260},500);
        }else if($(this).index() == 3){
            $("html,body").animate({scrollTop:7844},500);
        }
    })
    /*Г§вЂєвЂГҐВђВ¬Г¦В»ЕЎГҐЕ ВЁГ¦ЛњВЇГҐВђВ¦ГҐВ·ВІГ§В»ВЏГ¦В»ЕЎГҐЕ ВЁГҐЛ†В°ГЁВµвЂћГЁВ®ВЇГҐвЂ вЂ¦ГҐВ®В№*/
    function showInfor(){
        var scrollTp = "";
        $(window).on("scroll",function(e){
            scrollTp = $(this).scrollTop();
            if(scrollTp < 900){
                $(".alphaMenu a").eq(0).addClass("active").siblings("a").removeClass("active");
            }else if(scrollTp >= 900 && scrollTp < 4260){
                $(".alphaMenu a").eq(1).addClass("active").siblings("a").removeClass("active");
            }else if(scrollTp >= 4260 && scrollTp < 7844){
                $(".alphaMenu a").eq(2).addClass("active").siblings("a").removeClass("active");
            }else if(scrollTp >= 7844 ){
                $(".alphaMenu a").eq(3).addClass("active").siblings("a").removeClass("active");
            }
            if( scrollTp > $("#part2").offset().top - 500){
                $("#part2").addClass("active");
            }
            if( scrollTp > $("#part3").offset().top - 500){
                $("#part3").addClass("active");
            }
            if( scrollTp > $("#part4").offset().top - 500){
                $("#part4").addClass("active");
            }
            if( scrollTp > $("#part5").offset().top - 500){
                $("#part5").addClass("active");
            }
            if( scrollTp > $("#part6").offset().top - 500){
                $("#part6").addClass("active");
            }
            if( scrollTp > $("#part7").offset().top - 500){
                $("#part7").addClass("active");
            }
            if( scrollTp > $("#part8").offset().top - 500){
                $("#part8").addClass("active");
            }
            if( scrollTp > $("#part9").offset().top - 500){
                $("#part9").addClass("active");
            }
            if( scrollTp > $("#part10").offset().top - 500){
                $("#part10").addClass("active");
            }
            // if( scrollTp > $("#part11").offset().top - 500){
            // 	$("#part11").addClass("active");
            // }
            if( scrollTp > $("#part12").offset().top - 500){
                $("#part12").addClass("active");
            }
            // if( scrollTp > $("#part13").offset().top - 500){
            // 	$("#part13").addClass("active");
            // }
        })
    }
    showInfor();

    /*Г§В¬В¬Г¤ВёЖ’ГҐВ±ВЏГЇВјЕ’Г§ВјвЂ“Г§ВЁвЂ№*/
    $("#part7 li").on("click",function(){
        $(this).addClass("active").siblings("li").removeClass("active");
        if($(this).index() == 0){
            $("#part7 .robot").removeClass("active");
        }else{
            $("#part7 .robot").addClass("active");
        }
    })
    /*Г§В¬В¬ГҐвЂ¦В«ГҐВ±ВЏ*/
    $("#part8 li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $("#part8 .robotLi").eq($(this).index()).addClass("active").siblings().removeClass("active");
    })
})
$(function(){
    $("#part1").addClass("active");
    $(document).on('click','.purchase',function () {
        window.open('https://www.amazon.com/UBTECH-ALPHA-1PRO-Humanoid-Robot/dp/B06XT3F6Q8')
    })
});