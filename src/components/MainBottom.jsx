import React from 'react'
import clockIcon from './imgs/clock-icon.svg'
import mainAvatar from './imgs/mainAvatar.svg'

export default function MainBottom({ toDo, inProgress, inReview, done }) {
    return (

        <div className='mainBottom'>
            <div className="toDoList">
                <div className="list-header">
                    <div className="list-name">To do</div>
                    <div className="content-length">{toDo.length}</div>
                </div>
                {toDo.content.map((element, i) => {
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
                })}
            </div>
            <div className="inProgress">
                <div className="list-header">
                    <div className="list-name">In Progress</div>
                    <div className="content-length">{inProgress.length}</div>
                </div>
                {inProgress.content.map((element, i) => {
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
                })}
            </div>
            <div className="inReview">
                <div className="list-header">
                    <div className="list-name">In Review</div>
                    <div className="content-length">{inReview.length}</div>
                </div>
                {inReview.content.map((element, i) => {
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
                })}
            </div>
            <div className="done">
                <div className="list-header">
                    <div className="list-name">Done</div>
                    <div className="content-length">{done.length}</div>
                </div>
                {done.content.map((element, i) => {
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
                })}
            </div>
        </div>
    )
}
