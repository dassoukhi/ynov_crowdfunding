import React, { useState, useEffect } from 'react'
//import data from '../../data.json'
//import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { db } from './../../config/firebase'

import { Link, useHistory } from 'react-router-dom'
import ButtonLike from '../buttonLike'

const Card = styled.div`
  :hover {
    box-shadow: 1px 8px 10px grey;
    -webkit-transition: box-shadow 0.1s ease-in;
  }
  margin: auto;
  min-width: 600px;
  max-width: 2000px;
`
const StyleTextLeftH2 = styled.div`
  margin-left: 10%;
`
const StyleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 100px;
`

// const styleCard = styled.div`
//   min-height: '100%';
//   display: 'inline-block';
//   float: 'left';
//   width: '20%';
//   cursor: pointer;
//   border-radius: '0.2rem';
//   flex-direction: 'row';
//   justify-content: 'space-between';
//   padding: '30px';
// `

const ProjectCard = () => {
  const [popular, setPopular] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))
  const history = useHistory()
  if (!user) {
    history.push('/')
  }
  useEffect(() => {
    //console.log(db)
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

  //console.log('Collection ->', db.collection('popular_projects'))
  return (
    <div>
      <StyleTextLeftH2>
        <h2>Les projets populaires</h2>
      </StyleTextLeftH2>
      <StyleContainer>
        {popular.map((item, index) => {
          console.log(item.popular_projects)
          return (
            <Card key={index}>
              <div
                style={{
                  minHeight: '100%',
                  display: 'inline-block',
                  float: 'left',
                  width: '50%',
                  cursor: 'pointer',
                  borderRadius: '0.2rem',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: '30px'
                }}
              >
                {/* Image du produit */}
                <Link key={index} to={'/project/' + item.id}>
                  <img
                    src={item.popular_projects.avatar}
                    alt={item.popular_projects.name}
                    style={{ height: '100%', width: '100%' }}
                  />
                </Link>
                {/* Détails du produit */}
                <div style={{ height: '100px', textAlign: 'justify' }}>
                  <div>
                    <span style={{ color: '#268366' }}>
                      Financement en cours
                    </span>

                    <ButtonLike postId={item.id} />
                  </div>
                  <h5
                    style={{
                      fontSize: '14px',
                      textAlign: 'justify'
                    }}
                  >
                    <Link key={index} to={'/project/' + item.id}>
                      {/* Print le nom */}
                      {item.popular_projects.name}
                    </Link>
                  </h5>

                  {/* Print la description */}
                  <p style={{ fontSize: '12px', textAlign: 'justify' }}>
                    {item.popular_projects.description}
                  </p>
                  {/* Print le prix */}
                  <p>{item.popular_projects.price}</p>
                  {/* Print le pourcentage */}
                  <div
                    style={{
                      paddingTop: 4,
                      float: 'right'
                    }}
                  >
                    {item.popular_projects.percentage}
                  </div>
                  {/* Print bar de progression */}
                  <hr
                    style={{
                      width: '100%',
                      clear: 'both',
                      border: '4px solid #34ca96',
                      borderRadius: '4px'
                    }}
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
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </StyleContainer>
      {/* <StyleContainer>
        {popular.map((post => {
          console.log(post)
          return (
            // eslint-disable-next-line react/jsx-key
            <div>
              <p>{post.name}</p>
            </div>
          )
        })}
      </StyleContainer> */}
    </div>
  )
}

export default ProjectCard