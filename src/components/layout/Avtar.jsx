import React from 'react';

const Avtar = ({ url, width = '100px', height = '100px' }) => {
	return (
		<div style={{ width, height, margin: 'auto' }}>
			<img
				src={url}
				alt='Profile__pic'
				className='card-img-top rounded-circle'
			/>
		</div>
	);
};

export default Avtar;
