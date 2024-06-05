const yearJiwoo = document.querySelector("#yearJiwoo").value;

fetch('/sido/sidoFetch2023', { //요청경로
    method: 'POST',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    //컨트롤러로 전달할 데이터
    body: new URLSearchParams({
       // 데이터명 : 데이터값
        selectYear : yearJiwoo
    })
})
.then((response) => {
    if(!response.ok){
        alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
        return ;
    }

    //return response.text(); //컨트롤러에서 return하는 데이터가 없거나 int, String 일 때 사용
    return response.json(); //나머지 경우에 사용
})
//fetch 통신 후 실행 영역
.then((datas) => {//data -> controller에서 리턴되는 데이터!
    
// //////////////////////화재 발생건수 ///////////////////////////////////////////    
let fireCount=document.querySelector('.fireCount');
let count=0;
let max=datas.totalOcrn;

let counting=setInterval(function(){
    if(count>=max){
        count=max;
        clearInterval(counting);
    }
    else{
        count+= parseInt(max/10);
    }
    fireCount.innerHTML=new Intl.NumberFormat().format(count)+`건`;
}, 90);

// ///////////////////인명피해인원수///////////////////
let victimCount=document.querySelector('.victimCount');
let count1=0;
let max1=datas.totalLife;

let counting1=setInterval(function(){
    if(count1>=max1){
        count1=max1;
        clearInterval(counting1);
    }
    else{
        count1+= parseInt(max1/10);
    }
    victimCount.innerHTML=new Intl.NumberFormat().format(count1)+`명`;
}, 90);


// ///////////////////재산피해액///////////////////
let propertyCount=document.querySelector('.propertyCount');
let count2=0;
let max2=datas.totalPrpt;

let counting2=setInterval(function(){
    if(count2>=max2){
        count2=max2;
        clearInterval(counting2);
    }
    else{
        count2+= parseInt(max2/10);
    }
    propertyCount.innerHTML=new Intl.NumberFormat().format(count2)+`원`;
}, 90);

})
//fetch 통신 실패 시 실행 영역
.catch(err=>{
    alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
    console.log(err);
});




