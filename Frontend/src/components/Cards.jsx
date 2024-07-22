import React from 'react'


function Cards({ item }) {

    return (
        <div className='mt-4 my-3 p-3 mx-8'>
            <div className="card  bg-base-100 w-80 shadow-xl m-6s ">
                <figure >
                    <img
                        src={item.image}
                        alt="Books..." />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Books
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions  justify-between">
                        <div className="badge badge-outline cursor-pointer p-2 hover:bg-pink-500 hover:text-white duration:200">{item.price}</div>
                        <div className="badge badge-outline cursor-pointer p-3 hover:bg-pink-500 hover:text-white duration:200">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
