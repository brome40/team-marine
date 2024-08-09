import React from 'react'
import styled from 'styled-components'
import OptionsForm from './OptionsForm.tsx';
import Footer from './Footer.tsx';
import Articles from './Articles.tsx';

const MainAreaContainer = styled.div`
  position: relative;
  top: 10vh;
  width: 100%;
  min-height: 90vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-color: #fcfbe4;
  color: black;
  p {
    font-size: 5.5vh;
  }
`;
const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40% 55%;
  column-gap: 5%;
`;

const Gallery = styled.div`
  display: grid;
  place-items: center;
  img {
    width: 80%;
    padding: 2%;
  }
  caption {
    font-size: 0.7em;
    padding: 0 10%;
  }
`;

const RightContent = styled.div`
  display: grid;
  grid-template-rows: 70% 30%;
`;

const MainArea = () => {
  return (
    <MainAreaContainer>
      <p>良好な家族関係を築くために</p>
      <Content>
        <Gallery>
          <img src={require('../assets/img/team-img1.jpg')}/>
          <caption>こんにちは！私たちはチームマリンです</caption>
          <img src={require('../assets/img/team-img2.jpg')}/>
          <caption>結婚前の学生・社会人を対象に、家族事前学習セミナーを開催しました</caption>
        </Gallery>
        <RightContent>
          <OptionsForm/>
          <Articles/>
        </RightContent>
      </Content>
      <Footer/>
    </MainAreaContainer>
  )
}

export default MainArea
