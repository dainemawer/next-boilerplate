/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import { getDocuments } from 'outstatic/server'

export default function Home({ pages }): JSX.Element {

	console.log(pages);

	return (
		<>
			<NextSeo
				title="Home"
			/>
			<h1>Home</h1>
		</>
	)
}

export const getStaticProps = async () => {
	const pages = getDocuments('pages', [
		'title',
	])



	return {
		props: { pages }
	}
}
