import React from 'react'

function SignUp() {
    return (
        <div>
            <div id="my_modal_3" >
                <div className="modal-box">
                    <form method="div">
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


                </div>
            </div>

        </div>
    )
}

export default SignUp
