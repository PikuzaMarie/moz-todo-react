import TodoForm from "./TodoForm";
import { useState } from "react";
import { ButtonGroup, Button, Paper } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TodoList() {
	const [todos, setTodos] = useState([]);
	const [todosToShow, setTodosToShow] = useState("all");

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, complete: !todo.complete } : todo
			)
		);
	};

	const deleteItem = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const getFilteredTodos = (filter) => {
		if (filter === "active") {
			return todos.filter((todo) => todo.complete === false);
		} else if (filter === "completed") {
			return todos.filter((todo) => todo.complete === true);
		} else {
			return [...todos];
		}
	};

	const filteredTodos = getFilteredTodos(todosToShow);

	return (
		<Paper>
			<TodoForm onSubmit={(todoItem) => setTodos([todoItem, ...todos])} />
			{filteredTodos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					toggleComplete={() => toggleComplete(todo.id)}
					deleteItem={() => deleteItem(todo.id)}
				/>
			))}
			<ButtonGroup variant="outlined">
				<Button onClick={() => setTodosToShow("all")}>All</Button>
				<Button onClick={() => setTodosToShow("active")}>Active</Button>
				<Button onClick={() => setTodosToShow("completed")}>Completed</Button>
			</ButtonGroup>
		</Paper>
	);
}
