import { BrowserRouter, useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { TickerViewProvider } from "../context";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/detail/:symbol", element: <Detail /> },
  ]);

  return routes;
};

function App() {
  return (
    <TickerViewProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TickerViewProvider>
  );
}

export default App;
