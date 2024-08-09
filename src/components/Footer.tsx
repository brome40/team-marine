import React from 'react'
import styled from 'styled-components'
import linksJSON from '../assets/json/links.json';
import instagramIcon from '../assets/svg/instagram.svg';
import lineIcon from '../assets/svg/line.svg';

const FooterContainer = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: #dadadb;
  color: #000000;
  margin-top: 1vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5%;
  img {
    width: 3vw;
  }
  a {
    white-space: nowrap;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      {linksJSON.map(({ name, logoName, link }, index) => {
        return (
          <LinkContainer key={index}>
            {logoName && <img src={logoName === 'instagram' ? instagramIcon : lineIcon}/>}
            <a href={link} target='_blank'>{name}</a>
          </LinkContainer>
        );
      })}
    </FooterContainer>
  )
}

export default Footer
