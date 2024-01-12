import React from 'react';
import ClientItemAsync from './ClientItemAsync';
import CollaboratorItem from './CollaboratorItem';

const PartnerItem = ({ link }) => {
  console.log(link);
  if (!link) return <></>;
  if (link.type === 'collaborator') {
    return <CollaboratorItem uid={link.uid} />;
  } else if (link.type === 'client') {
    return <ClientItemAsync uid={link.uid} />;
  }

  return <>Not found</>;
};

export default PartnerItem;
