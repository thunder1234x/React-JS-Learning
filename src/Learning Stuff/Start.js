import logo from './pictures/twitter-logo.ico';

const toggleLogin = () => {
    const login = document.getElementById('login');
    const reg = document.getElementById('reg');
    login.classList.add("hidden");
    reg.classList.remove("hidden");

}

const toggleReg = () => {
    const login = document.getElementById('login');
    const reg = document.getElementById('reg');
    reg.classList.add("hidden");
    login.classList.remove("hidden");
}

const NavBar = () => {
    return <section className="cont-nav flex justify-start md:justify-between items-center p-4  bg-black text-white">
        <div className="logo">
            <img className="w-10" src={logo} alt="logo" />
        </div>
        <div className="">
            <ul className="item-nav flex mx-8">
                <li className="mx-4 text-md hover:underline underline-offset-2 cursor-pointer hover:scale-110">Home</li>
                <li className="mx-4 text-md hover:underline underline-offset-2 cursor-pointer hover:scale-110">Products</li>
                <li className="mx-4 text-md hover:underline underline-offset-2 cursor-pointer hover:scale-110">About</li>
                <li className="mx-4 text-md hover:underline underline-offset-2 cursor-pointer hover:scale-110">Contact</li>
            </ul>
        </div>
    </section>

}

const DataForm = () => {
    return <section id="login" className="bg-white  md:mx-auto  m-10 p-6 rounded-md md:w-1/2">
        <h2 className="font-bold font-sans text-xl">Twitter Login</h2>
        <div className="flex flex-col">
            <input className="lg:w-1/2 h-9 border border-gray-700 my-5 px-1 outline-blue-600" type="text" placeholder="Type your user name" />
            <input className="lg:w-1/2 h-9  border border-gray-700 my-5 px-1 outline-red-600" type="password" placeholder="Type Password" />
            <button className="lg:w-1/2 bg-blue-500 text-white text-lg p-2 my-5 rounded-md hover:bg-purple-500">Log In </button>
        </div>
        <div className="lg-w-1/2">
            <button onClick={() => toggleLogin()} className="underline text-blue-700 hover:scale-110 cursor-pointer">Register </button>
            <span className="text-center"> with a new account</span>
        </div>
    </section>
}

const Registration = () => {
    return (
        <section id="reg" className="hidden bg-white rounded-md md:mx-auto  m-10 p-6 md:w-1/2">
            <h2 className="font-bold font-sans text-xl">Sign up with Twitter</h2>
            <div className="flex flex-col">
                <input className="lg:w-1/2 h-9 border border-gray-700 my-3 px-1 outline-blue-600" type="text" placeholder="Type your name" />
                <input className="lg:w-1/2 h-9 border border-gray-700 my-3 px-1 outline-blue-600" type="text" placeholder="Typer your user name" />
                <input className="lg:w-1/2 h-9 border border-gray-700 my-3 px-1 outline-blue-600" type="text" placeholder="Type your email address" />
                <input className="lg:w-1/2 h-9  border border-gray-700 my-3 px-1 outline-red-600" type="password" placeholder="Type Password" />
                <input className="lg:w-1/2 h-9 border border-gray-700 my-3 px-1 outline-blue-600" type="number" placeholder="Type your pin code" />
                <button className="lg:w-1/2 bg-green-500 text-white text-lg p-2 my-3 rounded-md hover:bg-green-800">Sign Up </button>
            </div>
            <div classList="w-fit mx-auto w-1/2">
            <span>Back to <button className="underline text-blue-700 hover:scale-110 cursor-pointer" onClick={() => toggleReg()}>Login</button></span>
            </div>  
        </section>
    )
}

const Start = () => {
    return (
        <div className="h-[100vh] bg-gradient-to-r from-purple-500 to-pink-500">
            <NavBar />
            <DataForm />
            <Registration />
        </div>
    )
}

export default Start;