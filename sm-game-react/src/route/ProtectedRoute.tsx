import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../reduxs/store";

function ProtectedRoute() {
  const wallet  = useSelector((state: RootState)=>state.wallet);
  if (!wallet.address) return <Navigate to="/connect" replace />;

  return <Outlet />;
}

export default ProtectedRoute;
