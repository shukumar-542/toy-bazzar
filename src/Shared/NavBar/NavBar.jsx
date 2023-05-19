import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => {
        console.log(error.message);
      })
  }

  return (
    <div className="navbar bg-base-100 lg:px-20 justify-between mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/allToys">All Toys</Link></li>
            {
              user && <>
                <li><Link to="/myToys">My Toys</Link></li>
                <li><Link to="/addToy">Add A Toys</Link></li>
              </>
            }
            <li><Link to="/blogs">Blogs</Link></li>
            {
              user ? <button className='btn primary-btn' onClick={handleLogOut}>Logout</button> :
                <Link to="/login"><button className='btn primary-btn' >Login</button></Link>
            }
          </ul>
        </div>
        <img src={logo} className='w-20 rounded-full hidden lg:block' alt="" />
        <p className='text-[#C1D72D] text-2xl font-bold'>Toy Bazar</p>

      </div>
      <div className="navbar-end hidden lg:flex  lg:items-center">
        <ul className=" space-x-6 menu-horizontal px-1 flex items-center   font-bold">
          <li className='hover:text-[#C1D72D]'><Link to="/">Home</Link></li>
          <li className='hover:text-[#C1D72D]'><Link to="/allToys">All Toys</Link></li>
          {
            user && <>
              <li className='hover:text-[#C1D72D]'><Link to="/myToys">My Toys</Link></li>
              <li className='hover:text-[#C1D72D]'><Link to="/addToy">Add A Toys</Link></li>
            </>
          }
          <li className='hover:text-[#C1D72D]'><Link to="/blogs">Blogs</Link></li>
          {
            user ? <button className='btn primary-btn' onClick={handleLogOut}>Logout</button> :
              <Link to="/login"><button className='btn primary-btn' >Login</button></Link>
          }
        </ul>
      </div>

      {
        user && <div className="  cursor-pointer tooltip tooltip-bottom  " data-tip={user?.displayName}>
          <img src={user?.photoURL} className='rounded-full w-10 h-10' />
        </div>
      }

    </div>
  );
};

export default NavBar;