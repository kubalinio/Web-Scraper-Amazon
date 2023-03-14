'use client'

import { doc } from 'firebase/firestore'
import { useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../../../firebase'

type Props = {
    params: {
        id: string
    }
}

const SearchPage = ({ params: { id } }: Props) => {
    const [snapshoot, loading, error] = useDocument(doc(db, 'searches', id))

    if (loading) return (
        <h1 className='p-10 text-xl text-center animate-pulse text-indigo-600/50'>
            Loading Results...
        </h1>
    )

    if (!snapshoot?.exists()) return

    if (snapshoot.data()?.status === 'pending')
        return (
            <div className='flex flex-col items-center justify-between py-10 gap-y-5'>
                <p className='text-center text-red-600 animate-pulse'>
                    Scraping results from Amazon...
                </p>
            </div>
        )

    return (
        <div></div>
    )
}

export default SearchPage