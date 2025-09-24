import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateDestinationForm from '../components/destinations/UpdateDestinationForm.tsx';


const UpdateDestinationPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Mettre à Jour une Destination</h1>
      <UpdateDestinationForm id={id || ''} />
    </div>
  );
};

export default UpdateDestinationPage;
