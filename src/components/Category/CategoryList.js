import React from "react";

import CategoryItem from "./CategoryItem";

import classes from "./CategoryList.module.css";

const CategoryList = (props) => {
  return (
    <section className={classes.container}>
      {props.categoryList.map((category) => (
        <CategoryItem key={category.id} item={category} />
      ))}
    </section>
  );
};

export default CategoryList;
