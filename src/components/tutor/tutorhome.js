import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../student/studhome.css';
import StudentNavbar from '../student/studentnavbar';

function TutorHomeWeb() {
   const [testDetails, setTestDetails] = useState([]);
  const { TutorID } = useParams();
//   const [studentInfo, setStudentInfo] = useState([]);
//   const [attendanceDays, setAttendanceDays] = useState([]);
const [tutorDetails, setTutorDetails] = useState([]);

  useEffect(() => {
    
    const fetchData = async (TutorID) => {
      try {
        console.log('Fetching tutor info...');
        const tutorDetailsResponse = await fetch(`http://127.0.0.1:5000/api/tutor/details?TutorID=${TutorID}`);
    
        if (!tutorDetailsResponse.ok) {
          console.error(`Tutor info request failed with status: ${tutorDetailsResponse.status}`);
          throw new Error(`Tutor info request failed with status: ${tutorDetailsResponse.status}`);
        }
    
        const tutorDetailsData = await tutorDetailsResponse.json();
        setTutorDetails(tutorDetailsData);
    
        console.log('Fetching test details...');
        const testResponse = await fetch(`http://127.0.0.1:5000/api/tests/fetch?TutorID=${TutorID}`);
        
        if (!testResponse.ok) {
          console.error(`Test details request failed with status: ${testResponse.status}`);
          throw new Error(`Test details request failed with status: ${testResponse.status}`);
        }
    
        const testData = await testResponse.json();
        setTestDetails(testData);
      } catch (error) {
        console.error('Error during data fetching:', error.message);
      }
    };
    
    
    fetchData(TutorID);
  }, [TutorID]);

  
  return (
    <div>
    <StudentNavbar />
    <div className="stud-container">
           <div className="section">
        <h2>Course</h2>
      </div>


      {/* Tutor Section */}
      <div className="section">
       
        <div className='headerRow'>
        <div className='title'>Tutor Name :</div>
        <div className='title'>Education:</div>
        <div className='title'>Contact:</div>
        <div className='title'>Address:</div>
         
         </div>
         {tutorDetails.length > 0 ?(
          <div className='studentRow'>
            <div className='studentData'>{tutorDetails[0].tutor_name}</div>
            <div className='studentData'>{tutorDetails[0].education}</div>
            <div className='studentData'>{tutorDetails[0].contact}</div>
            <div className='studentData'>{tutorDetails[0].presentaddress}</div>
          
            </div>
            ):(
              <div>No details found</div>
         )}
      </div>

      {/* Tests Section */}
      <div className="section">
        <h2>Tests</h2>
        <div className="headerRow">
          <div className="title">Subject</div>
          <div className="title">Topic</div>
          <div className="title">Total</div>
          <div className="title">Obtained</div>
        </div>
        {testDetails.length > 0 ? (
          testDetails.map((test, index) => (
            <div key={index} className="studentRow">
              <div className="studentData">{test.student_id}</div>

              <div className="studentData">{test.subject_name}</div>
              <div className="studentData">{test.test_topic}</div>
              <div className="studentData">{test.marks}</div>
              <div className="studentData">{test.maximum_marks}</div>
              <div className="studentData">{test.obtained_marks}</div>
            </div>
          ))
        ) : (
          <div>No tests found</div>
        )}
      </div>


    </div>
    </div>
  );
}

export default TutorHomeWeb;
