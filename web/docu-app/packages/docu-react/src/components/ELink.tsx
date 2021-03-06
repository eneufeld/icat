import * as React from 'react'
import {Link} from "react-router-dom";
import {PackageContentContext} from '../App';

export interface ELinkProps {
  name: string;
  ePackage: string;
}

const ELink = ({ name, ePackage }: ELinkProps) => (
  <PackageContentContext.Consumer>
    {
      knownTypes => {
        if (knownTypes.has(`${ePackage}/${name}`)) {
          return <Link to={`/${ePackage}/${name}`}>{name}</Link>
        }
        return (<span>{name}</span>);
      }
    }
  </PackageContentContext.Consumer>
);

export default ELink;
