import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
    }

  return <Slider {...settings} >
    <div className="testimonial py-4 px-3">
        <p>
        Booking through this website made our dream vacation a reality! The options were endless, and the process was seamless. We created memories that will last a lifetime. Can't wait to plan our next adventure with you        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>
        I'm not one to write reviews, but my experience with this booking platform was too good not to share. The website is user-friendly, and the booking process is straightforward. Highly recommended!        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Lia Franklin</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>
        I've used several travel booking websites before, but none compare to the service and value I found here. Trust me, this is the go-to platform for anyone seeking quality and affordability in their travel plans.        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>
}

export default Testimonial
