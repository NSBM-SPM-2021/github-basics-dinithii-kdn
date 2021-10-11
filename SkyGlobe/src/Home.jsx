import './App.css';
import Contact from './Contact';
import { Button } from 'react-bootstrap';




import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Navbar, Nav, NavDropdown, Container, CardGroup, ListGroupItem, ListGroup, Row, Col
}
    from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'











function App() {


    return (
        <div className="App">







            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">SkyGlobe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/react">ABOUT US</Nav.Link>
                            <Nav.Link href="#pricing">CONTACT US</Nav.Link>
                            <NavDropdown title="BLOG" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">CLASSIC BLOG</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">GRID BLOG</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">MODERN BLOG</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">BLOG SINGLE POST</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="./Contact.jsx">
                                SIGN IN
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                SIGN UP
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>










            <br />
            <center><h1 style={{ fontFamily: 'comic sans' }} size={100} >WELCOME TO SKYGLOBE!</h1></center>  <br />
            <h3 style={{ color: 'rgb(50, 158, 177)' }}>Book Your Flight Ticket Here!</h3>
            <br /> <br />



            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://informal.utexas.edu/sites/default/files/coursephoto/Bon%20Voyage%20Intro%20to%20Travel%20Writing.jpg"
                        width="200"
                        height="750"
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
                        src="https://media.istockphoto.com/vectors/travel-vector-id1142873622?k=20&m=1142873622&s=612x612&w=0&h=7SbywO7WD1Qj1-vnkrOyhddB_vLiNQCVmsnIFG8wX8E="
                        width="200"
                        height="750"
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
                        src="https://img.freepik.com/free-photo/travel-concept-with-elements-assortment_23-2148971069.jpg?size=626&ext=jpg&ga=GA1.2.556314006.1630108800"
                        width="70"
                        height="750"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>



                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/vectors/hello-summer-vector-background-design-hello-summer-greeting-text-in-vector-id1214652354?k=6&m=1214652354&s=612x612&w=0&h=awcM09I5vJ2Ei3-6oB_l8rH-2mCQOo93MofsKvyE_Z0="
                        width="200"
                        height="750"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>




            </Carousel>










            <br /> <br /> <br /> <br /> <br />



            <center><h1 style={{ fontFamily: 'comic sans' }} size={100} >SEARCH YOUR FLIGHT</h1></center>  <br />




            <Form>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Departure Airport
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select aria-label="Default select example">

                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Form.Group>





                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Arrival Airport
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select aria-label="Default select example">

                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Form.Group>





                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        One Way
                    </Form.Label>
                    <Col sm={1}>
                        <Form.Check aria-label="option 1" />
                    </Col>



                    <Form.Label column sm={2}>
                        Return
                    </Form.Label>
                    <Col sm={1}>
                        <Form.Check aria-label="option 1" />
                    </Col>



                    <Form.Label column sm={2}>
                        Multicity
                    </Form.Label>
                    <Col sm={1}>
                        <Form.Check aria-label="option 1" />
                    </Col>

                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Departs On
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="date" placeholder="Date" />
                    </Col>
                </Form.Group>




                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Returns On
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="date" placeholder="Date" />
                    </Col>
                </Form.Group>



                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Class
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select aria-label="Default select example">

                            <option>Open this select menu</option>
                            <option value="1">Business</option>
                            <option value="2">Economy</option>

                        </Form.Select>
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Passengers
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select aria-label="Default select example">

                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Form.Group>







                <br /> <br />
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 1 }}>
                        <Button type="submit">SEARCH</Button>
                    </Col>
                </Form.Group>


            </Form>




            <br /> <br /> <br />




            <img
                className="d-block w-100"
                src="https://thumbs.dreamstime.com/b/travel-banner-flat-vacation-design-set-concept-illustration-74366503.jpg"
                width="100"
                height="750"
                alt="First slide"
            />
















            <br /> <br />


            <center><h1 style={{ fontFamily: 'comic sans' }} size={100} >SUBMIT YOUR FEEDBACK</h1></center>  <br />

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>



            <br /> <br />
            <br /> <br />







            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/holidays-to-south-korea-1504262469-390X219.jpg" />
                    <Card.Body>
                        <Card.Title>SOUTH KOREA</Card.Title>
                        <Card.Text>

                            Image result for south korea beautiful places
                            It is impossible to pick one beautiful place in South Korea as there are several places to explore.
                            Some of the most beautiful places to visit are Busan, Seoul, Jeju, Jinhae, Boseong, and Bukchon Hanok Village.
                            Despite being at war with North Korea, South Korea is one of the safest places to visit in the world.
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">SEE MORE</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 days ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://wallpaperaccess.com/full/889209.png" />
                    <Card.Body>
                        <Card.Title>AUSTRALIA</Card.Title>
                        <Card.Text>
                            It's no secret that Australia is one of the most beautiful countries in the world. But it's not just the beaches,
                            mountains and forests that make it shine, it's the impact it has on tackling extreme poverty.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">SEE MORE</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 4 days ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://lp-cms-production.imgix.net/2019-06/1745a4f91a95f5f60b3c6e0450c26b9f-7-by-richard-serra.jpg" height="252" />
                    <Card.Body>
                        <Card.Title>QATAR</Card.Title>
                        <Card.Text>
                            Qatar has a wealth of beauty and culture to offer people visiting from all over the world.Here is our list of the top 10 beautiful places in Qatar so you can spend your time wisely.
                            Doha is famous for its many mosques and modern buildings.It is also increasing in the libraries, most notably the Qatari Book House and the National Library.
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">SEE MORE</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>


            </CardGroup>

            <br />

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://lp-cms-production.imgix.net/2021-04/GettyRF_486584756.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850" height="252" />
                    <Card.Body>
                        <Card.Title>FRANCE</Card.Title>
                        <Card.Text>
                            From idyllic vineyards to stretches of lavender, France is filled with beautiful places for travelers to explore....And nothing captures the glitz and glamor of the country quite like the French Riviera.Then there are the towns and cities:
                            charming Colmar, colorful Menton, hilltop Rocamadour, and, of course, Paris.
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">SEE MORE</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://www.touropia.com/gfx/b/2018/05/york.jpg" height="252" />
                    <Card.Body>
                        <Card.Title>UNITED KINGDOM</Card.Title>
                        <Card.Text>
                            Within its boundaries, the UK is a sort of world in miniature — with canyons, mountains, river valleys, deep, beautiful lakes and amazing beaches.These are among the best of its natural wonders.
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">SEE MORE</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://www.planetware.com/photos-large/USNY/usa-best-places-orlando.jpg" height="252" />
                    <Card.Body>
                        <Card.Title>UNITED STATES</Card.Title>
                        <Card.Text>
                            Americans love having people visit their country.That's why the tourism industry in the United States is booming. Besides the popular attractions that most tourists visit, there are also tons of souvenir shops and small businesses that cater to guests from other countries.
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">SEE MORE</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>

                </Card>
            </CardGroup>


            <br /> <br />



            <Card className="text-left">
                <Card.Header>SkyGlobe</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        SkyGlobe is a travel search engine which instantly searches all available flight,
                        bus and train prices on an exhaustive number of travel sites such as online travel agencies, major and
                        low-cost airlines and tour-operators.We also compare hotel rooms and car rental deals.You can easily narrow
                        down your search as much (or as little!) as you want.
                        That means that if the trip you'd like is anywhere out there, you'll find it right away.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>




            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn2.vectorstock.com/i/thumb-large/42/91/travel-agency-tourism-app-and-trips-logo-vector-21164291.jpg" />
                <Card.Body>
                    <Card.Title>SkyGlobe</Card.Title>
                    <Card.Text>
                        SkyGlobe is a travel search engine which instantly searches all available flight,
                        bus and train prices on an exhaustive number of travel sites such as online travel agencies, major and
                        low-cost airlines and tour-operators.We also compare hotel rooms and car rental deals.You can easily narrow
                        down your search as much (or as little!) as you want.
                        That means that if the trip you'd like is anywhere out there, you'll find it right away.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>



            <br /><br /><br />














        </div >





    );
}

export default App;
