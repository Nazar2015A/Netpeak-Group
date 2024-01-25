import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { MyAppProvider } from "../../context/Context";
import PhysicalExercise from "./PhysicalExercise";
import Navbar from "../../components/Navbar/Navbar";
import activeGirl from "../../assets/img/activeGirl.png";
import { physicalExerciseItem } from "./PhysicalExercise-data";

describe("TEST PhysicalExercise page", () => {
  test("renders PhysicalExercise component with PhysicalExerciseCart as a child", () => {
    render(
      <MemoryRouter initialEntries={["/female/physical-exercise"]}>
        <MyAppProvider>
          <Navbar />
          <Routes>
            <Route
              path="/female/physical-exercise"
              element={<PhysicalExercise />}
            />
          </Routes>
        </MyAppProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();

    expect(screen.getByText("Physical exercise")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Physical exercise means a lot for a woman who wants to lose kilos and works at the office"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("How active are you during the day?")
    ).toBeInTheDocument();

    expect(screen.getByTestId("physical-exercise-cart")).toBeInTheDocument();
  });

  test("renders image and carts", () => {
    render(
      <MemoryRouter initialEntries={["/female/physical-exercise"]}>
        <MyAppProvider>
          <Navbar />
          <Routes>
            <Route
              path="/female/physical-exercise"
              element={<PhysicalExercise />}
            />
          </Routes>
        </MyAppProvider>
      </MemoryRouter>
    );

    const activeGirlImage = screen.getByAltText("Active Girl");
    expect(activeGirlImage).toBeInTheDocument();

    physicalExerciseItem.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
