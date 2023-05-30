import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItems/MenuItem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.catagory === "popular")
            setMenu(popularItem)})
    },[])

    return (
        <section>
            <SectionTitle
            subHeading="Popular Items"
            heading="From Our Menu"
            ></SectionTitle>

        <div>
         {
            menu.map(item => <MenuItem
            key={item._id}
            item={item}
            ></MenuItem>)
            
         }
        </div>
        </section>
    );
};

export default PopularMenu;