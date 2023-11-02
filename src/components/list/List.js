import { getDataApi } from "api/bhaptics";
import Cards from "components/items/Cards";
import { memo, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_LENGTH } from "store/filter";
import s from "./list.module.scss";
import Spinner from "components/spinner/Spinner";

const List = () => {
  const dispatch = useDispatch();
  const searchkeyword = useSelector((state) => state.searchStore.keyword);
  const filterKeyword = useSelector((state) => state.filterStore.data);
  const filteredLength = useSelector((state) => state.filterStore.resultData);
  const sortKeyword = useSelector((state) => state.sortStore.sortKeyword);
  const values = filterKeyword && filterKeyword.map((item) => item.value);
  const [resultData, setResultData] = useState([]);

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["data", values],
    queryFn: () => getDataApi(values.toString()),
  });

  useEffect(() => {
    // 키워드 검색
    function filterGamesByNameKeyword(data, keyword) {
      if (data) {
        return data.filter(function (game) {
          return game.name.toLowerCase().includes(keyword.toLowerCase());
        });
      }
    }
    const filteredKeyword = filterGamesByNameKeyword(isSuccess && data, searchkeyword);
    setResultData(filteredKeyword);
    dispatch(FILTER_LENGTH(filteredKeyword && filteredKeyword.length));
  }, [searchkeyword, data]);

  useEffect(() => {
    // 우측 필터
    function sortByReleaseTimeDesc(data) {
      if (data) {
        return data.sort(function (a, b) {
          return b[sortKeyword] - a[sortKeyword];
        });
      }
    }
    const filteredSort = sortByReleaseTimeDesc(resultData);
    setResultData(filteredSort);
    dispatch(FILTER_LENGTH(filteredSort && filteredSort.length));
  }, [sortKeyword]);

  return (
    <div className={s.list}>
      {isSuccess && data && resultData?.map((item) => <Cards data={item} key={item.id} />)}
      {filteredLength === 0 && <>검색 결과가 없습니다.</>}
      {isLoading && <Spinner loading={isLoading} />}
    </div>
  );
};

export default memo(List);
