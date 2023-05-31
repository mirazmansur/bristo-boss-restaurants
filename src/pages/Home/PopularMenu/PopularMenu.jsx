import { useEffect, useState } from 'react';
import SectionTitle from './../../../component/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [ menu, setMenu ] = useState([]);
    useEffect( () =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{ 
        const popularMenu = data.filter(item => item.category === 'popular')
        setMenu(popularMenu)})
    },[])
     return (
    <section className='mb-12'>
        <SectionTitle
        subHeading= "Popular Item"
        heading= "From Our Menu"
        ></SectionTitle>
        <div className='grid md:grid-cols-2 gap-4'>
            {
                menu.map(item=> <MenuItem
                key={item._id}
                item= {item}
                ></MenuItem>)
            }
        </div>
    </section>
    );
};

export default PopularMenu;