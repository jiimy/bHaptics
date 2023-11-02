import React, { memo } from "react";
import s from "./filter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_TAG_INIT } from "store/filter";

const FilterResultCount = () => {
  const dispatch = useDispatch();
  const filteredLength = useSelector((state) => state.filterStore.resultData);

  return (
    <div className={s.filter_count}>
      {filteredLength && filteredLength} items <span onClick={() => dispatch(FILTER_TAG_INIT())}>Clear Filters</span>
    </div>
  );
};

export default memo(FilterResultCount);
