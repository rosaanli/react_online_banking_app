import React from "react";
import { LoginFormComponent } from "./components";
import { Credentials } from "./login.vm";
import { useNavigate } from "react-router-dom";
import { mapCredentialsFromVmToApi } from "./login.mapper";
import { isValidLogin } from "./api";
import { appRoutes } from "@/core/router";
import classes from "./login.page.module.css";
import {useProfileContext} from "@/core/profile";

export const LoginPage: React.FC = () =>{
  const {setUserProfile} = useProfileContext();
  const navigate = useNavigate();

  const handleSubmit = (credentials : Credentials) =>{
    const credentialsToApi = mapCredentialsFromVmToApi(credentials);
        isValidLogin(credentialsToApi).then((isValid) => {
        if (isValid) {
          setUserProfile(credentials.user)
          navigate(appRoutes.accountList);
        } else{
          alert("Usuario o contraseña incorrectos")
        }
  })
  };

  return (
  <>
    <header className= {classes.header}>
      <img src="/assets/logo-blick.png" className = {classes.logo}/>
    </header>
    <div className={classes.bgImg}></div>
    <div className ={classes.box}>
      <h1>Acceso</h1>
      <LoginFormComponent onLogin={handleSubmit}/>
      <h4 className={classes.inputFooter}>Esta usted en un <strong>sitio seguro</strong></h4>
    </div>

  </>
  )
};