import { Button, TextField } from "@mui/material";
import shortid from "shortid";
import { useState } from "react";

export default function TodoForm({ onSubmit }) {
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit({
			id: shortid.generate(),
			text: text,
			complete: false,
		});

		setText("");
	};

	return (
		<form onSubmit={handleSubmit}>
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
