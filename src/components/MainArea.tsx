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
  background-color: white;
  color: black;
  p {
    font-size: 5.5vh;
  }
`;
const WelcomeBanner = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  text-align: center;
  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
  p {
    position: absolute;
    &:nth-child(2) {
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &:nth-child(3) {
      width: 80%;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
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
    font-size: 2.5vh;
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
      <WelcomeBanner>
        <img src={require('../assets/img/背景.jpg')}/>
        <p><strong>良好な家族関係を築くために</strong></p>
        <p>私たちは、『家族の不安や悩みを解消しやすい社会』を<br></br>目指して活動しております</p>
      </WelcomeBanner>
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
