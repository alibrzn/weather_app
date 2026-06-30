import { useEffect, useState } from "react";

import iconSearch from "../assets/IconSearch.svg";
import iconFilter from "../assets/IconSlider.svg";
import Model1 from "../assets/radobargh.svg";

function AppWeather() {
  const [Citiesweather, setCitiesweather] = useState([]);

  const cityIran = ["تهران", "مشهد", "نیشابور", "بیرجند", "شیراز", "اصفهان"];
  let i = 0;

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=36,32,65,36,45,32&longitude=5,53,20,7,8,53&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,sunrise,sunset&hourly=precipitation_probability,wind_speed_10m,apparent_temperature,uv_index&current=temperature_2m&timezone=America%2FLos_Angeles&forecast_days=3",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCitiesweather(data);
      });
  }, []);

  const [inputvalue, setinputvalue] = useState("");

  const [CityInformation, setCityInformation] = useState({});

  const [IsTrueInformationStatic, setIsTrueInformationStatic] = useState(false);

  function handlerInputSearchValue(e) {
    setinputvalue(e.target.value);
  }
  function handlerInputSearch(e) {
    if (e.key === "Enter") {
      // console.log(inputvalue);
      console.log(CityInformation);
      console.log(IsTrueInformationStatic);

      Citiesweather.map((city) => {
        // console.log(city.city);

        // America/Los_Angeles
        if (inputvalue === city.timezone) {
          // alert('یافت شد!');

          //console.log(city);
          setCityInformation(city);
          setIsTrueInformationStatic(true);

          setinputvalue("");
        }
      });
    }
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-start px-4 py-2 w-full">
      <div>
        <p className="text-4xl">
          جستجو در<br></br>اکسپلور
        </p>
      </div>

      <div className="flex flex-row justify-center items-center w-full">
        <input
          value={inputvalue}
          onKeyUp={handlerInputSearch}
          onChange={handlerInputSearchValue}
          className="input-Search"
          type="search"
          placeholder="جستجو شهر..."
        />

        <img className="absolute right-6" src={iconSearch} alt="" />

        <div
          className="relative left-12 flex flex-row items-center
                bg-sky-400 w-9 rounded-2xl h-6 p-1"
        >
          <img className="w-fit h-auto" src={iconFilter} alt="" />
        </div>
      </div>

      <h2 className="text-2xl">شهرهای شما</h2>

      <div className="w-full flex flex-col gap-6">
        {Citiesweather.map((city) => (
          <div key={city.location_id} className="CardMain">
            <div>
              <img src={Model1} alt="" />
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
              {/* به دلیل نبودن api
                            بهینه برای شهر های به صورت دستی اضافه شده اسامی شهر ها
                            */}
              <p className="text-white text-xl"> {cityIran[i]} </p>
              <p className="hidden">{i++}</p>

              <span className="text-2xl text-white">
                {" "}
                {city.current.temperature_2m + "ºC"}{" "}
              </span>
              <div className="flex flex-col justify-center items-start">
                <span className="text-white text-sm text-shadow-lg shadow-black">
                  کمترین دما : {city.daily.temperature_2m_min[1]}{" "}
                </span>
                <span className="text-white text-sm text-shadow-lg shadow-black">
                  بیشترین دما : {city.daily.temperature_2m_max[1]}{" "}
                </span>
                <span className="text-white text-sm text-shadow-lg shadow-black">
                  غروب خورشید : {city.daily.sunset[0].slice(11)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 
            {<div className={ IsTrueInformationStatic ? 'CardSearching' : 'hidden' }>
                <h2 className='text-2xl text-white'> { CityInformation.timezone } </h2>
                <span className='text-white'> { CityInformation.current.temperature_2m + "ºC" } </span>
                <img src={ Model1 } alt=""/>
                <button onClick={ ()=> setIsTrueInformationStatic(false) }
                 className='bg-green-800 rounded-xl px-2 py-1 shadow-2xs shadow-green-950 cursor-pointer'>فهمیدم !</button>
            </div>}
*/}
    </div>
  );
}
export default AppWeather;
