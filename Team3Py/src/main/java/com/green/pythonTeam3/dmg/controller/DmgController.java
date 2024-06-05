package com.green.pythonTeam3.dmg.controller;

import com.green.pythonTeam3.dmg.service.DmgServiceImpl;
import com.green.pythonTeam3.dmg.vo.FiveVO;
import com.green.pythonTeam3.dmg.vo.SixVO;
import jakarta.annotation.Resource;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/dmg")
public class DmgController {
    @Resource(name = "dmgService")
    private DmgServiceImpl dmgService;

    @GetMapping("/dmgList")
    public String dmgList(Model model){
        List<Integer> intTotalIjd =  dmgService.totalIjd();
        List<Integer> intTotalMoney = dmgService.totalMoney();
        List<FiveVO> fYearIjd = dmgService.ijdPp();
        List<SixVO> sYearMoney = dmgService.moneyDmg();
        List<String> totalIjd = new ArrayList<>();
        List<String> totalMoney = new ArrayList<>();
        List<String> yearInjrdprPercnt = new ArrayList<>();
        List<String> yearVctmPercnt = new ArrayList<>();
        List<String> yearPerpDmgAmt = new ArrayList<>();
        List<String> yearRestDmgAmt = new ArrayList<>();
        DecimalFormat decimalFormat = new DecimalFormat("###,###");

        for (int i = 0 ; i < intTotalIjd.size(); i++){
            totalIjd.add(decimalFormat.format(intTotalIjd.get(i)));
        }
        for (int i = 0 ; i < intTotalMoney.size(); i++){
            totalMoney.add(decimalFormat.format(intTotalMoney.get(i)));
        }
        for (int i = 0 ; i < fYearIjd.size(); i++){
            yearInjrdprPercnt.add(decimalFormat.format(fYearIjd.get(i).getInjrdprPercnt()));
            yearVctmPercnt.add(decimalFormat.format(fYearIjd.get(i).getVctmPercnt()));
        }
        for (int i = 0 ; i < sYearMoney.size(); i++){
            yearPerpDmgAmt.add(decimalFormat.format(sYearMoney.get(i).getPerpDmgAmt()));
            yearRestDmgAmt.add(decimalFormat.format(sYearMoney.get(i).getRestDmgAmt()));
        }

        model.addAttribute("totalIjd",totalIjd);
        model.addAttribute("totalMoney",totalMoney);
        model.addAttribute("yearInjrdprPercnt",yearInjrdprPercnt);
        model.addAttribute("yearVctmPercnt",yearVctmPercnt);
        model.addAttribute("yearPerpDmgAmt",yearPerpDmgAmt);
        model.addAttribute("yearRestDmgAmt",yearRestDmgAmt);
        return "/content/dmg/dmg_list";
    }

    @ResponseBody
    @PostMapping("/fetchInjPp")
    public List<FiveVO> fetchInjPp(){
        return dmgService.ijdPp();
    }

    @ResponseBody
    @PostMapping("/fetchMoneyDmg")
    public List<SixVO> fetchMoneyDmg(){
        return dmgService.moneyDmg();
    }
}
