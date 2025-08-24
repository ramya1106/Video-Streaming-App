import styled from 'styled-components'

export const NOTFOUND = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  @media (max-width: 576px) {
    padding: 20px;
  }
`

export const NOTFOUNDIMAGE = styled.img`
  width: 360px;
  max-width: 80%;
  margin-bottom: 24px;
`

export const NOTFOUNDTITLE = styled.h1`
  font-size: 24px;
  color: #1e293b;
  margin-bottom: 0px;
`

export const NOTFOUNDDESCRIPTION = styled.p`
  font-size: 14px;
  color: #475569;
`
