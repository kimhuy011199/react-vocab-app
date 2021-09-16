import React, { useEffect } from "react";
import { getSingleCategory } from "../../api/api";
import useFetch from "../../hooks/useFetch";
import ExaminationSlider from "../../components/Examination/ExaminationSlider";
import { useParams } from "react-router-dom";

const Examination = () => {
  const { data, error, status, requestFunction } = useFetch(
    getSingleCategory,
    true
  );

  const params = useParams();
  const { slug } = params;

  useEffect(() => {
    requestFunction(slug);
  }, [requestFunction, slug]);

  if (status === "pending") {
    return <p>Loading</p>;
  }

  if (status === "completed" && error) {
    return <p>Error</p>;
  }

  return (
    <ExaminationSlider
      data={data[0].vocabularies}
      name={data[0].name}
      slug={data[0].slug}
    />
  );
};

export default Examination;
