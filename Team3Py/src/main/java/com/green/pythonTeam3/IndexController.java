package com.green.pythonTeam3;

import com.green.pythonTeam3.graph.service.GraphServiceImpl;
import com.green.pythonTeam3.graph.vo.GraphVO;
import com.green.pythonTeam3.ranking.sevice.RankingServiceImpl;
import com.green.pythonTeam3.ranking.vo.FireFactorVO;
import com.green.pythonTeam3.ranking.vo.FirePlaceVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class IndexController {

    @Resource(name = "graphService")
    private GraphServiceImpl graphService;

    @Resource(name = "rankingService")
    private RankingServiceImpl rankingService;

    @RequestMapping("/")
    public String mainPage(@RequestParam(name = "selectYear",required = false,defaultValue = "2023")int selectYear
                            ,Model model){
        model.addAttribute("year",selectYear);
        return "main/main";
    }
}
