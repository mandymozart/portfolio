import React from 'react';
import ClientItemAsync from './ClientItemAsync';
import CollaboratorItem from './CollaboratorItem';

const PartnerItem = ({ partnerLink }) => {
  console.log(partnerLink);
  if (!partnerLink) return <></>;
  if (partnerLink.type === 'collaborator') {
    return <CollaboratorItem uid={partnerLink.uid} />;
  } else if (partnerLink.type === 'client') {
    return <ClientItemAsync uid={partnerLink.uid} />;
  }

  return <>Not found</>;
};

export default PartnerItem;
