import { useEffect, useState } from "react";
import Card from "../components/Card";

const Api2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=12")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="cardContainer">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Api2;
