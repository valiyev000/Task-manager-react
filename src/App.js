import React from 'react'
import Header from './components/Header'
import './App.css'
import Main from './components/Main'

const newData = {
  toDo: {
    length: 3,
    content: [
      {
        title: "Mobile Wireframes",
        description: "",
        author: "Viverra Diam",
        date: "Apr 12",
        avatar: "avatar"
      },
      {
        title: "User research",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque …",
        author: "Maecenas Lacus",
        date: "Mar 4",
        avatar: "avatar"
      },
      {
        title: "Client Call",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque …",
        author: "Eget Integer",
        date: "Apr 2",
        avatar: "avatar"
      }
    ]
  },
  inProgress: {
    length: 2,
    content: [
      {
        title: "Login flow",
        description: "",
        author: "Nullam Velit",
        date: "Apr 3",
        avatar: "avatar"
      },
      {
        title: "Forgot password Screen",
        description: "",
        author: "Nullam Velit",
        date: "Apr 6",
        avatar: "avatar"
      }
    ]
  },
  inReview: {
    length: 4,
    content: [
      {
        title: "Landing Page",
        description: "",
        author: "Maecenas Lacus",
        date: "Mar 8",
        avatar: "avatar"
      },
      {
        title: "Annual Presentation",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque …",
        author: "Maecenas Lacus",
        date: "Mar 15",
        avatar: "avatar"
      },
      {
        title: "Icons",
        description: "",
        author: "Eget Integer",
        date: "Apr 10",
        avatar: "avatar"
      },
      {
        title: "Onboarding Screens",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque …",
        author: "Maecenas Lacus",
        date: "Mar 17",
        avatar: "avatar"
      }
    ]
  },
  done: {
    length: 3,
    content: [
      {
        title: "Product Mockups",
        description: "",
        author: "Viverra Diam",
        date: "Mar 2",
        avatar: "avatar"
      },
      {
        title: "Workshop Ideas",
        description: "",
        author: "Nullam Velit",
        date: "Mar 4",
        avatar: "avatar"
      },
      {
        title: "Navigation",
        description: "",
        author: "Maecenas Lacus",
        date: "Mar 15",
        avatar: "avatar"
      }
    ]
  }
}


export default function App() {
  return (
    <div>
      <Header />
      <Main newData = {newData} />
    </div>
  )
}
