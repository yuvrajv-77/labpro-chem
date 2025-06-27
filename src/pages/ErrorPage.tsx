import React from 'react'

const ErrorPage = () => {
  return (
    <main className='flex items-center justify-center h-screen bg-gray-100'>
        <div className='text-center'>
            <p className='mt-4 text-lg text-gray-700'>The <strong> Not Found </strong> Error</p>
            <img src="/ui_images/page_not_found.svg" alt="" />
            <p className='mt-2 text-sm text-gray-500'>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
        </div>
    </main>
  )
}

export default ErrorPage