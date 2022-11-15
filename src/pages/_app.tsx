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

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
