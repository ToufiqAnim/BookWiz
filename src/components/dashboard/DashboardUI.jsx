
import { Link, Outlet } from "react-router-dom"

const DashboardUI=()=> {
  return (
    <>

<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col items-center justify-center">

  <div className="drawer-content flex flex-col items-center justify-center">
   <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
    <h1 className="text-2xl font-bold"><Link to={'/dashboard'}>Dashboard</Link></h1>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/dashboard/all-books"}>Explore Books</Link></li>
      <li><Link to={"/dashboard/add-books"}>Add Books</Link></li>
    </ul>
  </div>
</div>
    </>
  )
}

export default DashboardUI