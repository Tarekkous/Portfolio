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
import  { useEffect, useRef } from "react"




function App() {

//! CURSOR options 
const cursorRef = useRef(null);

useEffect(() => {
  const updateCursor = (e) => {
    const { pageX, pageY } = e;
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.top = `${pageY - 10}px`;
      cursor.style.left = `${pageX - 10}px`;
    }
  };

  const clickEffect = () => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    }
  };

  document.addEventListener('mousemove', updateCursor);
  document.addEventListener('click', clickEffect);

  // Cleanup function to remove event listeners
  return () => {
    document.removeEventListener('mousemove', updateCursor);
    document.removeEventListener('click', clickEffect);
  };
}, []);



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
      <div className="cursor" ref={cursorRef}></div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
