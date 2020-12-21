import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Avtar from '../layout/Avtar';
import { useFirestore } from 'react-redux-firebase';
import Loding from '../layout/Loding';

const Student = () => {
	const firestore = useFirestore();
	const { id } = useParams();
	const [student, setStudent] = useState(null);

	const loadStudent = async () => {
		try {
			const docRef = firestore.collection('students').doc(id);
			const result = await docRef.get();
			if (result.exists) {
				setStudent(result.data());
			} else {
				alert('No such student Found please try again!');
			}
		} catch (error) {
			console.log('Error:', error);
		}
	};

	useEffect(() => {
		loadStudent();
	}, []);

	if (!student) {
		return <Loding />;
	}
	return (
		<div className='container'>
			<div className='py-4'>
				<div className='row'>
					<div className='col-md-10 mx-auto'>
						<div className='card card-body shadow'>
							<div className='row'>
								<div className='col-md-4'>
									<Avtar url={`https://i.pravatar.cc/150?img=${id}`} />
								</div>
								<div className='col-md-8'>
									<ul className='list-group'>
										<li className='d-flex justify-content-between align-items-center list-group-item list-group-item-action bg-secondary text-light'>
											<h3 className='m-0 '>{student.name}</h3>

											<Link
												className='btn btn-outline-warning'
												to={`/studentForm/${id}`}
											>
												Edit Profile
											</Link>
										</li>
										<li className='list-group-item'>
											<p>Email: {student.email}</p>
											<p>phone: {student.phone}</p>
											<p>Standard: {student.standard}</p>
											<p>Address 1: {student.address1}</p>
											<p>Address 2: {student.address2}</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Student;
