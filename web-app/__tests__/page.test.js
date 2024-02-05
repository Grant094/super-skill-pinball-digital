import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../src/app/page";
import * as constants from "../src/app/constants";

describe("Home", () => {
    describe('on page load', () => {
        it.each(constants.ALL_FEATURE_IDS)('should render %s as visible on page load',
            (featureId) => {
                // arrange
                render(<Home />);
                // act
                const element = screen.getByTitle(featureId);
                // assert
                expect(element).toBeInTheDocument()
                expect(element).toHaveStyle("visibility: visible");
            }
        );
        it.each(constants.ALL_BOX_IDS)('should render %s as visible and unfilled on page load',
            (boxId) => {
                // arrange
                render(<Home />);
                const element = screen.getByTitle(boxId);
                // assert
                expect(element).toBeInTheDocument();
                expect(element).toHaveStyle(`
                    visibility: visible;
                    backgroundColor: ${constants.UNFILLED_BACKGROUND_COLOR};
                `);
            }
        );
        it('should render ball1 as visible at the Start feature', () => {
            // arrange
            render(<Home />);
            // act
            const ball1Element = screen.getByTitle(constants.BALL1_ID);
            const startFeatureElement = screen.getByTitle(constants.START_FEATURE_ID);
            // assert
            expect(ball1Element).toBeInTheDocument();
            expect(ball1Element).toHaveStyle(`
                visibility: visible;
                top: ${startFeatureElement.style.top};
                left: ${startFeatureElement.style.left};
            `);
        });
        it('should render ball2 as hidden at the Drain feature', () => {
            // arrange
            render(<Home />);
            // act
            const ball2Element = screen.getByTitle(constants.BALL2_ID);
            const drainFeatureElement = screen.getByTitle(constants.DRAIN_FEATURE_ID);
            // assert
            expect(ball2Element).toBeInTheDocument();
            expect(ball2Element).toHaveStyle(`
                visibility: hidden;
                top: ${drainFeatureElement.style.top};
                left: ${drainFeatureElement.style.left};
            `);
        });
    });
});