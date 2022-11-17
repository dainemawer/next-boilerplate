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
	return (
		<>
			<NextSeo
				title="Home"
			/>
			{console.log(pages)}
			<h1>Home</h1>
		</>
	)
}

export const getServerSideProps = async () => {
	const pages = getDocuments('pages', [
		'title',
		'publishedAt',
		'slug',
		'coverImage',
		'description',
		'author'
	])

	return {
		props: { pages }
	}
}
