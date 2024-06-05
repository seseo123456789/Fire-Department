package com.green.pythonTeam3.graph.service;

import com.green.pythonTeam3.ranking.vo.FirePlaceVO;

import java.util.List;

public interface GraphService {
    List<Integer> totalCnt(int selectYear);
    List<Integer> monthStarPropertyDamage(int selectYear);
}
