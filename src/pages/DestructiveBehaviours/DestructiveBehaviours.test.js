import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { MyAppProvider } from "../../context/Context";

import Navbar from "../../components/Navbar/Navbar";
import DestructiveBehaviours from "./DestructiveBehaviours";
import { destructiveBehavioursCartItem } from "./DestructiveBehaviours-data";
import PhysicalExercise from "../PhysicalExercise/PhysicalExercise";

describe("TEST DestructiveBehaviours page", () => {
  test("renders DestructiveBehaviours component with DestructiveBehavioursCart as a child", () => {
    render(
      <MemoryRouter initialEntries={["/female/destructive-behaviour"]}>
        <MyAppProvider>
          <Navbar />
          <Routes>
            <Route
              path="/female/destructive-behaviour"
              element={<DestructiveBehaviours />}
            />
          </Routes>
        </MyAppProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();

    expect(screen.getByText("Destructive behaviors")).toBeInTheDocument();
    expect(
      screen.getByText("We all have them! Which are yours?")
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("destructive-behaviour-cart")
    ).toBeInTheDocument();
    expect(
      screen.getAllByTestId("destructive-behaviour-cart-item").length
    ).toBe(6);

    expect(screen.getByTestId("continue-btn")).toBeInTheDocument;

    destructiveBehavioursCartItem.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  test("redirect into physical-exercise page", () => {
    render(
      <MemoryRouter initialEntries={["/female/destructive-behaviour"]}>
        <MyAppProvider>
          <Navbar />
          <Routes>
            <Route
              path="/female/destructive-behaviour"
              element={<DestructiveBehaviours />}
            />
            <Route
              path="/female/physical-exercise"
              element={<PhysicalExercise />}
            />
          </Routes>
        </MyAppProvider>
      </MemoryRouter>
    );

    const continueBtn = screen.getByTestId("continue-btn");
    expect(continueBtn).toBeInTheDocument();

    fireEvent.click(continueBtn)
    expect(screen.getByTestId("physical-exercise-page")).toBeInTheDocument();
  });
});
