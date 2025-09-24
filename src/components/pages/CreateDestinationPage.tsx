import React from 'react';
import CreateDestinationForm from "../destinations/createDestinationForm.tsx";

const CreateDestinationPage = () => {
  return (
    <div>
      <h1>Créer une Destination</h1>
      <CreateDestinationForm  />
      //CreateDestinationForm onCreated= {true}
     
    </div>
  );
};

export default CreateDestinationPage;
