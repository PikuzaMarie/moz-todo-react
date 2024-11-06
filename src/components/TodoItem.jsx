import { Typography, Checkbox } from "@mui/material";

export default function TodoItem({ todo }) {
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
			/>
			<Typography
				style={{
					textDecoration: todo.complete ? "line-thorugh" : " ",
					color: todo.complete ? "gray" : "black",
				}}>
				{todo.text}
			</Typography>
		</div>
	);
}
