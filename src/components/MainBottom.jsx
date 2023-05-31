import React from 'react'

import Item from './Item'

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
                        <Item element={element} i={i} />
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
                        <Item element={element} i={i} />

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
                        <Item element={element} i={i} />

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
                        <Item element={element} i={i} />

                    )
                })}
            </div>
        </div>
    )
}
