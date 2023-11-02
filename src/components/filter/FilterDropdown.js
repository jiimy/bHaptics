import cls from "classnames";
import { DropdownArrow } from "components/images";
import { useRef, useState } from "react";
import s from "./filter.module.scss";
import { useQuery } from "react-query";
import { getDataOptionsApi } from "api/bhaptics";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_TAG_ADD, FILTER_TAG_REMOVE } from "store/filter";
import { useOutOfClick } from "hooks/useOutOfClick";
import classNames from "classnames";

const FilterDropdown = () => {
  const filteredTag = useSelector((state) => state.filterStore.data);
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState([]);
  const targetRef = useRef(null);
  const dispatch = useDispatch();

  useOutOfClick(targetRef, () => {
    setToggle(false);
  });

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["filterType"],
    queryFn: () => getDataOptionsApi(),
  });
  const names = data && data.map((item) => item.name);

  const clickItem = (e) => {
    e.preventDefault();
    const value = e.target.textContent;
    if (text.includes(value)) {
      setText([text.filter((item) => item !== value)]);
    } else {
      setText([...text, value]);
    }

    const newData = data.find((item) => item.name === value);
    const hasSteamVR = filteredTag.some((item) => item.name === value);
    if (hasSteamVR) {
      dispatch(FILTER_TAG_REMOVE(value));
    } else {
      dispatch(FILTER_TAG_ADD(newData));
    }
  };

  return (
    <div
      ref={targetRef}
      className={cls([s.filter], {
        [s.is_toggle]: toggle,
      })}
      onClick={() => setToggle(!toggle)}
    >
      <span>Available On ({filteredTag.length})</span>
      <DropdownArrow className={classNames('', {
        [s.arrow] : toggle
      })}/>
      {toggle && (
        <ul>
          {names?.map((item, index) => (
            <li
              key={index}
              onClick={(e) => clickItem(e)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
