import type from "react";

type ItemProps = {
    id: number,
    title: string,
    imgSrc: string,
    price: number,
}

import datas from './../datas/datas.json';

export const Item = ({id, title, imgSrc, price} : ItemProps) => {
    return(
    <>
        <div key={id} className='flex justify-center '>
            <div className='shadow-lg hover:shadow-2xl  bg-white h-80 w-64 mt-10 rounded-2xl flex-col justify-center mx-auto border border-border-gray'>
            <div className='h-52 mt-6 rounded-xl flex justify-center'>
                <img width={200} src={imgSrc} className='h-52 rounded-xl'/>
            </div>
            <p className='flex justify-center font-semibold text-sm'>{title}</p>
            <div className='flex justify-between mx-2 my-4'>
                <p className=''>$ {price}</p>
                <button className='rounded-full bg-cyan-500 hover:bg-cyan-400 text-center text-white' onClick={(e) => {}}><span className='mx-3'>+ To cart</span></button>
            </div>
            </div>
        </div>
    </>);
}

export const ItemContainer = () => {
    
    const generateRandomNumber = () => {
        return (Math.floor(Math.random() * 40));
    }
    
    return(
        <>
        <div className='w-[1200px] grid grid-cols-4 gap-4 m-auto'>
            {
                datas.map((it, i) => {
                    return <Item imgSrc={`https://picsum.photos/id/${generateRandomNumber()}/200/300`} id={it.id} title={it.title} price={it.price} />
                })
            }
            
            
        </div>
        </>
    );
}