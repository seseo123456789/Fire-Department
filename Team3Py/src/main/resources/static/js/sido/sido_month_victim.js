
let monthVic2021List=[]
let monthVic2022List=[]
let monthVic2023List=[]

// 데이터 불러오기
let oneV = Array.prototype.slice.call(document.querySelectorAll(".oneVic"));
let twoV = Array.prototype.slice.call(document.querySelectorAll(".twoVic"));
let threeV = Array.prototype.slice.call(document.querySelectorAll(".threeVic"));


// //////////////////////월별 인명피해 그래프////////////////////

// 2021
oneV.forEach(function(one1){
    monthVic2021List.push(one1.value);    
})

// 2022
twoV.forEach(function(two2){
    monthVic2022List.push(two2.value);
})

// 2023
threeV.forEach(function(three3){
    monthVic2023List.push(three3.value);    
})




new Chart(document.getElementById("line-chart4"), 
{ 
    type: 'line', 
    data: { 
        labels: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], 

        datasets: [
            { 
                data: monthVic2021List, 
                label: "2021년도", 
                borderColor: "#3cba9f", 
                fill: false 
            }, 
            { 
                data: monthVic2022List, 
                label: "2022년도", 
                borderColor: "#e8c3b9", 
                fill: false 
            }, 
            { 
                data: monthVic2023List, 
                label: "2023년도", 
                borderColor: "#c45850", 
                fill: false 
            }
        ] 
    }, 
    options: { 
        title: { display: false, text: 'World population per region (in millions)' } 
        

    } 

});