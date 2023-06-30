import { useInView } from 'framer-motion';
import { ContainerContext } from '../Pages/FoodRec';
import { useContext, useRef } from 'react';


const BeerCard = ({ props }) => {
  const { name, image, note } = props;

  const ref = useRef(null);
  const container = useContext(ContainerContext);
  const isInView = useInView(ref, { root: container, once: true})

  return (
    <div className={`w-full min-h-[180px] h-auto mx-auto glassmorphism p-2 flex flex-col items-center rounded-sm my-8 ${isInView ? 'animate-up' : ''}`} ref={ref}>
      <h1 className="font-parisienne w-full text-center font-bold md:text-3xl">-{name}-</h1>
      <p className="font-oswald text-sm my-2 font-light">{note}</p>
      <img className="w-16 my-auto md:w-20 object-contain blend" src={image}  alt=""/>
    </div>
  )
}

export default BeerCard;