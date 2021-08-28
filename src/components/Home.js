import React from "react";
import Button from "@material-ui/core/Button";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import Appbar from './Appbar'
import { Switch, Route } from "react-router-dom";
import List from './List'
import User from './User'
import Department from './Department'
import Dasboard from './Dasboard'
import AddUser from './AddUser'
import Chart from './Chart'
export default function Home() {
  const dispatch = useDispatch();
  return (
    <>
    <div className='App'>
               
      <Appbar/>
      
      </div>
      <Switch>
      <Route path ='/export'><List/></Route>
        <Route path ='/user'><User/></Route>
      <Route path ='/department'><Department/></Route>
      <Route path ='/dasboard'><Dasboard/></Route>
    
      <Route path ='/chart'><Chart/></Route>
      </Switch>
    </>
  );
}
