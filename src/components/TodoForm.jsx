import { Box, Button, TextField, Alert } from "@mui/material";
import shortid from "shortid";
import { useState } from "react";

export default function TodoForm({ onSubmit }) {
	const [text, setText] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			setError(true);
			return;
		}

		onSubmit({
			id: shortid.generate(),
			text: text,
			complete: false,
		});

		setText("");
	};

	return (
		<form onSubmit={handleSubmit}>
			{error && (
				<Alert
					severity="warning"
					onClose={() => setError(false)}>
					Todo is empty!
				</Alert>
			)}
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					width: "450px",
				}}>
				<TextField
					variant="standard"
					value={text}
					size="small"
					label="What are you up to?"
					onChange={(e) => setText(e.target.value)}
					sx={{ width: "370px", margin: "0 0 8px 8px" }}
				/>
				<Button
					variant="contained"
					size="medium"
					type="submit">
					Add
				</Button>
			</Box>
		</form>
	);
}
