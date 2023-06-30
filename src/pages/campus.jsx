import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCampusThunk } from "../redux/campuses/campuses.actions";
import SingleCampus from "../components/singleCampus";
import { useParams } from 'react-router-dom'

const Campus = () => {
  const campus = useSelector((state) => state.campus);
  const dispatch = useDispatch();
  const { id } = useParams();
  const fetchSingleCampus = () => {
    console.log('RUNNING DISPATCH FROM FETCHALLCAMPUSES')
    return dispatch(fetchSingleCampusThunk(id));
  };

  useEffect(() => {
    fetchSingleCampus();
  }, [id]);

  return ( 
    <div>
      <h1>Students Page</h1>
      <SingleCampus singleCampus={campus} />
    </div>
  );
};

export default Campus;