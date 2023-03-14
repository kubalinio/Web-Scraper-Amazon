import Link from "next/link"

type Props = {
    results: Product[]
}

const Result = ({ results }: Props) => {
    return (
        <div className="grid w-full gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {results.map(result => (
                <Link
                    key={result.title}
                    href={result.url}
                    className='flex flex-col w-full p-5 space-x-4 transition-shadow duration-200 bg-white shadow-md rounded-xl hover:shadow-lg hover:shadow-red-200'
                >
                    <img
                        srcSet={result.imageset}
                        alt={result.title}
                        className='object-contain w-full h-40 py-5'
                    />

                    <div className="flex flex-col flex-1 py-5">
                        <p className="font-bold">
                            {result.title}
                        </p>
                        <p className="text-sm text-gray-500">
                            {result.rating} ({result.reviews} reviews)
                        </p>

                        <div className="flex justify-end flex-1 space-x-2">
                            <p className="pt-2 mt-auto text-xl font-bold text-red-500">
                                {result.price > 0 ? `$${result.price}` : 'N/A'}
                            </p>

                            {result.previous_price > 0 && (
                                <p className="pt-2 mt-auto text-xl font-bold line-through text-red-500/50">
                                    ${result.previous_price}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-wrap justify-end gap-2 mt-5">
                            {result.features.map(feature =>
                                feature && (
                                    <p
                                        key={feature}
                                        className="px-2 py-1 text-xs text-white bg-red-500 rounded-md">
                                        {feature}
                                    </p>
                                ))}
                        </div>
                    </div>

                </Link>
            ))}
        </div>
    )
}

export default Result