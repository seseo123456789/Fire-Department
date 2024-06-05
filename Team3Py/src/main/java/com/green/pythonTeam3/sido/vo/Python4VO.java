package com.green.pythonTeam3.sido.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class Python4VO {

    private int propertyCode;
    private String ocrnMonth;
    private String sidoNm;
    private int ocrnMnb;
    private long prptDmgSbttAmt;

    private int lifeDmgPercnt;
    private int totalOcrn;
    private long totalPrpt;
    private long totalLife;
    private int selectYear;

    // 화재통계 조회

    private long totalOccurrences;
    private long occurrences2021;
    private long occurrences2022;
    private long occurrences2023;
    private long totalPropertyDamage;
    private long propertyDamage2021;
    private long propertyDamage2022;
    private long propertyDamage2023;

}
