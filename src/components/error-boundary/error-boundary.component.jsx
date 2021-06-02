import { Component } from 'react'
// import { Link } from 'react-router-dom'

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="page-error">
            <h4 className="mb-0 text-muted font-weight-normal">Opps! Page is Broken!</h4>
            <div>
                <span className="error-page-item font-weight-bold">5</span>
                <span className="error-page-item font-weight-bold">0</span>
                <span className="error-page-item font-weight-bold">3</span>
            </div>
            {/* <Link to="/login" className="btn btn-outline-light btn-lg">Go Home</Link> */}
         </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;