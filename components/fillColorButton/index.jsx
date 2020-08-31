/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

export default function index({ fillColorClickHandler, color, colorClass }) {
  return (
    <div
      onKeyPress={fillColorClickHandler}
      role="button"
      tabIndex="0"
      onClick={fillColorClickHandler}
      data-color={color}
      className={`h-12 w-12 ${colorClass} rounded`}
    />
  );
}
