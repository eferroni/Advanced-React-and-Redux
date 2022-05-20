import CommentList from "components/CommentList";
import React from "react";
import { render, screen } from "utils/testing-utils";

describe("Comment List", () => {
  it("creates one li per comment", () => {
    render(<CommentList />, {
      wrapperProps: {
        preloadedState: { comments: ["Comment 1", "Comment 2"] },
      },
    });

    const listEl = screen.getAllByRole("listitem");
    expect(listEl.length).toEqual(2);
  });

  it("text from each comment is visible", () => {
    render(<CommentList />, {
      wrapperProps: {
        preloadedState: { comments: ["Comment 1", "Comment 2"] },
      },
    });

    const listEl1 = screen.getByText("Comment 1");
    expect(listEl1).toBeInTheDocument();

    const listEl2 = screen.getByText("Comment 2");
    expect(listEl2).toBeInTheDocument();
  });
});
