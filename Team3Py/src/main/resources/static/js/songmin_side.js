const yearSongmin = document.querySelector("#yearSongmin").value;


const avgThreeYears = () => {
    fetch('/ranking/avgThreeYears', { //요청경로
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        //컨트롤러로 전달할 데이터
        body: JSON.stringify({
           // 데이터명 : 데이터값
        })
    })
    .then((response) => {
        return response.json(); //나머지 경우에 사용
    })
    //fetch 통신 후 실행 영역
    .then((data) => {//data -> controller에서 리턴되는 데이터!
        const avgFirePlace_tag = document.querySelector('.show-avgFirePlace');
        const avgFireFactor_tag = document.querySelector('.show-avgFireFactor');
        const avg_title_tag = document.querySelector('.show-avg-title');
        avgFirePlace_tag.innerHTML = '';
        avgFireFactor_tag.innerHTML = '';
        avg_title_tag.innerHTML ='';
        avg_title_tag.innerText = `${data.avgFirePlace.dateOfIncident}월 예상 위험요인`;
        let factorStr = `
            <div class="col">
                <div class="row">
                    <div class="col" style="font-weight: bold; font-size: 1.5rem; padding-left:13%;">
                        ${data.avgFireFactor.fireFactorBig}
                    </div>
                    <div class="col" style="font-size: 1.5rem;">
                        ${data.avgFireFactor.avgOccurrences}%
                    </div>
                </div>
            </div>
        `;

        let placeStr = `
            <div class="col">
                <div class="row">
                    <div class="col" style="font-weight: bold; font-size: 1.5rem; padding-left:13%;">
                        ${data.avgFirePlace.fireLocation}
                    </div>
                    <div class="col" style="font-size: 1.5rem;">
                        ${data.avgFirePlace.avgOccurrences}%
                    </div>
                </div>
            </div> 
        `;

        avgFirePlace_tag.insertAdjacentHTML('afterbegin', placeStr);
        avgFireFactor_tag.insertAdjacentHTML('afterbegin', factorStr);
        
    })
    //fetch 통신 실패 시 실행 영역
    .catch(err=>{
        alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
        console.log(err);
    });
    

}
avgThreeYears();
// 메인 top3 - 장소 - 증감값 따라 증감 표시 변경
function setUpDownText(element, upDown, selectYear) {
    if(selectYear != 2021){
        if (upDown > 0) {
            element.innerHTML = `▲ ${upDown} 증가`;
            element.classList.add('increase'); // 증가일 때 클래스 추가
        } else if (upDown < 0) {
            element.innerHTML = `▼ -${Math.abs(upDown)} 감소`;
            element.classList.add('decrease'); // 감소일 때 클래스 추가
        } else {
            element.innerHTML = `${upDown} 증감`;
        }    
    }
    else{
        element.innerHTML = `-`;
    }
}

///////////////////////////슬라이드//////////////////////////
fetch('/ranking/mainRankingFetch', { //요청경로
    method: 'POST',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    //컨트롤러로 전달할 데이터
    body: new URLSearchParams({
       // 데이터명 : 데이터값
        selectYear : yearSongmin
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
    // 메인 top3 - 장소
    document.querySelector("#ffn").innerHTML=`${datas.mainTopList1[0].placeBigType}`;
    document.querySelector("#ffc").innerHTML=`${datas.mainTopList1[0].count}건`;
    document.querySelector("#fsn").innerHTML=`${datas.mainTopList1[1].placeBigType}`;
    document.querySelector("#fsc").innerHTML=`${datas.mainTopList1[1].count}건`;
    document.querySelector("#ftn").innerHTML=`${datas.mainTopList1[2].placeBigType}`;
    document.querySelector("#ftc").innerHTML=`${datas.mainTopList1[2].count}건`;

    document.querySelector("#sfn").innerHTML=`${datas.mainTopList2[0].placeMediumType}`;
    document.querySelector("#sfc").innerHTML=`${datas.mainTopList2[0].count}건`;
    document.querySelector("#ssn").innerHTML=`${datas.mainTopList2[1].placeMediumType}`;
    document.querySelector("#ssc").innerHTML=`${datas.mainTopList2[1].count}건`;
    document.querySelector("#stn").innerHTML=`${datas.mainTopList2[2].placeMediumType}`;
    document.querySelector("#stc").innerHTML=`${datas.mainTopList2[2].count}건`;

    document.querySelector("#tfn").innerHTML=`${datas.mainTopList3[0].fireLocation}`;
    document.querySelector("#tfc").innerHTML=`${datas.mainTopList3[0].count}건`;
    document.querySelector("#tsn").innerHTML=`${datas.mainTopList3[1].fireLocation}`;
    document.querySelector("#tsc").innerHTML=`${datas.mainTopList3[1].count}건`;
    document.querySelector("#ttn").innerHTML=`${datas.mainTopList3[2].fireLocation}`;
    document.querySelector("#ttc").innerHTML=`${datas.mainTopList3[2].count}건`;

    //메인 top3 - 요인
    document.querySelector("#sffn").innerHTML=`${datas.mainTopList4[0].fireFactorBig}`;
    document.querySelector("#sffc").innerHTML=`${datas.mainTopList4[0].count}건`;
    document.querySelector("#sfsn").innerHTML=`${datas.mainTopList4[1].fireFactorBig}`;
    document.querySelector("#sfsc").innerHTML=`${datas.mainTopList4[1].count}건`;
    document.querySelector("#sftn").innerHTML=`${datas.mainTopList4[2].fireFactorBig}`;
    document.querySelector("#sftc").innerHTML=`${datas.mainTopList4[2].count}건`;

    document.querySelector("#ssfn").innerHTML=`${datas.mainTopList5[0].chelateBigType}`;
    document.querySelector("#ssfc").innerHTML=`${datas.mainTopList5[0].count}건`;
    document.querySelector("#sssn").innerHTML=`${datas.mainTopList5[1].chelateBigType}`;
    document.querySelector("#sssc").innerHTML=`${datas.mainTopList5[1].count}건`;
    document.querySelector("#sstn").innerHTML=`${datas.mainTopList5[2].chelateBigType}`;
    document.querySelector("#sstc").innerHTML=`${datas.mainTopList5[2].count}건`;


        //메인 top3 - 장소 - 증감값
        setUpDownText(document.querySelector("#ffup"), datas.mainTopList1[0].upDown,yearSongmin);
        setUpDownText(document.querySelector("#fsup"), datas.mainTopList1[1].upDown,yearSongmin);
        setUpDownText(document.querySelector("#ftup"), datas.mainTopList1[2].upDown,yearSongmin);

        setUpDownText(document.querySelector("#sfup"), datas.mainTopList2[0].upDown,yearSongmin);
        setUpDownText(document.querySelector("#ssup"), datas.mainTopList2[1].upDown,yearSongmin);
        setUpDownText(document.querySelector("#stup"), datas.mainTopList2[2].upDown,yearSongmin);

        setUpDownText(document.querySelector("#tfup"), datas.mainTopList3[0].upDown, yearSongmin);
        setUpDownText(document.querySelector("#tsup"), datas.mainTopList3[1].upDown,yearSongmin);
        setUpDownText(document.querySelector("#ttup"), datas.mainTopList3[2].upDown,yearSongmin);

        //메인 top3 - 요인 - 증감값
        setUpDownText(document.querySelector("#sffup"), datas.mainTopList4[0].upDown,yearSongmin);
        setUpDownText(document.querySelector("#sfsup"), datas.mainTopList4[1].upDown,yearSongmin);
        setUpDownText(document.querySelector("#sftup"), datas.mainTopList4[2].upDown,yearSongmin);

        setUpDownText(document.querySelector("#ssfup"), datas.mainTopList5[0].upDown,yearSongmin);
        setUpDownText(document.querySelector("#sssup"), datas.mainTopList5[1].upDown,yearSongmin);
        setUpDownText(document.querySelector("#sstup"), datas.mainTopList5[2].upDown,yearSongmin);
    

})
//fetch 통신 실패 시 실행 영역
.catch(err=>{
    alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
    console.log(err);
});


