import { useState } from "react";
import Card from "../components/Card";

const Api1 = () => {
  const [limit, setLimit] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${limit}`
  );

  const result = await res.json();

  // cardContainer map use kare chhe etle array banaviye
  setData(result ? [result] : []);

  };

  return (
    <div>
      <div className="inputBox">
        <input
          type="number"
          placeholder="Enter number..."
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />

        <button onClick={fetchData}>Load Data</button>
      </div>

      <div className="cardContainer">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Api1;
