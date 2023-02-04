import { useEffect, useState } from "react";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";

function matchColor(y) {
  /*
    Básico: [1, 10]
    Iniciante: [11, 25]
    Intermediário: [26, 60]
    Avançado: [61, 90]
    Expert: [91, 100]
  */
  const colors = ["#08519c", "#2171b5", "#4292c6", "#6baed6", "#c6dbef"];
  const bounders = [
    [91, 100],
    [61, 90],
    [26, 60],
    [11, 25],
    [1, 10],
  ];
  const range = (min, max, length = max - min + 1) =>
    Array.from({ length }, (_, i) => i + min);
  for (let i in bounders) {
    if (range(...bounders[i]).includes(y)) return colors[i];
  }
  return colors.at(-1);
}

export function AnimatedPieChart(props) {
  const [state, setState] = useState({
    percent: 0,
    data: [
      { x: 1, y: 0 },
      { x: 2, y: 100 },
    ],
  });

  useEffect(() => {
    const filling = setTimeout(() => {
      setState({
        percent: props.percent,
        data: getData(props.percent),
      });
    }, 1200);
    return () => clearTimeout(filling);
  }, [props.percent, setState]);

  function getData(percent) {
    return [
      { x: 1, y: percent },
      { x: 2, y: 100 - percent },
    ];
  }

  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
      }}
    >
      <svg viewBox="50 50 100 100">
        <VictoryPie
          standalone={false}
          animate={{ duration: 1000 }}
          width={200}
          height={200}
          data={state.data}
          innerRadius={42}
          style={{
            data: {
              fill: ({ datum: { x, y } }) =>
                x === 1 ? matchColor(y) : "var(--bg-text)",
            },
          }}
        />
        <VictoryAnimation duration={1000} data={state}>
          {() => {
            return (
              <VictoryLabel
                textAnchor="middle"
                verticalAnchor="middle"
                x={100}
                y={100}
                text={
                  props.name
                    .split("/")
                    .map(
                      (w, i, self) =>
                        `${w}${!i && i + 1 != self.length ? "/" : ""}\n`
                    )
                    .join("") + `${props.percent}%`
                }
                style={{ fontSize: 16, fill: "var(--text-color)" }}
              />
            );
          }}
        </VictoryAnimation>
      </svg>
    </div>
  );
}
