
import React, { useState } from "react";
import FaqData from "../FaqData";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const Faq = () => {
   const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedQuestionIndex(selectedQuestionIndex === index ? null : index);
  };
const renderAnswer = (answer) => {
  let spanCounter = 0;
  return React.Children.map(answer.props.children, (child) => {
    if (child.type === "p") {
      return (
        <div className="pl-[40px] max-sm:w-[95%] max-sm:m-auto py-[10px] font-medium font-manrope text-base text-[#373737]">
          {child.props.children}
        </div>
      );
    }
    if (child.type === "span") {
      const contentArray = Array.isArray(child.props.children)
        ? child.props.children
        : [child.props.children];
      return (
        <div>
          {contentArray.map((text, index) => (
            <div
              key={index}
              className="pl-[40px] max-sm:w-[95%] max-sm:m-auto  flex gap-2  py-[10px] font-medium font-manrope text-base text-[#373737]"
            >
              <span>{++spanCounter}.</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      );
    }
    if (child.type === "ol") {
      return (
        <div>
          {React.Children.map(child.props.children, (li, index) => (
            <div
              key={index}
              className="pl-[50px] max-sm:w-[95%] max-sm:m-auto py-[10px] font-medium font-manrope text-base text-[#373737]"
            >
              {String.fromCharCode(97 + index)}: {li.props.children}
            </div>
          ))}
        </div>
      );
    }
    return null;
  });
};
  return (
    <div className="container pb-[96px] max-sm:py-[35px]">
      <div className="pt-[96px] max-sm:pt-[10px] pb-[38px]">
        <p className="text-center font-manrope font-semibold text-[32px] text-[#071013]">
          FAQ
        </p>
      </div>
{FaqData.map((faq, index) => (
        <div key={index} style={{ marginBottom: "34px" }}>
          <div
            className="flex  justify-between max-sm:px-4 items-center"
            onClick={() => handleClick(index)}
          >
            <h2
              style={{
                cursor: "pointer",
                borderLeft: "3px solid",
                paddingLeft: "24px",
              }}
              className="font-manrope font-medium  border-[#373737] max-sm:text-lg text-[24px]  text-[#071013]"
            >
              {index + 1}. {faq.question}
            </h2>
            <span className="px-1 py-1 cursor-pointer  rounded-full bg-blue-500 ">
              {selectedQuestionIndex === index ? (
                <FaAngleRight className="text-white" />
              ) : (
                <FaAngleDown className="text-white" />
              )}
            </span>
          </div>
          {selectedQuestionIndex === index && (
            <div className="pt-[10px]">{renderAnswer(faq.answer)}</div>
          )}
        </div>
      ))}
   


    </div>
  );
}

export default Faq
