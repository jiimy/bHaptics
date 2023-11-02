import classNames from "classnames";
import { Filter } from "components/filter/Filter";
import List from "components/list/List";
import Search from "components/search/Search";
import Sort from "components/sort/Sort";
import Header from "../../components/header/Header";
import s from "./mainpage.module.scss";

const MainPage = () => {

  return (
    <div className={s.mainpage}>
      <Header />
      <div className="content">
        <h1 className={s.title}>Explore TactSuit Compatible Games</h1>
        <div className={s.desc}>Experience haptic feedback optimized for each unique in-game event. </div>
        <div className="flex">
          {/* <FilterDropdown /> */}
          <Filter.DropDown />
          <Search />
        </div>
        <div className={s.tag_area}>
          <Filter.Tag />
        </div>
        <div className={classNames("flex", [s.sort_area])}>
          <Filter.ResultCount />
          <Sort />
        </div>
        <List />
      </div>
    </div>
  );
};

export default MainPage;
