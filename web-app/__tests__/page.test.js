import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import * as constants from "../src/app/constants";

describe("Table", () => {
    it("renders ball 1", () => {
        // arrange
        render(<Home />);
        // act
        const element = screen.getByAltText(constants.BALL1_ID);
        // assert
        expect(element).toBeInTheDocument();
    });
});