const year = document.querySelector("#year").value;
fetch('/graph/graphFetch', { //요청경로
    method: 'POST',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    //컨트롤러로 전달할 데이터
    body: new URLSearchParams({
       // 데이터명 : 데이터값
        selectYear : year
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
    new Chart(document.querySelector('#mixed-chart'), {
        type: 'bar',
        data: {
            labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            datasets: [
                datas[1],
                datas[0]
            ]
        },
        options: {
            title: {
                display: true
            },
            legend: { display: false },
            scale : {
                y : {
                    min : 0,
                    max : 6000
                }
            }
        }
    });
})
//fetch 통신 실패 시 실행 영역
.catch(err=>{
    alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
    console.log(err);
});




