package com.green.pythonTeam3.mapping.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

// 시도단위
@Getter
@Setter
@ToString
public class LocalPlaceCntVO {
    private int placeNum;
    private int flasDclrMnb; // 허위신고건수
    private int fireProgMnb; // 화재진행건수
    private int fireRcptMnb; // 화재접수건수
    private int flsrpPrcsMnb; // 오보처리건수
    private String dcrnYmd; // 발생일자
    private String sidoNm; // 시도명
    private int slfExtshMnb; // 자체진화건수
    private int stnEndMnb; // 상황종료건수

}
