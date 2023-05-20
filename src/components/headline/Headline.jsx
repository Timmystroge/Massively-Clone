import "./headline.css";
import headlinePassport from "../../assets/images/main-section.jpg";
const Headline = () => {
  return (
    <>
      <section className="py-10 px-0 lg:px-14" id="headline">
        <div className="headline__date flex justify-center items-center ">
          <div className="divider"></div>
          <div className="data px-5 sm:px-10 font-light font-semibold text-sm">
            May&nbsp;17,&nbsp;2023
          </div>
          <div className="divider"></div>
        </div>

        <div className="mt-10">
          <h1 className="headline" >
            and this is a <br /> massive headline
          </h1>
          <p className="headlineText">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            similique, repellat, facilis necessitatibus ipsa maxime accusantium.
          </p>

          <div className="headlineImage py-10 w-full">
            <img
              src={headlinePassport}
              alt="headline image"
              className="w-full"
            />
          </div>
          <div className="fullstory flex justify-center">
            <a href="">
              <button className="uppercase border-2 border-primary py-3 px-8 font-black text-sm hover:bg-primary hover:text-white tracking-widest transition ease duration-500">
                full story
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Headline;
