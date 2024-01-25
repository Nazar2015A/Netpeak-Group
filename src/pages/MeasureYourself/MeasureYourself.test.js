import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { MyAppProvider } from "../../context/Context";
import MeasureYourself from "../MeasureYourself/MeasureYourself";
import Navbar from "../../components/Navbar/Navbar";
import DestructiveBehaviours from "../DestructiveBehaviours/DestructiveBehaviours";

describe("TEST MeasureYourself page", () => {
  test("renders MeasureYourself component and contains text", () => {
    render(
      <MemoryRouter initialEntries={["/female/measure-yourself"]}>
        <MyAppProvider>
          <Navbar />
          <Routes>
            <Route
              path="/female/measure-yourself"
              element={<MeasureYourself />}
            />
          </Routes>
        </MyAppProvider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("navbar")).toBeInTheDocument();

    expect(screen.getByText("Measure Yourself")).toBeInTheDocument();
    expect(
      screen.getByText("What are your height and body weight?")
    ).toBeInTheDocument();

    expect(screen.getByTestId("continue-btn")).toBeInTheDocument();
  });

  test("renders buttons for measurement and inputs with type number", () => {
    render(
      <MemoryRouter initialEntries={["/female/measure-yourself"]}>
        <MyAppProvider>
          <Navbar />
          <Routes>
            <Route
              path="/female/measure-yourself"
              element={<MeasureYourself />}
            />
          </Routes>
        </MyAppProvider>
      </MemoryRouter>
    );

    const inperialBtn = screen.getByTestId("imperial-btn");
    const metricBtn = screen.getByTestId("metric-btn");

    const heightInput = screen.getByTestId("height-input");
    const currentHeightInput = screen.getByTestId("currentHeight-input");

    expect(inperialBtn).toBeInTheDocument();
    expect(metricBtn).toBeInTheDocument();

    expect(heightInput).toBeInTheDocument();
    expect(currentHeightInput).toBeInTheDocument();

    expect(heightInput).toHaveAttribute("type", "number");
    expect(currentHeightInput).toHaveAttribute("type", "number");
  });

  test("redirect into destructive-behaviour page", () => {
    render(
      <MemoryRouter initialEntries={["/female/measure-yourself"]}>
        <MyAppProvider>
          <Routes>
            <Route
              path="/female/measure-yourself"
              element={<MeasureYourself />}
            />
            <Route
              path="/female/destructive-behaviour"
              element={<DestructiveBehaviours />}
            />
          </Routes>
        </MyAppProvider>
      </MemoryRouter>
    );

    const continueBtn = screen.getByTestId("continue-btn");
    expect(continueBtn).toBeInTheDocument();

    fireEvent.click(continueBtn)
    expect(screen.getByTestId("destructive-behaviour-page")).toBeInTheDocument();
  });
});
