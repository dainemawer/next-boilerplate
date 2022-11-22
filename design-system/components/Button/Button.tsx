/**
 * Button Component
 *
 * This file contains the main Button component logic.
 *
 * @author 	Daine Mawer
 * @version 1.0.0
 * @since 	1.0.0
 * @license MIT
 * @see https://www.figma.com/file/EEkoVAfxkq5fylym5sbXxj/HELLO-Design-System
 */

import styles from './Button.module.css';
import { classNames } from '../../util/classes';
import Link from 'next/link'

import { Icon } from '../Icon';

interface ButtonProps {
	category?: string;
	children: React.ReactNode;
	disabled?: boolean;
	inverted?: boolean;
	primary?: boolean;
	secondary?: boolean;
	id: string;
	icon?: string;
	href?: string;
	type: 'button' | 'submit' | 'reset';
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
	ariaControls?: string;
	ariaExpanded?: boolean;
	onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
	onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export const Button = ({
	id,
	type,
	ariaControls,
	ariaExpanded,
	onClick,
	onFocus,
	onBlur,
	onKeyDown,
	onKeyUp,
	href,
	icon,
	category,
	children,
	disabled,
	inverted,
	primary,
	secondary
}: ButtonProps): JSX.Element => {

	const external = href && href.startsWith('http');

	const className = classNames(
		href ? styles.link : styles.button,
		primary && styles.primary,
		secondary && styles.secondary,
		inverted && styles.inverted,
		icon && styles.icon,
		category && styles[`category-${category}`],
	);

	const iconMarkUp = icon && (
		<span aria-hidden="true" className={styles.glyph}>
			<Icon name={icon} />
		</span>
	)

	const childMarkup = children ? (
		<span>{children}</span>
	) : null;

	const Anchor = external ? (
		<a className={className} href={href} id={id} rel="noopener noreferrer">
			{iconMarkUp}
			{childMarkup}
		</a>
	) : (
		<Link className={className} href={href}>
			{iconMarkUp}
			{childMarkup}
		</Link>
	);

	const Button = (
		<button
			id={id}
			type={type}
			className={className}
			disabled={disabled}
			onClick={onClick}
			onFocus={onFocus}
			onBlur={onBlur}
			onKeyDown={onKeyDown}
			onKeyUp={onKeyUp}
			aria-controls={ariaControls}
			aria-expanded={ariaExpanded}
			>
				{iconMarkUp}
				{childMarkup}
		</button>
	);

	return href ? Anchor : Button;
}
