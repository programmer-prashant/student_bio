import React from 'react';

const MyInput = ({
	placeholder = 'Enter correct value',
	value,
	onChange,
	type = 'text',
	name,
	required = 'required',
}) => {
	return (
		<div>
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
				className='form-control'
				required={required}
			/>
		</div>
	);
};

export default MyInput;
