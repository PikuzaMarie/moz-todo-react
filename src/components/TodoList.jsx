import TodoForm from "./TodoForm";
import { useState } from "react";
import { Paper } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TodoList() {
	const [todos, setTodos] = useState([]);
	return (
		<Paper>
			<TodoForm onSubmit={(todoItem) => setTodos([todoItem, ...todos])} />
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
				/>
			))}
		</Paper>
	);
}
