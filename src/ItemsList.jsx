import { observer } from "mobx-react";
import React from "react";
import { carsStore } from "./stores/carsStore";

// export default function ItemsList({ carsStore }) {
//   console.log("props :>> ", carsStore);
//   return <div></div>;
// }

const ItemsList = observer((props) => {
  const [name, setName] = React.useState("");

  const addItem = () => carsStore.add(name);

  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button onClick={addItem}>Submit</button>
      <ul>
        {carsStore.cars.map((car) => (
          <li>{car}</li>
        ))}
      </ul>
    </div>
  );
});

export default ItemsList;
