import React from "react";
import { ClipLoader } from "react-spinners";
import s from './spinner.module.scss';

const Spinner = ({ loading, size, type }) => {
  return (
    <>
      <ClipLoader loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader" className={s.spinner}/>
    </>
  );
};

export default Spinner;
