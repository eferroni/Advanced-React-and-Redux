import React from "react";
import { render, screen } from "utils/testing-utils";
import App from "../components/App";
import userEvent from "@testing-library/user-event";

describe("Integrations", () => {
  it("can fetch a list of comments and display them", async () => {
    render(<App />);

    const buttonEl = screen.getByRole("button", { name: /fetch comments/i });
    userEvent.click(buttonEl);

    const listEl = await screen.findAllByRole("listitem");
    expect(listEl.length).toEqual(2);
  });
});
