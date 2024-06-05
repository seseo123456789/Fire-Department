package com.green.pythonTeam3.total.vo;

import com.green.pythonTeam3.ranking.vo.FirePlaceVO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
//10. 발화장소별 화재현황(민재)
public class FireStartPlaceVO {
    private String placeBigType; // 발화장소대분류명
    private String placeMediumType; // 발화장소중분류명
    private String happenDate; // 발생일자
    private int hurtPeople; // 부상자인원수
    private int happenCnt; // 발생건수
    private int moneyDamage; // 재산피해소계금액
    private int count; //카운트
    private int upDown; //증감
}
