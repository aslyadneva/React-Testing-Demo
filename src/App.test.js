import React from "react";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

// configuring Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

// if any errors are thrown in the anonymous function passed to the 'test' function, the test will fail
test("renders without error", () => {});
