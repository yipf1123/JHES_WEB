
$(function () {

    // 이벤트 처리 메소드
    // -on('이벤트 타입', 이벤트핸들러(콜백함수) {})
    // * 이벤트 타입 : click, keyup, change ...
    // * 이벤트 핸들러 : 이벤트 발생 시, 실행될 함수

    $('#item1').on('click', function(){
        $('#item1').css('color', 'hotpink')
    })    
    
    // this : 현재 속한 블록의 객체, 현재 선택한 요소를 가리키는 키워드
    $('#item2').on('click', function(){
        $(this).css('color', 'hotpink')
    })
    
    // mousover : 마우스 올렸을 때 메소드
    $('#item3').on('mouseover', function(){
        $(this).css('color', 'hotpink')
        $(this).css('background-color', 'cornflowerblue')
    })    

    // mousout : 마우스 벗어날 때 메소드 : 이거 없으면 마우스 올렸을 때로 유지됨
    $('#item3').on('mouseout', function(){
        $(this).css('color', 'white')
        $(this).css('background-color', 'royalblue')
    })   
    
    // 메서드 체인
    // : 하나의 jQuery 객체에 여러 메서드를 연결하는 기법
    $('#item4')
        .on('mouseover', function(){
        $(this).css('color', 'hotpink')
        $(this).css('background-color', 'cornflowerblue')
        })    
        .on('mouseout', function(){
        $(this).css('color', 'white')
        $(this).css('background-color', 'royalblue')
        }) 

        $('#item5')
        .on('mouseover', function(){
        $(this).css('color', 'hotpink')
        $(this).css('background-color', 'cornflowerblue')
        })    
        .on('mouseout', function(){
        $(this).css('color', 'white')
        $(this).css('background-color', 'royalblue')
        }) 
        .on('click', function(){
        $(this).css('color', 'red')
        $(this).css('background-color', 'blue')
        }) 
        .on('dblclick', function(){
            $(this).css('color', 'white')
            $(this).css('background-color', 'black')
            }) 

})