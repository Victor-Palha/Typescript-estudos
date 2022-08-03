import React from 'react'

type Props = {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>My second component with react and TypeScript</p>
        <p>His name is {props.name}</p>
    </div>
  )
}

export default SecondComponent