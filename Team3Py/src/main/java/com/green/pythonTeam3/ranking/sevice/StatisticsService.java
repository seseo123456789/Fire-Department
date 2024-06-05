package com.green.pythonTeam3.ranking.sevice;

import com.green.pythonTeam3.ranking.vo.FireFactorVO;
import com.green.pythonTeam3.sido.vo.Python3VO;
import com.green.pythonTeam3.sido.vo.Python4VO;
import com.green.pythonTeam3.total.vo.FireStartPlaceVO;
import com.green.pythonTeam3.total.vo.FirstChelateVO;

import java.util.List;

public interface StatisticsService {
    //주요 화재통계
    //1. 3개년 전체 발생건수 & 피해금액, 각 연도별 발생건수 & 피해금액
    Python4VO totalOccAndProperty();

    //2. 3개년 전체 인명피해
    Python3VO totalLifeDmg();

    //3. 지역별 화재피해
    List<Python3VO> totalLocalDmg();

    // 주제별 화재 통계
    //1. 화재 장소
    //1-1. 3개년 데이터 + 토탈값(막대 그래프)
    List<FireStartPlaceVO> totalFirePlace();

    //1-2. 2021~2023년 화재 장소(원형 그래프)
    List<FireStartPlaceVO> firePlace2021();
    List<FireStartPlaceVO> firePlace2022();
    List<FireStartPlaceVO> firePlace2023();

    //2. 화재 요인
    //2-1. 3개년 데이터 + 토탈값(막대 그래프)
    List<FireFactorVO> totalFireFactor();

    //2-2. 2021~2023년 화재 장소(원형 그래프)
    List<FireFactorVO> fireFactor2021();
    List<FireFactorVO> fireFactor2022();
    List<FireFactorVO> fireFactor2023();

    //3. 최초 착화물
    //3-1. 3개년 데이터 + 토탈값(막대 그래프)
    List<FirstChelateVO> totalFirstChelate();

    //3-2. 2021~2023년 최초 착화물(원형 그래프)
    List<FirstChelateVO> firstChelate2021();
    List<FirstChelateVO> firstChelate2022();
    List<FirstChelateVO> firstChelate2023();



}
