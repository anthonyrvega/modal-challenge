import { render } from "@testing-library/react";
import ActionModalContainer from "./ActionModalContainer";

// Test case: the ActionModalContainer should render without errors
it('renders without errors', () => {
  // Render the ActionModalContainer component
  const { getByText } = render(<ActionModalContainer />);

  // Assert that the "Loading..." text is rendered in the component
  expect(getByText('Loading...')).toBeInTheDocument();
});

// Describe an example test
describe('Example Test', () => {
  // Test case: the test should pass if 1 + 1 equals 2
  it('should pass', () => {
    expect(1 + 1).toEqual(2);
  });
});
