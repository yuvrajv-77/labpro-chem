import React from 'react'
import  labprochem from '../data/labprochem.json'
const Contact = () => {
    return (
        <main>
            <section className='max-w-6xl mx-auto px-4 lg:px-0 py-20'>
                <span className='text-center font-extrabold text-lg md:text-2xl flex gap-2 items-center justify-center uppercase'>
                    <h2 className='bg-primary text-white p-2 '>Contact</h2>
                    <h2 className='text-center '>us</h2>
                </span>

                <div className='mt-10 text-gray-700'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <div className='flex flex-col gap-4 bg-primary/10 p-10 rounded-lg'>
                            <h3 className='text-lg font-bold text-primary'>Contact Information</h3>
                            <p className='text-sm'>For inquiries, please reach out to us at:</p>
                            <p className='text-sm'>Email: <a href="mailto:labprochem1712@gmail.com" className='text-primary'>{labprochem[0].email}</a></p>
                            <p className='text-sm'>Phone: <a href="tel:+919167157018 " className='text-primary'>{labprochem[0].phone} </a></p>
                        </div>
                        <div className='flex flex-col gap-4 bg-primary/10 p-10 rounded-lg'>
                            <h3 className='text-lg  font-bold text-primary'>Office Address</h3>
                            <p className='text-sm leading-9'>{labprochem[0].address}</p>
                          
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact