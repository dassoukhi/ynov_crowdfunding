import styled from 'styled-components'
export const Card = styled.div`
  border-radius: 0.2rem;
  padding: 40px;
  font-size: 20px;
`
export const StyleImageUploadProgress = styled.progress`
  width: 100%;
  clear: both;
  border: 1px solid #34ca96;
  border-radius: 4px;
`
export const StyleSpan = styled.span`
  color: #268366;
`

export const StyleImg = styled.img`
  height: 90%;
  width: 90%;
  text-align: center;
  margin: auto;
  display: flex;

  @media screen and (min-width: 768px) {
    height: 30%;
    width: 30%;
    text-align: center;
    margin: auto;
    display: flex;
  }
`

export const StyleTitle = styled.p`
  font-size: 20px;
  text-align: justify;
`
export const StyleDesc = styled.p`
  font-size: 18px;
  text-align: justify;
`
