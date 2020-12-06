import React from "react";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
import { BrowserRouter } from "react-router-dom";

import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "ca",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <>
          <Header />
          <MarketingApp />
        </>
      </BrowserRouter>
    </StylesProvider>
  );
};
