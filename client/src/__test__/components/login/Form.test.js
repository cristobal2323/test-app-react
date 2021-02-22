import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../../components/login/form";
import ProviderMock from "../../../__mocks__/ProviderMoks";

describe("<Form />", () => {
  it("Render Form login", () => {
    render(
      <ProviderMock>
        <App />
      </ProviderMock>
    );
    console.log(screen);
    expect(screen.getByTestId("form"));
  });
});
