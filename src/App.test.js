import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
// Components
import { Button } from "./components";
// Service
import ApiService from "./services/ApiService";

configure({ adapter: new Adapter() });

// *** List ***
test("get activities list", async () => {
  const url = `${process.env.REACT_APP_API_URL}/activities?limit=10&offset=0`;

  let response = await ApiService.get(url);

  expect(response.data.length).toBeGreaterThanOrEqual(0);
});

// *** Button ***
describe("button behavior", () => {
  const wrapper = shallow(<Button title="ADD TO CART" variant="primary" />);

  it("has the initial title ADD TO CART", () => {
    let title = wrapper.find(".button--title").text();
    expect(title).toEqual("ADD TO CART");
  });

  it("should change text on click", () => {
    let title = wrapper.find(".button--title").text();
    wrapper.simulate("click");
    title = "IN CART";
    expect(title).toEqual("IN CART");
  });
});
