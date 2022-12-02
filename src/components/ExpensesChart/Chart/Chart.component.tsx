import "./Chart.styles.css";
import { Chart as TypeDef } from "../../components";
import { ChartBar } from "../../../components";

export const Chart: TypeDef = (props) => {
  const { dataPoints } = props;

  const maxValue = Math.max(...dataPoints.map((point) => point.value));

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          label={dataPoint.label}
          key={dataPoint.id || dataPoint.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};
