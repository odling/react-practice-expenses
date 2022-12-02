import "./ChartBar.styles.css";
import { ChartBar as TypeDef } from "../../components";

export const ChartBar: TypeDef = (props) => {
  const { label, maxValue, value } = props;

  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }} />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};
