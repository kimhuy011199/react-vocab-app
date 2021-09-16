import React, { useEffect } from "react";
import { getAllCategories } from "../../api/api";
import useFetch from "../../hooks/useFetch";
import CategoryList from "../../components/Category/CategoryList";
import Loading from "../../components/UI/Loading/Loading";

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
    return <p>Error</p>;
  }

  return <CategoryList categoryList={data} />;
};

export default Categories;
