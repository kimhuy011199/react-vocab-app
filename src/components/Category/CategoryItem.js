import React, { useState } from "react";
import classes from "./CategoryItem.module.css";
import getStrapiMedia from "../../api/media";
import CategoryModal from "./CategoryModal";

const CategoryItem = (props) => {
  const imgUrl = getStrapiMedia(props.item.image.url);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <article onClick={toggleModal} className={classes.card}>
        <div className={classes.image}>
          <img src={imgUrl} alt={props.item.name} />
        </div>
        <h4 className={classes.name}>{props.item.name}</h4>
      </article>
      {isModalOpen && (
        <CategoryModal
          onClose={toggleModal}
          slug={props.item.slug}
          name={props.item.name}
        />
      )}
    </>
  );
};

export default CategoryItem;
