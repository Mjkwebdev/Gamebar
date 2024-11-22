import React from "react";
import Categoriies from "../category";
interface Props {
  onSelectCategory: (category: string) => void;
}

const Expensefilterr = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">all categories</option>
        {Categoriies.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

    </div>
  );
};

export default Expensefilterr;
