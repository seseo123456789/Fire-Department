package com.green.pythonTeam3.mapping.controller;

import com.green.pythonTeam3.mapping.service.MappingService;
import com.green.pythonTeam3.mapping.vo.StateFireCntVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/map")
public class MappingController {

    @Resource(name = "mappingService")
    private MappingService mappingService;

    @ResponseBody
    @PostMapping("/mapFirst")
    public StateFireCntVO mapFirst(@RequestBody StateFireCntVO stateFireCntVO){
        StateFireCntVO vo = mappingService.localCnt(stateFireCntVO);
        vo.setSelectYear(stateFireCntVO.getSelectYear());
        return vo;
    };
}
