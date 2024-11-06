import TodoForm from "./TodoForm";
import { useState } from "react";
import { Box, ButtonGroup, Button, Paper, Typography } from "@mui/material";
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
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "20px",
			}}>
			<Typography
				variant="h4"
				component="h1"
				textAlign="center">
				TO-DO app
			</Typography>
			<Paper
				variant="outlined"
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "450px",
				}}>
				<TodoForm onSubmit={(todoItem) => setTodos([todoItem, ...todos])} />
				{filteredTodos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						toggleComplete={() => toggleComplete(todo.id)}
						deleteItem={() => deleteItem(todo.id)}
					/>
				))}
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						width: "450px",
						margin: "16px",
					}}>
					<Typography
						variant="body2"
						component="p"
						color="gray"
						ml={1}>
						{todos.filter((todo) => todo.complete === false).length} items left
					</Typography>
					<ButtonGroup
						variant="outlined"
						size="small">
						<Button
							onClick={() => setTodosToShow("all")}
							size="small"
							sx={{
								bgcolor: todosToShow === "all" ? "#1976d2" : "inherit",
								color: todosToShow === "all" ? "white" : "inherit",
							}}>
							All
						</Button>
						<Button
							onClick={() => setTodosToShow("active")}
							size="small"
							sx={{
								bgcolor: todosToShow === "active" ? "#1976d2" : "inherit",
								color: todosToShow === "active" ? "white" : "inherit",
							}}>
							Active
						</Button>
						<Button
							onClick={() => setTodosToShow("completed")}
							size="small"
							sx={{
								bgcolor: todosToShow === "completed" ? "#1976d2" : "inherit",
								color: todosToShow === "completed" ? "white" : "inherit",
								textAlign: "center",
							}}>
							Completed
						</Button>
					</ButtonGroup>
					<Button
						onClick={() =>
							setTodos(todos.filter((todo) => todo.complete === false))
						}
						size="small">
						Clear completed
					</Button>
				</Box>
			</Paper>
		</Box>
	);
}
