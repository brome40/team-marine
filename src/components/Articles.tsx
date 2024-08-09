import React from 'react'
import styled from 'styled-components'

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5%;
`;

const Articles = () => {
  return (
    <ArticlesContainer>
        <h2>リソース</h2>
        <a href={process.env.PUBLIC_URL + '/ハンドブックのサンプル.pdf'} download>パートナーとやってみましょう！価値観チェックシート</a>
        <a href={process.env.PUBLIC_URL + '/価値観チェックシートパワポ用.pdf'} download>家族の未来を笑顔に！家族スマイルハンドブック</a>
    </ArticlesContainer>
  )
}

export default Articles
