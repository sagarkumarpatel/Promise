import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchApi2() {
  const [data, setData] = useState([]);

  // useEffect runs automatically when page loads
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(response.data);
    };

    fetchData();
  }, []); // empty array => run only once

  return (
    <div>
      <h1>API Fetch</h1>

      {data.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        data.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Email: {item.email}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default FetchApi2;
