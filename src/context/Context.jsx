import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
const MyAppContext = createContext();

const MyAppProvider = ({ children }) => {
  const [selectedInfo, setSelectedInfo] = useState({
    goal: '',
    imperialHeight: null,
    imperialCurrentHeight: null,
    metricHeight: null,
    metricCurrentHeight: null,
    behaviours: [],
    physicalExercise: ''
  });

  return (
    <MyAppContext.Provider value={{ selectedInfo, setSelectedInfo }}>
      {children}
    </MyAppContext.Provider>
  );
};
MyAppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export { MyAppProvider, MyAppContext };
