import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.actions";
import ListAllCampuses from "../components/listAllCampuses";

const Campuses = () => {
  const allCampuses = useSelector((state) => state.campus.allCampuses);
  const dispatch = useDispatch();
  const fetchAllCampuses = () => {
    return dispatch(fetchAllCampusesThunk());
  };

  useEffect(() => {
    fetchAllCampuses();
  }, []);

  return ( 
    <div>
      <h1>All Campuses</h1>
      <ListAllCampuses allCampuses={allCampuses} />
    </div>
  );
};

export default Campuses;