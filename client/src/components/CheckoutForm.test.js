import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
	const { getByLabelText } = render(<CheckoutForm />);
	const firstNameInput = getByLabelText(/first name/i);
	const lastNameInput = getByLabelText(/last Name/i);
	const addressInput = getByLabelText(/address/i);
	const cityInput = getByLabelText(/city/i);
	const stateInput = getByLabelText(/state/i);
	const zipInput = getByLabelText(/zip/i);
});

test("form shows success message on submit with form details", () => {
  const { getByTestId, getByLabelText, getByText } = render(<CheckoutForm/>)
  const firstNameInput = getByLabelText(/first name/i);
  fireEvent.change(firstNameInput, {target: {value: 'Marshall'}})
  const button = getByTestId('button')
  fireEvent.click(button)
  const success = getByTestId('successMessage')
  const marshall = getByText(/marshall/i)
  expect(success).toHaveTextContent('Marshall')

});
