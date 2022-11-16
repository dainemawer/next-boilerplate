/*
 * Google Analytics
 *
 * Initialiszes Google Analytics
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics
 * @returns {JSX.Element}
*/

import Script from 'next/script'
import { GA_TRACKING_ID } from '.'

export const GoogleAnalytics = (): JSX.Element => {
	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${GA_TRACKING_ID}', {
							page_path: window.location.pathname,
						});
					`,
				}}
			/>
		</>
	)
}
