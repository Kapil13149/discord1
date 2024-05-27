import Section2 from "../Section_2/Section_2";
import "./section_1.css";


const Section1 = () => {
  return (
    <>
      <div className="container p-5">
        <div className="row align-items-center">
          <div className="col-6 content1">
            <img src="images/section1Image.svg" />
          </div>
          <div className="col-6 content2">
            <h1 className="title pb-4">
              Create an invite-only place where you belong
            </h1>
            <p className="text">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>

        </div>
          <Section2 />
      </div>
    </>
  );
};

export default Section1;
