import Home from "./pages/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import Users from "./pages/Users";
import Products from "./pages/Products";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import Menu from "./components/main/Menu";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import User from "./pages/User";
function App() {

  const Layout = () =>{
    return (
      <div className="bg-main text-maintxt">
        <Navbar />
        <div className="flex">
          <div className=" w-64 py-1 px-5 border-r-2 border-soft">
            <Menu />
          </div>
          <div className="py-1 px-5 w-full">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
        children:[{
          path :"/",
          element:<Home />
        },
        {
          path :"/users",
          element:<Users />
        },
        {
          path :"/products",
          element:<Products />
        },{
          path :"/users/:id",
          element:<User/>
        },{
          path :"/products/:id",
          element:<Product/>
        }]
      ,
    },{
      path:"/login",
      element:<Login/>
    },
    {
      path:"*",
      element:<NotFound />
    }
  ]);

  return (
   <RouterProvider router={router} />
  )
}

export default App
