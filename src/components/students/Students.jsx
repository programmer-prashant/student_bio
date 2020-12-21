import React from 'react';
import { Link } from 'react-router-dom';
import Avtar from '../layout/Avtar';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import Loding from '../layout/Loding';

const Students = () => {
	const firestore = useFirestore();
	const students = useSelector((state) => state.firestore.ordered.students);
	console.log(students);
	useFirestoreConnect([
		{
			collection: 'students',
			orderBy: ['createdAt', 'desc'],
		},
	]);
	if (!students) {
		return <Loding />;
	}

	const deleteStudent = async (id) => {
		try {
			await firestore.collection('students').doc(id).delete();
		} catch (error) {
			alert('No such student please try again!');
		}
	};
	return (
		<>
			<div className='container'>
				<div className='py-4'>
					<div className='row'>
						{students.map((student) => (
							<div className='col-lg-3 col-md-6 mb-4' key={student.id}>
								<div className='card shadow text-center py-4'>
									<Avtar url={`https://i.pravatar.cc/150?img=${student.id}`} />
									<div className='card-body card__bdr'>
										<h5 className='card-title mb-0'>{student.name}</h5>
										<p className='text-muted small'>{student.email}</p>
										<Link
											to={`/Student/${student.id}`}
											className='btn btn-warning btn__profile'
										>
											View Profile
										</Link>
										<button
											className='btn btn__edit'
											onClick={() => deleteStudent(student.id)}
										>
											<span className='material-icons'>delete_outline</span>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Students;
