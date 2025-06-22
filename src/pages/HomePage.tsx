import { NumberTicker } from '@/components/magicui/number-ticker'
import { Button } from '@/components/ui/button'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { ArrowRight, CheckCircle, Headphones, PillBottle } from 'lucide-react'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import FloatingButtons from '@/components/FloatingButtons'



const HomePage = () => {
    return (
        <main className=''>
            {/* hero section */}
            <section className="bg-[url(./assets/hero-banner1.jpg)] h-[400px] md:h-[550px] bg-cover  bg-center ">
                <div className='h-full bg-black/50 flex items-center justify-center'>
                    <div className=' flex items-start md:items-center flex-col gap-2 px-10 md:px-25'>
                        <h1 className='text-white font-bold text-2xl md:text-4xl'> Driving Innovation with Quality Lab Chemicals</h1>
                        <h1 className='text-white font-bold text-xl md:text-4xl'>Precision. Purity. Performance.</h1>
                        <h1 className='text-white font-bold text-xl md:text-4xl'>LABPRO</h1>
                        <Button type='button' size={"lg"} className='mt-5 cursor-pointer'>Read More <ArrowRight /></Button>
                    </div>
                </div>
            </section>

            {/* about section  */}
            <section className='bg-white mt-20 '>
                <div className='max-w-6xl mx-auto px-5 md:px-0'>
                    <div className='flex flex-col md:flex-row justify-between gap-5 '>
                        <div className=' flex-1 flex flex-col item-center justify-between gap-5'>
                            <span className='text-center font-extrabold text-2xl flex gap-2 items-center justify-center'>
                                <h2 className='bg-primary text-white p-2 rounded-md'>LABPRO</h2>
                                <h2 className='text-center  text-2xl'>CHEM</h2>
                            </span>
                            <div className='space-y-2   '>
                                <h4 className=' font-bold text-2xl'>Manufacturers of Laboratory Reagents and Fine Chemicals</h4>
                                <p className='text-justify font-medium'>Labpro Chem is a trusted name in the chemical industry, dedicated to supplying high-quality laboratory and industrial chemicals to clients across India and beyond.
                                    <br />At Labpro Chem, we specialize in providing high-quality laboratory chemicals and reagents to research institutions, industries, academic laboratories, and healthcare sectors across India and beyond.
                                    <br /> With a commitment to precision, purity, and performance, we offer an extensive range of analytical-grade, AR/GR, and custom-blended chemicals to meet your every scientific need.
                                </p>
                            </div>
                            <div className='flex justify-center'>
                                <Button type='button' size={"lg"} className='mt-5 cursor-pointer'>Know More <ArrowRight /></Button>
                            </div>
                        </div>
                        <div className=''>
                            <img src="/Brand Logo.png" alt="" className='size-[400px]' />
                        </div>
                    </div>
                </div>
            </section>


            {/* industries we serve */}
            <section className='bg-[url(./assets/grid-bg.jpg)] bg-cover bg-center my-20 py-20 relative'>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-none" />
                <div className='relative max-w-6xl mx-auto px-5 md:px-0'>
                    <span className='text-center font-extrabold text-2xl flex gap-2 items-center justify-center uppercase '>
                        <h2 className='bg-primary text-white p-2 rounded-md shadow-sm'>industries</h2>
                        <h2 className='text-center text-white text-2xl'>we serve</h2>
                    </span>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-15">
                        {/* Card 1 */}
                        <div className="col-span-2 bg-cover bg-center rounded-xl overflow-hidden shadow-md h-60 hover:scale-[1.02]  hover:shadow-lg hover:outline-2 outline-primary  transition bg-[url(./assets/grid-food.jpg)]" >
                            <div className="relative z-10 p-4 bg-gradient-to-b from-black/60 to-transparent    text-white font-bold text-xl">
                                Food & Beverage Testing Labs
                            </div>
                        </div>
                        <div className=" bg-cover bg-center rounded-xl overflow-hidden shadow-md h-60 hover:scale-[1.02] transition hover:shadow-lg hover:outline-2 outline-primary  bg-[url(./assets/grid-bio.jpg)]" >
                            <div className="relative z-10 p-4 bg-gradient-to-b from-black/60 to-transparent    text-white font-bold text-xl">
                                Biotechnology
                            </div>
                        </div>
                        <div className=" bg-cover bg-center rounded-xl overflow-hidden shadow-md h-60 hover:scale-[1.02] transition hover:shadow-lg hover:outline-2 outline-primary   bg-[url(./assets/grid-chem.jpg)]" >
                            <div className="relative z-10 p-4 bg-gradient-to-b from-black/60 to-transparent    text-white font-bold text-xl">
                                Chemical Manufacturing Units
                            </div>
                        </div>
                        <div className=" bg-cover bg-center rounded-xl overflow-hidden shadow-md h-60 hover:scale-[1.02] transition hover:shadow-lg hover:outline-2 outline-primary   bg-[url(./assets/grid-env.jpg)]" >
                            <div className="relative z-10 p-4 bg-gradient-to-b from-black/60 to-transparent  text-white font-bold text-xl">
                                Environmental Research
                            </div>
                        </div>
                        <div className=" bg-cover bg-center rounded-xl overflow-hidden shadow-md h-60 hover:scale-[1.02] transition hover:shadow-lg hover:outline-2 outline-primary   bg-[url(./assets/grid-pharm.jpg)]" >
                            <div className="relative z-10 p-4 bg-gradient-to-b from-black/60 to-transparent  text-white font-bold text-xl">
                                Pharmaceuticals
                            </div>
                        </div>
                        <div className="col-span-2 bg-cover bg-center rounded-xl overflow-hidden shadow-md h-60 hover:scale-[1.02] transition hover:shadow-lg hover:outline-2 outline-primary   bg-[url(./assets/grid-edu.jpg)]" >
                            <div className="relative z-10 p-4 bg-gradient-to-b from-black/60 to-transparent  text-white font-bold text-xl">
                                Educational Institutions
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* why choose us  */}
            <section className='bg-white my-20 '>
                <div className='max-w-6xl mx-auto px-5 md:px-0'>
                    <span className='text-center font-extrabold text-2xl flex gap-2 items-center justify-center'>
                        <h2 className='bg-primary text-white p-2 rounded-md'>WHY</h2>
                        <h2 className='text-center  text-2xl'>CHOOSE US</h2>
                    </span>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mt-15'>

                        <div className='group cursor-default hover:scale-102 transition'>
                            <div className='bg-[url(./assets/why1.jpg)] h-[230px] bg-cover bg-center flex  items-center rounded-xl overflow-hidden '>
                                <p className='text-center text-white  items-center justify-center font-bold text-lg opacity-0 group-hover:opacity-100 flex transition-all duration-200 bg-black/60 h-full'>All our products are backed by COAs and meet stringent international quality standards.
                                </p>
                            </div>
                            <p className='text-center font-extrabold text-xl mt-2 flex gap-2 items-center justify-center group-hover:text-primary'><CheckCircle />Certified Quality</p>
                        </div>
                        <div className='group cursor-default hover:scale-102 transition'>
                            <div className='bg-[url(./assets/why2.jpg)] h-[230px] bg-cover bg-center flex  items-center rounded-xl overflow-hidden '>
                                <p className='text-center text-white  items-center justify-center font-bold text-lg opacity-0 group-hover:opacity-100 flex transition-all duration-200 bg-black/60 h-full'> From basic laboratory reagents to advanced research chemicals, we stock over 2,000+ chemical compounds.
                                </p>
                            </div>
                            <p className='text-center font-extrabold text-xl mt-2 flex gap-2 items-center justify-center group-hover:text-primary'><PillBottle />Wide Products Range</p>
                        </div>
                        <div className='group cursor-default hover:scale-102 transition'>
                            <div className='bg-[url(./assets/why4.jpg)] h-[230px] bg-cover bg-center flex  items-center rounded-xl overflow-hidden '>
                                <p className='text-center text-white  items-center justify-center font-bold text-lg opacity-0 group-hover:opacity-100 flex transition-all duration-200 bg-black/60 h-full'>Experienced chemical experts ready to assist with specifications, documentation, and custom requirements.
                                </p>
                            </div>
                            <p className='text-center font-extrabold text-xl mt-2 flex gap-2 items-center justify-center group-hover:text-primary'><Headphones />Customer-Centric Support</p>
                        </div>
                    </div>

                    {/* number ticker */}
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-15 md:gap-4 py-10  rounded-xl mt-15'>
                        <div className=' md:border-x flex items-center flex-col gap-5'>
                            <span className='text-4xl md:text-5xl font-bold flex items-center'><NumberTicker
                                value={13000} startValue={100}
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
                <span className='text-center font-extrabold text-2xl flex gap-2 items-center justify-center uppercase'>
                    <h2 className='bg-primary text-white p-2 rounded-md'>Events </h2>
                    <h2 className='text-center  text-2xl'>WorldWide</h2>
                </span>
                <div className="py-10 rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={events}
                        direction="right"
                        speed="normal"
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <Button>View Gallery <ArrowRight /></Button>
                </div>
            </section>

            {/* testimonials */}
            <section className='my-20 py-20 bg-violet-50'>
                <span className='text-center font-extrabold text-2xl flex gap-2 items-center justify-center uppercase'>
                    <h2 className='text-center  text-2xl'>What Our</h2>
                    <h2 className='bg-primary text-white p-2 rounded-md'>Clients Says </h2>
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
            <section className='my-20 py-20 bg-white'>
                <span className='text-center font-extrabold text-2xl flex gap-2 items-center justify-center uppercase'>
                    <h2 className='text-center  text-2xl'>our</h2>
                    <h2 className='bg-primary text-white p-2 rounded-md'>Certifications </h2>
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
                    <CarouselPrevious className='hidden md:flex' />
                    <CarouselNext className='hidden md:flex' />
                </Carousel>
            </section>

           
           
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
        name: "Dr. Anjali Rao",
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
        image: 'src/assets/cert1.png',
        title: 'ISO 9001:2015'
    },
    {
        image: 'src/assets/cert2.png',
        title: 'ISO 9001:2015'
    },
    {
        image: 'src/assets/cert3.png',
        title: 'ISO 9001:2015'
    },
    {
        image: 'src/assets/cert4.png',
        title: 'ISO 9001:2015'
    },
    {
        image: 'src/assets/cert2.png',
        title: 'ISO 9001:2015'
    }
];

const events = [
    {
        image: "src/assets/why1.jpg",
        title: "Zimbabwe",
    },
    {
        image: "src/assets/grid-food.jpg",
        title: "Australia",
    },
    {
        image: "src/assets/grid-edu.jpg",
        title: "Malaysia",
    },
    {
        image: "src/assets/why3.jpg",
        title: "Bangladesh",
    },
    {
        image: "src/assets/grid-env.jpg",
        title: "Saudi Arabia",
    },
];
