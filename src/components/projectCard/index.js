import React, { useState } from 'react'
import data from '../../data.json'
//import { Link } from 'react-router-dom'
import styled from 'styled-components'

import white from './white.png'
import red from './red.png'

const Card = styled.div`
  :hover {
    box-shadow: 1px 8px 10px grey;
    -webkit-transition: box-shadow 0.1s ease-in;
  }
`
const styleTextLeftH2 = styled.div`
  margin-left: 10%;
`
const styleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 100px;
`
const ButtonImg = styled.img`
  width: 22px;
  height: 22px;
  float: right;
  margin-right: 1px;
  align: left;
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
  const username = localStorage.getItem('username')
  // eslint-disable-next-line no-unused-vars
  const [icone, setIcone] = useState()
  // Get the color of a like (red or white)
  // Default white
  const getIcone = post => {
    const currentFavorite = localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite'))
      : []
    const isPresent = currentFavorite.find(e => e.postId === post.postId)

    if (isPresent) {
      return red
    } else {
      return white
    }
  }

  //Add a post into Favorite (localStorage)
  const addInStorage = post => {
    const currentFavorite = localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite'))
      : []

    const isPresent = currentFavorite.find(e => e.index === post.index)
    //is not present do that
    if (!isPresent) {
      // add the post into localstorage and change the color red (to say "I like it")
      currentFavorite.push(post)
      localStorage.setItem('favorite', JSON.stringify(currentFavorite))
      setIcone(red)
    }
    //if it's present so do that
    else {
      //I did a filter to sortout the item
      const curr = currentFavorite.filter(
        e => e.index !== isPresent.index && e.username === isPresent.username
      )
      //set the element into localstorage and change the color
      localStorage.setItem('favorite', JSON.stringify(curr))
      setIcone(white)
    }
  }

  return (
    <div>
      <styleTextLeftH2>
        <h2>Les projets populaires</h2>
      </styleTextLeftH2>
      <styleContainer>
        {data.popular_projects.map((item, index) => {
          return (
            <Card key={index}>
              <div
                style={{
                  minHeight: '100%',
                  display: 'inline-block',
                  float: 'left',
                  width: '20%',
                  cursor: 'pointer',
                  borderRadius: '0.2rem',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: '30px'
                }}
              >
                {/* Image du produit */}
                <img
                  src={item.avatar}
                  alt={item.name}
                  style={{ height: '100%', width: '100%' }}
                />
                {/* Détails du produit */}
                <div style={{ height: '100px', textAlign: 'justify' }}>
                  <div>
                    <span style={{ color: '#268366' }}>
                      Financement en cours
                    </span>

                    <ButtonImg
                      src={getIcone({
                        index,
                        username
                        // item.name,
                        // item.description,
                        // item.avatar
                      })}
                      // pass all data to store into favorites then use it to print into /favorites
                      onClick={() =>
                        addInStorage({
                          index,
                          username
                          // item.name,
                          // item.description,
                          // item.avatar
                        })
                      }
                    ></ButtonImg>
                  </div>
                  <h5
                    style={{
                      fontSize: '14px',
                      textAlign: 'justify'
                    }}
                  >
                    {/* Print le nom */}
                    {item.name}
                  </h5>
                  {/* Print la description */}
                  <p style={{ fontSize: '12px', textAlign: 'justify' }}>
                    {item.description}
                  </p>
                  {/* Print le prix */}
                  <p>{item.price}</p>
                  {/* Print le pourcentage */}
                  <div
                    style={{
                      paddingTop: 4,
                      float: 'right'
                    }}
                  >
                    {item.percentage}
                  </div>
                  {/* Print bar de progression */}
                  <hr
                    style={{
                      width: '200px',
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
                    {item.no_of_days_left}
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </styleContainer>
    </div>
  )
}

export default ProjectCard
