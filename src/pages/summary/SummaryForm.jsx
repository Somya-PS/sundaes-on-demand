import { useState } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const popover = (
    <Popover id="termsandconditions-popover">
      <Popover.Header as="h3"></Popover.Header>

      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );
  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        {/* <Button variant="success">Click me to see</Button> */}
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={isChecked}
          label={checkboxLabel}
          onChange={() => setIsChecked(!isChecked)}
        />
        <Button variant="primary" type="submit" disabled={!isChecked}>
          Confirm your order
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SummaryForm;
