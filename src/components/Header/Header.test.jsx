import { shallow, mount, } from "enzyme";
import Header from "./Header";

describe("Component Header", () => {
  it("O Header deve ser renderizado corretamente", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("header")).toHaveLength(1);
  });
  it("O Header deve ter dois itens na navegação", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("li")).toHaveLength(2);
  });
  it("O Texto do primeiro item deve ser Home", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("li:first-child").text()).toEqual("Home");
  });

  it("O Texto do segundo item deve ser Contato", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("li:last-child").text()).toEqual("Contato");
  });
});
