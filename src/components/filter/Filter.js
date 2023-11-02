import FilterDropdown from "./FilterDropdown";
import FilterResultCount from "./FilterResultCount";
import FilterTag from "./FilterTag";
import FilterGroup from "./container/FilterGroup";

export const Filter = Object.assign(FilterGroup, {
  DropDown: FilterDropdown,
  Tag: FilterTag,
  ResultCount: FilterResultCount,
});
