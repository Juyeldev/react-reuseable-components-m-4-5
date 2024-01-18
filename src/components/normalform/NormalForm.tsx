import {  FieldValues, FormProvider, useForm } from 'react-hook-form';
import cn from '../../utils/cn';
import Button from '../ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema, TNormalForm } from './Validation';

const NormalForm = () => {
	const methods = useForm<TNormalForm>({
		resolver: zodResolver(SignUpSchema),
	});
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = methods;
	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};

	console.log(watch('name'));
	const double = true;
	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={cn('border border-gray-400 rounded-lg shadow-md w-full p-5 mx-auto', {
					'max-w-5xl': double,
					'max-w-md': !double,
				})}
			>
				<div
					className={cn(' grid grid-cols-1 justify-items-center gap-4', {
						'md:grid-cols-2': double,
					})}
				>
					<div className="w-full max-w-md">
						<label className="block" htmlFor="name">
							Name
						</label>
						<input type="text" id="name" {...register('name')} />
						{errors.name && (
							<span className="text-xs text-red-600 font-semibold">{errors.name.message} </span>
						)}
					</div>
					
					<div className="w-full max-w-md">
						<label className="block" htmlFor="email">
							Email
						</label>
						<input className="w-full" type="email" id="email" {...register('email')} />
						{errors.email && (
							<span className="text-xs text-red-600 font-semibold">{errors.email.message} </span>
						)}
					</div>
					<div className="w-full max-w-md">
						<label className="block" htmlFor="password">
							Password
						</label>
						<input
							className="w-full"
							type="password"
							id="password"
							{...register('password', { minLength: 8 })}
						/>
						{errors.password && (
							<span className="text-xs text-red-600 font-semibold">{errors.password.message}</span>
						)}
					</div>
					{/* <div className="w-full max-w-md">
					<label className="block" htmlFor="name">
                    Select Option
					</label>
					<select>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                    <option>four</option>
					</select>
				</div>
				<div className="w-full max-w-md">
					<label className="block" htmlFor="name">
						Write Comment
					</label>
					<textarea></textarea>
				</div>
				<div className="w-full max-w-md">
					<label className="block" htmlFor="name">
						Check
					</label>
					<input className=" " type="checkbox" name="" id="" />
				</div> */}
				</div>
				<div
					className={cn(' grid grid-cols-1 justify-items-center gap-4 my-8', {
						'md:grid-cols-2': double,
					})}
				>
					<div className=" w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
						<Button className="w-full md:w-fit">Submit</Button>
					</div>
				</div>
			</form>
		</FormProvider>
	);
};

export default NormalForm;
