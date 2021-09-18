import React, { useEffect } from "react";

import CategoryList from "../../components/Category/CategoryList";
import Loading from "../../components/UI/Loading/Loading";
import Error from "../../components/UI/Error/Error";
import Heading from "../../components/UI/Heading/Heading";

import useFetch from "../../hooks/useFetch";
import { getAllCategories } from "../../api/api";

const Categories = () => {
  const { data, error, status, requestFunction } = useFetch(
    getAllCategories,
    true
  );

  useEffect(() => {
    requestFunction();
  }, [requestFunction]);

  if (status === "pending") {
    return <Loading />;
  }

  if (status === "completed" && error) {
    return <Error />;
  }

  return (
    <>
      <Heading heading="Tất cả các chủ đề" />
      <CategoryList categoryList={data} />
    </>
  );
};

export default Categories;
