const first_chart = document.querySelector('#first_chart');
const first_total = document.querySelector('#first_total');
let currentIndex = 0;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////인명피해 2021/////////////////////////////////////
fetch('/dmg/fetchInjPp', { //요청경로
    method: 'POST',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    //컨트롤러로 전달할 데이터
    body: new URLSearchParams({
       // 데이터명 : 데이터값
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
.then((data) => {//data -> controller에서 리턴되는 데이터!
    console.log(data);
    new Chart(document.querySelector('#doughnut-chartPeoDMG2021'), {
        type: 'doughnut',
        data: {
            labels: ["사망자", "부상자"],
            datasets: [
                {
                    label: "2021",
                    data: [data[0].vctmPercnt, data[0].injrdprPercnt],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.3)',
                        'rgba(255, 159, 64, 0.8)'
                    ]
                }
            ]
        },
        options: {
            responsive: false,
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });
    new Chart(document.querySelector('#doughnut-chartPeoDMG2021R'), {
        type: 'doughnut',
        data: {
            labels: ["사망자", "부상자"],
            datasets: [
                {
                    label: "2021",
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.3)',
                        'rgba(255, 159, 64, 0.8)'
                    ],
                    data: [data[0].vctmPercnt, data[0].injrdprPercnt]
                }
            ]
        },
        options: {
            responsive: false,
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });
    /////////////////////////////////인명피해 2022////////////////////////////////////////////
    new Chart(document.querySelector('#doughnut-chartPeoDMG2022'), {
        type: 'doughnut',
        data: {
            labels: ["사망자", "부상자"],
            datasets: [
                {
                    label: "2022",
                    backgroundColor: ["#e8c3b9", "#c45850"],
                    data: [data[1].vctmPercnt, data[1].injrdprPercnt],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(75, 192, 192, 0.8)'
                    ]
                }
            ]
        },
        options: {
            responsive: false,
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });
    /////////////////////////////////////////////인명피해 2023/////////////////////////////////////////////
    new Chart(document.querySelector('#doughnut-chartPeoDMG2023'), {
        type: 'doughnut',
        data: {
            labels: ["사망자", "부상자"],
            datasets: [
                {
                    label: "2023",
                    backgroundColor: ["#e8c3b9", "#c45850"],
                    data: [data[2].vctmPercnt, data[2].injrdprPercnt],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(54, 162, 235, 0.8)'
                    ]
                }
            ]
        },
        options: {
            responsive: false,
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });
})
//fetch 통신 실패 시 실행 영역
.catch(err=>{
    alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
    console.log(err);
});



let chart1 = setInterval(() => {
    currentIndex++;
    first_chart.style.top = -currentIndex*336.8+'px';
    first_total.style.top = -currentIndex*75+'px';
    first_chart.style.transition = "0.8s";
    first_total.style.transition = "0.8s";
    
    if(currentIndex == 3){
        setTimeout(() => {
            first_chart.style.top = -0+'px';
            first_total.style.top = -0+'px';
            currentIndex = 0;
            first_chart.style.transition = "0s";
            first_total.style.transition = '0s';
        }, 800);
    }
}, 3000);

first_chart.addEventListener('mouseover',()=>{clearInterval(chart1)});

first_chart.addEventListener('mouseout',()=>{
    chart1 = setInterval(() => {
        currentIndex++;
        first_chart.style.top = -currentIndex*336.8+'px';
        first_total.style.top = -currentIndex*75+'px';
        first_chart.style.transition = "0.8s";
        first_total.style.transition = "0.8s";
        
        if(currentIndex == 3){
            setTimeout(() => {
                first_chart.style.top = -0+'px';
                first_total.style.top = -0+'px';
                currentIndex = 0;
                first_chart.style.transition = "0s";
                first_total.style.transition = '0s';
            }, 800);
        }
    }, 3000);
})
////////////////////////////////////////1번 섹션 차트 끝/////////////////////////////


////////////////////////////////////////2번 섹션 차트 시작///////////////////////////
const second_chart = document.querySelector('#second_chart');
const second_total = document.querySelector('#second_total');
let currentIndex2 = 0;

fetch('/dmg/fetchMoneyDmg', { //요청경로
    method: 'POST',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    //컨트롤러로 전달할 데이터
    body: new URLSearchParams({
       // 데이터명 : 데이터값
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
.then((data) => {//data -> controller에서 리턴되는 데이터!
    console.log(data);
    new Chart(document.querySelector('#doughnut-chartMnDMG2021'), {
        type: 'doughnut',
        data: {
            labels: ["동산피해", "부동산피해"],
            datasets: [
                {
                    label: "2021",
                    data: [data[0].perpDmgAmt, data[0].restDmgAmt],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.3)',
                        'rgba(255, 159, 64, 0.8)'
                    ]
                }
            ]
        },
        options: {
            responsive: false,
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });
    new Chart(document.querySelector('#doughnut-chartMnDMG2021R'), {
        type: 'doughnut',
        data: {
            labels: ["동산피해", "부동산피해"],
            datasets: [
                {
                    label: "2021",
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.3)',
                        'rgba(255, 159, 64, 0.8)'
                    ],
                    data: [data[0].perpDmgAmt, data[0].restDmgAmt]
                }
            ]
        },
        options: {
            responsive: false,
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });
    /////////////////////////////////인명피해 2022////////////////////////////////////////////
    new Chart(document.querySelector('#doughnut-chartMnDMG2022'), {
        type: 'doughnut',
        data: {
            labels: ["동산피해", "부동산피해"],
            datasets: [
                {
                    label: "2022",
                    backgroundColor: ["#e8c3b9", "#c45850"],
                    data: [data[1].perpDmgAmt, data[1].restDmgAmt],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(75, 192, 192, 0.8)'
                    ]
                }
            ]
        },
        options: {
            responsive: false,
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });
    /////////////////////////////////////////////인명피해 2023/////////////////////////////////////////////
    new Chart(document.querySelector('#doughnut-chartMnDMG2023'), {
        type: 'doughnut',
        data: {
            labels: ["동산피해", "부동산피해"],
            datasets: [
                {
                    label: "2023",
                    backgroundColor: ["#e8c3b9", "#c45850"],
                    data: [data[2].perpDmgAmt, data[2].restDmgAmt],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(54, 162, 235, 0.8)'
                    ]
                }
            ]
        },
        options: {
            responsive: false,
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        }
    });
})
//fetch 통신 실패 시 실행 영역
.catch(err=>{
    alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
    console.log(err);
});



let chart2 = setInterval(() => {
    currentIndex2++;
    second_chart.style.top = -currentIndex2*336.8+'px';
    second_total.style.top = -currentIndex2*75+'px';
    second_chart.style.transition = "0.8s";
    second_total.style.transition = "0.8s";
    
    if(currentIndex2 == 3){
        setTimeout(() => {
            second_chart.style.top = -0+'px';
            second_total.style.top = -0+'px';
            currentIndex2 = 0;
            second_chart.style.transition = "0s";
            second_total.style.transition = "0s";
        }, 800);
    }
}, 3000);

second_chart.addEventListener('mouseover',()=>{clearInterval(chart2)});

second_chart.addEventListener('mouseout',()=>{
    chart2 = setInterval(() => {
        currentIndex2++;
        second_chart.style.top = -currentIndex2*336.8+'px';
        second_total.style.top = -currentIndex2*75+'px';
        second_chart.style.transition = "0.8s";
        second_total.style.transition = "0.8s";
        
        if(currentIndex2 == 3){
            setTimeout(() => {
                second_chart.style.top = -0+'px';
                second_total.style.top = -0+'px';
                currentIndex2 = 0;
                second_chart.style.transition = "0s";
                second_total.style.transition = "0s";
            }, 800);
        }
    }, 3000);
})












