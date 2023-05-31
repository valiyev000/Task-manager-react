import React from 'react'
import clockIcon from './imgs/clock-icon.svg'
import mainAvatar from './imgs/mainAvatar.svg'
export default function Item({element,i}) {
  return (
    <div className="tasks" key={i}>
    <div className="title">{element.title}</div>
    <div className="description">{element.description}</div>
    <div className="author">{element.author}</div>
    <div className="info">
        <div className="info-left">
            <img src={clockIcon} alt="clockIcon" />
            {element.date}
        </div>
        <img src={mainAvatar} alt="mainAvatar" />
    </div>
</div>
  )
}
