import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
            element: <Register />,
          },
/*         {
          path: 'recipe',
          element: <Recipe />,
        },
  
        {
          path: 'contact',
          element: <Contact />,
        },
      ,
         */
      ], 
    },
  /*   {
      path: '/dashbord',
      element: (
        <PrivateRoutes>
          <Dashbaord />
        </PrivateRoutes>
      ),
      children: [
        {
          index: true,
          element: <DashboardHome />,
        },
        {
          path: 'manage-recipes',
          element: <ManageAllRecipe />,
        },
        {
          path: 'add-recipes',
          element: <AddRecipe />,
        },
        {
          path: 'edit-recipe/:id',
          element: <EditRecipe />,
        },
        {
          path: 'recipe/:id',
          element: <RecipeDetails />,
        },
      ],
    }, */
  ]);
  
  export default router;