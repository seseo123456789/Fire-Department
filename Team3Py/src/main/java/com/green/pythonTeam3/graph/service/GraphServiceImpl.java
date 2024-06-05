package com.green.pythonTeam3.graph.service;

import com.green.pythonTeam3.ranking.vo.FirePlaceVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("graphService")
public class GraphServiceImpl implements GraphService{

    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<Integer> totalCnt(int selectYear) {
        return sqlSession.selectList("graphMapper.totalCnt",selectYear);
    }

    @Override
    public List<Integer> monthStarPropertyDamage(int selectYear) {
        return sqlSession.selectList("graphMapper.monthStarPropertyDamage",selectYear);
    }
}
