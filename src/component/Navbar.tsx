import bannerStack from '../assets/banner-stack.png'
const Navbar = () => {
    return (
        <div className="sticky top-0 z-40 bg-white">
            <div className="navbar min-h-16 shadow-lg">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Technology</a></li>
                            <li><a> Project</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>


                    <a className=" flex items-center gap-2">
                        <img
                            src={bannerStack}
                            alt="devStack logo"
                            className="w-12 h-12 object-contain"
                        />
                        <button className=" p-1.5 rounded-md  border-purple-600 text-purple-600 hover:bg-gray-300">
                            <span className=" font-bold bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">devStack</span>
                        </button>  </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <button className=" p-1.5 rounded-md font-bold  border-purple-600 text-purple-600 hover:bg-gray-300">       <li><a>Home</a></li></button>
                        <button className=" p-1.5 rounded-md font-bold border-purple-600 text-purple-600 hover:bg-gray-300" >   <li><a>Technology</a></li>  </button>
                        <button className=" p-1.5 rounded-md font-bold border-purple-600 text-purple-600 hover:bg-gray-300">  <li><a> Project</a></li></button>
                        <button className=" p-1.5 rounded-md font-bold border-purple-600 text-purple-600 hover:bg-gray-300">    <li><a>About</a></li></button>
                        <button className=" p-1.5 rounded-md font-bold  border-purple-600 text-purple-600 hover:bg-gray-300">     <li><a>Contact</a></li></button>

                    </ul>
                </div>



                <div className="navbar-end">
                    <a className="btn mr-1  rounded-md border border-purple-600 text-purple-600 hover:bg-gray-300">Sign In</a>
                    <a className='btn rounded-md border border-purple-600 text-purple-600 hover:bg-gray-300'>log Out</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;