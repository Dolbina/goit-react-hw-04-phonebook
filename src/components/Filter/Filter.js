import { PropTypes } from "prop-types";
import { FilterWrap } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
    return (
      <FilterWrap>
        <label> Find contacts by name</label>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
          placeholder="search"
        />
      </FilterWrap>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};