import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navBar'
import Footer from '../../components/footer'
import { db } from './../../config/firebase'

const CampaignStyle = styled.div`
  font-size: 20px;
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 25px;
  }
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
  const [avatar, setVatar] = useState()
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
    console.log(e.target.value, ' => Avatar!!')
    setVatar(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (titleValue && durationValue && descriptValue && recolteValue) {
      var currentdate = new Date()
      var datetime =
        'Last Sync: ' +
        currentdate.getDate() +
        '/' +
        (currentdate.getMonth() + 1) +
        '/' +
        currentdate.getFullYear() +
        ' ' +
        currentdate.getHours() +
        ':' +
        currentdate.getMinutes() +
        ':' +
        currentdate.getSeconds()
      console.log(datetime)
      db.collection('popular_projects')
        .doc()
        .set({
          name: titleValue,
          description: descriptValue,
          recolte: recolteValue,
          deadline: durationValue,
          category: selectValue,
          currency: 'EUR raised',
          type: 'FUNDING',
          timestamp: datetime,
          price: '€0',
          avatar: avatar
            ? avatar
            : 'https://www.zupimages.net/up/21/12/dzvs.jpg'
        })
        .then(function () {
          console.log('Document successfully written!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    } else {
      alert('Veullez remplir tout les cases svp!!')
    }
  }
  return (
    <div>
      <Navbar />
      <CampaignStyle>
        <div className='basics-scope'>
          {null}
          <form onSubmit={handleSubmit} className='basics-form camp-form'>
            <div className='entre-section'>
              <div className='entre-header'>Basics</div>
              <div className='entre-subheader'>
                Faites une bonne première impression: présentez les objectifs de
                votre campagne et incitez les gens à en savoir plus. Ces
                informations de base représenteront votre campagne sur votre
                page de campagne, sur votre carte de campagne et dans les
                recherches.
              </div>
              <div className='entre-field'>
                <label>
                  Titre de Campaigne<span> *</span>
                </label>
                <div className='field-sublabel'>
                  Quel est le titre de votre campagne?
                </div>
                <input
                  className='text-field'
                  value={titleValue}
                  name='titre'
                  maxLength='50'
                  onChange={handleChangeTitle}
                />
              </div>
              <div className='entre-field'>
                <label>
                  Campaign Tagline<span> *</span>
                </label>
                <div className='field-sublabel'>
                  Fournissez une brève description qui décrit le mieux votre
                  campagne à votre public.
                </div>
                <textarea
                  className='text-field text-area-en basics-txt'
                  value={descriptValue}
                  name='description'
                  onChange={handleChangeDescrip}
                />
              </div>
              <div className='start-camp-section'>
                <label>Combien d'argent aimeriez-vous collecter?</label>
                <div className='goal-input'>
                  <span className='dollar-sign'>€</span>
                  <input
                    className='amount-input'
                    type='number'
                    pattern='^\d+([,.][0-9]{1,2})?$'
                    min='500.00'
                    value={recolteValue}
                    placeholder={recolteValue}
                    onChange={handleChangeRecolte}
                  />
                  <span className='usd'>EUR</span>
                </div>
                <div className='camp-start-undertext'>500€ Minimum.</div>
              </div>
              <div className='entre-field'>
                <label>
                  Campaign Card Image<span> *</span>
                </label>
                <div className='field-sublabel'>
                  Importez une image qui représente votre campagne.
                  <br />
                  Résolution recommandée de 640 x 640, résolution minimale de
                  220 x 220
                </div>
                <div className='upload-image-wrapper'>
                  <div className='entre-image'>
                    <input
                      type='file'
                      className='enter-image-file'
                      value={avatar}
                      onChange={handleChangeAvatar}
                    />
                  </div>
                  <img className='camera-img' src={null} />
                </div>
              </div>
              <div className='entre-field'>
                <label>
                  Categorie<span> *</span>
                </label>
                <div className='field-sublabel'>
                  Pour aider les contributeurs à trouver votre campagne,
                  sélectionnez une catégorie qui représente le mieux votre
                  projet.
                </div>
                <select
                  value={selectValue}
                  className='select-cat'
                  placeholder='Select a category'
                  onChange={handleChangeSelect}
                >
                  {options.map(option => (
                    // eslint-disable-next-line react/jsx-key
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className='entre-field'>
                <label>
                  Durée de la campagne<span> *</span>
                </label>
                <div className='field-sublabel'>
                  Pendant combien de temps allez-vous diffuser votre campagne?
                </div>
                <input
                  type='datetime-local'
                  className='entre-duration'
                  value={durationValue}
                  onChange={handleChangeDuration}
                />
              </div>
            </div>
            <div className='save-n-cont'>
              <input
                type='submit'
                className='btn-purple launch-btn'
                value='Save & Continue'
              />
            </div>
          </form>
        </div>
      </CampaignStyle>
      <Footer />
    </div>
  )
}

export default AddProject
