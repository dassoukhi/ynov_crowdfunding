import React, { useState } from 'react'
import Navbar from '../../components/navBar'
import Footer from '../../components/footer'
import { storage, db } from './../../config/firebase'
import firebase from 'firebase'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
import {
  CampaignStyle,
  StyleInput,
  StyleInputTA,
  TitleH1,
  StyleSpan,
  StyleSelect,
  StyleImageUploadProgress,
  DivG,
  DivCard,
  options
} from './addProjectStyle'

const AddProject = () => {
  const { t } = useTranslation()
  const [selectValue, setSelectValue] = useState('Home')
  const [titleValue, setTitleValue] = useState('')
  const [descriptValue, setDescriptValue] = useState('')
  const [recolteValue, setRecolteValue] = useState()
  const [durationValue, setDurationValue] = useState()
  const [avatar, setAvatar] = useState(null)
  const [progress, setProgress] = useState(0)
  const history = useHistory()

  const handleChangeSelect = e => {
    setSelectValue(e.target.value)
  }
  const handleChangeTitle = e => {
    setTitleValue(e.target.value)
  }
  const handleChangeRecolte = e => {
    setRecolteValue(e.target.value)
  }
  const handleChangeDescrip = e => {
    setDescriptValue(e.target.value)
  }
  const handleChangeDuration = e => {
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
                avatar: url,
                likes: []
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
              <strong>{t('addData.title')}</strong>
            </TitleH1>
            <p>{t('addData.desc')}</p>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <strong>{t('addData.ajProj.title')}</strong>
                  <br />
                  {t('addData.ajProj.desc')}
                </div>
                <br />
                <div>
                  <label>
                    {t('addData.ajProj.label1')}
                    <StyleSpan> *</StyleSpan>
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
                    {t('addData.ajProj.label2')}
                    <StyleSpan> *</StyleSpan>
                  </label>
                  <div>{t('addData.ajProj.label2Desc')}</div>
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
                    {t('addData.ajProj.label3')}
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
                  <div>{t('addData.ajProj.label3Desc')}</div>
                </div>
                <br />
                <div>
                  <label>
                    {t('addData.ajProj.label4')}
                    <StyleSpan> *</StyleSpan>
                  </label>
                  <div>
                    {t('addData.ajProj.label4Desc1')}
                    <br />
                    {t('addData.ajProj.label4Desc2')}
                  </div>
                  <div>
                    <div>
                      <input
                        type='file'
                        onChange={handleChangeAvatar}
                        accept='image/*'
                        required
                      />
                    </div>
                    <img src={avatar} />
                  </div>
                </div>
                <br />
                <div>
                  <label>
                    {t('addData.ajProj.label5')}
                    <StyleSpan> *</StyleSpan>
                  </label>
                  <div>{t('addData.ajProj.label5Desc')}</div>
                  <StyleSelect
                    value={selectValue}
                    placeholder='Select a category'
                    onChange={handleChangeSelect}
                    required
                  >
                    {options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </StyleSelect>
                </div>
                <br />
                <div>
                  <label>
                    {t('addData.ajProj.label6')}
                    <StyleSpan> *</StyleSpan>
                  </label>
                  <div>{t('addData.ajProj.label6Desc')}</div>
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
                <StyleInput type='submit' value={t('addData.ajProj.butt')} />
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
