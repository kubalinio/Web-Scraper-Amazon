'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useRef } from 'react'

const Header = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const input = inputRef.current?.value
        if (!input) return

        if (inputRef.current?.value) {
            inputRef.current.value = ''
        }

        try {
            // Call our API to activate the Scraper...
            const response = await fetch('/api/activateScraper', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ search: input })
            })

            const { collection_id, start_eta } = await response.json()

            router.push(`/search/${collection_id}`)

        } catch (error) {
            // Handle any errors
        }
    }

    return (
        <header>
            <form className='flex items-center justify-center max-w-md p-2 px-4 mx-auto space-x-2 bg-red-100 rounded-full' onSubmit={handleSearch}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder='Search...'
                    className='flex-1 text-red-400 bg-transparent outline-none placeholder:text-red-300'
                />
                <button hidden>Search</button>
                <MagnifyingGlassIcon className='w-6 h-6 text-red-300' />
            </form>
        </header>
    )
}

export default Header 