
let oneVic2021List=[]
let twoVic2022List=[]
let threeVic2023List=[]

// 데이터 불러오기
let oneV = Array.prototype.slice.call(document.querySelectorAll(".oneVic"));
let twoV = Array.prototype.slice.call(document.querySelectorAll(".twoVic"));
let threeV = Array.prototype.slice.call(document.querySelectorAll(".threeVic"));


// ////////////////////// 시도별 인명피해 그래프////////////////////

// 2021
oneV.forEach(function(one1){
    oneVic2021List.push(one1.value);    
})

// 2022
twoV.forEach(function(two2){
    twoVic2022List.push(two2.value);
})

// 2023
threeV.forEach(function(three3){
    threeVic2023List.push(three3.value);    
})




new Chart(document.getElementById("line-chart2"), 
{ 
    type: 'line', 
    data: { 
        labels: ['강원', '경기', '경남', '경북', '광주', '대구',
                    '대전', '부산', '서울', '세종', '울산', 
                    '인천', '전남', '전북', '제주', '충남' , '충북'], 

        datasets: [
            { 
                data: oneVic2021List, 
                label: "2021년도", 
                borderColor: "#3e95cd", 
                fill: false 
            }, 
            { 
                data: twoVic2022List, 
                label: "2022년도", 
                borderColor: "#8e5ea2", 
                fill: false 
            }, 
            { 
                data: threeVic2023List, 
                label: "2023년도", 
                borderColor: "#c45850", 
                fill: false 
            }
        ] 
    }, 
    options: { 
        title: { display: false, text: 'World population per region (in millions)' }, 
        responsive: false,
        scales : {yAxes:[{
        
            ticks: {
                display :true,  stepSize: 200,  max:800,
                min: 0 }
        }]
        
        }

    } 

});