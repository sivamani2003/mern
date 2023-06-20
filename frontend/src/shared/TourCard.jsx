import React from 'react'
import { Card,CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
const TourCard = ({tour}) => {
    const {id,title,photo,price,featured,avgRating,reviews} = tour
  return (
    <div className="tour__card">
        <Card>
            <div className="tour__img">
                <img src={photo} alt="tour-img" />
                <span>Featured</span>
            </div>
        </Card>
        <CardBody>
            <div className="card__top">
                
            </div>
        </CardBody>
    </div>
  )
}

export default TourCard