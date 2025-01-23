import { IoArrowForwardCircle } from "react-icons/io5";

const EmbraceSection = () => {
    return (
        <div className="lg:mt-20 mt-5  pb-5 text-white text-center">
          <h3 className="uppercase mb-5">get started</h3>  
          <h2 className="capitalize text-2xl mb-5">embrace the new era of outbound.</h2>
            <p>Wizia lets you train, activate, and optimize aiDRs.
                Take your outbound to new levels of performance and efficiency.</p>
            <button className="btn btn-error text-white mt-5">
                <IoArrowForwardCircle className="text-2xl -rotate-45"></IoArrowForwardCircle>
                Sign Up for the Beta</button>
        </div>
    );
};

export default EmbraceSection;