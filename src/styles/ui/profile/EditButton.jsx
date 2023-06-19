import React from 'react';
import '../../../styles/components/cards/Edit_button.css';
const EditButton = () => {
  return (
    <section className='buttonContainer'>
      <section class='button'>
        <h2>Edit</h2>
      </section>
      <section class='button'>
        <h2>Help</h2>
      </section>
      <section class='button'>
        <h2>Logout</h2>
      </section>
    </section>
  );
};

export default EditButton;
