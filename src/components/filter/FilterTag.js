import { Close20 } from "components/images";
import s from "./filter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_TAG_REMOVE } from "store/filter";

const FilterTag = () => {
  const dispatch = useDispatch();
  const filteredTag = useSelector((state) => state.filterStore.data);

  const names = filteredTag && filteredTag.map((item) => item.name);

  return (
    <>
      {names &&
        names.map((item, index) => (
          <span className={s.filter_tag} key={index}>
            {item} <span className={s.filter_tag_close}></span>
            <Close20 onClick={() => dispatch(FILTER_TAG_REMOVE(item))} />
          </span>
        ))}
    </>
  );
};

export default FilterTag;
