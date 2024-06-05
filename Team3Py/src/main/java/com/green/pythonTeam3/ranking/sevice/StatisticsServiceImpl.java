package com.green.pythonTeam3.ranking.sevice;

import com.green.pythonTeam3.ranking.vo.FireFactorVO;
import com.green.pythonTeam3.sido.vo.Python3VO;
import com.green.pythonTeam3.sido.vo.Python4VO;
import com.green.pythonTeam3.total.vo.FireStartPlaceVO;
import com.green.pythonTeam3.total.vo.FirstChelateVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("statisticsService")
public class StatisticsServiceImpl implements StatisticsService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    //주요 화재통계
    //1. 3개년 전체 발생건수 & 피해금액, 각 연도별 발생건수 & 피해금액
    @Override
    public Python4VO totalOccAndProperty() {
        return sqlSession.selectOne("statisticsMapper.totalOccAndProperty");
    }

    //2. 3개년 전체 인명피해
    @Override
    public Python3VO totalLifeDmg() {
        return sqlSession.selectOne("statisticsMapper.totalLifeDmg");
    }

    //3. 지역별 화재피해
    @Override
    public List<Python3VO> totalLocalDmg() {
        return sqlSession.selectList("statisticsMapper.totalLocalDmg");
    }

    // 주제별 화재 통계
    //1. 화재 장소
    //1-1. 3개년 데이터 + 토탈값(막대 그래프)
    @Override
    public List<FireStartPlaceVO> totalFirePlace() {
        return sqlSession.selectList("statisticsMapper.totalFirePlace");
    }

    //1-2. 2021~2023년 화재 장소(원형 그래프)
    @Override
    public List<FireStartPlaceVO> firePlace2021() {
        return sqlSession.selectList("statisticsMapper.firePlace2021");
    }
    @Override
    public List<FireStartPlaceVO> firePlace2022() {
        return sqlSession.selectList("statisticsMapper.firePlace2022");
    }
    @Override
    public List<FireStartPlaceVO> firePlace2023() {
        return sqlSession.selectList("statisticsMapper.firePlace2023");
    }

    //2. 화재 요인
    //2-1. 3개년 데이터 + 토탈값(막대 그래프)
    @Override
    public List<FireFactorVO> totalFireFactor() {
        return sqlSession.selectList("statisticsMapper.totalFireFactor");
    }

    //2-2. 2021~2023년 화재 장소(원형 그래프)
    @Override
    public List<FireFactorVO> fireFactor2021() {
        return sqlSession.selectList("statisticsMapper.fireFactor2021");
    }
    @Override
    public List<FireFactorVO> fireFactor2022() {
        return sqlSession.selectList("statisticsMapper.fireFactor2022");
    }
    @Override
    public List<FireFactorVO> fireFactor2023() {
        return sqlSession.selectList("statisticsMapper.fireFactor2023");
    }

    //3. 최초 착화물
    //3-1. 3개년 데이터 + 토탈값(막대 그래프)
    @Override
    public List<FirstChelateVO> totalFirstChelate() {
        return sqlSession.selectList("statisticsMapper.totalFirstChelate");
    }

    //3-2. 2021~2023년 최초 착화물(원형 그래프)
    @Override
    public List<FirstChelateVO> firstChelate2021() {
        return sqlSession.selectList("statisticsMapper.firstChelate2021");
    }

    @Override
    public List<FirstChelateVO> firstChelate2022() {
        return sqlSession.selectList("statisticsMapper.firstChelate2022");
    }

    @Override
    public List<FirstChelateVO> firstChelate2023() {
        return sqlSession.selectList("statisticsMapper.firstChelate2023");
    }


}
