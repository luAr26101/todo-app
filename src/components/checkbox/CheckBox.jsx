import React, { useState } from "react";

import "./Checkbox.css";

const Checkbox = (props) => {
  const { checked, statusChange } = props;
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (event) => {
    const status = event.target.checked;
    setIsChecked(status);
    statusChange(status);
  };

  return (
    <div className='round'>
      <input
        checked={isChecked}
        type='checkbox'
        onChange={handleCheckboxChange}
      />
      <label
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
      ></label>
    </div>
  );
};

export default Checkbox;
