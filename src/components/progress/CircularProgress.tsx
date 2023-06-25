import "./circularProgress.css";
interface ICircularProgress {
  vote_average: number;
}
const CircularProgress: React.FC<ICircularProgress> = ({ vote_average }) => {
  const strokeDashArray = 2 * Math.PI * 70; // 70 is the radius of circle
  const strokeDashOffset = strokeDashArray * ((100 - vote_average * 10) / 100);

  const getColor = (percent: number) => {
    if (percent > 70) {
      return "#60e6a8";
    } else if (percent > 40) {
      return "#bdc12f";
    } else {
      return "#981e4b";
    }
  };
  return (
    <div>
      <div className="circular-progress">
        <svg
          width="80"
          height="80"
          viewBox="0 0 160 160"
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            r="70"
            cx="80"
            cy="80"
            fill="transparent"
            stroke="#e0e0e0"
            stroke-width="8px"
          ></circle>
          <circle
            r="70"
            cx="80"
            cy="80"
            fill="transparent"
            stroke={getColor(vote_average * 10)}
            stroke-linecap="round"
            stroke-width="8px"
            stroke-dasharray={`${strokeDashArray}px`}
            stroke-dashoffset={`${strokeDashOffset}px`}
          ></circle>
          <text
            x="51px"
            y="114px"
            fill="#fff"
            font-size="52px"
            font-weight="bold"
            style={{ transform: "rotate(90deg) translate(-5px, -175px)" }}
          >
            {Math.floor(vote_average * 10)}
          </text>
          <text
            x="51px"
            y="114px"
            fill="#fff"
            font-size="30px"
            font-weight="bold"
            style={{ transform: "rotate(90deg) translate(50px, -195px)" }}
          >
            %
          </text>
        </svg>
      </div>
    </div>
  );
};

export default CircularProgress;
