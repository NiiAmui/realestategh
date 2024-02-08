import React from "react";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { selectedRegions } from "@/redux/features/tenant";

import {
  setSelectedRegion,
  setSelectedRegions,
  setSelectedDuration,
  setStartDate,
  setEndDate,
} from "@/redux/features/tenant";

export const regionsOfGhana = [
  {
    name: "Ahafo Region",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Ahafo_Region_of_Ghana.svg/200px-Ahafo_Region_of_Ghana.svg.png",
  },
  {
    name: "Ashanti Region",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ashanti_Region_of_Ghana.svg/200px-Ashanti_Region_of_Ghana.svg.png",
  },
  {
    name: "Brong-Ahafo Region",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Brong-Ahafo_Region_of_Ghana.svg/200px-Brong-Ahafo_Region_of_Ghana.svg.png",
  },
  {
    name: "Central Region",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Central_Region_of_Ghana.svg/200px-Central_Region_of_Ghana.svg.png",
  },
  {
    name: "Eastern Region",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Eastern_Region_of_Ghana.svg/200px-Eastern_Region_of_Ghana.svg.png",
  },
  {
    name: "Greater Accra Region",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Greater_Accra_Region_of_Ghana.svg/200px-Greater_Accra_Region_of_Ghana.svg.png",
  },
  {
    name: "Northern Region",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Northern_Region_of_Ghana.svg/200px-Northern_Region_of_Ghana.svg.png",
  },
  {
    name: "Savannah Region",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Savannah_Region_of_Ghana.svg/200px-Savannah_Region_of_Ghana.svg.png",
  },
  {
    name: "Upper East Region",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Upper_East_Region_of_Ghana.svg/200px-Upper_East_Region_of_Ghana.svg.png",
  },
  {
    name: "Upper West Region",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Upper_West_Region_of_Ghana.svg/200px-Upper_West_Region_of_Ghana.svg.png",
  },
  {
    name: "Volta Region",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Volta_Region_of_Ghana.svg/200px-Volta_Region_of_Ghana.svg.png",
  },
  {
    name: "Western Region",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Western_Region_of_Ghana.svg/200px-Western_Region_of_Ghana.svg.png",
  },
];

const RegionTimeFilter = () => {
  const dispatch = useDispatch();

  const filteredRegions = useSelector(selectedRegions);

  const handleCheckboxChange = (item) => {
    // setfacilities((prevSelectedItems) => {
    //   if (prevSelectedItems.includes(item)) {
    //     return prevSelectedItems.filter((i) => i !== item);
    //   } else {
    //     return [...prevSelectedItems, item];
    //   }
    // });
    const tempFunc = () => {
      if (filteredRegions.includes(item)) {
        return filteredRegions.filter((i) => i == item);
      } else {
        return [...filteredRegions, item.name];
      }
    };
    dispatch(setSelectedRegions(tempFunc()));
  };

  return (
    <div className=" bg-white rounded-lg mx-auto my-auto px-8 py-5  w-[600px]">
      {/* title */}
      <p className="font-semibold text-lg text-center">Filter</p>

      {/* Duration rate range */}
      <div className="grid grid-cols-2 mt-4 gap-5">
        {/* range */}
        <label className="font-medium">Choose rent duration:</label>
        <div className="range flex gap-4">
          <select
            name="cars"
            id="cars"
            className="flex-grow p-2 rounded"
            onChange={(e) => {
              dispatch(setSelectedDuration(e.target.value));
            }}
          >
            <option value="1">One Year</option>
            <option value="2">2 Years</option>
            <option value="3">3 Years</option>
            <option value="4">4 Years</option>
          </select>
        </div>

        {/* start date */}
        <div className="startDate flex flex-col text-sm">
          <p className="font-medium">Start Date</p>
          <input
            type="date"
            className="flex-grow  p-2 rounded border mt-1"
            onChange={(e) => {
              dispatch(setStartDate(e.target.value));
            }}
          />
        </div>
        {/* start date */}
        <div className="startDate flex flex-col text-sm ">
          <p className="font-medium">End Date</p>
          <input
            type="date"
            className="flex-grow p-2 rounded border mt-1"
            onChange={(e) => {
              dispatch(setEndDate(e.target.value));
            }}
          />
        </div>

        {/* regions */}
        <div className="col-span-2">
          {/* title */}
          <p className="font-medium">Select the regions to filter from</p>

          {/* container for selecting the regions */}
          <div className="containerForAllRegions grid grid-cols-3 flex-wrap gap-3 mt-1 text-sm">
            {regionsOfGhana.map((el) => (
              <div
                className="regionContainer flex items-center gap-2"
                key={el.name}
              >
                <input
                  type="checkbox"
                  id={el.name}
                  checked={filteredRegions.includes(el)}
                  onChange={() => {
                    handleCheckboxChange(el);
                  }}
                />
                <label htmlFor={el.name}>{el.name}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionTimeFilter;
