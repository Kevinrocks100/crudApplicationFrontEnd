import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.actions";
import ListCampusName from "../components/listCampusName";

const Campuses = () => {
  const allCampuses = useSelector((state) => state.campus.allCampuses);
  const dispatch = useDispatch();
  const fetchAllCampuses = () => {
    console.log('RUNNING DISPATCH FROM FETCHALLCAMPUSES')
    return dispatch(fetchAllCampusesThunk());
  };

  useEffect(() => {
    console.log('FETCH ALL CAMPUSES FIRING IN USEEFFECT')
    fetchAllCampuses();
  }, []);

  return ( 
    <div>
      <h1>Campuses Page</h1>
      <ListCampusName list={allCampuses} />
    </div>
  );
};

export default Campuses;