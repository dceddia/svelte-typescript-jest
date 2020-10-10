import { render } from "@testing-library/svelte";
import App from "../App.svelte";

test("should render", () => {
  const results = render(App, { props: { name: "world" } });

  expect(() => results.getByText("Hello world!")).not.toThrow();
});
