import React from "react";
import "./PreNumber.css";

const PreNumber = ({ numbers }) => {
  // 11個ごとに分割
  const chunkedNumbers = [];
  for (let i = 0; i < numbers.length; i += 15) {
    chunkedNumbers.push(numbers.slice(i, i + 15));
  }

  return (
    <div className="number-container">
      <h3>今まで出た数字</h3>
      <div className="columns-wrapper">
        {chunkedNumbers.map((chunk, colIndex) => (
          <div
            className={`number-column column-${colIndex % 7}`} // 列ごとに異なるクラスを適用
            key={colIndex}
          >
            {chunk.map((number, rowIndex) => (
              <div className="number-item animate-pre-number" key={rowIndex}>
                {number}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreNumber;
