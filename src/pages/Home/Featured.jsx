import SectionTitle from './../../component/SectionTitle/SectionTitle';
import featuredimg from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
    <div className='featured-item bg-fixed text-white pt-8 my-20'>
        <div>
            <SectionTitle
            subHeading="Check out"
            heading="From our Menu"
            ></SectionTitle>
        </div>
        <div className='md:flex justify-center items-center pb-20 pt-12 py-20 px-36 bg-slate-500 bg-opacity-60'>
            <div>
                <img src={featuredimg} alt="" />
            </div>
            <div className='ml-10'>
                <p>Mach 20, 2023</p>
                <p>Where Can i Get Some</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, consectetur eaque, aspernatur iure omnis maxime nostrum exercitationem doloribus iusto neque aliquam tempore! Cum reprehenderit officia eius laborum excepturi illo, nemo repellat inventore soluta labore esse numquam nam eum. Sapiente eaque animi enim consequuntur magnam blanditiis dolorum placeat, rem fuga dolorem.</p>
                <button className="btn btn-outline border-0 border-b-4 ">Order Now</button>
            </div>
        </div>
    </div>
    );
};

export default Featured;