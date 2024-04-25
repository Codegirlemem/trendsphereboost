import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDervivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 text-darklue">
          <h1 className="font-exo  text-3xl font-bold">
            OOPS! Something went wrong!
          </h1>
          <p className="font-montserrat text-lg">{this.props.fallback}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
