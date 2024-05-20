import logo from "../../../assets/assets/logo.png";
import cart from "../../../assets/assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import profile from "../../../assets/assets/others/profile.png"
const Navbar = () => {
    const button=<>
        <li className="text-white"><a>HOME</a></li>
        <li className="text-white"><a>CONTACT US</a></li>
        <li className="text-white"><a>DASHBOARD</a></li>
        <li className="text-white"><a>OUR MENU</a></li>
        <li className="text-white"><a>OUR SHOP</a></li>
    </>
    return (
        <div className="">
            <div className="navbar justify-between bg-base-100 fixed z-10 bg-opacity-30 px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            button
        }
      </ul>
    </div>
    <a className=""><img src={logo} alt="" className="h-20 w-20"/></a>
  </div>
  <div className="">
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
            button
      }
    </ul>
  </div>
    <div className="dropdown dropdown-end mr-2">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <img src={cart} alt="" />
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={profile} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
</div>

    );
};

export default Navbar;