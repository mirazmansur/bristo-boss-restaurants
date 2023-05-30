


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 mb-3">---{subHeading}---</p>
            <h3 className=" uppercase text-3xl border-y-4 py-4 md:">{heading}</h3>
        </div>
    );
};

export default SectionTitle;