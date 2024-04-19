import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll ">
        <main className="max-w-3xl mx-auto">
          {/* we use the outlet to display each content of each route separately */}
          <Outlet />
        </main>
      </div>
      <CartOverView />
    </div>
  );
};

export default AppLayout;
