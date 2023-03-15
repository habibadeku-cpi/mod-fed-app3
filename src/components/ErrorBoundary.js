import { Component, PropsWithChildren, ReactNode } from 'react';

// export interface State {
//   hasError?: boolean;
// }

// Inspired by Practical Module Federation 2.0 -- Resilient Sharing of React Components
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <div>Error from boundary</div>;
    }
    return children;
  }
}

export default ErrorBoundary;