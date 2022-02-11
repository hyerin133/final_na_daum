package com.project.nadaum.main.model.dao;

import java.util.List;
import java.util.Map;

import com.project.nadaum.main.model.vo.TodoList;

public interface MainDao {

	int insertTodoList(Map<String, Object> param);

	List<TodoList> userTodoList(Map<String, Object> param);

	int deleteTodoList(Map<String, Object> map);

}
