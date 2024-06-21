import React from "react";
import { AppContext } from "../../../Context";
import { VerifyLength } from "../VerifyLengthWrapper";
import Slider from "react-slick";
import { InstructionCard } from "./InstructionCard";

const SliderInstructionsContainer = ({array}) => {
    const context = React.useState(AppContext)

    const data = array || [];
    
    const settings = {
		infinite: true,
        speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
        pauseOnHover: true,
		autoplay: true,
		autoplaySpeed: 5000,
        arrows: false,
        dots: true,
		style: { width: context.windowWidth <= 1050 ? "100%" : "55%", },
	};

    return(
        <VerifyLength array={data}>
            <Slider {...settings}>
                {data?.map((item, index) => (
                    <InstructionCard key={index} item={item} index={index}/>
                ))}
            </Slider>
        </VerifyLength>
    );
}

export { SliderInstructionsContainer }