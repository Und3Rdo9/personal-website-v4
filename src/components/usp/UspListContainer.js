import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import SectionLoader from './../common/SectionLoader';
import UspList from './UspList';

const GET_ALL_USPS = gql`
query
{
  allUSPs {
    title
    icon {
      url
    }
    description
  }
}
`;

/**
* UspListContainer
*/
const UspListContainer = () => (
  <Query query={GET_ALL_USPS}>
    {( { loading, error, data } ) => {
      if (loading) return <SectionLoader isActive={true} />;
      if (error) return <div>Error :( {error}</div>;
        if (data.allUSPs.length) {
          return <UspList uspData={data.allUSPs} />
        }
        else {
          return (
            <article>
              <p>Sorry, this post has not been found.</p>
            </article>
          )
        }

      }}
    </Query>
  )

  export default UspListContainer;
