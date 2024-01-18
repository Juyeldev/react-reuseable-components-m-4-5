import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';
import cn from '../../utils/cn';

type TRef = HTMLButtonElement;
type TButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
	TButtonOptions;
type TVariant = 'solid' | 'outline' | 'ghost';

type TButtonOptions = {
	variant?: TVariant;
};

const Button = forwardRef<TRef, TButton>(
	({ className, variant = 'solid', children, ...rest }, ref) => {
		const getVariant = (variant: TVariant) => {
			switch (variant) {
				case 'outline':
					return 'btn-outline';

				case 'ghost':
					return 'btn-ghost';

				default:
					return 'btn-primary';
			}
		};

		return (
			<button {...rest} ref={ref} className={cn(getVariant(variant), className)}>
				{children}
			</button>
		);
	}
);

export default Button;
