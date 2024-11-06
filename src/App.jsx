import "./App.css";
import TodoList from "./components/TodoList";
import { Box } from "@mui/material";

function App() {
	return (
		<Box
			sx={{
				height: "100vh",
				width: "100vw",
				backgroundColor: "#e5e5ed",
				paddingTop: "10%",
			}}>
			<TodoList />
		</Box>
	);
}

export default App;
