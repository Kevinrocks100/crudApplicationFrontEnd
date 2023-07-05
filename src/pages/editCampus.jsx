import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import EditCampusForm from "../components/editCampusForm";
import { fetchSingleCampusThunk } from "../redux/campuses/campuses.actions"

const EditCampus = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCampusThunk(id));
  }, [id, dispatch]);

  return (
    <div>
      <EditCampusForm campusId={id}/>
    </div>
  );
};

export default EditCampus;