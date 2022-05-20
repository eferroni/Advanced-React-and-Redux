import App from "components/App";
import { render, screen } from "../../utils/testing-utils";

describe("App", () => {
  it("shows a comment box", () => {
    render(<App />);

    const commentBoxEl = screen.getAllByTestId("commentBox");

    expect(commentBoxEl.length).toEqual(1);
  });

  it("shows a comment list", () => {
    render(<App />);
    const commentListEl = screen.getAllByTestId("commentList");

    expect(commentListEl.length).toEqual(1);
  });
});
