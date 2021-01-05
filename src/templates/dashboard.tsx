import BottomMenu from 'components/BottomMenu'
import Menu from 'components/Menu'
import Wrapper from 'components/Wrapper'
import React from 'react'
import Container from 'styles/pages/dashboard'
export type Props = {
  children: React.ReactNode
  paddingSmall?: boolean
}

const Dashboard = (props: Props) => {
  return (
    <Container {...props}>
      <div className="desktop">
        <Menu />
      </div>
      <div className="content">{props.children}</div>
      <div className="mobile">
        <BottomMenu />
      </div>
    </Container>
  )
}

export default Dashboard
