
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccountList, AccountPage, AddAccount, LoginPage, MovementList, TransferPage,  } from "@/pages";
import {appRoutes} from './routes'
import { RequireAuth } from "./require-auth.component";

export const Router = () => {
const {root, accountList, movements, transfer, transferFromAccount, addAccount, editAccount} = appRoutes;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={root} element={<LoginPage/>}></Route>
        <Route path={accountList} element = {<RequireAuth><AccountList/></RequireAuth>}></Route>
        <Route path={editAccount} element = {<RequireAuth><AccountPage/></RequireAuth>}></Route>
        <Route path={movements} element = {<RequireAuth><MovementList/></RequireAuth>}></Route>
        <Route path={transfer} element = {<RequireAuth><TransferPage/></RequireAuth>}></Route>
        <Route path={transferFromAccount} element = {<RequireAuth><TransferPage/></RequireAuth>}></Route>
        <Route path={addAccount} element = {<RequireAuth><AddAccount/></RequireAuth>}></Route>
      </Routes>
    </BrowserRouter>
  )
};