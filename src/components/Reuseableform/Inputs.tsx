

 export const Inputs = ({register, label, errors, type} ) => {
	return (
		<div className="w-full max-w-md">
			<label className="block" htmlFor="name">
				{label}
			</label>
			<input type={type} id="name" {...register} />
			{errors.name && (
				<span className="text-xs text-red-600 font-semibold">{errors.name.message} </span>
			)}
		</div>
	);
};


