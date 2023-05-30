import React from 'react'
import backlog from './imgs/backlog.svg'
import board from './imgs/board.svg'
import feed from './imgs/reports.svg'
import reports from './imgs/reports.svg'
import avatar1 from './imgs/Avatar1.svg'
import avatar2 from './imgs/Avatar2.svg'
import avatar3 from './imgs/Avatar3.svg'
import avatar4 from './imgs/Avatar4.svg'

export default function Header() {
    return (
        <div className='header'>
            <div className="header-top">
                <a href="http://google.com">
                    <img src={backlog} alt="backlog" />
                    Backlog
                </a>
                <a href="http://google.com">
                    <img src={board} alt="board" />
                    Board
                </a>
                <a href="http://google.com">
                    <img src={feed} alt="feed" />
                    Feed
                </a>
                <a href="http://google.com">
                    <img src={reports} alt="reports" />
                    Reports
                </a>
            </div>
            <div className="header-bottom">
                <div className="left-side">
                    <div className="main-text">Product Design Team</div>
                    <div className="team-name">Sprint 9</div>
                </div>
                <div className="right-side">
                    <div className="avatars">
                        <img src={avatar1} alt="avatar" />
                        <img src={avatar2} alt="avatar" />
                        <img src={avatar3} alt="avatar" />
                        <img src={avatar4} alt="avatar" />
                        <div className="more-avatar">+4</div>
                    </div>
                    <button className="new-members">+New Member</button>
                </div>
            </div>
        </div>
    )
}
