import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {privateAxios} from "./../../services/helper"
function Edit() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setTitle(localStorage.getItem('title'));
    setDescription(localStorage.getItem('description'));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    privateAxios
      .put(`/auth/notification/${id}`, {
        id: id,
        title: title,
        description: description,
      })
      .then(() => {
        navigate('notice/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-md-12'>
          <div className='mb-4 mt-4'>
            {/* <Link to='/'>
              <button
                style={{
                  backgroundColor: '#8294c4a4',
                  borderRadius: '50px',
                }}
              >
                Read Data
              </button>
            </Link> */}
          </div>
          <div className='text-center'>
            <p style={{ fontWeight: 'bolder' ,color:'#645CBB',fontSize:'30px' }}>UPDATE DATA</p>
          </div>
          <form onSubmit={handleUpdate}>
            <div className='form-group'>
            <label style={{ fontSize: '20px', color: '#645CBB',fontWeight:'bolder' }}>
                Enter title:{' '}
              </label>
              <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='title'
                className='form-control'
                style={{ fontSize: '1.2rem', borderColor: '#645CBB' ,borderWidth: '2px' }}
              />
            </div>
            <div className='form-group'>
            <label style={{ fontSize: '20px', color: '#645CBB',fontWeight:'bolder' }}>
                Enter Description:{' '}
              </label>
              <input
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='decsription'
                className='form-control'
                style={{ fontSize: '1.2rem', borderColor: '#645CBB' ,borderWidth: '2px' }}
              />
            </div>

            <br />
            <div className='d-grid'>
            <button type='submit'value='Update' style={{ backgroundColor: '#645CBB', height: '40px', marginLeft: '30px', border: 'none',color:'white',borderRadius: '5px' }}>submit</button>
              
              {/* <input
                type='submit'
                value='Update'
                className='btn btn-primary'
              /> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit;
