import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridItem } from './GridItem';


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando...</h2> 
            }

            <div className='card-grid'>
                {
                    images.map( g =>  
                        (
                           <GridItem key={g.id} {...g}/>
                        ) 
                    )
                } 

            </div>
            
        </>
  )
}

