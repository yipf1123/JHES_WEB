$(function(){

    /* 메뉴 닫기 */
    $('#btn').on('click', function() {
        $('.side-bar').hide()
    })

    /* 메뉴 열기 */ 
    $('#menu').on('click', function() {
        $('.side-bar').show()

        })

        $('.slide-container').slick({
            dots: false,
            arrows: true,
    
            autoplay: true,                 // 자동재생 여부
            autoplaySpeed: 3000,            // 자동재생 슬라이드 시간
            infinite: true,                 // 무한 반복 
            speed:500,                      // 슬라이드가 전환되는 시간
    
    
            // centerMode: true,            // 센터 모드
            // centerPadding: '60px',       // 센터 모드 시, 내부여백
            slidesToShow: 1,                // 보여질 슬라이드 개수
            slidesToScroll: 1,              // 스크롤될 슬라이드 개수
    
    
            pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
            pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
            pauseOnHover: true,             // 호버 시, 자동재생 멈춤
    
    
            /* 효과 */
            // fade: true,
            // cssEase: 'linear',
    
    
            // 네비게이션 화살표 커스텀
            prevArrow: '<button class="slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="slide-arrow next-arrow"></btton>',
    
    
            // 다른 슬라이드와 연결하는 옵션
            asNavFor: '.slide-nav',
    
    
            /* 반응형 */
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
        
            ]
        }) // 메인 슬라이드 끝
    
        $('.slide-nav').slick({
            dots: false,
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 1,
    
    
            pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
            pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
            pauseOnHover: true,             // 호버 시, 자동재생 멈춤
            
            centerMode: true,
            focusOnSelect: true,
    
            // 다른 슬라이드와 연결하는 옵션
            asNavFor: '.slide-container',
        }) // 슬라이드 네이게이션 끝


})


