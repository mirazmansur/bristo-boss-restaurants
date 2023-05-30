

const MenuItem = ({item}) => {

    const [name, image, price, resipe] = item;

    return (
        <div>
            <img src={image} alt="" />
            <div>
                <h3>{name}</h3>
                <p>{resipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;