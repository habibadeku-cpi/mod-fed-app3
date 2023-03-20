import React,{ Component, PropsWithChildren, ReactNode } from 'react';
import { appName } from '../appInjector';

export class ExternalAppLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={()=>{ this.publishEvent(this.props.to) }}>{this.props.name}</button>;
  }

  publishEvent = (data) => {
    const event = new CustomEvent(appName, { detail: data });
    document.dispatchEvent(event);
  }

}

export default ExternalAppLink;