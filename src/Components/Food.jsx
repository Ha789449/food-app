import React, {useState} from 'react'
import {categories, data} from '../data/data'
const Food = () => {
    // console.log(data)
   const [foods, setfoods] = useState(data)
  //  Filter type burger/pizaa/etc
  const FilterType=(category)=>{
    setfoods(
      data.filter((item)=>{
        return item.category===category
      })
    )
  }
  // filter by price
  const filterPrice=(price)=>{
    setfoods(
      data.filter((item)=>{
        return item.price===price
      })
    )
  }
    return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
     <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu items</h1>
     {/* Filter */}
     <div className='flex flex-col lg:flex-row justify-between'>
     {/* Filter types */}
     <div>
     <p className='font-bold text-gray-700'>Filter Types</p>
      <div className='flex justify-between flex-wrap'>
        <button onClick={()=> setfoods(data) } className= 'border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
        <button onClick={()=> FilterType('burger')}  className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
        <button onClick={()=> FilterType('pizza')} className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
        <button onClick={()=> FilterType('salad')}className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
        <button onClick={()=> FilterType('chicken')} className='border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
      </div>
     </div>
     {/* Filter price */}
     <div>
      <p className='font-bold text-gray-700'>Filter Price</p>
      <div className='flex justify-between max-w-[390px] w-full'>
        <button onClick={()=> filterPrice('$')} className= 'border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
        <button onClick={()=> filterPrice('$$')} className= 'border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
        <button onClick={()=> filterPrice('$$$')} className= 'border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
        <button onClick={()=> filterPrice('$$$$')} className= 'border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
        
      </div>
     </div>
     </div>
     {/* Display Foods*/}
     <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
     {foods.map((item, index)=>(
      <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
        <img src={item.image} alt={item.name} 
        className='w-full h-[200px] object-cover rounded-t-lg'/>
        <div className='flex justify-between px-2 py-4'>
          <p className='font-bold'>{item.name}</p>
          <p><span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
        </div>
      </div>
     )
    
    )}
     </div>
    </div>
  );
};

export default Food
