package com.green.pythonTeam3.mapping.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

// 지역별화재장소별화재발생현황
@Setter
@Getter
@ToString
public class StateFireCntVO {
    private int propNum; // PK Number
    private int propertyDamage; // 재산피해소계금액
    private int occurrences; // 발생건수
    private int injuredPeople; // 부상자인원수
    private String dateOfIncident; // 발생일
    private int victimPercent; // 사고자인원수
    private int numberOfCasualties; // 인명피해인원수
    private String fireLocation; // 화재장소구분명
    private String stateName; // 시도명
    private int selectYear;
}
