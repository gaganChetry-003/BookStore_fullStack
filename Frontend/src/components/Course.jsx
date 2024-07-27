import React, { useState, useEffect } from 'react'
import Cards from './Cards'

import axios from "axios";
import { Link } from 'react-router-dom'

function Course() {

    const [book, setBook] = useState([])

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data)
            } catch (error) {
                console.log(error);

            }

        }
        getBook();
    }, []);


    return (
        <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-10 items-center justify-center text-center '>
                <h1 className="text-2xl">We are delighted to have you <span className='text-pink-700'>here!</span>


                </h1>
                <p className='mt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque, labore cupiditate ipsum quis magni repellendus, maiores assumenda laborum tempora minima aliquam modi nemo facilis debitis possimus ea harum, saepe delectus rerum! Quidem aspernatur at, libero, sit dignissimos id quasi ipsum cumque sapiente quaerat debitis natus alias reprehenderit amet totam? Soluta fugit, nulla repudiandae, saepe delectus natus veritatis ad quibusdam quaerat neque in reiciendis tempore voluptatum voluptates nesciunt, odit ducimus inventore doloremque iure esse. Molestiae quaerat laborum possimus repudiandae dolores.</p>
                <Link to='/'>
                    <button className=' mt-3 bg-pink-500 text-white px-4 py-1 rounded-md hover:cursor-pointer bg-pink-600'>Back</button>

                </Link>
            </div>
            <div className='flex justify-around wrap'>
                {
                    book.map((item) => (
                        <Cards key={item.id} item={item} />

                    ))
                }
            </div>
        </div>

    )
}

export default Course
