import { render } from "@testing-library/react";
import Root from "Root";

const renderWithContext = (ui, options) => {
  return render(ui, {
    wrapper: (props) => <Root {...props} {...options?.wrapperProps} />,
    ...options,
  });
};

// re-export everything
export * from "@testing-library/react";

export { renderWithContext as render };
