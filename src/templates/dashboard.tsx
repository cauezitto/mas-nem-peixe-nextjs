import React from 'react'

type Props = {
  child: React.ReactNode
}

const Dashboard = (props: Props) => {
  return <div>{props.child}</div>
}

export default Dashboard
