package com.green.pythonTeam3.ranking.vo;

import com.green.pythonTeam3.total.vo.FireStartPlaceVO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
//7. 화재장소별 화재현황(송민)
public class FirePlaceVO {
    private int propertyDamage; // 재산피해소계금액
    private int occurrences; // 발생건수
    private int injuredPeople; // 부상자인원수
    private String dateOfIncident; // 발생일자
    private int victimPercent; // 사고자인원수
    private int numberOfCasualties; // 인명피해인원수
    private String fireLocation; // 화재장소구분명
    private int count; //토탈
    private int upDown; //증감
    private double avgOccurrences; // 평균 발생건수
    private FireStartPlaceVO fireStartPlaceVO; //발화요인별
}
