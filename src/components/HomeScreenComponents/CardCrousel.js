import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import OffersCard from './OffersCard';

export default function CardCrousel({ data,group }) {
    // console.log(group)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider className='' {...settings}>
            {
                data.plans.map((plan) => {
                    return (plan.isgroupplan === group ? <OffersCard plan={plan} /> : null)
                })
            }
        </Slider>
    )
}
