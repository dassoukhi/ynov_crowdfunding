import React from 'react'
import data from '../../data.json'
import { Link } from 'react-router-dom'
import { HeartOutlined } from '@ant-design/icons'
import styled from 'styled-components'

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
  return (
    <div className='container-fluid m-5 text-left'>
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
                  className='card-img-top'
                  alt={item.name}
                  style={{ height: '100%', width: '100%' }}
                />
                {/* Détails du produit */}
                <div style={{ height: '100px' }} className='card-body'>
                  <div>
                    <span style={{ color: '#268366' }}>
                      Financement en cours
                    </span>
                    <span style={{ float: 'right' }}>
                      {/* Like button */}
                      <HeartOutlined
                        style={{ fontSize: '20px', color: 'lightgrey' }}
                      />
                    </span>
                  </div>
                  <h5
                    style={{
                      fontSize: '14px'
                    }}
                    className='card-title'
                  >
                    {/* Print le nom */}
                    {item.name}
                  </h5>
                  {/* Print la description */}
                  <p style={{ fontSize: '12px' }} className='card-text'>
                    {item.description}
                  </p>
                  {/* Print le prix */}
                  <p>{item.price}</p>
                  {/* Print le pourcentage */}
                  <div style={{ paddingTop: 4, float: 'right' }}>
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
                  <div style={{ padding: '4px 6px 0px 20px', clear: 'both' }}>
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
