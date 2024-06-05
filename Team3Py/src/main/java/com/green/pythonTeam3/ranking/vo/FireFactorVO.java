package com.green.pythonTeam3.ranking.vo;

import com.green.pythonTeam3.total.vo.FirstChelateVO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
//8. 발화요인별 화재현황(송민)
public class FireFactorVO {
    private int propertyDamage; // 재산피해소계금액
    private String fireFactorBig; //발화요인대분류명
    private int occurrences; // 발생건수
    private int injuredPeople; // 부상자인원수
    private String dateOfIncident; // 발생일자
    private int victimPercent; // 사고자인원수
    private String fireFactorSmall; // 발화요인소분류명
    private int count; //카운트
    private FirstChelateVO firstChelateVO; //최초착화물별화재현황
    private int upDown; //증감
    private double avgOccurrences; // 평균 발생건수
}
