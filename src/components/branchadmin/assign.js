import React, { useState, useEffect } from 'react';
 import '../branchadmin/Assign.css'

const Assign = () => {
  const [tutors, setTutors] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [searchCategory, setSearchCategory] = useState('');
  const [students, setStudents] = useState([]);
  const [selectedTutor, setSelectedTutor] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/tutor_ref')
      .then((response) => response.json())
      .then((data) => {
        setTutors(data);
        setFilteredTutors(data);
      })
      .catch((error) => console.error('Error fetching tutors:', error));

    fetch('http://127.0.0.1:5000/api/stud_ref')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching students:', error));

    fetch('http://127.0.0.1:5000/api/assignments')
      .then((response) => response.json())
      .then((data) => {
        console.log('Assignments data:', data);
        setAssignments(data);
      })
      .catch((error) => console.error('Error fetching assignments:', error));
  }, []);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('index', index.toString());
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, toIndex, tutorId) => {
    const fromIndex = parseInt(event.dataTransfer.getData('index'));
    const updatedStudents = [...students];
    const [student] = updatedStudents.splice(fromIndex, 1);
    updatedStudents.splice(toIndex, 0, student);

    // Update the students state
    setStudents(updatedStudents);

    const updatedTutors = [...tutors];
    const tutorIndex = updatedTutors.findIndex((tutor) => tutor.tutor_id === tutorId);
    if (tutorIndex !== -1) {
      const tutor = updatedTutors[tutorIndex];

      // Initialize tutor.students if it's not defined
      if (!tutor.students) {
        tutor.students = [];
      }

      tutor.students.push(student);
      setTutors(updatedTutors);

      // Save the assignment and delete the student on the backend
      fetch('http://localhost:5000/api/assignments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tutorId: tutorId,
          studentId: student.student_id,
          studName: student.stud_name,
          tutorName: tutor.tutor_name,
          tutorEducation:tutor.education,
          tutorContact: tutor.contact,
          tutoraddress : tutor.presentaddress
        }),
      })
        .then((response) => {
          if (response.ok) {
            // If the assignment was successful, don't do anything here
          } else {
            console.error('Error saving assignment:', response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Assignment saved:', data);
          window.location.reload();
          // You can choose to reload or perform other actions here
        })
        .catch((error) => {
          console.error('Error saving assignment:', error);
        });
    }
  };

  useEffect(() => {
    if (searchCategory.trim() === '') {
      setFilteredTutors(tutors);
    } else {
      const filtered = tutors.filter((tutor) => tutor.ccategory && tutor.ccategory.includes(searchCategory));
      setFilteredTutors(filtered);
    }
  }, [searchCategory, tutors]);

  return (
    <div>
        <div className="assign-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by category..."
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                />
            </div>

            <div className="tables-container1">
                <div className="tutors-list">
                    <h2>Tutors List</h2>
                    <ul className="custom-ul">
                        {filteredTutors.map((tutor) => (
                            <li
                            className='custom-li'
                                key={tutor.tutor_id}
                                onDragOver={(e) => handleDragOver(e)}
                                onDrop={(e) => handleDrop(e, -1, tutor.tutor_id)}
                                onClick={() => setSelectedTutor(tutor)}
                            >
                                <div className="inline-header">
                                    <p>Tutor Name: {tutor.tutor_name}</p>
                                    <p>Category: {tutor.ccategory}</p>
                                    <p>Contact: {tutor.contact}</p>
                                    <p>Gender: {tutor.gender}</p>
                                </div>
                                {selectedTutor === tutor && (
                                    <ul>
                                        {tutor.students.map((student) => (
                                            <li key={student.student_id}>Name: {student.stud_name}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="students-list">
                    <h2>Students List</h2>
                    <ul className="custom-ul">
                        {students.map((student, index) => (
                            <li
                            className='custom-li'
                                key={student.student_id}
                                draggable
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragOver={(e) => handleDragOver(e, index)}
                                onDrop={(e) => handleDrop(e, index, -1)}
                            >
                                <div className="inline-header">
                                    <p>Name: {student.stud_name}</p>
                                    <p>Class: {student.class}</p>
                                    <p>Board: {student.board}</p>
                                    <p>Contact: {student.contact}</p>
                                    <p>Subjects required: {student.subject}</p>
                                    <p>Fees fixed: {student.fees}</p>
                                    <p>Total assigned no. of classes per month: {student.month}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="assignments-list">
                <h2>Assignments List</h2>
                <ul className="custom-ul">
                    {assignments.map((assignment) => (
                        <li className='custom-li' key={assignment.assignment_id}>
                            <p>Tutor Name: {assignment.tutor_name}</p>
                            <p>Student Name: {assignment.stud_name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);
};

export default Assign;
