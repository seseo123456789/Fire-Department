package com.green.pythonTeam3.ranking.controller;

import com.green.pythonTeam3.ranking.sevice.RankingServiceImpl;
import com.green.pythonTeam3.ranking.sevice.StatisticsServiceImpl;
import com.green.pythonTeam3.ranking.vo.FireFactorVO;
import com.green.pythonTeam3.sido.vo.Python3VO;
import com.green.pythonTeam3.sido.vo.Python4VO;
import com.green.pythonTeam3.total.vo.FireStartPlaceVO;
import com.green.pythonTeam3.total.vo.FirstChelateVO;
import jakarta.annotation.Resource;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/statistics")
public class StatisticsController {

    @Resource(name = "statisticsService")
    private StatisticsServiceImpl statisticsService;

    //주요 화재통계
    @GetMapping("statisticsFirst")
    public String statisticsFirst(Model model){
        //1. 3개년 전체 발생건수 & 피해금액, 각 연도별 발생건수 & 피해금액
        Python4VO totalOccAndProperty = statisticsService.totalOccAndProperty();
        DecimalFormat decimalFormat = new DecimalFormat("###,###");
        //피해금액 [단위: 억]으로 나누기
        totalOccAndProperty.setPropertyDamage2021(totalOccAndProperty.getPropertyDamage2021() / 100000);
        totalOccAndProperty.setPropertyDamage2022(totalOccAndProperty.getPropertyDamage2022() / 100000);
        totalOccAndProperty.setPropertyDamage2023(totalOccAndProperty.getPropertyDamage2023() / 100000);
        totalOccAndProperty.setTotalPropertyDamage(totalOccAndProperty.getTotalPropertyDamage() / 300000);

        totalOccAndProperty.setTotalOccurrences(totalOccAndProperty.getTotalOccurrences()/3);

        List<String> totalOccAndProperty2 = new ArrayList<>();
        totalOccAndProperty2.add(decimalFormat.format(totalOccAndProperty.getPropertyDamage2021()));
        totalOccAndProperty2.add(decimalFormat.format(totalOccAndProperty.getPropertyDamage2022()));
        totalOccAndProperty2.add(decimalFormat.format(totalOccAndProperty.getPropertyDamage2023()));
        totalOccAndProperty2.add(decimalFormat.format(totalOccAndProperty.getTotalPropertyDamage()));

        List<String> totalOccAndProperty3 = new ArrayList<>();
        totalOccAndProperty3.add(decimalFormat.format(totalOccAndProperty.getOccurrences2021()));
        totalOccAndProperty3.add(decimalFormat.format(totalOccAndProperty.getOccurrences2022()));
        totalOccAndProperty3.add(decimalFormat.format(totalOccAndProperty.getOccurrences2023()));
        totalOccAndProperty3.add(decimalFormat.format(totalOccAndProperty.getTotalOccurrences()));

        model.addAttribute("totalOccAndProperty2", totalOccAndProperty2);
        model.addAttribute("totalOccAndProperty3", totalOccAndProperty3);


        //2. 3개년 전체 인명피해
        Python3VO totalLifeDmg = statisticsService.totalLifeDmg();
        List<String> totalLifeDmg2 = new ArrayList<>();
        totalLifeDmg2.add(decimalFormat.format(totalLifeDmg.getLifeDmgPercnt2021()));
        totalLifeDmg2.add(decimalFormat.format(totalLifeDmg.getLifeDmgPercnt2022()));
        totalLifeDmg2.add(decimalFormat.format(totalLifeDmg.getLifeDmgPercnt2023()));
        totalLifeDmg.setTotalLifeDmgPercnt(totalLifeDmg.getTotalLifeDmgPercnt()/3);
        totalLifeDmg2.add(decimalFormat.format(totalLifeDmg.getTotalLifeDmgPercnt()));
        model.addAttribute("totalLifeDmg2", totalLifeDmg2);

        //3. 지역별 화재피해
        List<Python3VO> totalLocalDmg = statisticsService.totalLocalDmg();
        List<String> totalLocalDmg2 = new ArrayList<>();
        totalLocalDmg2.add(decimalFormat.format(totalLocalDmg.get(0).getOccurrencesCount2021()));
        totalLocalDmg2.add(decimalFormat.format(totalLocalDmg.get(0).getOccurrencesCount2022()));
        totalLocalDmg2.add(decimalFormat.format(totalLocalDmg.get(0).getOccurrencesCount2023()));
        totalLocalDmg.get(0).setTotalOccurrencesCount(totalLocalDmg.get(0).getTotalOccurrencesCount()/3);
        totalLocalDmg2.add(decimalFormat.format(totalLocalDmg.get(0).getTotalOccurrencesCount()));

        model.addAttribute("totalLocalDmg", totalLocalDmg);
        model.addAttribute("totalLocalDmg2", totalLocalDmg2);

        return "/content/statistics/statistics";
    }

    // 주제별 화재 통계
    //1-1. 화재 장소(막대 그래프)
    @ResponseBody
    @PostMapping("/detailFirePlaceFetch")
    public Map<String, Object> fetchFirePlaceTotal(){
        Map<String, Object> map = new HashMap<>();
        //3개년 데이터
        List<FireStartPlaceVO> totalFirePlace = statisticsService.totalFirePlace();
        map.put("totalFirePlace", totalFirePlace);
        return map;
    }

    //1-2. 2021~2023년 화재 장소(원형 그래프)
    @ResponseBody
    @PostMapping("/firePlaceFetch")
    public Map<String, Object> fetchFirePlaceData() {
        Map<String, Object> map = new HashMap<>();
        //연도별 데이터
        List<FireStartPlaceVO> firePlace2021 = statisticsService.firePlace2021();
        List<FireStartPlaceVO> firePlace2022 = statisticsService.firePlace2022();
        List<FireStartPlaceVO> firePlace2023 = statisticsService.firePlace2023();
        map.put("firePlace2021", firePlace2021);
        map.put("firePlace2022", firePlace2022);
        map.put("firePlace2023", firePlace2023);
        return map;
    }

    //2-1. 화재 요인(막대그래프)
    @ResponseBody
    @PostMapping("/detailFireFactorFetch")
    public Map<String, Object> fetchFireFactorTotal(){
        Map<String, Object> map = new HashMap<>();
        //3개년 데이터 + 토탈값
        List<FireFactorVO> totalFireFactor = statisticsService.totalFireFactor();
        map.put("totalFireFactor", totalFireFactor);
        return map;
    }

    //2-2. 2021~2023년 화재 요인(원형 그래프)
    @ResponseBody
    @PostMapping("/fireFactorFetch")
    public Map<String, Object> fetchFireFactorData() {
        Map<String, Object> map = new HashMap<>();
        //연도별 데이터
        List<FireFactorVO> fireFactor2021 = statisticsService.fireFactor2021();
        List<FireFactorVO> fireFactor2022 = statisticsService.fireFactor2022();
        List<FireFactorVO> fireFactor2023 = statisticsService.fireFactor2023();
        map.put("fireFactor2021", fireFactor2021);
        map.put("fireFactor2022", fireFactor2022);
        map.put("fireFactor2023", fireFactor2023);
        return map;
    }

    //3-1. 최초 착화물(막대 그래프)
    @ResponseBody
    @PostMapping("/detailFirstChelateFetch")
    public Map<String, Object> fetchFirstChelateTotal(){
        Map<String, Object> map = new HashMap<>();
        //3개년 데이터 + 토탈값
        List<FirstChelateVO> totalFirstChelate = statisticsService.totalFirstChelate();
        map.put("totalFirstChelate", totalFirstChelate);
        return map;
    }

    //3-2. 2021~2023년 최초 착화물(원형 그래프)
    @ResponseBody
    @PostMapping("/firstChelateFetch")
    public Map<String, Object> fetchFirstChelateData() {
        Map<String, Object> map = new HashMap<>();
        //연도별 데이터
        List<FirstChelateVO> firstChelate2021 = statisticsService.firstChelate2021();
        List<FirstChelateVO> firstChelate2022 = statisticsService.firstChelate2022();
        List<FirstChelateVO> firstChelate2023 = statisticsService.firstChelate2023();
        map.put("firstChelate2021", firstChelate2021);
        map.put("firstChelate2022", firstChelate2022);
        map.put("firstChelate2023", firstChelate2023);
        return map;
    }






}
