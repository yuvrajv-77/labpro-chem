import React, { useEffect, useState } from 'react'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { Button } from '@/components/ui/button'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { ArrowRight, CheckCircle, Headphones, PillBottle } from 'lucide-react'
import { motion } from 'motion/react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { ImagesSlider } from '@/components/ui/images-slider'
import { WordRotate } from '@/components/magicui/word-rotate'
import { Link, useNavigate } from 'react-router'

const heroSlides = [
    {
        image: '/ui_images/hero-banner1.jpg',
        lines: [
            "Driving Innovation with Quality Lab Chemicals",
            "Precision. Purity. Performance.",
            "LABPRO"
        ]
    },
    {
        image: '/ui_images/footer.png',
        lines: [
            "Your Trusted Partner in Laboratory Chemicals",
            "Quality You Can Rely On.",
            "LABPRO CHEM"
        ]
    },
    {
        image: '/ui_images/grid-chem.jpg',
        lines: [
            "Empowering Research, Enabling Progress",
            "Excellence in Every Batch.",
            "LABPRO CHEM"
        ]
    }
]

const herolines = [
    "Driving Innovation with Quality Lab Chemicals Precision.",
    "Your Trusted Partner in Laboratory Chemicals Quality You Can Rely On.",
    "Empowering Research, Enabling Progress Excellence in Every Batch."
]

const HomePage = () => {
    const [current, setCurrent] = useState(0)
    const [fade, setFade] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % heroSlides.length)
                setFade(true)
            }, 500) // fade out duration
        }, 4000) // change every 4 seconds
        return () => clearInterval(interval)
    }, []);


    const images = [
        "/ui_images/hero-banner1.jpg",
        // "/ui_images/footer.png",
        "/ui_images/grid-chem.jpg",
        "/ui_images/bannermin1.jpg",
        "/ui_images/hero.jpg",
    ];


    return (
        <main className=''>
            {/* hero section */}
            <section className={` `}>
                <ImagesSlider className="h-[400px] md:h-[550px] lg:h-[700px]" images={images}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -80,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        className="z-50 flex flex-col justify-center items-center"
                    >
                        <WordRotate
                            className="text-2xl lg:text-5xl font-semibold leading-9 space-mono tracking-tighter md:leading-16 px-10 md:px-0  lg:w-[700px] text-center text-white"
                            words={herolines}
                        />
                        {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text leading-20  text-white py-4">
                            Driving Innovation with Quality Lab Chemicals <br /> Precision. Purity. Performance.<br /> LABPRO
                        </motion.p> */}
                        <Button onClick={() => {navigate('/profile') }} type='button' size={"lg"} className='mt-2  cursor-pointer'>Read More <ArrowRight /></Button>

                    </motion.div>
                </ImagesSlider>
            </section>
            {/* <section
                className={`h-[400px] md:h-[550px] bg-cover bg-center transition-all duration-700`}
                style={{
                    backgroundImage: `url(${heroSlides[current].image})`
                }}
            >
                <div className='h-full bg-black/50 flex items-center justify-center'>
                    <div className={`flex items-start md:items-center flex-col gap-2 px-10 md:px-25 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                        <h1 className='text-white font-bold text-2xl md:text-4xl'>{heroSlides[current].lines[0]}</h1>
                        <h1 className='text-white font-bold text-xl md:text-4xl'>{heroSlides[current].lines[1]}</h1>
                        <h1 className='text-white font-bold text-xl md:text-4xl'>{heroSlides[current].lines[2]}</h1>
                        <Button type='button' size={"lg"} className='mt-5 cursor-pointer'>Read More <ArrowRight /></Button>
                    </div>
                </div>
            </section> */}

            {/* about section  */}
            <section className='bg-white mt-20 '>
                <div className='max-w-6xl mx-auto px-5 md:px-10 lg:px-0'>
                    <div className='flex flex-col md:flex-row justify-between gap-5 '>
                        <div className=' flex-1 flex flex-col item-center justify-between gap-5'>
                            <span className='text-center font-extrabold text-lg md:text-2xl flex gap-2 items-center justify-center uppercase'>
                                <h2 className='bg-primary text-white p-2 rounded-'>LABPRO</h2>
                                <h2 className='text-center'>CHEM</h2>
                            </span>
                            <div className='space-y-2   '>
                                <h4 className=' font-bold text-2xl'>Manufacturers of Laboratory Reagents and Fine Chemicals</h4>
                                <p className='text-justify font-medium'>At LabPro Chem, we are committed to delivering high-quality laboratory chemicals and fine reagents to scientific industries, research labs, pharmaceuticals, and educational institutions across India. With our extensive product range, reliable service, and customer-first approach, we have earned a reputation for excellence and trust.

                                </p>
                            </div>
                            <div className='flex justify-center'>
                                <Link to="/profile">
                                    <Button type='button' size={"lg"} className='mt-5 cursor-pointer'>Know More <ArrowRight /></Button>
                                </Link>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <img src="/Brand Logo.png" alt="" className='size-[300px] lg:size-[400px]' />
                        </div>
                    </div>
                </div>
            </section>


            {/* industries we serve */}
            <section className='bg-[url(./ui_images/grid-bg.jpg)] bg-cover bg-center my-20 py-20 md: relative'>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-none" />
                <div className='relative max-w-6xl mx-auto px-5 md:px-10 lg:px-0'>
                    <span className='text-center font-extrabold text-lg  md:text-2xl flex gap-2 items-center justify-center uppercase '>
                        <h2 className='bg-primary text-white p-2 rounded shadow-sm'>industries</h2>
                        <h2 className='text-center text-white '>we serve</h2>
                    </span>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-15">
                        {/* Card 1 */}
                        <div className="col-span-2 bg-cover bg-center rounded-xl overflow-hidden shadow-md h-60 hover:scale-[1.02]  hover:shadow-lg hover:outline-2 outline-primary  transition bg-[url(/ui_images/grid-food.jpg)]" >
                            <div className="relative z-10 p-4 bg-gradient-to-b from-black/60 to-transparent    text-white font-bold text-xl">
                                Food & Beverage Testing Labs
                            </div>
                        </div>
                        <div className=" bg-cover bg-center rounded-xl overflow-hidden shadow-md h-60 hover:scale-[1.02] transition hover:shadow-lg hover:outline-2 outline-primary  bg-[url(/ui_images/grid-bio.jpg)]" >
                            <div className="relative z-10 p-4 bg-gradient-to-b from-black/60 to-transparent    text-white font-bold text-xl">
                                Biotechnology
                            </div>
                        </div>
                        <div className=" bg-cover bg-center rounded-xl overflow-hidden shadow-md h-60 hover:scale-[1.02] transition hover:shadow-lg hover:outline-2 outline-primary   bg-[url(/ui_images/grid-chem.jpg)]" >
                            <div className="relative z-10 p-4 bg-gradient-to-b from-black/60 to-transparent    text-white font-bold text-xl">
                                Chemical Manufacturing Units
                            </div>
                        </div>
                        <div className=" bg-cover bg-center rounded-xl overflow-hidden shadow-md h-60 hover:scale-[1.02] transition hover:shadow-lg hover:outline-2 outline-primary   bg-[url(/ui_images/grid-env.jpg)]" >
                            <div className="relative z-10 p-4 bg-gradient-to-b from-black/60 to-transparent  text-white font-bold text-xl">
                                Environmental Research
                            </div>
                        </div>
                        <div className=" bg-cover bg-center rounded-xl overflow-hidden shadow-md h-60 hover:scale-[1.02] transition hover:shadow-lg hover:outline-2 outline-primary   bg-[url(/ui_images/grid-pharm.jpg)]" >
                            <div className="relative z-10 p-4 bg-gradient-to-b from-black/60 to-transparent  text-white font-bold text-xl">
                                Pharmaceuticals
                            </div>
                        </div>
                        <div className="col-span-2 bg-cover bg-center rounded-xl overflow-hidden shadow-md h-60 hover:scale-[1.02] transition hover:shadow-lg hover:outline-2 outline-primary   bg-[url(/ui_images/grid-edu.jpg)]" >
                            <div className="relative z-10 p-4 bg-gradient-to-b from-black/60 to-transparent  text-white font-bold text-xl">
                                Educational Institutions
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* why choose us  */}
            <section className='bg-white my-20 '>
                <div className='max-w-6xl mx-auto px-5 md:px-10 lg:px-0'>
                    <span className='text-center font-extrabold text-lg md:text-2xl flex gap-2 items-center justify-center uppercase'>
                        <h2 className='text-center '>why</h2>
                        <h2 className='bg-primary text-white p-2 rounded-'>choose us</h2>
                    </span>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mt-15'>

                        <div className='group cursor-default hover:scale-102 transition'>
                            <div className='bg-[url(/ui_images/why1.jpg)] h-[230px] bg-cover bg-center flex  items-center rounded-xl overflow-hidden '>
                                <p className='text-center text-white items-center justify-center font-bold text-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100  flex transition-all duration-200 bg-black/60 h-full'
                                    tabIndex={0}>All our products are backed by COAs and meet stringent international quality standards.
                                </p>
                            </div>
                            <p className='text-center font-extrabold text-xl mt-2 flex gap-2 items-center justify-center group-hover:text-primary'><CheckCircle />Certified Quality</p>
                        </div>
                        <div className='group cursor-default hover:scale-102 transition'>
                            <div className='bg-[url(/ui_images/why2.jpg)] h-[230px] bg-cover bg-center flex  items-center rounded-xl overflow-hidden '>
                                <p className='text-center text-white  items-center justify-center font-bold text-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 flex transition-all duration-200 bg-black/60 h-full'
                                    tabIndex={0}> From basic laboratory reagents to advanced research chemicals, we stock over 2,000+ chemical compounds.
                                </p>
                            </div>
                            <p className='text-center font-extrabold text-xl mt-2 flex gap-2 items-center justify-center group-hover:text-primary'><PillBottle />Wide Products Range</p>
                        </div>
                        <div className='group cursor-default hover:scale-102 transition'>
                            <div className='bg-[url(/ui_images/hero.jpg)] h-[230px] bg-cover bg-center flex  items-center rounded-xl overflow-hidden '>
                                <p className='text-center text-white  items-center justify-center font-bold text-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 flex transition-all duration-200 bg-black/60 h-full'
                                    tabIndex={1}>Experienced chemical experts ready to assist with specifications, documentation, and custom requirements.
                                </p>
                            </div>
                            <p className='text-center font-extrabold text-xl mt-2 flex gap-2 items-center justify-center group-hover:text-primary'><Headphones />Customer-Centric Support</p>
                        </div>
                        <div className='group cursor-default hover:scale-102 transition'>
                            <div className='bg-[url(/ui_images/why5.jpg)] h-[230px] bg-cover bg-center flex  items-center rounded-xl overflow-hidden '>
                                <p className='text-center text-white items-center justify-center font-bold text-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100  flex transition-all duration-200 bg-black/60 h-full'
                                    tabIndex={0}>All our products are backed by COAs and meet stringent international quality standards.
                                </p>
                            </div>
                            <p className='text-center font-extrabold text-xl mt-2 flex gap-2 items-center justify-center group-hover:text-primary'><CheckCircle />Premium Chemicals</p>
                        </div>
                        <div className='group cursor-default hover:scale-102 transition'>
                            <div className='bg-[url(/ui_images/why6.jpg)] h-[230px] bg-cover bg-center flex  items-center rounded-xl overflow-hidden '>
                                <p className='text-center text-white  items-center justify-center font-bold text-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 flex transition-all duration-200 bg-black/60 h-full'
                                    tabIndex={0}> From basic laboratory reagents to advanced research chemicals, we stock over 2,000+ chemical compounds.
                                </p>
                            </div>
                            <p className='text-center font-extrabold text-xl mt-2 flex gap-2 items-center justify-center group-hover:text-primary'><PillBottle />Fast Dispatch</p>
                        </div>
                        <div className='group cursor-default hover:scale-102 transition'>
                            <div className='bg-[url(/ui_images/why7.jpg)] h-[230px] bg-cover bg-center flex  items-center rounded-xl overflow-hidden '>
                                <p className='text-center text-white  items-center justify-center font-bold text-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 flex transition-all duration-200 bg-black/60 h-full'
                                    tabIndex={1}>Experienced chemical experts ready to assist with specifications, documentation, and custom requirements.
                                </p>
                            </div>
                            <p className='text-center font-extrabold text-xl mt-2 flex gap-2 items-center justify-center group-hover:text-primary'><Headphones /> Custom Packing & Labeling</p>
                        </div>
                    </div>

                    {/* number ticker */}
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-15 md:gap-4 py-10  rounded-xl mt-15'>
                        <div className=' md:border-x flex items-center flex-col gap-5'>
                            <span className='text-4xl md:text-5xl font-bold flex items-center'><NumberTicker
                                value={7000} startValue={1000}
                                className="whitespace-pre-wrap tracking-tighter text-black"
                            />+</span>
                            <p className='text-center font-bold text-lg md:text-2xl'>Chemicals</p>
                        </div>
                        <div className='md:border-r flex items-center flex-col gap-5'>
                            <span className='text-4xl md:text-5xl font-bold flex items-center'><NumberTicker
                                value={12}
                                className="whitespace-pre-wrap tracking-tighter text-black"
                            />+</span>
                            <p className='text-center font-bold text-lg md:text-2xl'>Events / Year</p>
                        </div>
                        <div className='md:border-r flex items-center flex-col gap-5'>
                            <span className='text-4xl md:text-5xl font-bold flex items-center'><NumberTicker
                                value={20}
                                className="whitespace-pre-wrap tracking-tighter text-black"
                            />+</span>
                            <p className='text-center font-bold text-lg md:text-2xl'>Certifications</p>
                        </div>
                        <div className='md:border-r flex items-center flex-col gap-5'>
                            <span className='text-4xl md:text-5xl font-bold flex items-center'><NumberTicker
                                value={130}
                                className="whitespace-pre-wrap tracking-tighter text-black"
                            />+</span>
                            <p className='text-center font-bold text-lg md:text-2xl'>Countries Network</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* event gallery  */}
            <section className=' my-20 '>
                <span className='text-center font-extrabold text-lg md:text-2xl flex gap-2 items-center justify-center uppercase'>
                    <h2 className='bg-primary text-white p-2 rounded-'>Events </h2>
                    <h2 className='text-center  '>WorldWide</h2>
                </span>
                <div className="py-10 rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={galleryImages}
                        direction="right"
                        speed="normal"
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <Link to="/gallery">
                        <Button>View Gallery <ArrowRight /></Button>
                    </Link>
                </div>
            </section>

            {/* testimonials */}
            <section className='my-20 py-20 bg-violet-50'>
                <span className='text-center font-extrabold text-lg md:text-2xl flex gap-2 items-center justify-center uppercase'>
                    <h2 className='text-center '>What Our</h2>
                    <h2 className='bg-primary text-white p-2 rounded-'>Clients Says </h2>
                </span>

                <Carousel className=" max-w-screen md:max-w-6xl mx-auto  mt-15"
                    opts={{
                        align: "start",
                        loop: true,
                    }} plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}>
                    <CarouselContent>
                        {testimonials.map((item, index) => (
                            <CarouselItem key={index}>
                                <div className="p-10  space-y-6">
                                    <p className='font-extrabold text-2xl text-center'>" {item.title} "</p>
                                    <p className='font-bold text-lg text-center'>{item.name}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='hidden ' />
                    <CarouselNext className='hidden' />
                </Carousel>
            </section>


            {/* Certifications */}
            {/* <section className='my-20 py-20 bg-white'>
                <span className='text-center font-extrabold text-lg md:text-2xl flex gap-2 items-center justify-center uppercase'>
                    <h2 className='text-center'>our</h2>
                    <h2 className='bg-primary text-white p-2 rounded-'>Certifications </h2>
                </span>

                <Carousel className="max-w-screen md:max-w-6xl mx-auto  mt-15"
                    opts={{
                        align: "start",
                        loop: true,
                    }} plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}>
                    <CarouselContent>
                        {certifications.map((item, index) => (
                            <CarouselItem key={index} className='basis-1/2 md:basis:1/3 lg:basis-1/4'>
                                <div className="p-10  space-y-6">
                                    <img src={item.image} className='w-48' alt={item.title} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='hidden lg:flex' />
                    <CarouselNext className='hidden lg:flex' />
                </Carousel>
            </section> */}



        </main>
    )
}

export default HomePage;

const testimonials = [
    {
        image: "/assets/why1.jpg",
        title: "Labpro Chem's quality is unmatched. Highly recommended!",
        name: "Arun Jautali",
    },
    {
        image: "/assets/grid-food.jpg",
        title: "Excellent customer service and fast delivery every time.",
        name: "Priya Sharma",
    },
    {
        image: "/assets/grid-edu.jpg",
        title: "Their chemicals helped us achieve accurate research results.",
        name: "Dr. Rakesh Mehta",
    },
    {
        image: "/assets/why3.jpg",
        title: "Wide product range and reliable support staff.",
        name: "Sneha Kulkarni",
    },
    {
        image: "/assets/grid-env.jpg",
        title: "Consistent quality and documentation for every batch.",
        name: "Vikram Patel",
    },
    {
        image: "/assets/grid-pharm.jpg",
        title: "Labpro Chem is our trusted partner for all lab needs.",
        name: "Vijay Mallya",
    },
    {
        image: "/assets/why2.jpg",
        title: "Prompt responses and technical expertise are impressive.",
        name: "Rahul Verma",
    },
    {
        image: "/assets/grid-chem.jpg",
        title: "We appreciate their commitment to safety and standards.",
        name: "Meera Joshi",
    },
    {
        image: "/assets/grid-edu.jpg",
        title: "Our institution relies on Labpro Chem for pure reagents.",
        name: "Prof. S. Nair",
    },
    {
        image: "/assets/why4.jpg",
        title: "Great experience with custom chemical blends.",
        name: "Karan Singh",
    }
];

const certifications = [
    {
        image: '/images/certificates/cert1.png',
        title: 'ISO 9001:2015'
    },
    {
        image: '/images/certificates/cert2.png',
        title: 'ISO 9001:2015'
    },
    {
        image: '/images/certificates/cert3.png',
        title: 'ISO 9001:2015'
    },
    {
        image: '/images/certificates/cert4.png',
        title: 'ISO 9001:2015'
    },
    {
        image: '/images/certificates/cert2.png',
        title: 'ISO 9001:2015'
    }
];

const galleryImages = [
    {
        image: '/images/gallery/gallery (1).png',
        title: ''
    },
    {
        image: '/images/gallery/gallery (2).png',
        title: ''
    },
    {
        image: '/images/gallery/gallery (5).jpg',
        title: ''
    },
    {
        image: '/images/gallery/gallery (3).png',
        title: ''
    },
    {
        image: '/images/gallery/gallery (4).jpg',
        title: ''
    },
 
];
