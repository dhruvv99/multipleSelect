import React, { useState } from 'react';
import './MultipleSelect.css'; 

const MultipleSelect = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ["option1","option2","option3","option4","option5","option6","options7"];

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelect = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
    setIsDropdownOpen(false); 
  };

  const handleRemove = (item) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  return (
    <div className="centerdiv">
      <div className="selectArea" onClick={toggleDropdown}>
        <div className="arrowContainer">
          <span className="arrow">🔽</span> {/* Emoji arrow */}
        </div>

        <div className="selectedTilesContainer">
          {selectedItems.length > 0
            ? selectedItems.map((item) => (
                <div key={item} className="tile">
                  <span>{item}</span>
                  <button onClick={() => handleRemove(item)} className="removeButton">
                    ✖
                  </button>
                </div>
              ))
            : <span className="placeholder">Select multiple options</span>}
        </div>
      </div>

      {isDropdownOpen && (
        <div className="dropdown">
          {options.map((option) => (
            <div
              key={option}
              className="option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultipleSelect;
