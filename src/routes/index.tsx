import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Home, LoginPage, Layout, IdeasPage, TicketsPage, ArticlesPage, ContactsPage, SettingsPage, SubscriptionsPage, OverviewPage } from "../ui";
//import { useSelector } from "react-redux";
import { ROUTES } from "../utils";
//import { RootState } from "../store";

const RequireAuth = () => {
  const auth = true//useSelector((state: RootState) => state.login.access);

  if (auth) {
    return <Outlet />;
  }
  return <Navigate to={ROUTES.login} />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path={ROUTES.login} element={<LoginPage />} />
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
                <Route path={ROUTES.home} element={<Home />} />
                <Route path={ROUTES.tickets} element={<TicketsPage/>} />
                <Route path={ROUTES.subscriptions} element={<SubscriptionsPage />} />
                <Route path={ROUTES.settings} element={<SettingsPage />} />
                <Route path={ROUTES.articles} element={<ArticlesPage />} />
                <Route path={ROUTES.contacts} element={<ContactsPage />} />
                <Route path={ROUTES.overview} element={<OverviewPage />} />
                <Route path={ROUTES.contacts} element={<ContactsPage />} />
                <Route path={ROUTES.ideas} element={<IdeasPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
