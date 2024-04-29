import './App.scss';
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";




function App() {

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    }
  ]);











  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
