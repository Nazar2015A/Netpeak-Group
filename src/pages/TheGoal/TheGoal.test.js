import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { MyAppProvider } from "../../context/Context";
import TheGoal from "./TheGoal";
import TheGoalCart from "./TheGoalCart";
import MeasureYourself from "../MeasureYourself/MeasureYourself";
import Navbar from "../../components/Navbar/Navbar";

describe("TEST TheGoal page", () => {
  test("renders TheGoal component with TheGoalCart as a child", () => {
    render(
      <MemoryRouter initialEntries={["/female/the-goal"]}>
        <MyAppProvider>
          <Navbar />
          <Routes>
            <Route path="/female/the-goal" element={<TheGoal />} />
          </Routes>
        </MyAppProvider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("navbar")).toBeInTheDocument();

    expect(screen.getByText("The Goal")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Focus on the health benefits you need. Balanced nutrition will let you achieve them"
      )
    ).toBeInTheDocument();

    expect(screen.getByText("What are your goals?")).toBeInTheDocument();
    expect(screen.getByText("Lose Weight")).toBeInTheDocument();
    expect(screen.getByText("Gain Muscle")).toBeInTheDocument();
    expect(screen.getAllByText("Develop healthy habits").length).toBe(2);

    expect(screen.getByTestId("the-goal-cart")).toBeInTheDocument();
  });

  test("TEST redirect into measure-yourself page", async () => {
    render(
      <MemoryRouter initialEntries={["/female/the-goal"]}>
        <MyAppProvider>
          <Routes>
            <Route path="/female/the-goal" element={<TheGoalCart />} />
            <Route
              path="/female/measure-yourself"
              element={<MeasureYourself />}
            />
          </Routes>
        </MyAppProvider>
      </MemoryRouter>
    );
    const users = screen.getAllByTestId("the-goal-cart-item");

    expect(users.length).toBe(4);

    users.forEach((item) => {
      fireEvent.click(item);
      expect(screen.getByTestId("measure-yourself-page")).toBeInTheDocument();
      console.log(item)
    });
  });
});
