import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { ChevronLeft } from 'lucide-react'

const chemicalInformation = [
    { label: "Article No.", value: "ALØ019" },
    { label: "Grade", value: "Extra Pure" },
    { label: "Purity", value: "99.50%" },
    { label: "CAS Number", value: "64-19-7" },
    { label: "Molecular Formula", value: "CH3COOH" },
    { label: "Molecular Weight", value: "60.05" },
    { label: "HS Code", value: "2915210Ø" },
    { label: "Shelf Life", value: "5 Years" },
];
const physicalProperties = [
  { "label": "Vapour density", "value": "2.1" },
  { "label": "Solubility in water(% weight)", "value": "Complete" },
  { "label": "Colour", "value": "Clear Colorless" },
  { "label": "Final boiling point(°C)", "value": "118 °C" },
  { "label": "Boiling point(°C)", "value": "117 – 118 °C" },
  { "label": "Auto-ignition temperature(°C)", "value": "485 °C" },
  { "label": "Melting point/ Freezing point(°C)", "value": "16.2 °C" },
  { "label": "Initial boiling point(°C)", "value": "117 °C" },
  { "label": "Flash point(°C)", "value": "40 °C" },
  { "label": "Vapour pressure (20 °C)", "value": "15.2 hPa at 20 °C" },
  { "label": "pH value", "value": "2.4" },
  { "label": "Evaporation rate", "value": "0.97" },
  { "label": "Explosion limits – upper (%)", "value": "19.90%" },
  { "label": "Density (g/cm3)", "value": "1.049" },
  { "label": "Explosion limits – lower (%)", "value": "4%" },
  { "label": "Partition coefficient Log Pow octanol / water at 20 °C", "value": "0.17" },
  { "label": "Odour", "value": "Strong, vinegar-like" },
  { "label": "Physical state at 20 °C", "value": "Liquid" }
]


const ChemicalDetails = () => {
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
                    <BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Acetic Chloroform</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className='max-w-6xl mx-auto px-6 md:px-3 lg:px-0 py-8'>
                <div className='flex items-center gap-4 mb-6'>
                    <span className='flex text-sm text-white bg-primary px-2 py-2 rounded-sm items-center gap-2'><ChevronLeft size={15} />Back</span>
                    <h2 className='text-xl md:text-2xl font-bold'>ACETIC ACID GLACIAL Extra Pure </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>

                    <aside className=' col-span-2 space-y-6'>
                        <section className='h-72'>
                            <img src="/images/gallery/event (1).jpg" className='w-full h-full object-cover' alt="" />
                        </section>

                        {/* Chemical Information */}
                        <section className=" rounded-md overflow-hidden w-auto mx-auto shadow-sm text-sm">
                            <div className="bg-primary/20 px-4 py-2 border-b">
                                <h2 className="font-semibold text-gray-700">Chemical Information</h2>
                            </div>
                            <table className="w-full border-collapse">
                                <tbody>
                                    {chemicalInformation.map((item, index) => (
                                        <tr
                                            key={index}
                                            className={`border-b last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                                }`}
                                        >
                                            <td className="px-4 py-2 font-medium text-gray-600 w-1/2">
                                                {item.label}
                                            </td>
                                            <td className="px-4 py-2 text-gray-800">{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </aside>

                    <aside className=' col-span-3'>

                        {/* Physical Properties  */}
                        <section className=" rounded-md overflow-hidden w-auto mx-auto shadow-sm text-sm">
                            <div className="bg-primary/20 px-4 py-2 border-b">
                                <h2 className="font-semibold text-gray-700">Physical Properties </h2>
                            </div>
                            <table className="w-full border-collapse">
                                <tbody>
                                    {physicalProperties.map((item, index) => (
                                        <tr
                                            key={index}
                                            className={`border-b last:border-0 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                                }`}
                                        >
                                            <td className="px-4 py-2 font-medium text-gray-600 w-1/2">
                                                {item.label}
                                            </td>
                                            <td className="px-4 py-2 text-gray-800">{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </aside>
                </div>
            </div>
        </main>
    )
}

export default ChemicalDetails