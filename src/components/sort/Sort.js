import classNames from "classnames";
import { DropdownArrow } from "components/images";
import { useOutOfClick } from "hooks/useOutOfClick";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { SORT_KEYWORD } from "store/sort";
import s from "./sort.module.scss";

const Sort = () => {
  const dispatch = useDispatch();
  const data = ["releaseTime", "updateTime", "populariy"];
  const [select, setSelect] = useState("Featured");
  const [toggle, setToggle] = useState(false);
  const targetRef = useRef(null);

  useOutOfClick(targetRef, () => {
    setToggle(false);
  });

  return (
    <div className={s.sort} ref={targetRef}>
      <span className={s.title}>sort by : </span>
      <div className={s.list}>
        <span onClick={() => setToggle(!toggle)}>
          {select} <DropdownArrow className={classNames('', {
          [s.arrorw] : toggle
          })} />
        </span>
        {toggle && (
          <ul>
            {data.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelect(item);
                  setToggle(!toggle);
                  dispatch(SORT_KEYWORD(item));
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sort;
