import React from 'react'

function devCard(props) {
  return (
    <div>
      <a href={`/profile?user=${props.id}`}>
        <img src={props.avatarUrl} alt="user avatar" className="devPic" />{' '}
        <span className="h6 devLink">{props.name}</span>
      </a>
      <hr />
    </div>
  )
}

export default devCard
