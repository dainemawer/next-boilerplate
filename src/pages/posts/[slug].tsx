import { getDocumentBySlug } from 'outstatic/server'
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
		</article>
	)

}

export async function getServerSideProps({ params }: Params) {
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
