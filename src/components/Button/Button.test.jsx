import Button from "./Button";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const wrapperButton = (props) => {
  return render(<Button {...props} />);
};

describe("Componente Botão", () => {
  it("Tem que renderizar corretamente", async () => {
    const props = {
      onClick: jest.fn(),
      disabled: false,
      text: "Ok",
    };
    wrapperButton(props);
    const button = await screen.findAllByRole("button");
    expect(button).toHaveLength(1);
  });
});
