import React from "react";

const Transcript = () => (
  <section className="section">
    <h2>📑 Transcript</h2>
    <p>Download transcript for academic year 2024-2025:</p>
    <button onClick={() => alert("Transcript PDF generated!")}>
      Download PDF
    </button>
  </section>
);

export default Transcript;
