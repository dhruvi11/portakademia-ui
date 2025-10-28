import React from "react";

const Clearance = () => (
  <section className="section">
    <h2>📝 Clearance Slip Request</h2>
    <p>You can request a clearance slip for administration purposes.</p>
    <button onClick={() => alert("Clearance Slip PDF generated!")}>
      Request Clearance Slip
    </button>
  </section>
);

export default Clearance;
