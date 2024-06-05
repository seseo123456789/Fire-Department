package com.green.pythonTeam3.graph.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GraphVO {
    private String label;
    private String type;
    private String backgroundColor;
    private String borderColor;
    private int[] data;
}
