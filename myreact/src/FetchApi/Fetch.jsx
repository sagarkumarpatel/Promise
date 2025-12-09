import React, { useState } from "react";
import axios from "axios";

function FetchApi() {
  const [data, setData] = useState([]);

  const fun1 = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    setData(response.data);
  };

  return (
    <div>
      <h1>API Fetch</h1>

      {data.length === 0 ? (
        <>
          <h1>No data is existing</h1>
          <button onClick={fun1}>Fetch Data</button>
        </>
      ) : (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Email: {item.email}</p>
              <p>City: {item.address.city}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchApi;
