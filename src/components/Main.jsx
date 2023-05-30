import React from 'react'
import MainTop from './MainTop'
import MainBottom from './MainBottom'



export default function Main({ newData }) {
    return (
        <main>
            <MainTop />
            <MainBottom toDo={newData.toDo} inProgress={newData.inProgress} inReview={newData.inReview} done={newData.done} />
        </main>
    )
}
