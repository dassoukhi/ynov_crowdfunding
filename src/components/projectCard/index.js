import React, { useState, useEffect } from 'react'
import { db } from './../../config/firebase'
import { Link, useHistory } from 'react-router-dom'
import ButtonLike from '../buttonLike'

import { useTranslation } from 'react-i18next'
// import { useSelector } from 'react-redux'
import { Card, StyleImageUploadProgress } from './indexStyle'

const ProjectCard = () => {
  const [popular, setPopular] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))
  const history = useHistory()

  const { t } = useTranslation()

  if (!user) {
    history.push('/')
  }

  useEffect(() => {
    //use a firestore db to retrieve data for a post
    db.collection('popular_projects')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => {
        //every time a new post is added do this
        setPopular(
          snapshot.docs.map(doc => ({
            id: doc.id,
            popular_projects: doc.data()
          }))
        )
      })
  }, [])

  const convertDate = e => {
    var convert = Date.parse(e)
    let now = Date.now()

    var seconds = Math.floor((convert - now) / 1000)
    var minutes = Math.floor(seconds / 60)
    var hours = Math.floor(minutes / 60)
    var days = Math.floor(hours / 24)

    hours = hours - days * 24
    minutes = minutes - days * 24 * 60 - hours * 60
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60

    return days
  }

  return (
    <div>
      <div>
        <p style={{ textAlign: 'center', fontSize: '24px' }}>
          <strong>{t('projpop')}</strong>
        </p>
      </div>
      <div>
        {popular.map((item, index) => {
          return (
            <Card key={index}>
              {/* Image du produit */}
              <Link key={index} to={`/project/${item.id}`}>
                <img
                  src={item.popular_projects.avatar}
                  alt={item.popular_projects.name}
                  style={{ height: '100%', width: '100%' }}
                />
              </Link>
              {/* Détails du produit */}
              <div style={{ height: '100px', textAlign: 'justify' }}>
                <div>
                  <span style={{ color: '#268366' }}>{t('financement')}</span>
                  <ButtonLike postId={item.id} />
                </div>
                <h5
                  style={{
                    fontSize: '14px',
                    textAlign: 'justify'
                  }}
                >
                  <Link key={index} to={`/project/${item.id}`}>
                    {/* Print le nom */}
                    {item.popular_projects.name}
                  </Link>
                </h5>
                {/* Print la description */}
                <p style={{ fontSize: '12px', textAlign: 'justify' }}>
                  {item.popular_projects.description}
                </p>
                {/* Print le prix */}
                <p>{item.popular_projects.price} €</p>
                {/* Print le pourcentage */}
                <div
                  style={{
                    paddingTop: 4,
                    float: 'right'
                  }}
                >
                  {Math.round(
                    (item.popular_projects.price /
                      item.popular_projects.recolte) *
                      100
                  )}{' '}
                  %
                </div>
                {/* Print bar de progression */}
                <StyleImageUploadProgress
                  value={Math.round(
                    (item.popular_projects.price /
                      item.popular_projects.recolte) *
                      100
                  )}
                  max='100'
                />
                {/* Print nombre de jour restant */}
                <div
                  style={{
                    padding: '4px 6px 0px 20px',
                    clear: 'both',
                    textAlign: 'center'
                  }}
                >
                  {convertDate(item.popular_projects.deadline) +
                    ' ' +
                    t('days')}
                </div>
              </div>
              <br />
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectCard
