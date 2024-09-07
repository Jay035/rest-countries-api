import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page.jsx";
import Country from "./routes/country.jsx";
import data from "../data.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "country/:name",
    element: <Country data={data} />,
  },
]);

export default function Layout() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="app" data-theme={`${theme === "dark" ? "dark" : ""}`}>
      <Navbar setTheme={setTheme} />
      <RouterProvider router={router} />
    </div>
  );
}
