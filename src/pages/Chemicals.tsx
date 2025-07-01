import React, { useState } from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from '@/components/ui/pagination'
import { Search } from 'lucide-react'

// Sample data
const sampleChemicals = [
    {
        articleNo: "A1001",
        chemicalName: "Acetone",
        casNumber: "67-64-1",
        units: [
            { unit: "500ml", price: 120 },
            { unit: "2.5L", price: 400 }
        ],
        msds: "/pdfs/msds/Acetone.pdf",
        coa: "/pdfs/coa/Acetone.pdf"
    },
    {
        articleNo: "B2002",
        chemicalName: "Benzene",
        casNumber: "71-43-2",
        units: [
            { unit: "500ml", price: 180 },
            { unit: "2.5L", price: 650 }
        ],
        msds: "/pdfs/msds/Benzene.pdf",
        coa: "/pdfs/coa/Benzene.pdf"
    },
    {
        articleNo: "C3003",
        chemicalName: "Chloroform",
        casNumber: "67-66-3",
        units: [
            { unit: "500ml", price: 200 },
            { unit: "2.5L", price: 750 }
        ],
        msds: "/pdfs/msds/Chloroform.pdf",
        coa: "/pdfs/coa/Chloroform.pdf"
    },
    // Add more sample data as needed
]

const ITEMS_PER_PAGE = 10

const Chemicals = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')

    // Filter data based on search query
    const filteredData = sampleChemicals.filter(item =>
        item.articleNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.chemicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.casNumber.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)

    const paginatedData = filteredData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
        setCurrentPage(1)
    }

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setCurrentPage(1)
    }

    const getPageNumbers = () => {
        const pages = []
        let start = Math.max(1, currentPage - 2)
        let end = Math.min(totalPages, currentPage + 2)

        if (currentPage <= 3) {
            end = Math.min(5, totalPages)
        } else if (currentPage >= totalPages - 2) {
            start = Math.max(1, totalPages - 4)
        }

        for (let i = start; i <= end; i++) {
            pages.push(i)
        }
        return pages
    }

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
                        <BreadcrumbPage>Chemicals</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <section className='max-w-6xl mx-auto px-6 md:px-3 lg:px-0 py-8 lg:py-16'>
                <span className='text-center font-extrabold text-2xl flex gap-2 items-center justify-center uppercase'>
                    <h2 className='text-center  text-2xl'>Chemicals</h2>
                    <h2 className='bg-primary text-white p-2 rounded-'>List</h2>
                </span>

                <div className='mt-6'>
                    <div className='flex justify-center md:justify-end  mb-5'>
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
                    </div>
                    <div className="overflow-x-auto bg-white rounded-lg shadow">
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
                                {paginatedData.map((item, index) => (
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
                                {paginatedData.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="text-center py-6 font-bold text-neutral-500">No results found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className='flex justify-center mt-5'>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        href="#"
                                        onClick={e => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                                        aria-disabled={currentPage === 1}
                                    />
                                </PaginationItem>
                                {/* First page and leading ellipsis */}
                                {getPageNumbers()[0] > 1 && (
                                    <>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#"
                                                isActive={currentPage === 1}
                                                onClick={e => { e.preventDefault(); handlePageChange(1); }}
                                            >1</PaginationLink>
                                        </PaginationItem>
                                        {getPageNumbers()[0] > 2 && (
                                            <PaginationItem>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                        )}
                                    </>
                                )}
                                {/* Main page numbers */}
                                {getPageNumbers().map(page => (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            href="#"
                                            isActive={currentPage === page}
                                            onClick={e => { e.preventDefault(); handlePageChange(page); }}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}
                                {/* Trailing ellipsis and last page */}
                                {getPageNumbers().slice(-1)[0] < totalPages && (
                                    <>
                                        {getPageNumbers().slice(-1)[0] < totalPages - 1 && (
                                            <PaginationItem>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                        )}
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#"
                                                isActive={currentPage === totalPages}
                                                onClick={e => { e.preventDefault(); handlePageChange(totalPages); }}
                                            >{totalPages}</PaginationLink>
                                        </PaginationItem>
                                    </>
                                )}
                                <PaginationItem>
                                    <PaginationNext
                                        href="#"
                                        onClick={e => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                                        aria-disabled={currentPage === totalPages}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Chemicals