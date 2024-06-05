package com.green.pythonTeam3.ranking.sevice;

import com.green.pythonTeam3.ranking.vo.FireFactorVO;
import com.green.pythonTeam3.ranking.vo.FirePlaceVO;
import com.green.pythonTeam3.total.vo.FireStartPlaceVO;
import com.green.pythonTeam3.total.vo.FirstChelateVO;

import java.util.List;

public interface RankingService {

    // 메인화면 top3 조회(1) - 장소
    //1. 발화장소 - 대분류명
    List<FireStartPlaceVO> mainPlaceTop1(int selectYear);
    //2. 발화장소 - 중분류명
    List<FireStartPlaceVO> mainPlaceTop2(int selectYear);
    //3. 화재장소
    List<FirePlaceVO> mainPlaceTop3(int selectYear);

    //메인화면 top3 조회(2) - 요인
    //1. 발화요인 - 대분류명
    List<FireFactorVO> mainFactorTop1(int selectYear);
    //2. 최초착화물 - 대분류명
    List<FirstChelateVO> mainFactorTop2(int selectYear);

    //메인화면 top3 증감값 조회(1) - 장소
    //1. 발화장소 - 대분류명, 중분류명
    List<Integer> mainPlaceUD1(int selectYear);
    //2. 발화장소 - 중분류명
    List<Integer> mainPlaceUD2(int selectYear);
    //3. 화재장소
    List<Integer> mainPlaceUD3(int selectYear);

    //메인화면 top3 증감값 조회(2) - 요인
    //1. 발화요인 - 대분류명
    List<Integer> mainFactorUD1(int selectYear);
    //2. 최초착화물 - 대분류명
    List<Integer> mainFactorUD2(int selectYear);

    // 화재장소 평균
    FirePlaceVO avgFirePlace();

    // 발화요인 평균
    FireFactorVO avgFireFactor();


}
