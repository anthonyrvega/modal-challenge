import { render, screen } from "@testing-library/react";
import ActionModal from "./ActionModal";


// Describe the tests for the ActionModal component
describe("ActionModal component", () => {
    // Create a mock order object for testing
    const mockOrder = {
      id: 1,
      listing: {
        id: 1,
        images: [
          {
            image: {
              id: 1,
              url: "https://example.com/image1.png",
            },
            type: "main",
          },
        ],
        model: {
          brand: {
            displayName: "Rolex",
          },
          displayName: "Submariner",
          referenceNumber: "116610LN",
        },
        condition: "new",
        manufactureYear: 2022,
      },
      salePriceCents: 10000,
      commissionRateBips: 250,
      sellerFeeCents: 250,
    };
  
    // Test case: the modal should render with sale details
    it("should render a modal with sale details", () => {
      // Render the component with the mock order and necessary props
      render(<ActionModal order={mockOrder} showModal={true} onClose={() => {}} />);
  
      // Assert that various sale details are rendered in the modal
      expect(screen.getByText("Rolex Submariner 116610LN")).toBeInTheDocument();
      expect(screen.getByText("Selling Price: $100")).toBeInTheDocument();
      expect(screen.getByText("Level 1 Commission (2.5%): $250")).toBeInTheDocument();
      expect(screen.getByText("Seller Fee: $2.5")).toBeInTheDocument();
      expect(screen.getByText("Insured Shipping: Free")).toBeInTheDocument();
      expect(screen.getByText("Bezel authentication: Free")).toBeInTheDocument();
    });
  });
  
  // Describe an example test
  describe('Example Test', () => {
    // Test case: the test should pass if 1 + 1 equals 2
    it('should pass', () => {
      expect(1 + 1).toEqual(2);
    });
  });
