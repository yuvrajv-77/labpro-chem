
import {  Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import FloatingButtons from '../components/FloatingButtons'


function RootLayout() {


    return (
        <div>
            <ScrollToTop />

            <Navbar />
            <Outlet />
            <Footer />

            <FloatingButtons />

        </div>
    )
}

export default RootLayout;