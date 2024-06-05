// https://observablehq.com/@rabelais/rendering-topojson-of-south-korea-with-d3-v5@66

  import * as topojson from 'https://cdn.skypack.dev/topojson@3.0.2';
  import * as d3 from 'https://cdn.skypack.dev/d3@v5.15.0';

  const span_tag = document.querySelector('.states-span-tag');
  const selectYear = document.querySelector("#year").value;
  span_tag.textContent = `${selectYear}년 지역별 화재발생건`;
  let stateName = '';
  const topoDataPath = '/json/topoKorea.json';

  async function loadTopoData() {
    const response = await fetch(topoDataPath);
    return await response.json();
}

function getGeoJson(topoData) {
    return topojson.feature(topoData, topoData.objects.skorea_provinces_2018_geo);
}

function getRenderData() {
    return {
        width: 440,
        height: 430,
        margin: 0,
    };
}

async function main() {
    const topoData = await loadTopoData();
    const renderData = getRenderData();

    const tooltip = d3.select("#tooltip"); // 툴팁 요소 선택

    const geoJson = getGeoJson(topoData);
    const svg = d3
        .create('svg')
        .attr('width', renderData.width)
        .attr('height', renderData.height);

        
    const pathGen = d3.geoPath().projection(d3.geoMercator().fitSize([renderData.width, renderData.height], geoJson));

    svg.selectAll('.province')
        .data(geoJson.features)
        .enter().append('path')
        .attr('d', pathGen)
        .attr('fill', '#a5a5a5')
        .attr('stroke', '#e4e4e4')
        .on('mouseenter', function(event, d) {
            d3.select(this).attr('fill', '#ff8800')
            tooltip
                .style("display", "block") // 툴팁 표시
                .html(`지역명: ${event.properties.name}<br/>
                  발생 건수: `)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY + 10) + "px");
                stateName = event.properties.name;
                

                fetch('/map/mapFirst', { //요청경로
                    method: 'POST',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    //컨트롤러로 전달할 데이터
                    body: JSON.stringify({
                       // 데이터명 : 데이터값
                       stateName : stateName,
                       selectYear : selectYear
                    })
                })
                .then((response) => {
                    return response.json(); //나머지 경우에 사용
                })
                //fetch 통신 후 실행 영역
                .then((data) => {//data -> controller에서 리턴되는 데이터!
                    

                    let number = data.occurrences;
                    console.log(data);
                    let thoundsNum = number.toLocaleString('ko-KR');
                    tooltip.html(`<b>${event.properties.name}</b><br/> <span style="font-size: 20px;"> ${thoundsNum}</span> 건`)
                })
                //fetch 통신 실패 시 실행 영역
                .catch(err=>{
                    alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
                    console.log(err);
                });    
        })
        
        .on('mouseleave', function() {
            d3.select(this).attr('fill', '#a5a5a5');
            tooltip.style("display", "none"); // 툴팁 숨김
        });

        ;

    document.querySelector('#map').appendChild(svg.node());

}

main();  