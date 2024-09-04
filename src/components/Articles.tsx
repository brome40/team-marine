import React from 'react'
import styled from 'styled-components'

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5%;
  h2 {
    font-size: 5vh;
    margin: 0;
  }
  a {
    font-size: 3vh;
  }
`;

const Articles = () => {
  return (
    <ArticlesContainer>
        <h2>リソース</h2>
        <a href={process.env.PUBLIC_URL + '/価値観見比べシート最新版.pdf'} download>パートナーとやってみましょう！価値観見比べシート</a>
        <a href={process.env.PUBLIC_URL + '/ハンドブック.pdf'} download>家族の未来を笑顔に！かぞくスマイルハンドブック</a>
    </ArticlesContainer>
  )
}

export default Articles
