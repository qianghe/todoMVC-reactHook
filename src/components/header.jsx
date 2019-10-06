import React, { useState } from "react";

function Header(props) {
  const [value, setValue] = useState('');
  const [toggle, setToggle] = useState(false)
  // 处理change事件
  const handleChange = event => {
    const { value } = event.target;
    if (value.trim().length >= 0) {
      setValue(value);
    }
  };
  // 处理回车事件
  const handleKeyUp = event => {
    if (event.keyCode === 13 && value.trim().length > 0) {
      props.add(value.trim());
      setValue('')
    }
  };
  // 选中所有的items
  const toggleAll = () => {
    const itemStatus = Number(!toggle)
    props.toggle(itemStatus)
    setToggle(!toggle)
  }
  return (
    <div className="todo-header">
      <span className={
        [
          'todo-header-label',
          toggle ? 'todo-header-label--checked': ''
        ].join(' ')
      }>
        <label onClick={toggleAll} />
      </span>
      <input
        placeholder="What need to be done"
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}
export default Header;
