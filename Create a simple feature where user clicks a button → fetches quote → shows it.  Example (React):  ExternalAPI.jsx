import { useState } from "react";
import axios from "axios";

function ExternalAPI() {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/external/quote`);
    setQuote(res.data.data);
  };

  return (
    <div>
      <h2>Third-Party API Demo</h2>
      <button onClick={fetchQuote}>Fetch Quote</button>

      {quote && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>"{quote.content}"</strong></p>
          <p>- {quote.author}</p>
        </div>
      )}
    </div>
  );
}

export default ExternalAPI;
