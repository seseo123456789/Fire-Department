package com.green.pythonTeam3.dmg.service;

import com.green.pythonTeam3.dmg.vo.FiveVO;
import com.green.pythonTeam3.dmg.vo.SixVO;

import java.util.List;

public interface DmgService {
    List<FiveVO> ijdPp();
    List<SixVO> moneyDmg();
    List<Integer> totalIjd();
    List<Integer> totalMoney();
}
