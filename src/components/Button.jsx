import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button id={props.id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-4 py-2 text-black ${props.containerClass}`}>
        {props.leftIcon}
        {props.title}
        {props.rightIcon}
      </button>
    </div>
  )
}
