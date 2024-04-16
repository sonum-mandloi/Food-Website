import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const FoodDesRes = () => {
    const data = useParams()
    const {RestApiStore=[]} = useSelector((state)=>state?.ApiCollected)
    
    // console.log(id);
  return (
    <div>
        {
            RestApiStore.map((food)=>{
                if(data.id == food.id){
                   return( 
                    <>
                    <div className='flex border-2 border-black p-10 bg-rose-800 text-white'>
                        <img src={food.img} alt="" className='w-[60rem] h-[90vh] rounded-md'/>
                        <div>
                            <h3 className='p-10'>{food.desc}</h3>
                            <h4 className='p-10'>Rating: {food.rating}</h4>
                            <h1 className='p-10'>Price: {food.price}</h1>
                            <h2 className='p-10'>category: {food.category}</h2>
                        </div>
                   </div>
                   </>
                   )
                }
            })
        }
    </div>
  )
}

export default FoodDesRes
