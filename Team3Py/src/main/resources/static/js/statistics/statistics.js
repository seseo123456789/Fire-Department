// 주제별 화재통계 - 주제별 버튼 클릭 시 그래프
function showContent(contentId, button) {
  // 모든 버튼 'btn-clicked' 클래스 제거
  document.querySelectorAll('.btn-clicked').forEach(btn => {
      btn.classList.remove('btn-clicked');
  });
  // 선택 버튼 'btn-clicked' 클래스 추가
  button.classList.add('btn-clicked');
  // 선택 버튼 내용 표시
  var contents = document.querySelectorAll('.content');
  contents.forEach(content => {
      if (content.id === contentId) {
          content.style.display = 'block';
      } else {
          content.style.display = 'none';
      }
  });
}

//////////////////////////// 버튼1. 발화장소 /////////////////////////////////////
/////////////////////////// 막대그래프 - 발화장소 3개년 //////////////////////////
fetch('/statistics/detailFirePlaceFetch', {
  method: 'POST',
  cache: 'no-cache',
  headers: {
      'Content-Type': 'application/json'
  },
  // 컨트롤러로 전달할 데이터
  body: JSON.stringify({})
})
.then((response) => {
  if (!response.ok) {
      alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
      return;
  }

  return response.json();
})
.then((data) => {
  const placeLabels = data.totalFirePlace.map(place => place.placeBigType); // 장소 라벨
  const placeCounts = data.totalFirePlace.map(place => place.count); // 장소 카운트
  let total = data.totalFirePlace[0].count
  document.getElementById('fireLocationTitle').innerHTML += `  |  ${total}건`;

  // 첫 번째 요소 토탈 값 제외
  const chartDataLabels = placeLabels.slice(1);
  const chartDataCounts = placeCounts.slice(1);

  new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
          labels: chartDataLabels, // 장소 라벨
          datasets: [
              {
                  label: "발화 장소",
                  data: chartDataCounts, // 카운트
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.8)',
                      'rgba(255, 159, 64, 0.8)',
                      'rgba(255, 205, 86, 0.8)',
                      'rgba(75, 192, 192, 0.8)',
                      'rgba(54, 162, 235, 0.8)'
                  ],
                  datalabels : {
                    anchor: 'end', // 표시 위치 
                    align: 'top',  // 표시 위치 배치 방향
                }
              }
          ]
      },
      options: {
          responsive: false,
          legend: { display: false }
      }
  });
})
.catch((error) => {
  console.error('Fetch error:', error);
});

////////////////////////// 원그래프(1-1) - 발화장소 2021//////////////////////
fetch('/statistics/firePlaceFetch', {
  method: 'POST',
  cache: 'no-cache',
  headers: {
      'Content-Type': 'application/json'
  },
  // 컨트롤러로 전달할 데이터
  body: JSON.stringify({})
})
.then((response) => {
  if (!response.ok) {
      alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
      return;
  }
  return response.json();
})
.then((data) => {
  const threshold = 400; // 임계값 설정
  const placeLabels = data.firePlace2021.map(place => place.placeBigType); // 장소 라벨
  const placeCounts = data.firePlace2021.map(place => place.count); // 카운트
  let total = data.firePlace2021[0].count // 데이터 첫 번쨰 요소 count값 = 연간 토탈값
  
  // 400미만 데이터 '기타'로 묶음
  let otherCount = 0;
  const filteredLabels = [];
  const filteredCounts = [];
  for (let i = 0; i < placeCounts.length; i++) {
    if (placeCounts[i] < threshold) {
      otherCount += placeCounts[i];
    } else {
      filteredLabels.push(placeLabels[i]);
      filteredCounts.push(placeCounts[i]);
    }
  }
  filteredLabels.push('그 외');
  filteredCounts.push(otherCount);

  // 첫 번째 요소 토탈 값 제외
  const chartDataLabels = filteredLabels.slice(1);
  const chartDataCounts = filteredCounts.slice(1);

  new Chart(document.getElementById("pie-chart-1"), {
    type: 'pie',
    data: {
      labels: chartDataLabels, // 장소 라벨
      datasets: [
        {
          label: "발화 장소",
          data: chartDataCounts, //카운트
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)'
          ]
        }
      ]
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: '발화장소 통계  |  ' + total + '건',
        fontSize : 20
      }
    }
  });
})

//////////////////////// 원그래프(1-2) - 발화장소 2022////////////////////
fetch('/statistics/firePlaceFetch', {
  method: 'POST',
  cache: 'no-cache',
  headers: {
      'Content-Type': 'application/json'
  },
  // 컨트롤러로 전달할 데이터
  body: JSON.stringify({})
})
.then((response) => {
  if (!response.ok) {
      alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
      return;
  }
  return response.json();
})
.then((data) => {
  const threshold = 400; // 임계값 설정
  const placeLabels = data.firePlace2022.map(place => place.placeBigType); // 장소 라벨
  const placeCounts = data.firePlace2022.map(place => place.count); // 카운트
  let total = data.firePlace2022[0].count // 데이터 첫 번쨰 요소 count값 = 연간 토탈값

  // 400미만 데이터 '기타'로 묶음
  let otherCount = 0;
  const filteredLabels = [];
  const filteredCounts = [];
  for (let i = 0; i < placeCounts.length; i++) {
    if (placeCounts[i] < threshold) {
      otherCount += placeCounts[i];
    } else {
      filteredLabels.push(placeLabels[i]);
      filteredCounts.push(placeCounts[i]);
    }
  }
  filteredLabels.push('그 외');
  filteredCounts.push(otherCount);

  // 첫 번째 요소 토탈 값 제외
  const chartDataLabels = filteredLabels.slice(1);
  const chartDataCounts = filteredCounts.slice(1);

  new Chart(document.getElementById("pie-chart-2"), {
    type: 'pie',
    data: {
      labels: chartDataLabels, // 장소 라벨
      datasets: [
        {
          label: "발화 장소",
          data: chartDataCounts, //카운트
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)'
          ]
        }
      ]
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: '발화장소 통계  |  ' + total + '건',
        fontSize: 20
      }
    }
  });
})
.catch((error) => {
  console.error('Fetch error:', error);
});

///////////////////// 원그래프(1-3) - 발화장소 2023/////////////////
fetch('/statistics/firePlaceFetch', {
  method: 'POST',
  cache: 'no-cache',
  headers: {
      'Content-Type': 'application/json'
  },
  // 컨트롤러로 전달할 데이터
  body: JSON.stringify({})
})
.then((response) => {
  if (!response.ok) {
      alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
      return;
  }
  return response.json();
})
.then((data) => {
  const threshold = 2000; // 임계값 설정
  const placeLabels = data.firePlace2023.map(place => place.placeBigType); // 장소 라벨
  const placeCounts = data.firePlace2023.map(place => place.count); // 카운트
  let total = data.firePlace2023[0].count // 데이터 첫 번쨰 요소 count값 = 연간 토탈값

  // 1000미만 데이터 '기타'로 묶기
  let otherCount = 0;
  const filteredLabels = [];
  const filteredCounts = [];
  for (let i = 0; i < placeCounts.length; i++) {
    if (placeCounts[i] < threshold) {
      otherCount += placeCounts[i];
    } else {
      filteredLabels.push(placeLabels[i]);
      filteredCounts.push(placeCounts[i]);
    }
  }
  filteredLabels.push('그 외');
  filteredCounts.push(otherCount);

  // 첫 번째 요소 토탈 값 제외
  const chartDataLabels = filteredLabels.slice(1);
  const chartDataCounts = filteredCounts.slice(1);

  new Chart(document.getElementById("pie-chart-3"), {
    type: 'pie',
    data: {
      labels: chartDataLabels, // 장소 라벨
      datasets: [
        {
          label: "발화 장소",
          data: chartDataCounts, //카운트
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)'
          ]
        }
      ]
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: '발화장소 통계  |  ' + total + '건',
        fontSize: 20
      }
    }
  });
})
.catch((error) => {
  console.error('Fetch error:', error);
});


//////////////////////////// 버튼2. 화재요인 /////////////////////////////////////
/////////////////////////// 막대그래프 - 발화요인 3개년 //////////////////////////
fetch('/statistics/detailFireFactorFetch', {
  method: 'POST',
  cache: 'no-cache',
  headers: {
      'Content-Type': 'application/json'
  },
  // 컨트롤러로 전달할 데이터
  body: JSON.stringify({})
})
.then((response) => {
  if (!response.ok) {
      alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
      return;
  }

  return response.json();
})
.then((data) => {
  const factorLabels = data.totalFireFactor.map(factor => factor.fireFactorBig); // 장소 라벨
  const factorCounts = data.totalFireFactor.map(factor => factor.count); // 장소 카운트
  let total = data.totalFireFactor[0].count
  document.getElementById('fireCauseTitle').innerHTML += `  |  ${total}건`;

  // 첫 번째 요소 토탈 값 제외
  const chartDataLabels = factorLabels.slice(1);
  const chartDataCounts = factorCounts.slice(1);

  new Chart(document.getElementById("bar-chart-2"), {
      type: 'bar',
      data: {
          labels: chartDataLabels, // 장소 라벨
          datasets: [
              {
                  label: "발화 요인",
                  data: chartDataCounts, // 카운트
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.8)',
                      'rgba(255, 159, 64, 0.8)',
                      'rgba(255, 205, 86, 0.8)',
                      'rgba(75, 192, 192, 0.8)',
                      'rgba(54, 162, 235, 0.8)'
                  ]
              }
          ]
      },
      options: {
          responsive: false,
          legend: { display: false }
      }
  });
})
.catch((error) => {
  console.error('Fetch error:', error);
});

////////////////////////// 원그래프(2-1) - 발화요인 2021//////////////////////
fetch('/statistics/fireFactorFetch', {
  method: 'POST',
  cache: 'no-cache',
  headers: {
      'Content-Type': 'application/json'
  },
  // 컨트롤러로 전달할 데이터
  body: JSON.stringify({})
})
.then((response) => {
  if (!response.ok) {
      alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
      return;
  }
  return response.json();
})
.then((data) => {
  const threshold = 230; // 임계값 설정
  const factorLabels = data.fireFactor2021.map(factor => factor.fireFactorBig); // 장소 라벨
  const factorCounts = data.fireFactor2021.map(factor => factor.count); // 카운트
  let total = data.fireFactor2021[0].count // 데이터 첫 번쨰 요소 count값 = 연간 토탈값
  
  // 400미만 데이터 '기타'로 묶음
  let otherCount = 0;
  const filteredLabels = [];
  const filteredCounts = [];
  for (let i = 0; i < factorCounts.length; i++) {
    if (factorCounts[i] < threshold) {
      otherCount += factorCounts[i];
    } else {
      filteredLabels.push(factorLabels[i]);
      filteredCounts.push(factorCounts[i]);
    }
  }
  filteredLabels.push('그 외');
  filteredCounts.push(otherCount);

  // 첫 번째 요소 토탈 값 제외
  const chartDataLabels = filteredLabels.slice(1);
  const chartDataCounts = filteredCounts.slice(1);

  new Chart(document.getElementById("pie-chart-2-1"), {
    type: 'pie',
    data: {
      labels: chartDataLabels, // 장소 라벨
      datasets: [
        {
          label: "발화 요인",
          data: chartDataCounts, //카운트
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)'
          ]
        }
      ]
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: '발화요인 통계  |  ' + total + '건',
        fontSize : 20
      }
    }
  });
})

////////////////////////// 원그래프(2-2) - 발화요인 2022//////////////////////
fetch('/statistics/fireFactorFetch', {
  method: 'POST',
  cache: 'no-cache',
  headers: {
      'Content-Type': 'application/json'
  },
  // 컨트롤러로 전달할 데이터
  body: JSON.stringify({})
})
.then((response) => {
  if (!response.ok) {
      alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
      return;
  }
  return response.json();
})
.then((data) => {
  const threshold = 250; // 임계값 설정
  const factorLabels = data.fireFactor2022.map(factor => factor.fireFactorBig); // 장소 라벨
  const factorCounts = data.fireFactor2022.map(factor => factor.count); // 카운트
  let total = data.fireFactor2022[0].count // 데이터 첫 번쨰 요소 count값 = 연간 토탈값
  
  // 400미만 데이터 '기타'로 묶음
  let otherCount = 0;
  const filteredLabels = [];
  const filteredCounts = [];
  for (let i = 0; i < factorCounts.length; i++) {
    if (factorCounts[i] < threshold) {
      otherCount += factorCounts[i];
    } else {
      filteredLabels.push(factorLabels[i]);
      filteredCounts.push(factorCounts[i]);
    }
  }
  filteredLabels.push('그 외');
  filteredCounts.push(otherCount);

  // 첫 번째 요소 토탈 값 제외
  const chartDataLabels = filteredLabels.slice(1);
  const chartDataCounts = filteredCounts.slice(1);

  new Chart(document.getElementById("pie-chart-2-2"), {
    type: 'pie',
    data: {
      labels: chartDataLabels, // 장소 라벨
      datasets: [
        {
          label: "발화 요인",
          data: chartDataCounts, //카운트
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)'
          ]
        }
      ]
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: '발화요인 통계  |  ' + total + '건',
        fontSize : 20
      }
    }
  });
})

////////////////////////// 원그래프(2-3) - 발화요인 2023//////////////////////
fetch('/statistics/fireFactorFetch', {
  method: 'POST',
  cache: 'no-cache',
  headers: {
      'Content-Type': 'application/json'
  },
  // 컨트롤러로 전달할 데이터
  body: JSON.stringify({})
})
.then((response) => {
  if (!response.ok) {
      alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
      return;
  }
  return response.json();
})
.then((data) => {
  const threshold = 250; // 임계값 설정
  const factorLabels = data.fireFactor2023.map(factor => factor.fireFactorBig); // 장소 라벨
  const factorCounts = data.fireFactor2023.map(factor => factor.count); // 카운트
  let total = data.fireFactor2023[0].count // 데이터 첫 번쨰 요소 count값 = 연간 토탈값
  
  // 400미만 데이터 '기타'로 묶음
  let otherCount = 0;
  const filteredLabels = [];
  const filteredCounts = [];
  for (let i = 0; i < factorCounts.length; i++) {
    if (factorCounts[i] < threshold) {
      otherCount += factorCounts[i];
    } else {
      filteredLabels.push(factorLabels[i]);
      filteredCounts.push(factorCounts[i]);
    }
  }
  filteredLabels.push('그 외');
  filteredCounts.push(otherCount);

  // 첫 번째 요소 토탈 값 제외
  const chartDataLabels = filteredLabels.slice(1);
  const chartDataCounts = filteredCounts.slice(1);

  new Chart(document.getElementById("pie-chart-2-3"), {
    type: 'pie',
    data: {
      labels: chartDataLabels, // 장소 라벨
      datasets: [
        {
          label: "발화 요인",
          data: chartDataCounts, //카운트
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)'
          ]
        }
      ]
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: '발화요인 통계  |  ' + total + '건',
        fontSize : 20
      }
    }
  });
})

//////////////////////////// 버튼3. 최초 착화물 /////////////////////////////////////
/////////////////////////// 막대그래프 - 최초 착화물 3개년 //////////////////////////
fetch('/statistics/detailFirstChelateFetch', {
  method: 'POST',
  cache: 'no-cache',
  headers: {
      'Content-Type': 'application/json'
  },
  // 컨트롤러로 전달할 데이터
  body: JSON.stringify({})
})
.then((response) => {
  if (!response.ok) {
      alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
      return;
  }

  return response.json();
})
.then((data) => {
  const chelateLabels = data.totalFirstChelate.map(chelate => chelate.chelateBigType); // 장소 라벨
  const chelateCounts = data.totalFirstChelate.map(chelate => chelate.count); // 장소 카운트
  let total = data.totalFirstChelate[0].count
  document.getElementById('fireChelateTitle').innerHTML += `  |  ${total}건`;

  // 첫 번째 요소 토탈 값 제외
  const chartDataLabels = chelateLabels.slice(1);
  const chartDataCounts = chelateCounts.slice(1);

  new Chart(document.getElementById("bar-chart-3"), {
      type: 'bar',
      data: {
          labels: chartDataLabels, // 장소 라벨
          datasets: [
              {
                  label: "최초 착화물",
                  data: chartDataCounts, // 카운트
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.8)',
                      'rgba(255, 159, 64, 0.8)',
                      'rgba(255, 205, 86, 0.8)',
                      'rgba(75, 192, 192, 0.8)',
                      'rgba(54, 162, 235, 0.8)'
                  ],
                  datalabels : {
                    anchor: 'end', // 표시 위치 
                    align: 'top',  // 표시 위치 배치 방향
                }
              }
          ]
      },
      options: {
          responsive: false,
          legend: { display: false },
      }
  });
})
.catch((error) => {
  console.error('Fetch error:', error);
});



////////////////////////// 원그래프(3-1) - 최초착화물 2021//////////////////////
fetch('/statistics/firstChelateFetch', {
  method: 'POST',
  cache: 'no-cache',
  headers: {
      'Content-Type': 'application/json'
  },
  // 컨트롤러로 전달할 데이터
  body: JSON.stringify({})
})
.then((response) => {
  if (!response.ok) {
      alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
      return;
  }
  return response.json();
})
.then((data) => {
  const threshold = 400; // 임계값 설정
  const chelateLabels = data.firstChelate2021.map(chelate => chelate.chelateBigType); // 장소 라벨
  const chelateCounts = data.firstChelate2021.map(chelate => chelate.count); // 카운트
  let total = data.firstChelate2021[0].count // 데이터 첫 번쨰 요소 count값 = 연간 토탈값
  
  // 400미만 데이터 '기타'로 묶음
  let otherCount = 0;
  const filteredLabels = [];
  const filteredCounts = [];
  for (let i = 0; i < chelateCounts.length; i++) {
    if (chelateCounts[i] < threshold) {
      otherCount += chelateCounts[i];
    } else {
      filteredLabels.push(chelateLabels[i]);
      filteredCounts.push(chelateCounts[i]);
    }
  }
  filteredLabels.push('그 외');
  filteredCounts.push(otherCount);

  // 첫 번째 요소 토탈 값 제외
  const chartDataLabels = filteredLabels.slice(1);
  const chartDataCounts = filteredCounts.slice(1);

  new Chart(document.getElementById("pie-chart-3-1"), {
    type: 'pie',
    data: {
      labels: chartDataLabels, // 장소 라벨
      datasets: [
        {
          label: "최초착화물",
          data: chartDataCounts, //카운트
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)'
          ]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: '최초착화물 통계  |  ' + total + '건',
        fontSize : 20
      }
    }
  });
})

////////////////////////// 원그래프(3-2) - 최초착화물 2022//////////////////////
fetch('/statistics/firstChelateFetch', {
  method: 'POST',
  cache: 'no-cache',
  headers: {
      'Content-Type': 'application/json'
  },
  // 컨트롤러로 전달할 데이터
  body: JSON.stringify({})
})
.then((response) => {
  if (!response.ok) {
      alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
      return;
  }
  return response.json();
})
.then((data) => {
  const threshold = 400; // 임계값 설정
  const chelateLabels = data.firstChelate2022.map(chelate => chelate.chelateBigType); // 장소 라벨
  const chelateCounts = data.firstChelate2022.map(chelate => chelate.count); // 카운트
  let total = data.firstChelate2022[0].count // 데이터 첫 번쨰 요소 count값 = 연간 토탈값
  
  // 400미만 데이터 '기타'로 묶음
  let otherCount = 0;
  const filteredLabels = [];
  const filteredCounts = [];
  for (let i = 0; i < chelateCounts.length; i++) {
    if (chelateCounts[i] < threshold) {
      otherCount += chelateCounts[i];
    } else {
      filteredLabels.push(chelateLabels[i]);
      filteredCounts.push(chelateCounts[i]);
    }
  }
  filteredLabels.push('그 외');
  filteredCounts.push(otherCount);

  // 첫 번째 요소 토탈 값 제외
  const chartDataLabels = filteredLabels.slice(1);
  const chartDataCounts = filteredCounts.slice(1);

  new Chart(document.getElementById("pie-chart-3-2"), {
    type: 'pie',
    data: {
      labels: chartDataLabels, // 장소 라벨
      datasets: [
        {
          label: "최초착화물",
          data: chartDataCounts, //카운트
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)'
          ]
        }
      ]
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: '최초착화물 통계  |  ' + total + '건',
        fontSize : 20
      }
    }
  });
})

////////////////////////// 원그래프(3-3) - 최초착화물 2023 //////////////////////
fetch('/statistics/firstChelateFetch', {
  method: 'POST',
  cache: 'no-cache',
  headers: {
      'Content-Type': 'application/json'
  },
  // 컨트롤러로 전달할 데이터
  body: JSON.stringify({})
})
.then((response) => {
  if (!response.ok) {
      alert('fetch error!\n컨트롤러로 통신중에 오류가 발생했습니다.');
      return;
  }
  return response.json();
})
.then((data) => {
  const threshold = 400; // 임계값 설정
  const chelateLabels = data.firstChelate2023.map(chelate => chelate.chelateBigType); // 장소 라벨
  const chelateCounts = data.firstChelate2023.map(chelate => chelate.count); // 카운트
  let total = data.firstChelate2023[0].count // 데이터 첫 번쨰 요소 count값 = 연간 토탈값
  
  // 400미만 데이터 '기타'로 묶음
  let otherCount = 0;
  const filteredLabels = [];
  const filteredCounts = [];
  for (let i = 0; i < chelateCounts.length; i++) {
    if (chelateCounts[i] < threshold) {
      otherCount += chelateCounts[i];
    } else {
      filteredLabels.push(chelateLabels[i]);
      filteredCounts.push(chelateCounts[i]);
    }
  }
  filteredLabels.push('그 외');
  filteredCounts.push(otherCount);

  // 첫 번째 요소 토탈 값 제외
  const chartDataLabels = filteredLabels.slice(1);
  const chartDataCounts = filteredCounts.slice(1);

  new Chart(document.getElementById("pie-chart-3-3"), {
    type: 'pie',
    data: {
      labels: chartDataLabels, // 장소 라벨
      datasets: [
        {
          label: "최초착화물",
          data: chartDataCounts, //카운트
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)'
          ]
        }
      ]
    },
    options: {
      responsive: false,
      title: {
        display: true,
        text: '최초착화물 통계  |  ' + total + '건',
        fontSize : 20
      }
    }
  });
})





