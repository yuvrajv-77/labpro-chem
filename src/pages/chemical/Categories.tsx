import React, { useState } from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from '@/components/ui/pagination'
import { Search } from 'lucide-react'
// import sampleChemicals from '@/data/sampleChemicals.json'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const ITEMS_PER_PAGE = 10
const sampleChemicals = []

const ChemicalCategories = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')


    // Group chemicals by category
    const groupByCategory = (data) => {
        const map = {};
        data.forEach(item => {
            if (!map[item.category]) map[item.category] = [];
            map[item.category].push(item);
        });
        return map;
    };

    // Filter data based on search query
    const filteredData = sampleChemicals.filter(item =>
        item.articleNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.chemicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.casNumber.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const chemicalsByCategory = groupByCategory(filteredData);
    const categoryList = Object.keys(chemicalsByCategory);

    // Pagination per category (optional: here, no pagination per category for simplicity)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentPage(1);
    };

    return (
        <main>
            <Breadcrumb className='max-w-6xl mx-auto px-6 md:px-3 lg:px-0 py-8'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Categories</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <section className='max-w-6xl mx-auto px-6 md:px-3 lg:px-0 py-8 lg:py-16'>
                <span className='text-center font-extrabold text-2xl flex gap-2 items-center justify-center uppercase'>
                    <h2 className='text-center  text-2xl'>Chemicals</h2>
                    <h2 className='bg-primary text-white p-2 rounded-'>Categories</h2>
                </span>

                <div className='mt-6'>
                    {/* Search input  */}
                    {/* <div className='flex justify-center md:justify-end  mb-5'>
                        <form className='relative flex items-center gap-2' onSubmit={handleSearchSubmit}>
                            <Input
                                type="text"
                                onChange={handleSearchChange}
                                value={searchQuery}
                                placeholder="Search by Article No, Name, or CAS Number"
                                className="w-78 focus:ring-primary hover:border-primary pl-9"
                            />
                            <span className='absolute left-2'><Search color='gray' size={20} /></span>
                        </form>
                    </div> */}
                    <div className="overflow-x-auto bg-white rounded-lg ">
                        <Accordion type="single" collapsible className='space-y-2'>
                            {categoryList.length === 0 && (
                                <div className="text-center py-6 font-bold text-neutral-500">No results found.</div>
                            )}
                            {categoryList.map((cat, idx) => (
                                <AccordionItem value={cat} key={cat}>
                                    <AccordionTrigger className='bg-primary px-5 text-white'>{cat}</AccordionTrigger>
                                    <AccordionContent>
                                        <table className="min-w-full text-sm text-left border border-gray-200">
                                            <thead className="bg-gray-100 text-gray-700 font-semibold">
                                                <tr>
                                                    <th className="px-4 py-3">Article No</th>
                                                    <th className="px-4 py-3">Chemical Name</th>
                                                    <th className="px-4 py-3">CAS Number</th>
                                                    <th className="px-4 py-3">Units</th>
                                                    <th className="px-4 py-3">Price (per unit)</th>
                                                    <th className="px-4 py-3">MSDS</th>
                                                    <th className="px-4 py-3">COA</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                {chemicalsByCategory[cat].map((item, index) => (
                                                    <tr key={index} className="hover:bg-gray-50">
                                                        <td className="px-4 py-3">{item.articleNo}</td>
                                                        <td className="px-4 py-3">{item.chemicalName}</td>
                                                        <td className="px-4 py-3">{item.casNumber}</td>
                                                        <td className="px-4 py-3">
                                                            {item.units.map((u, i) => (
                                                                <div key={i}>{u.unit}</div>
                                                            ))}
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            {item.units.map((u, i) => (
                                                                <div key={i}>₹{u.price}</div>
                                                            ))}
                                                        </td>
                                                        <td className="px-4 py-3 text-blue-600 underline cursor-pointer">
                                                            <a href={item.msds} target="_blank" rel="noopener noreferrer">View</a>
                                                        </td>
                                                        <td className="px-4 py-3 text-blue-600 underline cursor-pointer">
                                                            <a href={item.coa} target="_blank" rel="noopener noreferrer">View</a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                  
                </div>
            </section>
        </main>
    )
}

export default ChemicalCategories;