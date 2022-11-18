/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import Link from 'next/link'
import { NextSeo } from 'next-seo';
import { getDocuments } from 'outstatic/server'

interface PostsProps {
	posts: {
		title: string
		slug: string
		publishedAt: string
		status: string
	}[]
}

export default function Home({ posts }: PostsProps): JSX.Element {
	return (
		<>
			<NextSeo
				title="Home"
			/>
			<h1>Home</h1>
			<h3>Posts</h3>
			{posts && posts.length > 0 && (
				<ul>
					{posts.map((post) => (
						<li key={post.slug}>
							<Link href={`/posts/${post.slug}`}>{post.title}</Link>
						</li>
					))}
				</ul>
			)}
		</>
	)
}

export const getServerSideProps = async () => {
	const params = ['title', 'slug']
	const posts = getDocuments('posts', params)

	return {
		props: { posts }
	}
}
