import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("initial conditions", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox");
  
     
  //checks the checkbox
  fireEvent.click(checkbox)

});
