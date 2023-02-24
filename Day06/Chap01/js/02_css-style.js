
// 문서 준비 이벤트
$(function() {

    // $('선택자').css('스타일속성','속성값')

    $('#item1').css('color', 'hotpink')

    $('#item2').css('transform', 'rotate(45deg')

    $('#item3').css('opacity', '0.5') // 투명도

    // 여러 개의 스타일 속성 변경하기
    //-> 객체 형태로 지정해준다
    /*  
        {
            '스타일1' : '속성값1'
            '스타일2' : '속성값2'
            '스타일3' : '속성값3'
        }
    */

        // 따옴표를 붙이면, 케밥 케이스('-' 을 사용)
        $('#item4 .text').css({
            'color'         : 'coral',
            'font-size'     : '50px',
            'border'        : '5px solid hotpink',
            'width'         : '400px', 
            'height'        : '400px'
        })

        // 따옴표를 안 붙이면, 카멜 케이스(두번재 대문자)
        $('#item5 .text').css({
            color         : 'coral',
            fontSize      : '50px',
            border        : '5px solid hotpink',
            width         : '400px',
            height        : '400px'
        })


})