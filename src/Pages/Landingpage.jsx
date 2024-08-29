import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {

  const navigateByUrl= useNavigate()

  return (
    <>
<Row className="mt-5 align-items-center justify-content-between w-100">
  <Col></Col>
  <Col lg={5}>
  <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quam mollitia! Velit a nobis exercitationem debitis. Iure distinctio, facilis reiciendis accusamus unde accusantium recusandae temporibus? Temporibus quos blanditiis molestias cumque?</p>
   <Button onClick={()=>navigateByUrl('/home')} className="btn btn-info">Get Started</Button>
  </Col>
  <Col lg={5}>
  <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
  </Col>
  <Col></Col>

</Row>

  <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
  <h5 className='text-warning' style={{fontSize:"40px"}}>Features</h5>

  <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
  <Card style={{ width: '18rem' }} className='bg-info'>
  <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
  <Card style={{ width: '18rem' }}  className='bg-info'>
  <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
  <Card.Body>
        <Card.Title>Categorized Video</Card.Title>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
  <Card style={{ width: '18rem' }}  className='bg-info'>
  <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
  <Card.Body>
        <Card.Title>Watch History</Card.Title>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
  </div>


  </div>

<div className="container border rounded p-4 border-light mt-5 d-flex justify-content-center align-items-center">

<div className="col-lg-5">
  <h4 className='text-warning'>Simple,Powerful & Fast</h4>
  <h6 className='mb-5 mt-4'><span className='text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae repellat excepturi sequi id animi corporis ea, dolorem eius porro doloremque incidunt nemo placeat, quas accusamus voluptatibus ipsum, aspernatur cupiditate.</h6>
  <h6 className='mb-5 mt-4'><span className='text-warning'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae repellat excepturi sequi id animi corporis ea, dolorem eius porro doloremque incidunt nemo placeat, quas accusamus voluptatibus ipsum, aspernatur cupiditate.</h6>
  <h6 className='mb-5 mt-4'><span className='text-warning'>Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae repellat excepturi sequi id animi corporis ea, dolorem eius porro doloremque incidunt nemo placeat, quas accusamus voluptatibus ipsum, aspernatur cupiditate.</h6>
</div>

<div className="col-lg-5 ms-5">
<iframe width="560" height="315" src="https://www.youtube.com/embed/a3Ue-LN5B9U?si=QdvAS0TG-vAlsKje" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
</div>


</div>


     
    </>
  )
}

export default Landingpage
