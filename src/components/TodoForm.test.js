import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

test("renders TodoForm component", () => {
	render(<TodoForm onSubmit={() => {}} />);
	expect(screen.getByLabelText("What are you up to?")).toBeInTheDocument();
});

test("shows warning when submitting empty input", () => {
	render(<TodoForm onSubmit={() => {}} />);
	fireEvent.click(screen.getByRole("button", { name: /add/i }));
	expect(screen.getByText("Todo is empty!")).toBeInTheDocument();
});

test("calls onSubmit with input text", () => {
	const handleSubmit = jest.fn();
	render(<TodoForm onSubmit={handleSubmit} />);

	fireEvent.change(screen.getByLabelText("What are you up to?"), {
		target: { value: "New Todo" },
	});
	fireEvent.click(screen.getByRole("button", { name: /add/i }));

	expect(handleSubmit).toHaveBeenCalledWith({
		id: expect.any(String),
		text: "New Todo",
		complete: false,
	});
});
