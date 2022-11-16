/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';

export default function Home(): JSX.Element {
	return (
		<div>
			<NextSeo
				title="Home"
			/>
			<h1>Home</h1>
		</div>
	)
}
