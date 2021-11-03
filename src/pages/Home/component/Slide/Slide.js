import React from 'react'
import SlideItem from 'pages/Home/component/SlideItem/SlideItem'
import SlideList from 'constant/Slide';

export default function Slide(props) {
  const slide = SlideList.map((item,index) => (
                <SlideItem key={index} marker={index + 1} isActive={item.isActive} title={item.title} description={item.description} image={item.image} />
                ))
  const marker = SlideList.map((item,index) => (
                  <li key={index} data-marker={index + 1} className={item.isActive?"active":""}>
                    <img src={item.image} alt="Background" />
                  </li>
                ))
  
  return (
      <div className="carousel" data-count={SlideList.length} data-current={1}>
        {/* <button class="btn btn-control"></button> */}
        <div className="items">
          {slide}
        </div>
        <ul className="markers">
          {marker}
        </ul>
      </div>
  )
}
