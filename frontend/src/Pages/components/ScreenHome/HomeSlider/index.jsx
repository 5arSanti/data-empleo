import React from "react";
import Slider from "react-slick";

import { AppContext } from "../../../../Context";

import { VerifyLength } from "../../VerifyLengthWrapper";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { MainTextContainer } from "../MainTextContainer";
import { GraphContainer } from "../../GraphContainer";
import { graphExportConfig } from "../../../../utils/graphConfig";

const HomeSlider = () => {
    const context = React.useContext(AppContext)

    const { graphs } = context.responseData?.graphsData || [];

    const settings = {
		infinite: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
        arrows: false,
        dots: true,
		style: { width: "100%", },
	};

    return(
        <VerifyLength array={graphs}>
            <Slider {...settings}>
                {graphs &&
                    graphs?.map((item, index) => (
                        <AllInfoGridContainer key={index} gap={0}>
                            <MainTextContainer item={item}/>
                            <GraphContainer index={index} graph={item} onConfig={graphExportConfig}/>
                        </AllInfoGridContainer>
                    ))
                }
            </Slider>
        </VerifyLength>
    );
}

export { HomeSlider }