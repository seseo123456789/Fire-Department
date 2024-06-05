package com.green.pythonTeam3.ranking.controller;

import com.green.pythonTeam3.ranking.sevice.RankingServiceImpl;
import com.green.pythonTeam3.ranking.vo.FireFactorVO;
import com.green.pythonTeam3.ranking.vo.FirePlaceVO;
import com.green.pythonTeam3.total.vo.FireStartPlaceVO;
import com.green.pythonTeam3.total.vo.FirstChelateVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Controller
@RequestMapping("/ranking")
public class RankingController {

    @Resource(name = "rankingService")
    private RankingServiceImpl rankingService;

    //메인 페이지 top3 목록 조회 - 비동기
    @ResponseBody
    @PostMapping("/mainRankingFetch")
    public Map<String, Object> mainTop3(@RequestParam(name = "selectYear")int selectYear){
        Map<String,Object> map = new HashMap<>();

        //장소 top3(데이터 / 증감값)
        //1. 발화장소 - 대분류명
        List<Integer> mainPlaceUD1 = rankingService.mainPlaceUD1(selectYear);
        List<FireStartPlaceVO> mainTopList1 = rankingService.mainPlaceTop1(selectYear);
        for(int i = 0; i < mainPlaceUD1.size(); i++){
            mainTopList1.get(i).setUpDown(mainPlaceUD1.get(i));
        }
        map.put("mainTopList1", mainTopList1);

        //2. 발화장소 - 중분류명
        List<Integer> mainPlaceUD2 = rankingService.mainPlaceUD2(selectYear);
        List<FireStartPlaceVO> mainTopList2 = rankingService.mainPlaceTop2(selectYear);
        for(int i = 0; i < mainPlaceUD2.size(); i++){
            mainTopList2.get(i).setUpDown(mainPlaceUD2.get(i));
        }
        map.put("mainTopList2", mainTopList2);

        //3. 화재장소
        List<Integer> mainPlaceUD3 = rankingService.mainPlaceUD3(selectYear);
        List<FirePlaceVO> mainTopList3 = rankingService.mainPlaceTop3(selectYear);
        for(int i = 0; i < mainPlaceUD3.size(); i++){
            mainTopList3.get(i).setUpDown(mainPlaceUD3.get(i));
        }
        map.put("mainTopList3", mainTopList3);


        //요인 top3(데이터 / 증감값)
        //1. 발화요인 - 대분류명
        List<Integer> mainFactorUD1 = rankingService.mainFactorUD1(selectYear);
        List<FireFactorVO> mainTopList4 = rankingService.mainFactorTop1(selectYear);
        for(int i = 0; i < mainFactorUD1.size(); i++){
            mainTopList4.get(i).setUpDown(mainFactorUD1.get(i));
        }
        map.put("mainTopList4", mainTopList4);

        //2. 최초착화물 - 대분류명
        List<Integer> mainFactorUD2 = rankingService.mainFactorUD2(selectYear);
        List<FirstChelateVO> mainTopList5 = rankingService.mainFactorTop2(selectYear);
        for(int i = 0; i < mainFactorUD2.size(); i++){
            mainTopList5.get(i).setUpDown(mainFactorUD2.get(i));
        }
        map.put("mainTopList5", mainTopList5);
        return map;
    };

    // 3개년 평균
    @ResponseBody
    @PostMapping("/avgThreeYears")
    public Map<String, Object> avgThreeYears(){
        Map<String, Object> result = new HashMap<>();
        DecimalFormat df = new DecimalFormat("#.##"); // 반올림
        FirePlaceVO vo1 = rankingService.avgFirePlace();
        FireFactorVO vo2 = rankingService.avgFireFactor();
        double avgPlace = Double.parseDouble(df.format(vo1.getAvgOccurrences()));
        double avgFactor = Double.parseDouble(df.format(vo2.getAvgOccurrences()));
        vo1.setAvgOccurrences(avgPlace);
        vo2.setAvgOccurrences(avgFactor);
        result.put("avgFirePlace", vo1);
        result.put("avgFireFactor", vo2);
        return result;
    }

    //화재피해장소 페이지
    @GetMapping("/place")
    public String place(){
        return "/content/place/place";
    };



}
