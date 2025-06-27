import React from "react";
import { Accordion } from "react-bootstrap";

function FAQs() {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Frequently Asked Questions</h2>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I submit a complaint?</Accordion.Header>
          <Accordion.Body>
            Click on the "Submit Complaint" link in the navigation bar and fill out the form with the required information.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>How can I track my complaint?</Accordion.Header>
          <Accordion.Body>
            Use the "Track Complaint" link and enter your Complaint ID or registered email to check the status.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Will I receive updates about my complaint?</Accordion.Header>
          <Accordion.Body>
            Yes, updates will be shown in the Track Complaint page, and notifications may be sent to your email.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Is my personal information secure?</Accordion.Header>
          <Accordion.Body>
            Absolutely. Your data is stored securely and is never shared with third parties. See our Privacy Policy for more details.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Who can I contact for further help?</Accordion.Header>
          <Accordion.Body>
            Visit the Contact Us page for support email or phone details.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQs;