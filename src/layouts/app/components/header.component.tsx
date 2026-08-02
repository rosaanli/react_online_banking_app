import React from "react";
import classes from "./header.component.module.css";
import { useProfileContext } from "@/core/profile/profile.context";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes, routesPrefixes } from "@/core/router/routes";

export const HeaderComponent : React.FC = () => {
  const {userName, logout} = useProfileContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(appRoutes.root);
  };

  return (
    <header className = {classes.header}>
      <div>
        <Link to={routesPrefixes.accountList}>
          <img src="/assets/logo-blick.png" alt="logo" className={classes["header-logo"]} />
        </Link>
        <div className={classes.usuario}>
          <p>{userName}</p>
          <button type="button" className={classes.logoutButton} onClick={handleLogout}>
            Desconectar
          </button>
        </div>
      </div>
    </header>
  )
};