import { Button } from '@/components/ui/button'
import { Maximize, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { motion } from "motion/react"

const certificateImages = [
    {
        image: '/images/certificates/iso-9001-2015.new2.jpg',
        title: 'Certificate of ISO 9001:2015'
    },
    {
        image: '/images/certificates/iso-9001-2015.new2.jpg',
        title: 'Certificate of ISO 9001:2015'
    },
    {
        image: '/images/certificates/iso-9001-2015.new.jpg',
        title: 'Certificate of ISO 9001:2015'
    },
    {
        image: '/images/certificates/iso-9001-2015.new3.jpg',
        title: 'Certificate of ISO 9001:2015'
    },

    {
        image: '/images/certificates/iso-9001-2015.new3.jpg',
        title: 'Certificate of ISO 9001:2015'
    },
    {
        image: '/images/certificates/iso-9001-2015.new.jpg',
        title: 'Certificate of ISO 9001:2015'
    },
]

const Certifications = () => {

    const [showCarousel, setShowCarousel] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [carouselApi, setCarouselApi] = useState<any>(null)

    // When selectedIndex changes, scroll carousel to that slide
    React.useEffect(() => {
        if (showCarousel && carouselApi) {
            carouselApi.scrollTo(selectedIndex)
        }
    }, [showCarousel, selectedIndex, carouselApi])


    return (
        <main className='bg-neutral-50'>
            <section className='max-w-6xl mx-auto py-20 px-5 md:px-0'>

                <span className='text-center font-extrabold text-lg md:text-2xl flex gap-2 items-center justify-center uppercase'>
                    <h2 className='text-center'>Our</h2>
                    <h2 className='bg-primary text-white p-2 rounded-md'>Certifications</h2>
                </span>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-20'>
                    {
                        certificateImages.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className='space-y-2 '
                                key={index}
                                onClick={() => { setShowCarousel(true); setSelectedIndex(index) }}>
                                <div style={{ backgroundImage: `url(${item.image})` }}
                                    className={` cursor-pointer overflow-hidden bg-cover bg-center antialiased h-[410px] md:h-[500px] rounded-xl hover:scale-102 border-2 border-violet-400 hover:border-2 duration-300`}>
                                    <div className='opacity-0 hover:opacity-100 bg-black/20 h-full flex items-center justify-center '>
                                        <Button variant={'secondary'} size={'lg'}> <Maximize />View</Button>
                                    </div>
                                </div>
                                <p className='text-center text-primary font-black'>{item.title}</p>
                            </motion.div>
                        ))
                    }

                </div>
            </section>

            {/* Fullscreen Carousel Modal */}
            {showCarousel && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center">
                    <Button
                        className="absolute top-4 right-4 z-50"
                        variant="secondary"
                        size="icon"
                        onClick={() => setShowCarousel(false)}
                    >
                        <X size={28} />
                    </Button>
                    <div className="w-full  max-w-3xl px-4">
                        <Carousel
                            className="relative"
                            opts={{
                                align: "start",
                                // loop: true,
                                startIndex: selectedIndex,
                            }}
                            setApi={setCarouselApi}
                        >
                            <CarouselContent>
                                {certificateImages.map((item, idx) => (
                                    <CarouselItem key={idx}>
                                        <div className="flex flex-col items-center">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="max-h-[80vh] w-auto rounded-xl border-4 border-white shadow-lg"
                                            />
                                            <p className="mt-4 text-center text-white font-bold text-lg">{item.title}</p>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden sm:flex" />
                            <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                    </div>
                </div>
            )}

        </main>
    )
}

export default Certifications