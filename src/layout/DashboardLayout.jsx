import { Outlet } from "react-router-dom"
import DashboardDrawer from "../components/dashboard/DashboardUI"



function DashboardLayout() {
  return (
    <>
    <DashboardDrawer />
    <Outlet/>
    </>
  )
}

export default DashboardLayout