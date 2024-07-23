import "./App.css";
import Approach from "./Components/Approach/Approach";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Why from "./Components/Why/Why";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import WorkGallery from "./Pages/WorkGallery/WorkGallery";
import About from "./Pages/About/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ToTop from "./Components/ToTop/ToTop";
import BottomLinks from "./Components/BottomLinks/BottomLinks";

const Layout = () => {
  return (
    <>
      <Navbar />
      <BottomLinks />
      <Outlet />
      <Footer />
      <ToTop />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
            <Approach />
            <Why />
          </>
        ),
      },
      {
        path: "/works",
        element: <WorkGallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
