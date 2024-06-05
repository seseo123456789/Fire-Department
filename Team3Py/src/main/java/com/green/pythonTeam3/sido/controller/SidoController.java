package com.green.pythonTeam3.sido.controller;

import com.green.pythonTeam3.graph.vo.GraphVO;
import com.green.pythonTeam3.ranking.vo.FirePlaceVO;
import com.green.pythonTeam3.sido.service.SidoService;
import com.green.pythonTeam3.sido.service.SidoServiceImpl;
import com.green.pythonTeam3.sido.vo.Python3VO;
import com.green.pythonTeam3.sido.vo.Python4VO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/sido")
@Controller
public class SidoController {

    @Resource(name = "sidoService")
    private SidoServiceImpl sidoService;

    // 시도별 2021~20323 화재피해액 데이터
    @GetMapping("/sidoFirst")
    public String sidoFirst(Model model){
        /////////////// 재산피해 데이터 ///////////////////
        // 시도명(버튼)
        List<Python4VO> sidoNameList  = sidoService.selectSido();
        model.addAttribute("sidoNameList", sidoNameList);
        // 2021
        List<Python4VO> property2021 =sidoService.property2021();
        for(int i = 0 ; i < property2021.size() ; i++){
            property2021.get(i).setPrptDmgSbttAmt(property2021.get(i).getPrptDmgSbttAmt() * 1000);
        }
        property2021.get(0).setTotalPrpt(property2021.get(0).getTotalPrpt()*1000);
        model.addAttribute("property2021", property2021 );

        // 2022
        List<Python4VO> property2022 =sidoService.property2022();
        for(int i = 0 ; i < property2022.size() ; i++){
            property2022.get(i).setPrptDmgSbttAmt(property2022.get(i).getPrptDmgSbttAmt() * 1000);
        }
        property2022.get(0).setTotalPrpt(property2022.get(0).getTotalPrpt()*1000);
        model.addAttribute("property2022", property2022 );
        // 2023
        List<Python4VO> property2023 =sidoService.property2023();
        for(int i = 0 ; i < property2023.size() ; i++){
            property2023.get(i).setPrptDmgSbttAmt(property2023.get(i).getPrptDmgSbttAmt() * 1000);
        }
        property2023.get(0).setTotalPrpt(property2023.get(0).getTotalPrpt()*1000);
        model.addAttribute("property2023", property2023 );
        // 3년간 총 피해액 발생건
        List<Python4VO> totalProperty =sidoService.totalProperty();
        for (int i = 0 ; i < totalProperty.size() ; i++){
            totalProperty.get(i).setTotalPrpt(totalProperty.get(i).getTotalPrpt()*1000);
        }
        model.addAttribute("totalProperty", totalProperty );

        /////////////// 인명피해 데이터 ///////////////////
        // 3년간 총 피해인명수 발생건
        List<Python3VO> totalVictim =sidoService.totalVictim();
        model.addAttribute("totalVictim", totalVictim );

        return "/content/sido/sido_property";
    }


    // 각 시도의 월별 2021~2023 화재피해액 데이터
    @GetMapping("/sidoMonth")
    public String sidoMonth(@RequestParam(name ="sidoNm") String sidoNm, Model model){

        /////////////// 재산피해 데이터 ///////////////////
        // 2021
        List<Python4VO> monthPro2021  = sidoService.monthPro2021(sidoNm);
        for (int i = 0 ; i < monthPro2021.size() ; i++){
            monthPro2021.get(i).setPrptDmgSbttAmt(monthPro2021.get(i).getPrptDmgSbttAmt() * 1000);
        }
        monthPro2021.get(0).setTotalPrpt(monthPro2021.get(0).getTotalPrpt() * 1000);
        model.addAttribute("monthPro2021", monthPro2021);
        // 2022
        List<Python4VO> monthPro2022  = sidoService.monthPro2022(sidoNm);
        for (int i = 0 ; i < monthPro2022.size() ; i++){
            monthPro2022.get(i).setPrptDmgSbttAmt(monthPro2022.get(i).getPrptDmgSbttAmt() * 1000);
        }
        monthPro2022.get(0).setTotalPrpt(monthPro2022.get(0).getTotalPrpt() * 1000);
        model.addAttribute("monthPro2022", monthPro2022);
        // 2023
        List<Python4VO> monthPro2023  = sidoService.monthPro2023(sidoNm);
        for (int i = 0 ; i < monthPro2023.size() ; i++){
            monthPro2023.get(i).setPrptDmgSbttAmt(monthPro2023.get(i).getPrptDmgSbttAmt() * 1000);
        }
        monthPro2023.get(0).setTotalPrpt(monthPro2023.get(0).getTotalPrpt() * 1000);
        model.addAttribute("monthPro2023", monthPro2023);

        /////////////// 인명피해 데이터 ///////////////////

        return "/content/sido/sido_month_property";
    }


        //    메인 2023
        @ResponseBody
        @PostMapping("/sidoFetch2023")
        public Python4VO sidoFetch2023(@RequestParam(name = "selectYear")int selectYear){
            Python4VO selectYear2023 = sidoService.selectYears(selectYear);
            selectYear2023.setTotalPrpt(selectYear2023.getTotalPrpt()*1000);
            return selectYear2023;
        }



}
