/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Sidebar from "../sidebar";
import Info from "./info";
import Pass from "./pass";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../../redux/actions/customer";
function Profile() {
  const dispatch = useDispatch();
  if (localStorage.thelaptopworld_token) {
    var { userId } = JSON.parse(localStorage.getItem("thelaptopworld_token"));
  }
  const { load } = useSelector((state) => state.updateInfo);
  useEffect(() => {
    dispatch(getCustomer(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (load == false) {
      dispatch(getCustomer(userId));
    }
  }, [load, dispatch, userId]);
  return (
    <main>
      <div className="container mt-5">
        <div className="row">
          <Sidebar />
          <div className="col-xl-10 col-lg-9 col-md-9">
            <Info />

            <Pass />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
