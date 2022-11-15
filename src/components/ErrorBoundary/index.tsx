/*
 * Error Boundary
 *
 * React Error Boundaries is a graceful way to handle a JavaScript error on the
 * client so that the other parts of the application continue working
 *
 * @see https://reactjs.org/docs/error-boundaries.html
 * @returns {JSX.Element}
*/


import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false
	};

	static getDerivedStateFromError(error: Error): State {
		// Update state so the next render will show the fallback UI

		return { hasError: true }
	}
	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// You can use your own error logging service here
		console.log({ error, errorInfo })
	}
	render() {
		// Check if the error is thrown
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<div>
					<h2>Oops, there is an error!</h2>
					<button
						type="button"
						onClick={() => this.setState({ hasError: false })}
					>
						Try again?
					</button>
				</div>
			)
		}

		// Return children components in case of no error

		return this.props.children
	}
}

export default ErrorBoundary
