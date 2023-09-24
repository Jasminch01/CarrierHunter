import {  Link, NavLink } from "react-router-dom";


const Header = () => {
  const links = (
    <>
      <NavLink to= '/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active mr-3 text-base" : " mr-3 text-base"
  } >
        <button className="">Statisticks</button>
      </NavLink >
      <NavLink to= '/applyed-jobs' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active mr-3 text-base" : " mr-3 text-base"
  }>
        <button className="">Applyed Jobs</button>
      </NavLink >
      <NavLink to= '/blogs' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active mr-3 text-base" : " mr-3 text-base"
  }>
        <button className="">Blogs</button>
      </NavLink >
    </>
  );

  return (
    <div className="bg-indigo-50">
      <div className="navbar  w-[80%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to= '/' className="uppercase text-xl">Carrier Hub</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-indigo-400 text-white">Apply Now</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
