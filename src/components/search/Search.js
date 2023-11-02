import { Search34 } from "components/images";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SEARCH } from "store/search";
import s from "./search.module.scss";

const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SEARCH(text));
    setText('');
  };

  return (
    <form className={s.search} onSubmit={handleSubmit}>
      <input type="text" placeholder="Search" value={text} onChange={(e) => setText(e.target.value)} />
      {/* <button type="submit"></button> */}
      <Search34 onClick={handleSubmit}/>
    </form>
  );
};

export default Search;
