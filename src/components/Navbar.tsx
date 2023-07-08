const Navbar = () => {
    return (
        <nav className="flex justify-between px-20 text-white items-center">
            <div className="flex items-center py-12 space-x-2 font-sans font-semibold text-xl">
                <img src="/umar.jpg" alt="umar profile pic" className="h-12 w-12 rounded-full" />
                <h3>Umar Arshad</h3>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </div>
        </nav>
    )
}

export default Navbar;