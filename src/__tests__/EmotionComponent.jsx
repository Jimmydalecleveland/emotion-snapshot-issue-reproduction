import React from "react";
import { render } from "@testing-library/react";
import EmotionComponent from "../EmotionComponent";

test("demo for snapshot update bug", () => {
  const { container } = render(<EmotionComponent />);
  expect(container).toMatchSnapshot();
});
