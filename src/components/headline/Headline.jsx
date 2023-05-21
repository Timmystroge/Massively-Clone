import "./headline.css";
import headlinePassport from "../../assets/images/main-section.jpg";
import FullStoryBtn from "../elements/FullStoryBtn";
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
          <h1 className="headline">
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
          <div className="text-center">
            <FullStoryBtn value="full story" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Headline;
