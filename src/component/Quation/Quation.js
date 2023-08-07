import React from "react";
import frame from "../../asset/Frame.png";

const Quation = () => {
  return (
    <div>
      <h1 className="text-center font-bold lg:text-5xl text-2xl">
        Frequently Asked <span className="text-[#E76F51]"> Questions</span>
      </h1>
      <div className="lg:flex lg:p-20 p-5">
        <div className="w-2/3 mx-auto">
          <img src={frame} alt="" />
        </div>
        <div className=" mt-5 mb-10 w-full lg:ms-10">
          <div className="collapse collapse-plus bg-base-200 ">
            <input type="radio" name="my-accordion-5" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              What are the most important things I should know about riding a
              bike?
            </div>
            <div className="collapse-content">
              <p>
                Safety First! Always obey the rules of the road. Obey all
                traffic signals, signs, and laws. Get in the mindset of
                “driving” your bike—not just “riding” your bike. This will help
                you be a more focused and legally compliant bike rider.{" "}
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 lg:mt-5 mt-3">
            <input type="radio" name="my-accordion-5" />
            <div className="collapse-title text-xl font-medium">
              How can I tell if my helmet is old and I need a new one?
            </div>
            <div className="collapse-content">
              <p>
                Safety First! Always obey the rules of the road. Obey all
                traffic signals, signs, and laws. Get in the mindset of
                “driving” your bike—not just “riding” your bike. This will help
                you be a more focused and legally compliant bike rider.{" "}
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 lg:mt-5 mt-3">
            <input type="radio" name="my-accordion-5" />
            <div className="collapse-title text-xl font-medium">
            My bike has been in storage is it safe to ride?
            </div>
            <div className="collapse-content">
              <p>
                Safety First! Always obey the rules of the road. Obey all
                traffic signals, signs, and laws. Get in the mindset of
                “driving” your bike—not just “riding” your bike. This will help
                you be a more focused and legally compliant bike rider.{" "}
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 lg:mt-5 mt-3">
            <input type="radio" name="my-accordion-5" />
            <div className="collapse-title text-xl font-medium">
              How can I tell if my helmet is old and I need a new one?
            </div>
            <div className="collapse-content">
              <p>
                Safety First! Always obey the rules of the road. Obey all
                traffic signals, signs, and laws. Get in the mindset of
                “driving” your bike—not just “riding” your bike. This will help
                you be a more focused and legally compliant bike rider.{" "}
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 lg:mt-5 mt-3">
            <input type="radio" name="my-accordion-5" />
            <div className="collapse-title text-xl font-medium">
            What rules should I follow when riding my bike?
            </div>
            <div className="collapse-content">
              <p>
                Safety First! Always obey the rules of the road. Obey all
                traffic signals, signs, and laws. Get in the mindset of
                “driving” your bike—not just “riding” your bike. This will help
                you be a more focused and legally compliant bike rider.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quation;
