import React, { useEffect, useState } from 'react'

const AuthDataShow = ({authMsg})=>{
    return(
        <div className='p-2'>
            <p className='my- text-lg font-semibold'>{authMsg.msg}</p>
            <p className='my-4 tracking-wide'>{authMsg.data}</p>
        </div>
    )
}

const JWTBasic = () => {

    const [authMsg, setAuthMsg] = useState('');
    const [inpValues, setInp] = useState({ name: '', passwd: '' })
    const [isToken , setToken] = useState(false);

    const getDashboardData = async (url) => {
        const token = localStorage.getItem('token');
            const response = await fetch(url,{
                headers:{
                    "Authorization" : token
                }
            });
            const jsonData = await response.json();
            setAuthMsg(jsonData);
    }

    const loginUser = async (e, url) => {
        e.preventDefault();
        if (!inpValues.name || !inpValues.passwd) {
            localStorage.removeItem('token');
            setToken(false);
            // return;
        }
        // console.log(inpValues);
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inpValues)
        });
        const jsonData = await response.json();
        setInp({ name: '', passwd: '' });

        const token = jsonData.token;
        if (token) {
            localStorage.setItem('token',token);
            setToken(true);
        }
    }

    const handleInpChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInp({ ...inpValues, [name]: value })
    }

    useEffect(()=>{
        if (localStorage.getItem('token') && localStorage.getItem('token').
        startsWith('Bearer ')) {
            setToken(true);
        }else{
            setToken(false)
        }
    },[])

    return (
        <div className='bg-blue-50 min-h-screen overflow-auto'>
            <div className='p-10'>
                <div className='w-[80%] md:w-[50%] lg:w-[30%] h-fit bg-white mx-auto
                rounded-md px-10 py-3 shadow-lg shadow-black'>
                    <h2 className='w-fit mx-auto py-2 font-bold
                    tracking-wider text-lg'>Register / Login </h2>
                    <form onSubmit={(e) => loginUser(e, 'http://localhost:5000/api/jwt/v1/login')}>
                        <div className='my-6'>
                            <label className='block'>Name</label>
                            <input type='text' value={inpValues.name} name='name'
                                onChange={(e) => handleInpChange(e)}
                                className='bg-blue-50 w-[100%] h-8 rounded-md p-2' />
                        </div>
                        <div className='my-6'>
                            <label className='block'>Password</label>
                            <input type='password' value={inpValues.passwd} name='passwd'
                                onChange={(e) => handleInpChange(e)}
                                className='bg-blue-50 w-[100%] h-8 rounded-md p-2' />
                        </div>
                        <button className='mb-2 w-[90%] translate-x-[5%]
                         bg-purple-700 py-1 text-white font-bold tracking-widest
                        px-2 rounded-md' type='submit'
                        >Submit Form</button>
                    </form>

                </div>
                <div className='w-[80%] md:w-[50%] lg:w-[30%] h-fit mx-auto my-10'>
                    <h3 className='w-fit mx-auto font-bold text-xl 
                    text-yellow-700 tracking-wider'>Dashboard</h3>
                    <p className={`w-[100% my-1 text-center ${isToken ?'text-green-500':'text-red-500'}  
                    font-semibold tracking-widest`}>
                    {isToken ? 'Token Present' :'Token not available' }</p>
                    <div className='w-[100%] my-4 rounded-md
                    min-h-[60px] p-2 bg-white tracking-wide text-sm break-words'>
                        {authMsg ? <AuthDataShow authMsg={authMsg} /> :''}
                    </div>
                    <button className='w-[90%] bg-blue-600 translate-x-[5%]
                    py-1 text-white font-semibold tracking-wider rounded-md'
                        onClick={() => getDashboardData('http://localhost:5000/api/jwt/v1/dashboard')}>
                        Get Data</button>
                </div>
            </div>
        </div>
    )
}

export default JWTBasic