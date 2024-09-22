import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <>
    <Navbar expand="lg" className="bg-light">
      <Container>
        {/* title with Navbar*/}
        <Navbar.Brand href="#home">UC Berkely</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* About */}
            <NavDropdown title="About" id="basic-nav-dropdown">
              <div className="image_desc">
                <Col xs={6} md={4}>
                <Image
                  src="https://www.berkeley.edu/wp-content/uploads/2021/02/about-megamenu-ez.jpg"
                  alt=""
                  height={'200px'}
                  width={'300px'}
                  style={{margin:'5px'}}
                ></Image>
                </Col>
                <p className="fw-medium" style={{margin:'8px'}}>
                Want to change the world? At Berkeley we’re doing just that. When you join the Golden Bear community, you’re part of an institution that shifts the global conversation every single day.
                </p>
                
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/">Overview</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/history-discoveries/">
                History & Discoveries
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/traditions/">Traditions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/experience-berkeley/">Experience At Berkeley</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://visit.berkeley.edu/">Visit</NavDropdown.Item>
            </NavDropdown>
            {/* Admissions */}
            <NavDropdown title="Admissions" id="basic-nav-dropdown">
              <div className="image_desc">
                <Col xs={6} md={4}>
                <Image
                  src="https://www.berkeley.edu/wp-content/uploads/2021/02/admissions-megamenu-ez.jpg"
                  alt=""
                  height={'200px'}
                  width={'300px'}
                  style={{margin:'5px'}}
                ></Image>
                </Col>
                <p className="fw-medium" style={{margin:'8px'}}>
                From a group of academic pioneers in 1868 to the Free Speech
                Movement in 1964, Berkeley is a place where the brightest minds
                from across the globe come together to explore, ask questions
                and improve the world.
                </p>
                
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/enroll'>Enroll</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={Link} to='/profile'>My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={Link} to='/CourseDetails'>
                Course Details
              </NavDropdown.Item>
            </NavDropdown>
            {/* Academics */}
            <NavDropdown title="Academics" id="basic-nav-dropdown">
              <div className="image_desc">
                <Col xs={6} md={4}>
                <Image
                  src="https://www.berkeley.edu/wp-content/uploads/2021/02/academics-megamenu-ez-.jpg"
                  alt=""
                  height={'200px'}
                  width={'300px'}
                  style={{margin:'5px'}}
                ></Image>
                </Col>
                <p className="fw-medium" style={{margin:'8px'}}>
                Berkeley is home to some of the world’s greatest minds leading more than 130 academic departments and 80 interdisciplinary research units and addressing the world’s most pertinent challenges.
                </p>
                
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/">Overview</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/history-discoveries/">
                Schools & Colleges
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/traditions/">Academic departments & Programs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/experience-berkeley/">Class Schedule & Courses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://visit.berkeley.edu/">Advising & Tutoring</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://visit.berkeley.edu/">Faculty Profiles</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://visit.berkeley.edu/">A\cademic Calendar</NavDropdown.Item>
            </NavDropdown>
            {/* research */}
            <NavDropdown title="Research" id="basic-nav-dropdown">
              <div className="image_desc">
                <Col xs={6} md={4}>
                <Image
                  src="https://www.berkeley.edu/wp-content/uploads/2021/02/research-megamenu-ez.jpg"
                  alt=""
                  height={'200px'}
                  width={'300px'}
                  style={{margin:'5px'}}
                ></Image>
                </Col>
                <p className="fw-medium" style={{margin:'8px'}}>
                From expeditions to Egypt in the late 1800s to stem cell research and artificial intelligence today, Berkeley has been at the forefront of research throughout its history. Here students can work side-by-side with Nobel Laureates, Fields medal winners, Fulbright Scholars and MacArthur fellows.
                </p>
                
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/">Overview</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/history-discoveries/">
                Reasearch Progras
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/traditions/">Libraries</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/experience-berkeley/">Publications</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://visit.berkeley.edu/">Museums and Collections</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Undergrauate Research
              </NavDropdown.Item>
            </NavDropdown>
            {/* Campus Life */}
            <NavDropdown title="Campus Life" id="basic-nav-dropdown">
              <div className="image_desc">
                <Col xs={6} md={4}>
                <Image
                  src="https://www.berkeley.edu/wp-content/uploads/2021/02/megamenu-ez468.jpg"
                  alt=""
                  height={'200px'}
                  width={'300px'}
                  style={{margin:'5px'}}
                ></Image>
                </Col>
                <p className="fw-medium" style={{margin:'8px'}}>
                Life at Berkeley blends research and reflection, the scientific with the artistic, and the scholarly with the athletic. Our students come from different places and backgrounds, but together they create a diverse and kinetic community that seeks to create a better world.
                </p>
                
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/">Overview</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/history-discoveries/">
                Events & Attractions
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/traditions/">Recreational Sports</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.berkeley.edu/about/experience-berkeley/">Housing & Dining</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://visit.berkeley.edu/">Student Organizations</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Healthy & Safety
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <img src="https://www.berkeley.edu/wp-content/uploads/2023/10/Entrepreneurship-at-Berkeley-1200x600-1.png" height={'650px'} width={'100%'} alt="" /> */}
    </>
  );
}

export default BasicExample;
