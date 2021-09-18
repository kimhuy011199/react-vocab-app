import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import ExaminationSlider from "../../components/Examination/ExaminationSlider";
import Loading from "../../components/UI/Loading/Loading";
import Error from "../../components/UI/Error/Error";

import useFetch from "../../hooks/useFetch";
import { getSingleCategory } from "../../api/api";

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
    return <Loading />;
  }

  if (status === "completed" && error) {
    return <Error />;
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
