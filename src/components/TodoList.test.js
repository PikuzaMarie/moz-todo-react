import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders TodoList component", () => {
	render(<TodoList />);
	expect(screen.getByText("TO-DO app")).toBeInTheDocument();
});

test("adds a new todo", () => {
	render(<TodoList />);

	fireEvent.change(screen.getByLabelText("What are you up to?"), {
		target: { value: "New Todo" },
	});
	fireEvent.click(screen.getByRole("button", { name: /add/i }));

	expect(screen.getByText("New Todo")).toBeInTheDocument();
});

// test("filters active todos", async () => {
// 	render(<TodoList />);

// 	fireEvent.change(screen.getByLabelText("What are you up to?"), {
// 		target: { value: "Active Todo" },
// 	});
// 	fireEvent.click(screen.getByRole("button", { name: /add/i }));

// 	fireEvent.change(screen.getByLabelText("What are you up to?"), {
// 		target: { value: "Completed Todo" },
// 	});
// 	fireEvent.click(screen.getByRole("button", { name: /add/i }));

// 	const checkboxes = screen.getAllByRole("checkbox");
// 	fireEvent.click(checkboxes[1]);

// 	fireEvent.click(screen.getByRole("button", { name: /active/i }));

// 	expect(
// 		await screen.findByText("Active Todo", { exact: false })
// 	).toBeInTheDocument();
// 	expect(screen.queryByText("Completed Todo")).not.toBeInTheDocument();
// });

test("clears completed todos", () => {
	render(<TodoList />);

	fireEvent.change(screen.getByLabelText("What are you up to?"), {
		target: { value: "Completed Todo" },
	});
	fireEvent.click(screen.getByRole("button", { name: /add/i }));

	const checkbox = screen.getByRole("checkbox");
	fireEvent.click(checkbox); // Mark todo as completed

	fireEvent.click(screen.getByRole("button", { name: /clear completed/i }));
	expect(screen.queryByText("Completed Todo")).not.toBeInTheDocument();
});
