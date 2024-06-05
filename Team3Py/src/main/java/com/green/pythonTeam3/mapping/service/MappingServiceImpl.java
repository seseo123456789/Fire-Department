package com.green.pythonTeam3.mapping.service;

import com.green.pythonTeam3.mapping.vo.StateFireCntVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("mappingService")
public class MappingServiceImpl implements MappingService{

    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public StateFireCntVO localCnt(StateFireCntVO stateFireCntVO) {
        return sqlSession.selectOne("localCnt", stateFireCntVO);
    }
}
