import { Typography, Checkbox, IconButton, Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export default function TodoItem({ todo, toggleComplete, deleteItem }) {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				width: "450px",
				height: "40px",
				borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
			}}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
				onClick={toggleComplete}>
				<Checkbox
					id={todo.id}
					checked={todo.complete}
					size="small"
				/>
				<Typography
					style={{
						textDecoration: todo.complete ? "line-through" : " ",
						color: todo.complete ? "gray" : "black",
					}}>
					{todo.text}
				</Typography>
			</Box>
			<IconButton
				onClick={deleteItem}
				aria-label="delete"
				size="small">
				<ClearIcon />
			</IconButton>
		</Box>
	);
}
