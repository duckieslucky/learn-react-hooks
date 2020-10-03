import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./FilterForm.scss";
FilterForm.propTypes = {
  onFilterTermChange: PropTypes.func,
};

FilterForm.defaultProps = {
  onFilterTermChange: null,
};

function FilterForm(props) {
  const { onFilterTermChange } = props;
  const [filterTerm, setFilterTerm] = useState("");
  //create static variable to hold timeOut => useRef(null);
  const typingTimeoutRef = useRef(null);

  function handleFilterChange(e) {
    const value = e.target.value;
    setFilterTerm(value);

    if (!onFilterTermChange) return;

    //clear timeOut for newRender because when form change that call reRender => reset countdown
    //skip this clean up when mount
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    //set timeOut for waiter => basic debounce
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onFilterTermChange(formValues);
    }, 300);
  }

  return (
    <form>
      <label>Title Search</label>
      <input
        type="text"
        // onSubmit={handleSubmit}
        onChange={handleFilterChange}
        value={filterTerm}
        placeholder="your expected title here..."
      ></input>
    </form>
  );
}

export default FilterForm;
