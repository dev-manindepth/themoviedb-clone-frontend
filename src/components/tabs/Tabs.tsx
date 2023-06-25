import { Dispatch, SetStateAction } from "react";
import "./tabs.css";
interface ITabs {
  tabList: string[];
  setActiveTab: Dispatch<SetStateAction<"review" | "discussion">>;
}
const Tabs: React.FC<ITabs> = () => {
  return <div>Tabs</div>;
};

export default Tabs;
