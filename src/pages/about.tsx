import { GetStaticProps } from 'next'
import { getDocumentBySlug } from 'outstatic/server'
import convertToHTML from '@util/remark'

interface Page {
	page: {
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

export default function About({ page }: Page) {

	return (
		<article>
			<h1>{page.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: page.content }} />
		</article>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const page = getDocumentBySlug('pages', 'about', ['content'])
	const content = await convertToHTML(page.content || '')

	return {
		props: {
			page: { content }
		}
	}
}
