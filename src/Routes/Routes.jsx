import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import Dashboard from "../Layout/Dashboard";
import PersonalInfo from "../Pages/Dashboard/PersonalInfo";
import HealthUpdate from "../Pages/HealthUpdate/HealthUpdate";
import MedicalStatus from "../Pages/Dashboard/MedicalStatus";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: "/healthupdate",
        element:<HealthUpdate></HealthUpdate>
      }

    ]
  },

  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:"Personalinfo",
        element:<PersonalInfo></PersonalInfo>
      },
      {
        path:'medicalstatus',
        element:<MedicalStatus></MedicalStatus>
      }
    ]
  }
]);