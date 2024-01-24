import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import TheGoal from "../pages/TheGoal/TheGoal";
import PhysicalExercise from "../pages/PhysicalExercise/PhysicalExercise";
import DestructiveBehaviours from "../pages/DestructiveBehaviours/DestructiveBehaviours";
import MeasureYourself from "../pages/MeasureYourself/MeasureYourself";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Navigate to="/female/the-goal" />} />
      <Route path="/female/the-goal" element={<TheGoal />} />
      <Route path="/female/measure-yourself" element={<MeasureYourself />} />
      <Route
        path="/female/destructive-behaviour" 
        element={<DestructiveBehaviours />}
      />
      <Route path="/female/physical-exercise" element={<PhysicalExercise />} />
    </Routes>
  );
};

export default AnimatedRoutes;
