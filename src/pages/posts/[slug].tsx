import { getDocumentBySlug, getDocumentPaths } from 'outstatic/server'
import { GetStaticPaths, GetStaticProps } from 'next'
import convertToHTML from '@util/remark'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

interface Post {
	post: {
		slug: string
		title: string
		publishedAt: string
		coverImage: string
		author: {
			name: string
			picture: string
		}
		description: string
		ogImage: {
			url: string
		}
		content: string
	}
}

interface Params {
	params: {
		slug: string
	}
}

export default function Post({ post }: Post) {
	const router = useRouter()

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}

	return (
		<article>
			<h1>{post.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.content }} />
			<ul>
				<li>Slug: {post.slug}</li>
				<li>Title: {post.title}</li>
				<li>Published At: {post.publishedAt}</li>
				<li>Cover Image: {post.coverImage}</li>
				<li>Author: {post.author.name}</li>
			</ul>
		</article>
	)

}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
	const post = getDocumentBySlug('posts', params.slug, [
		'title',
		'publishedAt',
		'slug',
		'author',
		'content',
		'coverImage'
	])

	const content = await convertToHTML(post.content || '')

	return {
		props: {
			post: {
				...post,
				content
			}
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: getDocumentPaths('posts'),
		fallback: false
	}
}
