import React from 'react'
import styled from 'styled-components'

const NavigationContainer = styled.nav`
  width: 100%;
  height: 10vh;
  z-index: 1;
  font-size: 2em;
  border-bottom: 0.5vh solid #242222;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vh;
  background-color: #83a4e8;
  color: white;
`;

export const Navigation = ():React.JSX.Element => {
  return (
    <NavigationContainer>
      文京学院大学渡部研究室 Team Marine
    </NavigationContainer>
  )
}
