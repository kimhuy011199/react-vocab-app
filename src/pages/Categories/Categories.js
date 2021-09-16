import React, { useEffect } from "react";
import { getAllCategories } from "../../api/api";
import useFetch from "../../hooks/useFetch";
import CategoryList from "../../components/Category/CategoryList";

const Categories = () => {
  const { data, error, status, requestFunction } = useFetch(
    getAllCategories,
    true
  );

  useEffect(() => {
    requestFunction();
  }, [requestFunction]);

  if (status === "pending") {
    return <p>Loading</p>;
  }

  if (status === "completed" && error) {
    return <p>Error</p>;
  }

  return <CategoryList categoryList={data} />;
};

export default Categories;
