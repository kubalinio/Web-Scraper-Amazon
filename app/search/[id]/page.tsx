'use client'

import { deleteDoc, doc } from 'firebase/firestore'
import { useDocument } from 'react-firebase-hooks/firestore'
import Result from '../../../components/Result'
import { db } from '../../../firebase'
import Spinner from 'react-spinkit'
import { useRouter } from 'next/navigation'

type Props = {
    params: {
        id: string
    }
}

const DeleteButton = ({ id }: { id: string }) => {
    const router = useRouter()

    const handleDelete = () => {
        deleteDoc(doc(db, 'searches', id))
        router.push('/')
    }

    return (
        <button
            onClick={() => handleDelete()}
            className='px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-500 active:bg-red-700'
        >
            Delete Search
        </button>
    )
}

const SearchPage = ({ params: { id } }: Props) => {
    const [snapshot, loading, error] = useDocument(doc(db, 'searches', id))

    if (loading) return (
        <h1 className='p-10 text-xl text-center animate-pulse text-indigo-600/50'>
            Loading Results...
        </h1>
    )

    if (!snapshot?.exists()) return

    if (snapshot.data()?.status === 'pending')
        return (
            <div className='flex flex-col items-center justify-between py-10 gap-y-5'>
                <p className='text-center text-red-600 animate-pulse'>
                    Scraping results from Amazon...
                </p>
                <Spinner
                    style={{
                        height: '100px',
                        width: '100px'
                    }}
                    name='cube-grid'
                    fadeIn='none'
                    color='pink'
                />

                {/* <DeleteButton id={id} /> */}
            </div>
        )

    return (
        <div className='py-5'>
            <div className='flex items-center justify-between mb-7'>
                <div className='flex flex-col md:flex-row gap-x-4'>
                    <h1 className='font-bold'>
                        Search results for {" "}
                        <span className='text-red-600'>
                            '{snapshot.data()?.search}'
                        </span>
                    </h1>
                    <p className='text-gray-300'>
                        {snapshot.data()?.result?.length > 0 && `${snapshot.data()?.result?.length} results found`}
                    </p>
                </div>

                <DeleteButton id={id} />
            </div>

            {
                snapshot.data()?.result?.length > 0 && (
                    <Result results={snapshot.data()?.result} />
                )
            }


        </div>
    )
}

export default SearchPage