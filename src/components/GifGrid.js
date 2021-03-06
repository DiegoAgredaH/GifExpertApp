import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category); // data: images quiere decir que renombre data a images

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading ? 'Cargando...' :
                <div className='card-grid'>
                    {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
                </div>
            }
        </>
    );
};

export default GifGrid;
