import React, { useState } from 'react'
import Course from '../Contents/Course.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseDetails.css'

const CourseDetails = () => {
  const [showInfo, setShowInfo] = useState(null);

  const handleMoreInfo = (courseId) => {
    setShowInfo(showInfo === courseId ? null : courseId);
  };

  return (
    <div className='course-details'>
      <ul>
        {Course.map(course => (
          <li key={course.id}>
            <Card className={showInfo === course.id ? 'expanded' : ''}>
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>
                  {course.description}
                </Card.Text>
                <Button variant='primary' onClick={() => handleMoreInfo(course.id)}>
                  {showInfo === course.id ? "Less Info" : "More Info"}
                </Button>
                <div className={`more-info ${showInfo === course.id ? 'visible' : ''}`}>
                  <Card.Text><strong>Price:</strong> {course.price}</Card.Text>
                  <Card.Text><strong>Timeline:</strong> {course.timeline}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails
