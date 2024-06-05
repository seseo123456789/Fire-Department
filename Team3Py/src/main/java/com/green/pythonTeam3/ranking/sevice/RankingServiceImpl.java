package com.green.pythonTeam3.ranking.sevice;

import com.green.pythonTeam3.ranking.vo.FireFactorVO;
import com.green.pythonTeam3.ranking.vo.FirePlaceVO;
import com.green.pythonTeam3.total.vo.FireStartPlaceVO;
import com.green.pythonTeam3.total.vo.FirstChelateVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("rankingService")
public class RankingServiceImpl implements RankingService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    // 메인화면 top3 조회
    //1. 발화장소 - 대분류명
    @Override
    public List<FireStartPlaceVO> mainPlaceTop1(int selectYear) {
        return sqlSession.selectList("placeMapper.mainPlaceTop1",selectYear);
    }
    //2. 발화장소 - 중분류명
    @Override
    public List<FireStartPlaceVO> mainPlaceTop2(int selectYear) {
        return sqlSession.selectList("placeMapper.mainPlaceTop2", selectYear);
    }
    //3. 화재장소
    @Override
    public List<FirePlaceVO> mainPlaceTop3(int selectYear) {
        return sqlSession.selectList("placeMapper.mainPlaceTop3", selectYear);
    }

    // 메인화면 top3 조회(2) - 요인
    //1. 발화요인 - 대분류명
    @Override
    public List<FireFactorVO> mainFactorTop1(int selectYear) {
        return sqlSession.selectList("factorMapper.mainFactorTop1", selectYear);
    }

    //2. 최초착화물 - 대분류명
    @Override
    public List<FirstChelateVO> mainFactorTop2(int selectYear) {
        return sqlSession.selectList("factorMapper.mainFactorTop2", selectYear);
    }

    //메인화면 top3 증감값 조회(1) - 장소
    //1. 발화장소 - 대분류명, 중분류명
    @Override
    public List<Integer> mainPlaceUD1(int selectYear) {
        return sqlSession.selectList("placeMapper.mainPlaceUD1", selectYear);
    }

    //2. 발화장소 - 중분류명
    @Override
    public List<Integer> mainPlaceUD2(int selectYear) {
        return sqlSession.selectList("placeMapper.mainPlaceUD2", selectYear);
    }

    //3. 화재장소
    @Override
    public List<Integer> mainPlaceUD3(int selectYear) {
        return sqlSession.selectList("placeMapper.mainPlaceUD3", selectYear);
    }

    //메인화면 top3 증감값 조회(2) - 요인
    //1. 발화요인 - 대분류명
    @Override
    public List<Integer> mainFactorUD1(int selectYear) {
        return sqlSession.selectList("factorMapper.mainFactorUD1", selectYear);
    }

    //2. 최초착화물 - 대분류명
    @Override
    public List<Integer> mainFactorUD2(int selectYear) {
        return sqlSession.selectList("factorMapper.mainFactorUD2", selectYear);
    }

    @Override
    public FirePlaceVO avgFirePlace() {
        return sqlSession.selectOne("placeMapper.avgFirePlace");
    }

    @Override
    public FireFactorVO avgFireFactor() {
        return sqlSession.selectOne("factorMapper.avgFireFactor");
    }


}
