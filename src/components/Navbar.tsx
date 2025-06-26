import React from 'react'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { CheckSquare, CheckSquare2, Mail, Menu, Search, X } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from './ui/button'
import { motion, AnimatePresence } from "framer-motion";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/profile' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Laboratory Chemicals', href: '/chemicals' },
    { name: 'CoAs', href: '/coa' },

    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
]
const Navbar = () => {

    const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false)
    return (
        <header className='bg-white border-b border-gray-800'>
            <div className=' '>

                <div className='bg-primary py-1 '>
                    <div className='md:max-w-6xl text-white  mx-auto  flex items-center justify-between '>
                        <p className='hidden md:flex text-sm items-center gap-2 font-bold '> <Mail size={15} />
                            info@labprochemicals.co.in</p>
                        <Input placeholder='Search 7000+ Chemicals' className='w-70 h-8 border-white'  />

                        <Select defaultValue='inr'>
                            <SelectTrigger className="w-[90px] h-5" size='sm'>
                                <SelectValue placeholder="Currency" />
                            </SelectTrigger>
                            <SelectContent >
                                <SelectItem value="inr">₹ INR</SelectItem>
                                <SelectItem value="usd">$ USD</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* brand */}
                <div className='px-3 lg:px-0 my-5  lg:max-w-6xl mx-auto flex md:flex-row flex-col items-center  justify-between '>
                    <div className='flex  w-full lg:w-auto items-center justify- gap-2' >
                        <Button size={'icon'} className='bg-primary md:hidden text-white ' type='button' onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                            <Menu size={23} />
                        </Button>
                        <div className='flex items-center gap-2'>
                            <span className=' brightness-140 border-primary p-1'>
                                <img src="/Brand Logo.png" className='size-14' alt="" />
                            </span>
                            <span>
                                <h1 className='text-lg md:text-2xl font-black text-primary'>LABPRO CHEMICALS</h1>
                                <p className='text-[9px] font-semibold md:text-xs'>High-Purity Chemicals. On Time. Every Time</p>
                            </span>
                        </div>

                    </div>

                    {/* Mobile Navigation Drawer */}
                    <AnimatePresence>
                        {isMobileNavOpen && (
                            <motion.aside
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100%' }}
                                transition={{ type: 'tween', duration: 0.3 }}
                                className="fixed top-0 left-0 z-50 w-screen h-full bg-primary shadow-lg flex flex-col"
                            >
                                <div className="flex  items-center justify-between p-4 border-b">
                                    <div className="flex items-center gap-2">
                                        <span className='border border-primary p-1'>
                                            <img src="/Brand Logo.png" className='size-10 rounded-sm' alt="" />
                                        </span>
                                        <h1 className='text-lg font-extrabold text-white'>LABPRO CHEMICALS</h1>
                                    </div>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        onClick={() => setIsMobileNavOpen(false)}
                                        aria-label="Close menu"
                                    >
                                        <X size={21} />
                                    </Button>
                                </div>
                                <nav className="flex flex-col gap-6 p-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.href}
                                            className="text-white font-semibold py-2 px-2 rounded hover:bg-violet-100"
                                            onClick={() => setIsMobileNavOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </nav>
                            </motion.aside>
                        )}
                    </AnimatePresence>

                    <div className='flex mx-auto md:mx-0 item-center md:gap-10 md:mt-0 mt-5 gap-4 text-[8px] md:text-base'>
                        <span className='flex flex-col items-start md:items-end font-semibold'>
                            <p className='flex items-center gap-1'><CheckSquare2 size={20} /> Certified</p>
                            <p>ISO 9001:2008 + more</p>
                        </span>
                        <span className='flex flex-col items-start md:items-end font-semibold'>
                            <p className='flex items-center gap-1'><CheckSquare2 size={20} /> The Best</p>
                            <p>Quality Control</p>
                        </span>
                        <span className='flex flex-col items-start md:items-end font-semibold'>
                            <p className='flex items-center gap-1'><CheckSquare2 size={20} /> Certified</p>
                            <p>ISO 9001:2008 + more</p>
                        </span>


                    </div>
                </div>



                {/* navigation */}
                <nav className='w-full bg-violet-800  hidden md:block '>
                    <div className='max-w-6xl mx-auto flex items-center justify-between  py-3'>


                        {/* <div className='flex items-center gap-3 justify-'>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className='text-white px-3 py-2  font-bold hover:text-violet-400'>
                                    {link.name}
                                </Link>
                            ))}
                        </div> */}
                        <NavigationMenu viewport={false} className=''>
                            <NavigationMenuList className=' text-white' >

                                <NavigationMenuItem className=''>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to="/">Home</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to="/profile">About</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Laboratory Chemicals</NavigationMenuTrigger>
                                    <NavigationMenuContent className='  '>
                                        <ul className=' p-1 font-bold  w-64 text-sm'>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link to="/chemicals">Browse By Category</Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link to="/chemicals/organic">Organic Chemicals</Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link to="/chemicals/inorganic">Inorganic Chemicals</Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to="/downloads">Downloads</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to="/coa">COA</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to="/events">Events</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to="/gallery">Gallery</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to="/contact">Contact</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>


                            </NavigationMenuList>
                        </NavigationMenu>

                        <span className='text-white p-2 hover:bg-white rounded-lg hover:text-black cursor-pointer'><Search size={20} /></span>
                    </div>
                </nav>




            </div>


        </header>
    )
}

export default Navbar