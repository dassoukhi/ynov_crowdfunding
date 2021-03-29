/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navBar'
import Footer from '../../components/footer'
import { storage, db } from './../../config/firebase'
import firebase from 'firebase'
import { useHistory } from 'react-router'

const CampaignStyle = styled.div`
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

const StyleInput = styled.input`
  width: 100%;
  color: black;
  border: 1px solid black;
`
const StyleInputTA = styled.textarea`
  width: 100%;
  height: 300px;
  color: black;
`
const TitleH1 = styled.p`
  text-align: center;
  font-size: 30px;
`
const StyleSpan = styled.span`
  color: red;
`
const StyleSelect = styled.select`
  width: 100%;
  text-align: justify;
  color: black;
`
const StyleImageUploadProgress = styled.progress`
  width: 100%;
`

const DivG = styled.div`
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
// const DivD = styled.div`
//   @media screen and (min-width: 768px) {
//     float: center;
//     padding-right: 10%;
//   }
// `

const DivCard = styled.div`
  display: block;
  width: auto;
`
const options = [
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

const AddProject = () => {
  const [selectValue, setSelectValue] = useState('Home')
  const [titleValue, setTitleValue] = useState('')
  const [descriptValue, setDescriptValue] = useState('')
  const [recolteValue, setRecolteValue] = useState()
  const [durationValue, setDurationValue] = useState()
  const [avatar, setAvatar] = useState(null)
  const [progress, setProgress] = useState(0)
  const history = useHistory()

  const handleChangeSelect = e => {
    console.log(e.target.value, ' Selected!!')
    setSelectValue(e.target.value)
  }
  const handleChangeTitle = e => {
    console.log(e.target.value, ' => Titre!!')
    setTitleValue(e.target.value)
  }
  const handleChangeRecolte = e => {
    console.log(e.target.value, ' => prix!!')
    setRecolteValue(e.target.value)
  }
  const handleChangeDescrip = e => {
    console.log(e.target.value, ' => Descrition!!')
    setDescriptValue(e.target.value)
  }
  const handleChangeDuration = e => {
    console.log(e.target.value, ' => Durée!!')
    setDurationValue(e.target.value)
  }

  const handleChangeAvatar = e => {
    if (e.target.files[0]) {
      setAvatar(e.target.files[0])
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const uploadTask = storage.ref(`images/${avatar.name}`).put(avatar)
    if (
      titleValue &&
      durationValue &&
      descriptValue &&
      recolteValue &&
      avatar
    ) {
      uploadTask.on(
        'state_changed',
        snapshot => {
          //progress bar ...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )
          setProgress(progress)
        },
        error => {
          //error...
          console.log(error)
          alert(error.message)
        },
        () => {
          //when the progress bar is at 100 % then store data into firestore db
          storage
            .ref('images')
            .child(avatar.name)
            .getDownloadURL()
            .then(url => {
              //post image into db into posts collection
              db.collection('popular_projects').add({
                name: titleValue,
                description: descriptValue,
                recolte: recolteValue,
                deadline: durationValue,
                category: selectValue,
                currency: 'EUR raised',
                type: 'FUNDING',
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                price: '0',
                percentage: 0,
                avatar: url
              })
              setSelectValue('')
              setTitleValue('')
              setDescriptValue('')
              setRecolteValue()
              setDurationValue()
              setAvatar(null)
              setProgress(0)
            })
        }
      )
    }
    history.push('/home')
  }
  return (
    <div>
      <Navbar />
      <CampaignStyle>
        <DivCard>
          <DivG>
            <TitleH1>
              <strong>Préparez-vous à lancer votre campagne !</strong>
            </TitleH1>
            <p>
              Nous voulons créer le meilleur onboarding pour vous. Veuillez
              remplir les informations ci-dessous. Vos réponses seront bloquées
              pour cette campagne et ne pourront pas être modifiées
              ultérieurement.
            </p>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <strong>Faites une bonne première impression:</strong>
                  <br />
                  Présentez les objectifs de votre campagne et incitez les gens
                  à en savoir plus. Ces informations de base représenteront
                  votre campagne sur votre page de campagne, sur votre carte de
                  campagne.
                </div>
                <br />
                <div>
                  <label>
                    Titre de la campagne<StyleSpan> *</StyleSpan>
                  </label>
                  <br />
                  <StyleInput
                    value={titleValue}
                    name='titre'
                    maxLength='50'
                    onChange={handleChangeTitle}
                    required
                  />
                </div>
                <br />
                <div>
                  <label>
                    Description de la campagne<StyleSpan> *</StyleSpan>
                  </label>
                  <div>
                    Fournissez une brève description qui décrit le mieux votre
                    campagne à votre public.
                  </div>
                  <StyleInputTA
                    value={descriptValue}
                    name='description'
                    onChange={handleChangeDescrip}
                    required
                  />
                </div>
                <br />
                <div>
                  <label>
                    Combien d'argent aimeriez-vous collecter ? (devise: EUR)
                    <StyleSpan> *</StyleSpan>
                  </label>
                  <div>
                    <StyleInput
                      type='number'
                      pattern='^\d+([,.][0-9]{1,2})?$'
                      min='500.00'
                      value={recolteValue}
                      placeholder={recolteValue}
                      onChange={handleChangeRecolte}
                      required
                    />
                  </div>
                  <div>500€ Minimum.</div>
                </div>
                <br />
                <div>
                  <label>
                    Image de la campagne<StyleSpan> *</StyleSpan>
                  </label>
                  <div>
                    Importez une image qui représente votre campagne.
                    <br />
                    Résolution recommandée de 640 x 640, résolution minimale de
                    220 x 220
                  </div>
                  <div>
                    <div>
                      {/* <StyleInput
                          type='file'
                          value={avatar}
                          onChange={handleChangeAvatar}
                        /> */}
                      <input
                        type='file'
                        onChange={handleChangeAvatar}
                        required
                      />
                    </div>
                    <img src={avatar} />
                  </div>
                </div>
                <br />
                <div>
                  <label>
                    Categorie<StyleSpan> *</StyleSpan>
                  </label>
                  <div>
                    Pour aider les contributeurs à trouver votre campagne,
                    sélectionnez une catégorie qui représente le mieux votre
                    projet.
                  </div>
                  <StyleSelect
                    value={selectValue}
                    placeholder='Select a category'
                    onChange={handleChangeSelect}
                    required
                  >
                    {options.map(option => (
                      // eslint-disable-next-line react/jsx-key
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </StyleSelect>
                </div>
                <br />
                <div>
                  <label>
                    Durée de la campagne<StyleSpan> *</StyleSpan>
                  </label>
                  <div>
                    Pendant combien de temps allez-vous diffuser votre campagne?
                  </div>
                  <StyleInput
                    type='datetime-local'
                    value={durationValue}
                    onChange={handleChangeDuration}
                    required
                  />
                </div>
              </div>
              <StyleImageUploadProgress value={progress} max='100' />
              <div>
                <StyleInput type='submit' value='Save & Continue' />
              </div>
            </form>
          </DivG>
        </DivCard>
      </CampaignStyle>
      <Footer />
    </div>
  )
}

export default AddProject
