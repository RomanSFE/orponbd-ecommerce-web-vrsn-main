import React from 'react';
import { useRanger } from "react-ranger";

export default function RangeSlider() {
    const [values, setValues] = React.useState([300, 3000]);

  const { getTrackProps, handles } = useRanger({
    min: 100,
    max: 5000,
    stepSize: 20,
    values,
    onChange: setValues
  });

  return (
    <div className="range-sliderrr-web-vversn-main">
      <div className="RangeSlider">
        <div
          {...getTrackProps({
            style: {
              height: "4px",
              background: "#F4F4F5",
              borderRadius: "2px"
            }
          })}
        >
          {handles.map(({ getHandleProps }) => (
            <button
              {...getHandleProps({
                style: {
                  width: "14px",
                  height: "14px",
                  outline: "none",
                  borderRadius: "100%",
                  background: "#FF6347",
                  border: "none"
                }
              })}
            />
          ))}
        </div>
        <br />
        <br />
        <br />
        <pre
          style={{
            display: "inline-block",
            textAlign: "left"
          }}
        >
          {/* <code>
            {JSON.stringify({
              values
            })}
          </code> */}
        </pre>
      </div>
    </div>
    )
}
