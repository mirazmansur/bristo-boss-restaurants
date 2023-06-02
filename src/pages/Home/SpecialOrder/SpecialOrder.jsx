
import SectionTitle from './../../../component/SectionTitle/SectionTitle';
import OrderItemImg from '../../../assets/home/slide2.jpg'
const SpecialOrder = () => {
    return (
        <div>
        <SectionTitle
        heading="Should Try"
        subHeading="Chef Recommends"
        ></SectionTitle>
<div className='flex'>
    <div className="card w-96 bg-base-200 shadow-xl mr-3">
  <figure className="px-10 pt-10">
    <img src={OrderItemImg} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
    <div className="card-actions">
      <button className="btn border-0 text-yellow-400  bg-slate-200 border-b-4">Add to Card</button>
    </div>
     </div>
    </div>
    <div className="card w-96 bg-base-200 shadow-xl mr-3">
  <figure className="px-10 pt-10">
    <img src={OrderItemImg} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
    <div className="card-actions">
      <button className="btn border-0 text-yellow-400  bg-slate-200 border-b-4">Add to Card</button>
    </div>
     </div>
    </div>
    <div className="card w-96 bg-base-200 shadow-xl mr-3">
  <figure className="px-10 pt-10">
    <img src={OrderItemImg} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
    <div className="card-actions">
      <button className="btn border-0 text-yellow-400  bg-slate-200 border-b-4">Add to Card</button>
    </div>
     </div>
    </div>
    </div>
</div>
    );
};

export default SpecialOrder;