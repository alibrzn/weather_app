import NextArrowComponent from "./NextArrowComponent";

function Page1HomePage() {
  return (
    <div>
      <div className="div-page1">
        <div className="flex flex-col gap-10 px-4 py-2">
          <h1>پیش‌بینی دقیق آب و هوا</h1>
          <p>
            آب و هوای شهر خود را کشف کنید و روز خود را به درستی برنامه ریزی
            کنید...
          </p>
        </div>
      </div>

      <NextArrowComponent />
    </div>
  );
}
export default Page1HomePage;
