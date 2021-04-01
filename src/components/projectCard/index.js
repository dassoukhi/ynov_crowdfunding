import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { db } from './../../config/firebase'
import { Link } from 'react-router-dom'
import ButtonLike from '../buttonLike'

const Card = styled.div`
  width: 100%;
  height: auto;
  display: block;
  :hover {
    box-shadow: 1px 8px 10px grey;
    -webkit-transition: box-shadow 0.1s ease-in;
  }
  margin: auto;
  float: left;
  border-radius: 0.2rem;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;

  @media screen and (min-width: 1025px) {
    :hover {
      box-shadow: 1px 8px 10px grey;
      -webkit-transition: box-shadow 0.1s ease-in;
    }
    margin: auto;
    min-height: 100%;
    display: block;
    float: left;
    width: 25%;
    border-radius: 0.2rem;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
    padding-top: 70px;
    align-items: left;
  }
`
const StyleTextLeftH2 = styled.div`
  //margin-left: 10%;
  //text-align: center;
`

const StyleImageUploadProgress = styled.progress`
  width: 100%;
  clear: both;
  border: 1px solid #34ca96;
  border-radius: 4px;
`
const ProjectCard = () => {
  const [popular, setPopular] = useState([])

  const username = localStorage.getItem('user')
  if (!username) {
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

  return (
    <div>
      <StyleTextLeftH2>
        <p style={{ textAlign: 'center', fontSize: '24px' }}>
          <strong>Les projets populaires</strong>
        </p>
      </StyleTextLeftH2>
      <div>
        {popular.map((item, index) => {
          //console.log(item.popular_projects)
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
                  <span style={{ color: '#268366' }}>Financement en cours</span>
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
                  {item.popular_projects.no_of_days_left}
                  {/* {Math.floor(
                      item.popular_projects.deadline -
                        item.popular_projects.timestamp
                    ) /
                      (1000 * 3600 * 24)} */}
                  {/* {Math.floor(item.popular_projects.deadline) /
                      (1000 * 3600 * 24)} */}
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectCard
