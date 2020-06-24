import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

// configuring Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

// if any errors are thrown in the anonymous function passed to the 'test' function, the test will fail
test("renders without error", () => {
  // shallow function accepts JSX and returns a shallow wrapper
  // shallow rendering only renders the current component and it's content and puts placeholders for its child components
  const wrapper = shallow(<App />);

  // 'expect' throws an error when the assertion evaluates to false, so the test fails
  expect(wrapper).toBeTruthy();
});
