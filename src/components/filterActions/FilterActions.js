import React from "react";
import "./style.css";
import { useProducts } from "../../context/ProductContext";
const FilterActions = () => {
  const { filters, setFilters } = useProducts();
  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    // Update the filters based on the type of input element
    if (type === 'checkbox') {
      setFilters({
        ...filters,
        [name]: checked, // Update the checkbox state
      });
    } else {
      setFilters({
        ...filters,
        [name]: value, // Update other input values
      });
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <label className="custom-checkbox">
        <input
          type="checkbox"
          name="sale"
          checked={filters.sale}
          onChange={handleFilterChange}
        />
        <span className="checkmark"></span>
        Sale
      </label>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          name="featured"
          checked={filters.featured}
          onChange={handleFilterChange}
        />
        <span className="checkmark"></span>
        Featured
      </label>

      <label className="custom-checkbox">
        <input type="checkbox" />
        <span className="checkmark"></span>
        Date, old to new
      </label>
      <label className="custom-checkbox">
        <input type="checkbox" />
        <span className="checkmark"></span>
        Date, new to old
      </label>

      <div className="mt-[30px]">
      <div className="custom-radio">
  <label>
    <input
      type="radio"
      name="priceSort"
      value="lowtohigh"
      checked={filters.priceSort === 'lowtohigh'}
      onChange={handleFilterChange}
    />
    <span className="radiomark"></span> Price, low to high
  </label>
</div>
<div className="custom-radio mt-[20px] ">
  <label>
    <input
      type="radio"
      name="priceSort"
      value="hightolow"
      checked={filters.priceSort === 'hightolow'}
      onChange={handleFilterChange}
    />
    <span className="radiomark"></span> Price, high to low
  </label>
</div>
      </div>

    


    </div>
  );
};


export default React.memo(FilterActions);

