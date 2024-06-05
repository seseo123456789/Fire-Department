



let month2021List=[]
let month2022List=[]
let month2023List=[]

// 데이터 불러오기
let ones = Array.prototype.slice.call(document.querySelectorAll(".one"));
let twos = Array.prototype.slice.call(document.querySelectorAll(".two"));
let threes = Array.prototype.slice.call(document.querySelectorAll(".three"));

// //////////////////////월별 재산피해 그래프////////////////////
// 2021
ones.forEach(function(one){
    month2021List.push(one.value);
    
})
// 2022
twos.forEach(function(two){
    month2022List.push(two.value);
    
})

// 2023
threes.forEach(function(three){
    month2023List.push(three.value);
    
})






new Chart(document.getElementById("line-chart3"), { 
                    type: 'line', 
                    data: { 
                            labels: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], 
                            datasets: [
                                
                                        {   
                                            data: month2021List, 
                                            label: "2021년도", 
                                            borderColor: "#3cba9f", 
                                            fill: false
                                        }, 
                                        { 
                                            data: month2022List, 
                                            label: "2022년도", 
                                            borderColor: "#e8c3b9", 
                                            fill: false 
                                        }, 
                                        { 
                                            data:month2023List, 
                                            label: "2023년도", 
                                            borderColor: "#c45850", 
                                            fill: false 
                                        } 
                                    ] 
                            }, 
                    options: { 
                                title: { display: false, text: '년도별/월별  화재 재산피해액' }
                            } 
});



let my_td = document.getElementById('my_td');



function convertToKoreanNumber(numk) { 
    
    let num = numk.innerText


    let result = ''; 
    let digits = ['영','일','이','삼','사','오','육','칠','팔','구']; 
    let units = ['', '십', '백', '천', '만', '십', '백', '천', '억', '십억', '백억', '천억', '조', '십조', '백조', '천조']; 
    let numStr = num.toString(); // 문자열로 변환 
    let numLen = numStr.length; // 문자열의 길이 
    
        for(let i=0; i<numLen; i++){
            
            let digit = parseInt(numStr.charAt(i)); // i번째 자릿수 숫자 
            let unit = units[numLen-i-1]; // i번째 자릿수 단위 
        
                // 일의 자리인 경우에는 숫자를 그대로 한글로 변환 
                if(i === numLen-1 && digit === 1 && numLen !== 1) { 
                    result += '일'; 
                } 
                else if(digit !== 0) { 
                    // 일의 자리가 아니거나 숫자가 0이 아닐 경우 
                    result += digits[digit] + unit; 
                } 
                else if(i === numLen-5) { 
                    // 십만 단위에서는 '만'을 붙이지 않습니다. 
                    result += '만'; 
                }
                            
        }

        numk.title=result;
        return result; 
}