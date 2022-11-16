/*
 * Custom App
 *
 * Next.js uses the App component to initialize pages.
 * You can override it and control the page initialization
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 * @returns {JSX.Element}
*/

import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo';
import Layout from '@components/Layout'
import ErrorBoundary from '@components/ErrorBoundary'
import 'tailwindcss/tailwind.css'
import { sendPageView } from '@lib/gtag'
import { GoogleAnalytics } from '@lib/gtag/analytics';

import SEO from '../next-seo.config';

export default function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			sendPageView(url)
		}

		router.events.on('routeChangeComplete', handleRouteChange)
		router.events.on('hashChangeComplete', handleRouteChange)

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
			router.events.off('hashChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
		<Layout>
			<ErrorBoundary>
				<DefaultSeo {...SEO} />
				<GoogleAnalytics />
				<Component {...pageProps} />
			</ErrorBoundary>
		</Layout>
	)
}

export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
	window.gtag('event', name, {
		event_category:
			label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
		value: Math.round(name === 'CLS' ? value * 1000 : value),
		event_label: id,
		non_interaction: true,
	});
}
