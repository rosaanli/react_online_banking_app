import React from "react";
import { Navigate } from "react-router-dom";
import { useProfileContext } from "@/core/profile";
import { appRoutes } from "./routes";

interface Props {
  children: JSX.Element
}

export const RequireAuth: React.FC<Props> = (props) => {
  const { children } = props;
  const { isAuthenticated } = useProfileContext();
  if (!isAuthenticated) return <Navigate to={appRoutes.root} replace />;
  return children;
};