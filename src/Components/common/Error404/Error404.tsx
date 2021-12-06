import React from "react";
import {useSelector} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import {Redirect} from "react-router-dom";

export const Error404 = () => {

  /*const initialized = useSelector<AppStateType, boolean>(state => state.app.initialized)
  //const dispatch = useDispatch()
  if (initialized) {
    return <Redirect to={'/profile'}/>
  }*/
  return <h1>Error: PAGE NOT FOUND</h1>
}