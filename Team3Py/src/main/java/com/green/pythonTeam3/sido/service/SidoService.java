package com.green.pythonTeam3.sido.service;

import com.green.pythonTeam3.sido.vo.Python3VO;
import com.green.pythonTeam3.sido.vo.Python4VO;

import java.util.List;

public interface SidoService {

// ############  시도별 재산피해 데이터 ###########
//    년도별조회
    List<Python4VO> property2021();
    List<Python4VO> property2022();
    List<Python4VO> property2023();

//    월별 조회
    List<Python4VO> monthPro2021(String sidoNm);
    List<Python4VO> monthPro2022(String sidoNm);
    List<Python4VO> monthPro2023(String sidoNm);
//    시도명 조회
    List<Python4VO> selectSido();

//   2021~2023년 총 발생건수 & 피해액
    List<Python4VO> totalProperty();



// ############  시도별 인명 피해 데이터 ###########
//   2021~2023년 총 발생건수 & 피해액
    List<Python3VO> totalVictim();

    // ############  년도별 피해 데이터 ###########
    Python4VO selectYears(int selectYear);

}
