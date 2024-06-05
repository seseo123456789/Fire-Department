package com.green.pythonTeam3.dmg.service;

import com.green.pythonTeam3.dmg.vo.FiveVO;
import com.green.pythonTeam3.dmg.vo.SixVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("dmgService")
public class DmgServiceImpl implements DmgService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<FiveVO> ijdPp() {
        return sqlSession.selectList("dmgMapper.ijdPp");
    }

    @Override
    public List<SixVO> moneyDmg() {
        return sqlSession.selectList("dmgMapper.moneyDmg");
    }

    @Override
    public List<Integer> totalIjd() {
        return sqlSession.selectList("dmgMapper.totalIjd");
    }

    @Override
    public List<Integer> totalMoney() {
        return sqlSession.selectList("dmgMapper.totalMoney");
    }
}
