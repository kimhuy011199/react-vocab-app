import React from "react";
import classes from "./CategoryItem.module.css";
import getStrapiMedia from "../../api/media";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const imgUrl = getStrapiMedia(props.item.image.url);
  const learningUrl = `/learning/${props.item.slug}`;
  const examinationUrl = `/examination/${props.item.slug}`;

  return (
    <article>
      <div className={classes.card}>
        <div className={classes.image}>
          <img src={imgUrl} alt={props.item.name} />
        </div>
        <div className={classes.actions}>
          <Link to={learningUrl}>Học</Link>
          <Link to={examinationUrl}>Kiểm tra</Link>
        </div>
      </div>
      <h4 className={classes.name}>{props.item.name}</h4>
    </article>
  );
};

export default CategoryItem;
