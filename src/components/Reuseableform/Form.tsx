import { createContext } from 'react';
import cn from '../../utils/cn';
import { TForm } from '../../types';

export const FormContext = createContext<{ double: boolean } | null>(null);

export const Form = ({ children, onSubmit, double= false }:TForm) => {
	return (
		<FormContext.Provider value={{ double }}>
			<form
				onSubmit={onSubmit}
				className={cn('border border-gray-400 rounded-lg shadow-md w-full p-5 mx-auto', {
					'max-w-5xl': double,
					'max-w-md': !double,
				})}
			>
				{children}
			</form>
		</FormContext.Provider>
	);
};
