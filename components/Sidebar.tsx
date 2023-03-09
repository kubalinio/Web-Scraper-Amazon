import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='p-2 py-6 overflow-y-auto border-b md:p-10 border-red-900/50'>
            <div className='flex flex-col items-center justify-center mb-10'>
                <DocumentMagnifyingGlassIcon className='w-16 h-16 text-red-900/40' />

                <h1 className='hidden mt-2 mb-2 text-3xl font-bold text-center md:inline'>
                    Web Scraper
                </h1>
                <h2 className='hidden text-xs italic text-center md:inline'>
                    Scraping the Unscrapable
                </h2>
            </div>

            <ul>
                {/* SidebarRow */}
                {/* SidebarRow */}
                {/* SidebarRow */}
                {/* SidebarRow */}
                {/* SidebarRow */}
                {/* SidebarRow */}
            </ul>
        </div>
    )
}

export default Sidebar