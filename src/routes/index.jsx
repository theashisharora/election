// Imports
import routes from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import { ScrollToTop } from "../hooks";
import { Loader } from "../components";

// Configure app routes
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  element={route.element}
                  key={route.path}
                  path={route.path}
                />
              );
            })}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </BrowserRouter>
  );
};
