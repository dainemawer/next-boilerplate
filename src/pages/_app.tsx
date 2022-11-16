/*
 * Custom App
 *
 * Next.js uses the App component to initialize pages.
 * You can override it and control the page initialization
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 * @returns {JSX.Element}
*/

import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import Layout from '@components/Layout'
import ErrorBoundary from '@components/ErrorBoundary'
import 'tailwindcss/tailwind.css'

import SEO from '../next-seo.config';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<ErrorBoundary>
				<DefaultSeo {...SEO} />
				<Component {...pageProps} />
			</ErrorBoundary>
		</Layout>

	)
}
