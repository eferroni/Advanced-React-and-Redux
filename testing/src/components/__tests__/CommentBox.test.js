import React from "react";
import CommentBox from "components/CommentBox";
import { render, screen } from "../../utils/testing-utils";
import userEvent from "@testing-library/user-event";

describe("Comment Box", () => {
  it("shows a text area and a button", () => {
    render(<CommentBox />);

    const textAreaEl = screen.getAllByRole("textbox");
    expect(textAreaEl.length).toEqual(1);

    const buttonEl = screen.getAllByRole("button", { name: /submit comment/i });
    expect(buttonEl.length).toEqual(1);
  });

  it("users can enter a input in a textarea", () => {
    render(<CommentBox />);

    const textAreaEl = screen.getByRole("textbox");
    userEvent.type(textAreaEl, "text test");

    expect(textAreaEl).toHaveValue("text test");
  });

  it("should emptied the text area after form is submitted", () => {
    render(<CommentBox />);

    const textAreaEl = screen.getByRole("textbox");
    userEvent.type(textAreaEl, "text test");

    const buttonEl = screen.getByRole("button", { name: /submit comment/i });
    userEvent.click(buttonEl);

    expect(textAreaEl).toHaveValue("");
  });
});
