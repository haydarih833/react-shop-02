import React, { useContext, useRef, useState } from 'react'
import DataContext from '../Context/data'
import Card from '../Card'
export default function SearchBox({Search}) {
    let inputRef = useRef()
    const { data } = useContext(DataContext)
    const [filterResult, setFilterResult] = useState()
    const handleSearch = () => {
        let inputValue = inputRef.current.value
        const filteredResults = data.filter(item =>
            item.title.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilterResult(filteredResults)
    }
    return (
        <>
            <div className='z-40 fixed top-16 '>
                <div><input type='text' className='bg-white w-80 h-8 ml-14 rounded-2xl' ref={inputRef} onChange={handleSearch} /></div>
            </div>
            <div onClick={()=>{Search(false)}} className='z-40 sm:w-11/12 w-7/12 h-full overflow-auto fixed top-20 ml-14 mt-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {
                    filterResult?.map(item => {
                        return <Card {...item} key={item.id} Style={true} />
                    })
                }
            </div>
        </>
    )
}
