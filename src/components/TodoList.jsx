import TodoForm from "./TodoForm";
import { useState } from "react";
import { Paper } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TodoList() {
	const [todos, setTodos] = useState([]);

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, complete: !todo.complete } : todo
			)
		);
	};

	return (
		<Paper>
			<TodoForm onSubmit={(todoItem) => setTodos([todoItem, ...todos])} />
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					toggleComplete={() => toggleComplete(todo.id)}
				/>
			))}
		</Paper>
	);
}
