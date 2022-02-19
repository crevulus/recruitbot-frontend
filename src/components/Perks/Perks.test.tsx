import React from "react";
import { render, screen } from "@testing-library/react";
import Perks from "./Perks";
import { PerksType } from "../../data/types";

describe("Perks", () => {
  const mockData: PerksType[] = [
    {
      id: 1,
      text: "This is a test perk",
    },
  ];
  it("should display one perk", () => {
    render(<Perks perks={mockData} />);
    const perk = screen.getByText(/This is a test perk/i);
    expect(perk).toBeInTheDocument();
  });
  it("should display a fallback emoji if none exist in the perk object", () => {
    render(<Perks perks={mockData} />);
    const perk = screen.getByText(/✅/i);
    expect(perk).toBeInTheDocument();
  });

  const mockDataArray: PerksType[] = [
    {
      id: 1,
      text: "This is a test perk",
    },
    {
      id: 2,
      text: "This is a second test perk",
      emoji: "🥰",
    },
    {
      id: 3,
      text: "This is a third test perk",
      emoji: "👍",
    },
  ];
  it("should display three perks", () => {
    render(<Perks perks={mockDataArray} />);
    const perk1 = screen.getByText(/This is a test perk/i);
    const perk2 = screen.getByText(/This is a second test perk/i);
    const perk3 = screen.getByText(/This is a third test perk/i);
    expect(perk1).toBeInTheDocument();
    expect(perk2).toBeInTheDocument();
    expect(perk3).toBeInTheDocument();
    expect(perk3).toHaveTextContent("👍");
  });
});
