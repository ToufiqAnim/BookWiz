import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Registration from "../pages/Register";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoutes";
import AddBooks from "../components/dashboard/AddBooks";
import Books from "../components/shared/home/Books";
import BooksDetails from "../pages/BookDetails";
import AllBooks from "../components/dashboard/AllBooks";
import EditBook from "../components/dashboard/EditBook";
import EditProfile from "../components/dashboard/EditProfie";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
     children: [
        {
          index: true,
          element: <Home />,
        },
        {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'register',
            element: <Registration />,
          },
        {
          path: 'books',
          element: <Books />,
        },
        {
          path: "/books/:id",
          element: <BooksDetails />,
          loader: ({ params }) =>
            fetch(`http://localhost:3000/books/${params.id}`),
      },
  /* 
        {
          path: 'contact',
          element: <Contact />,
        },
      ,
         */
      ], 
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      errorElement: <Error />,
      children: [
          {
              index: true,
              element: <Dashboard/>
          },
          {
            path: "add-books",
            element: (
              <PrivateRoute>
                <AddBooks />
              </PrivateRoute>
            ),
        },
        {
          path: "all-books",
          element: (
            <PrivateRoute>
              <AllBooks/>
            </PrivateRoute>
          ),
      },{
      path: "profile/edit/:id",
      element: (
        <PrivateRoute>
          <EditProfile />
        </PrivateRoute>
      ),
      loader: ({ params }) =>
        fetch(
          `http://localhost:3000/user/get/${params.id}`
        ),
    },
      {
        path: "all-books/edit/:id",
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/books/${params.id}`),
      },
          
          
      ]
    },
    
    
  ]);
  
  export default router;