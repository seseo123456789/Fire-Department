package com.green.pythonTeam3.total.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
//11. 최초착화물별 화재현황(민재)
public class FirstChelateVO {
    private String chelateBigType; // 최초착화물대분류명
    private String chelateSmallType; // 최초착화물소분류명
    private String dateOfIncident; // 발생일자
    private int injuredPeople; // 부상자인원수
    private int occurrences; // 발생건수
    private int propertyDamage; // 재산피해소계금액
    private int count; //토탈
    private int upDown; //증감
}
