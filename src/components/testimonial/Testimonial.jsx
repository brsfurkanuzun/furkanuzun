import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avtr1.jpg'
import AVTR2 from '../../assets/me.png'

// import Swiper core and required modules
import { Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

const data=[
  {
    avatar: AVTR1,
    name:'Batuhan Elibol',
    review:'Working with John was a true pleasure. He is a dedicated and hardworking team member who always goes above and beyond to ensure the success of the project. His skills in project management and communication were invaluable to our team, and I would highly recommend him to anyone looking for a reliable and efficient team member.'
  },
  {
    avatar: AVTR2,
    name:'Alp Demetgül',
    review:'Working with John was a true pleasure. He is a dedicated and hardworking team member who always goes above and beyond to ensure the success of the project. His skills in project management and communication were invaluable to our team, and I would highly recommend him to anyone looking for a reliable and efficient team member.'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Teammates</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{clickable: true}}
      navigation={true}
      modules={[Pagination, Navigation]}>
        {
          data.map(({avatar,name,review},index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonial