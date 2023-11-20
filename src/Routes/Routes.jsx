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
import ViewMedicalStatus from "../Pages/Dashboard/ViewMedicalStatus";
import RoutineCheckUp from "../Pages/Dashboard/RoutineCheckUp";
import ViewRoutineCheckUp from "../Pages/Dashboard/ViewRoutineCheckUp";
import VacinationSchedule from "../Pages/Dashboard/VacinationSchedule";
import ViewVaccinationSchedule from "../Pages/Dashboard/ViewVaccinationSchedule";


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
      },
      {
        path:'viewmedicalstatus',
        element:<ViewMedicalStatus></ViewMedicalStatus>
      },
      {
        path:'routinecheckup',
        element:<RoutineCheckUp></RoutineCheckUp>
      },
      {
        path:'viewroutinecheckup',
        element:<ViewRoutineCheckUp></ViewRoutineCheckUp>
      },
      {
        path:'vaccineschedule',
        element:<VacinationSchedule></VacinationSchedule>
      },
      {
        path:'viewvaccineschedule',
        element:<ViewVaccinationSchedule></ViewVaccinationSchedule>
      }
    ]
  }
]);