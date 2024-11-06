import { Typography, Checkbox, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export default function TodoItem({ todo, toggleComplete, deleteItem }) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}>
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
			<IconButton
				onClick={deleteItem}
				aria-label="delete"
				size="small">
				<ClearIcon />
			</IconButton>
		</div>
	);
}
