import { useState } from "react";
import "./selector.css";
interface ISelectorProp {
  selectors: string[];
  setSelectedTrending: (str: string) => void;
}
const Selector: React.FC<ISelectorProp> = ({
  selectors,
  setSelectedTrending,
}) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="selector">
      {selectors.map((selector, idx) => {
        return (
          <div
            key={selector}
            className={idx == selected ? "selected" : ""}
            onClick={() => {
              setSelectedTrending(selector);
              setSelected(idx);
            }}
          >
            {selector}
          </div>
        );
      })}
    </div>
  );
};

export default Selector;
