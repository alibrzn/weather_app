import { Link, Outlet } from "react-router-dom";

function Page2HomePage() {
  return (
    <div>
      <div className="div-page2">
        {" "}
        {/* Components */}
        <div className="flex flex-col gap-4 px-4 py-2">
          <h1>انتخاب دقیق و طبقه بندی شهر شما</h1>
          <p>
            استفاده از هواشناسی دقیق گوگل و accuweather و سرویس openweathermap
          </p>
        </div>
        <Link to="homepage">
          <button className="btn-login">ورود به اپلیکیشن</button>
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
export default Page2HomePage;
