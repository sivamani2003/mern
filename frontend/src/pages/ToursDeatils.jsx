import React from 'react'
import '../styles/tour-details.css'
import { Container,Row,Col,Form,ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import CalcualateAvgRating from '../utils/avgRating'
import calculateAvgRating from '../utils/avgRating'
const ToursDeatils = () => {
  const {id} = useParams()
  const tour = tourData.find(tour=>tour.id===id);
  const{photo,title,desc,price,reviews,city,address,distance,maxGroupSize} = tour;
  const {totalRating,avgRating} = calculateAvgRating(reviews)
  return <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt="" />
              <div className="tour__info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className="d-flex align-items-center gap-1">
                  <span className="tour__rating d-flex align-items-center gap-1">
                        <i class="ri-star-fill" style={{'color':'var(--secondary-color)'}}></i>
                        {CalcualateAvgRating === 0 ? null:avgRating} 
                        {totalRating === 0 ?(
                             "Not rated"
                             ) :(
                             <span>({reviews?.length})</span>
                             )}
                    </span>
                  </span>
                          <span>
                            <i class="ri-map-pin-user-fill"></i>{address}
                          </span>
                </div>
                <div className="tour__extra-details">
                  <span><i class='ri-map-pin-2-fill'></i>{city}</span>
                  <span><i class="ri-money-dollar-circle-line"></i>${price}/per person</span>
                  <span><i class="ri-group-line"></i>{maxGroupSize}</span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
}

export default ToursDeatils