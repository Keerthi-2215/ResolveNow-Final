import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function FooterC() {
  return (
    <MDBFooter
      bgColor="dark"
      className="text-center text-lg-start text-muted"
      style={{ marginTop: '80px' }}
    >
      <div
        className="text-center p-4 text-light"
        style={{ backgroundColor: '#000' }}
      >
        <p style={{ margin: '0', fontSize: '14px' }}>
          &copy; {new Date().getFullYear()} ComplaintCare | All rights reserved
        </p>
        <p style={{ margin: '5px 0', fontSize: '13px' }}>
          <a href="/privacy" style={{ margin: '0 10px', color: '#0d6efd' }}>
            Privacy Policy
          </a>
          |
          <a href="/terms" style={{ margin: '0 10px', color: '#0d6efd' }}>
            Terms of Service
          </a>
        </p>
      </div>
    </MDBFooter>
  );
}