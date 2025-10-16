import { useLocation } from "react-router-dom";
import OtherProducts from "../OtherProducts";

const ProDesc = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <div className="flex h-screen justify-center items-center poppins svgBac mb-10">
        <div className="h-[90vh] w-[94vw] flex shadow-2xl shadow-black rounded-3xl overflow-hidden">
          {/* Section - 1 */}
          <section className="bg-emerald-00 prodBac basis-[45%] flex justify-center items-center overflow-hidden">
            <img src={state.image} alt="" className="w-[100%] h-full" />
          </section>
          {/* Section-2 */}
          <section className="basis-[55%] bg-slat-50 flex flex-col justify-around items-start pl-6 bg-slate-300 ">
            <h3 id="ProductName" className="mt-6 text-3xl font-medium">
              {state.productName}
            </h3>
            {/* <h2>Yha Pr bhi Kuch daal skte hai</h2> */}
            <p className="text-2xl font-medium">
              Price: {"Rs. " + state.price}
            </p>
            <h1
              id="ProductName"
              className="text-3xl font-semibold w-[80%] text-left mt[-20px]"
            >
              {state.productDescription}
            </h1>
            <div className="h-16 w-[70%] flex flex-col gap-6 justify-center bg-emerad-400">
              <button className="h-[70%] p-2 w-[30%] rounded-3xl hover:scale-110 duration-300 text-lg bg-red-600">
                Buy Now
              </button>
              {/* <button className="h-[70%] p-2 w-[30%] rounded-3xl hover:scale-110 duration-300 text-lg bg-Primary text-white">
              Add to Cart
            </button> */}
            </div>
          </section>
        </div>
      </div>
      <OtherProducts category={state.category} currentProductId={state._id} />
    </>
  );
};

export default ProDesc;
