package com.green.pythonTeam3.sido.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class Python3VO {

    private int victimCode;
    private String victimMonth;
    private String victimSido;
    private int victimOcrn;
    private long lifeDmgPercnt;
    private long totalOcrn;
    private long totalPrpt;

    //화재통계 조회
    private int totalLifeDmgPercnt;
    private int LifeDmgPercnt2021;
    private int LifeDmgPercnt2022;
    private int LifeDmgPercnt2023;

    private int occurrencesCount2021;
    private int occurrencesCount2022;
    private int occurrencesCount2023;
    private int totalOccurrencesCount;

}
