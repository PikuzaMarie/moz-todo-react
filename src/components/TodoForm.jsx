import { Button, TextField, Alert } from "@mui/material";
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
					Todofield is empty!
				</Alert>
			)}
			<TextField
				variant="outlined"
				value={text}
				size="small"
				label="What are you up to?"
				onChange={(e) => setText(e.target.value)}
			/>
			<Button
				variant="contained"
				size="medium"
				type="submit">
				Add
			</Button>
		</form>
	);
}
