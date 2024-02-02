import React from "react";

function DropDown({ placeholder, label, setState, state, list, updateItem, description, ...props }) {
  return (
    <div>
      <div className="">
        <label htmlFor="" className="text-base">
          {label || `label`}{" "}
        </label>
        <div className="flex mt-1">
          <select
            onChange={(e) => {
              setState(e.target.value);
              if (typeof updateItem === 'function') {
                updateItem(state);
              }
            }}
            value={state}
            placeholder={placeholder || `Enter value`}
            className="input min-w-full rounded border border-gray-400 relative h-[45px] mt-1 px-2"
            {...props}
          >
            <option value="" disabled defaultValue="">
              Choose a value
            </option>
            {list.map((item) => (
              <option
                value={item.value}
                key={item.value || Date.now}
              >
                {item.description ? item.description : item[description]}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
