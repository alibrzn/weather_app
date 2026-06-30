// import { useState } from "react";
import { Link } from "react-router-dom";

export default function NextArrowComponent() {
  // const [IsListStyle, setIsListStyle] = useState(false);

  return (
    <div className="flex flex-row items-center justify-between px-4 absolute bottom-4 w-full">
      <Link /* onClick={ ()=> { setIsListStyle(true) } } */ to="/page2">
        <div className="bg-sky-400 rounded-full w-fit p-3">
          <img className="w-5 h-5" src="../src/assets/Vector1.svg" alt="" />
        </div>
      </Link>
      {/* <ul className="flex flex-row-reverse gap-3">
                    <li className={ IsListStyle ? 'list-Off' : 'list-On' }></li>
                    <li className={ IsListStyle ? 'list-On' : 'list-Off' }></li>
                </ul>
                <Link to='/'>
                  <div onClick={ ()=> { setIsListStyle(false) } } className='bg-sky-100 rounded-full w-fit p-3'>
                    <img className="w-5 h-5" src="../src/assets/Vector2.svg" alt=""/>
                </div>
                </Link> */}
    </div>
  );
}
