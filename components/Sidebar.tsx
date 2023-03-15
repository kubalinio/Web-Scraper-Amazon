'use client'

import { useCollection } from 'react-firebase-hooks/firestore'
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import SidebarRow from './SidebarRow'

const Sidebar = () => {

    // query() używać kiedy chcesz posortować(orderBy()) wyniki fetcha
    const [snapshot, loading, error] = useCollection(
        query(collection(db, 'searches'), orderBy('start_eta', 'desc'))
    )

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

            <ul className='flex flex-col gap-2 px-1 py-2 overflow-x-auto'>
                {snapshot?.docs.map(doc => (
                    <SidebarRow key={doc.id} doc={doc} />
                ))}
            </ul>
        </div>
    )
}

export default Sidebar