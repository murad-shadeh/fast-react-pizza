import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        {/* we use the outlet to display each content of each route separately */}
        <Outlet />
      </main>
      <CartOverView />
    </div>
  );
};

export default AppLayout;
