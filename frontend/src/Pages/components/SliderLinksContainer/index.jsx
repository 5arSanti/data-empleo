import React from "react";
import { AppContext } from "../../../Context";
import { VerifyLength } from "../VerifyLengthWrapper";
import Slider from "react-slick";
import { SliderLinkCard } from "./SliderLinkCard";
import { WrapperContainer2 } from "../WrapperContainers";
import { IsAuthWrapper } from "../AuthWrapper";

const SliderLinksContainer = () => {
    const context = React.useContext(AppContext)

    const { folders } = context.responseData || {};

    const array = folders ? Object.keys(folders).sort((a, b) => {
        if (a === 'Home') return -1; //
        if (b === 'Home') return 1;  
        return 0;
    }) : [];

    const settings = {
		infinite: false,
		slidesToShow: array?.length,
		slidesToScroll: 1,
		autoplay: false,
        autoplaySpeed: 4000,
        arrows: false,
		style: {
			width: "100%",
		},
		responsive: [
			{
			breakpoint: 1150,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
                    dots: true,
                    autoplay: true,
				}
			},
			{
			breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
                    dots: true,
                    autoplay: true,
				}
			},
		]
	};

    return(
        <VerifyLength array={array}>
            <WrapperContainer2 padding={0} alignItems="center" justifyContent="center">
                <Slider {...settings}>
                    {array?.map((item, index) => (
                        <SliderLinkCard key={index} item={item}/>
                    ))}
                </Slider>
            </WrapperContainer2>
        </VerifyLength>
    );
}

export { SliderLinksContainer };