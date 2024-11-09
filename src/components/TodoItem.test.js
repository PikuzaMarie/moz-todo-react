import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

const todo = { id: "1", text: "Sample Todo", complete: false };

test("renders TodoItem component", () => {
	render(
		<TodoItem
			todo={todo}
			toggleComplete={() => {}}
			deleteItem={() => {}}
		/>
	);
	expect(screen.getByText("Sample Todo")).toBeInTheDocument();
});

test("calls toggleComplete when item is clicked", () => {
	const toggleComplete = jest.fn();
	render(
		<TodoItem
			todo={todo}
			toggleComplete={toggleComplete}
			deleteItem={() => {}}
		/>
	);
	fireEvent.click(screen.getByText("Sample Todo"));
	expect(toggleComplete).toHaveBeenCalled();
});

test("calls deleteItem when delete button is clicked", () => {
	const deleteItem = jest.fn();
	render(
		<TodoItem
			todo={todo}
			toggleComplete={() => {}}
			deleteItem={deleteItem}
		/>
	);
	fireEvent.click(screen.getByLabelText("delete"));
	expect(deleteItem).toHaveBeenCalled();
});
