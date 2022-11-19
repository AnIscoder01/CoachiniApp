import React from 'react'
import {Carousel} from 'react-bootstrap'
import { useSelector } from 'react-redux'
const LandingPage = () => {
  const users=useSelector(state=>state.authReducer.users)

  return (
    <div>

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/photos-gratuite/jeune-homme-bonne-sante-athlete-faisant-exercice-cordes-dans-salle-gym-modele-masculin-celibataire-pratiquant-dur-entrainant-haut-du-corps-concept-mode-vie-sain-sport-fitness-musculation-bien-etre_155003-27879.jpg?w=2000"
      alt="First slide"
    />
    
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/gym-background-fitness-weight-equipment-on-empty-dark-floor-picture-id1213615970?k=20&m=1213615970&s=612x612&w=0&h=S2Ny5JNrAlcpZ_0mt76CKAwARqvJN5glvHpB9fD3DA0="
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.bb-gym.tn/wp-content/uploads/2021/03/pla.jpg "
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default LandingPage