import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Login</h3>

                    <div className='mt-4 space-y-1.5'>
                        <span className='px-2.5'>Email</span>
                        <br />
                        <input type="email"
                            placeholder='Enter your email'
                            className='w-80 px-3 border rounded-md outline-none' />
                    </div>

                    {/* password */}

                    <div className='mt-4 space-y-1.5'>
                        <span className='px-2.5'>Password</span>
                        <br />
                        <input type="password"
                            placeholder='Enter your password'
                            className='w-80 px-3 border rounded-md outline-none' />
                    </div>

                    <div className='flex justify-between mt-3'>
                        <button className='bg-pink-500 text-white rounded px-3 py-1'>Login</button>
                        <p className='mt-2'>Not registered? <Link to='/signup' className="underline text-blue-500 hover:cursor-pointer" >SignUp</Link></p>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Login
