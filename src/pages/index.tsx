/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import { Button } from '../../design-system/components/Button';

export default function Home(): JSX.Element {
	return (
		<>
			<NextSeo
				title="Home"
			/>
			<h1>Home</h1>
			<Button id="button" primary type="button">Button</Button>
		</>
	)
}
