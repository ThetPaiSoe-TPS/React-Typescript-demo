import React, { ReactNode } from 'react'
import './card.css'
type CardProps = {
  // title: string,
  // content: ReactNode,
  children: ReactNode}

const Card = (props: CardProps) => {
  return (
    <div>
      {/* <h2 className="myCardContent" > {props.title} </h2>
      <p> {props.content} </p> */}
      <p style={{ color: 'blue' }}>{props.children}</p>
      <hr />
    </div>
  )
}

export default Card

