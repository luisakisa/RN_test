import React, { useState } from "react";
import { View} from "react-native";
import RadioButton from "./radio-button";

const data = [
  {
    id: 1,
    time: "Montly",
    price: "$99 / month",
    days: 3,
  },
  {
    id: 2,
    time: "3 month",
    price: "$199",
    days: 7,
  },
  {
    id: 3,
    time: "1 year",
    price: "$399",
    days: 7,
  },
];

export default function RadioButtonsGroup() {
  const [selected, setSelected] = useState(1);

  const handleSelect = (id: number) => {
    setSelected(id);
  };

  return (
    <View>
      {data.map((item) => (
        <RadioButton
          key={item.id}
          selected={selected === item.id}
          onSelect={() => handleSelect(item.id)}
          data={item}
        />
      ))}
    </View>
  );
}
