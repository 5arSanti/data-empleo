import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SliderCard } from './SliderCard';

import "./styles.css";
import { AppContext } from '../../../Context/index.jsx';
import React from 'react';

const SliderNavContainer = () => {
	const context = React.useContext(AppContext)

	const settings = {
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		style: {
			width: "95%",
		},
		focusOnSelect: true,
		responsive: [
			{
			breakpoint: 1150,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
			breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	};

	return(
		<div className='slider-container'>
			<Slider {...settings}>
				{context.responseData?.sliderData?.map((item, index) => (
					<SliderCard key={index} item={item}/>
				))}
			</Slider>
		</div>

	);
}

export { SliderNavContainer };