import React from "react";
// import ReactDOM from "react-dom/client";
import { hydrateRoot, createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Layout,
  ErrorPage,
  Footer,
  Github,
  Header,
  Skills,
  AllProjects,
  Educations,
} from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div
        style={{
          width: "100%",
          height: "100vh",
          fontSize: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "black", margin: "auto" }}>
          We will be coming soon !
        </h1>
      </div>
    ),
  },

  {
    path: "/about",
    element: (
      <>
        <Header />
        <About /> <Skills />
        <Educations />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: (
      <>
        <Header />
        <AllProjects />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    // loader:{gitInfoLoader},
    path: "/github",
    element: (
      <>
        <Header />
        <ErrorPage />
        <Footer />
      </>
    ),
    // errorElement:<ErrorPage />
  },
]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
