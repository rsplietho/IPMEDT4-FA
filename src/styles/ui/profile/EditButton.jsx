import React from 'react';
import '../../../styles/components/cards/Edit_button.css';
import { ReactComponent as LogOut } from '../../../assets/logout.svg';
import { ReactComponent as Pencil } from '../../../assets/pencil.svg';
import { ReactComponent as Help } from '../../../assets/help.svg';
const EditButton = () => {
  return (
    <section className='buttonContainer'>
      <section class='button'>
        <Pencil
          style={{ transform: 'scale(2.0)', width: '24px ', height: '24px' }}
        />
        <h2>Edit</h2>
      </section>
      <section class='button'>
        <Help
          style={{ transform: 'scale(2.0)', width: '24px ', height: '24px' }}
        />
        <h2>Help</h2>
      </section>
      <section class='button'>
        <LogOut
          style={{ transform: 'scale(2.0)', width: '24px ', height: '24px' }}
        />
        <h2>Logout</h2>
      </section>
    </section>
  );
};

export default EditButton;
