import React from "react";
import PropTypes from "prop-types";

export default function BlurBlob({ position, size }) {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute z-10"
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
}

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};
