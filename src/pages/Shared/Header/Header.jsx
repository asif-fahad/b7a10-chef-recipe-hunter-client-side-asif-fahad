import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Italian Chefs</Link>
                </div>
                <div className="flex-none gap-1 lg:gap-5">
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Home</NavLink>
                    <NavLink to='/blog' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Blog</NavLink>
                    {/* <NavLink to='/login' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Login</NavLink>
                    <NavLink to='/registration' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Registration</NavLink> */}
                    {/* <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div> */}
                    {user ? <>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div aria-label={user.displayName} title={user.displayName} className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                        <button onClick={handleLogOut} className='btn btn-success'>Logout</button>
                    </> : <>
                        <Link to='/login'><button className='btn btn-info'>Login</button></Link>
                    </>}
                </div>
            </div>
        </div>
    );
};

export default Header;