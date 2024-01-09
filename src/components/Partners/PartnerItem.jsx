import React from 'react';
import ClientItemAsync from './ClientItemAsync';
import CollaboratorItem from './CollaboratorItem';

const PartnerItem = ({ partner }) => {
  if (!partner) return <></>;
  if (partner.type === 'collaborator') {
    return <CollaboratorItem uid={partner.uid} />;
  } else if (partner.type === 'client') {
    return <ClientItemAsync uid={partner.uid} />;
  }

  return <>Not found</>;
};

export default PartnerItem;
