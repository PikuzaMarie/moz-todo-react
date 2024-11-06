import { Typography, Checkbox } from "@mui/material";

export default function TodoItem({ todo, toggleComplete }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			}}>
			<Checkbox
				id={todo.id}
				checked={todo.complete}
				onChange={toggleComplete}
			/>
			<Typography
				style={{
					textDecoration: todo.complete ? "line-through" : " ",
					color: todo.complete ? "gray" : "black",
				}}>
				{todo.text}
			</Typography>
		</div>
	);
}
