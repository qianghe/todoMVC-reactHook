import React, { useState } from "react";

function Header(props) {
  const [value, setValue] = useState("hello world");
  const handleChange = event => {
    const { value } = event.target;
    if (value.trim().length >= 0) {
      setValue(value);
    }
  };
  const handleKeyUp = event => {
    if (event.keyCode === 13 && value.trim().length > 0) {
      props.add(value.trim());
      setValue('')
    }
  };
  return (
    <div className="todo-header">
      <span>
        <label />
      </span>
      <input value={value} onChange={handleChange} onKeyUp={handleKeyUp} />
    </div>
  );
}
export default Header;
