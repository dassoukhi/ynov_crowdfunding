import styled from 'styled-components'

export const CampaignStyle = styled.div`
  font-size: 16px;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 25px;
    text-align: justify;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    & > div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 25px;
      text-align: justify;
    }
  }
`

export const StyleInput = styled.input`
  width: 100%;
  color: black;
  border: 1px solid black;
`
export const StyleInputTA = styled.textarea`
  width: 100%;
  height: 300px;
  color: black;
`
export const TitleH1 = styled.p`
  text-align: center;
  font-size: 30px;
`
export const StyleSpan = styled.span`
  color: red;
`
export const StyleSelect = styled.select`
  width: 100%;
  text-align: justify;
  color: black;
`
export const StyleImageUploadProgress = styled.progress`
  width: 100%;
`

export const DivG = styled.div`
  @media screen and (min-width: 768px) {
    width: auto;
    height: auto;
    align-text: center;
    :hover {
      -webkit-transition: box-shadow 0.1s ease-in;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`

export const DivCard = styled.div`
  display: block;
  width: auto;
`

export const options = [
  {
    label: 'Home',
    value: 'Home'
  },
  {
    label: 'Phones & Accessories',
    value: 'Phones & Accessories'
  },
  {
    label: 'Travel & Outdoors',
    value: 'Travel & Outdoors'
  },
  {
    label: 'Film',
    value: 'Film'
  },
  {
    label: 'Community Projects',
    value: 'Community Projects'
  },
  {
    label: 'Health & Fitness',
    value: 'Health & Fitness'
  },
  {
    label: 'Fashion & Wearables',
    value: 'Fashion & Wearables'
  },
  {
    label: 'Tabletop Games',
    value: 'Tabletop Games'
  },
  {
    label: 'Music',
    value: 'Music'
  },
  {
    label: 'Equity',
    value: 'Equity'
  }
]
