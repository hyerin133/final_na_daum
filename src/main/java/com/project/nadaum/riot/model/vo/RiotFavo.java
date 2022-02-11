package com.project.nadaum.riot.model.vo;

import java.io.Serializable;
import java.util.Date;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RiotFavo implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	
	private String memberId;
	private String smId;
	private String name;
	private boolean favAccept;

	
	



}
