import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {privateAxios} from "./../../services/helper"
function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    privateAxios
      .post('/auth/notifications', {
        title: title,
        description: description,
      })
      .then(() => {
        navigate('/main/notice');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <br />
          <div className='mb-4 mt-4'>
            <Link to='/main/notice/'>
            <button className='form-btn' style={{ backgroundColor: '#645CBB', height: '40px', marginLeft: '30px', border: 'none',color:'white',borderRadius: '5px' }}>Read Notification</button>

            </Link>
          </div>
          <div className='text-center'>
            <p style={{ fontWeight: 'bolder' ,color:'#645CBB',fontSize:'30px' }}>CREATE DATA</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label style={{ fontSize: '20px', color: '#645CBB',fontWeight:'bolder' }}>
                Enter title:{' '}
              </label>
              <input
                type='text'
                placeholder='title'
                className='form-control'
                onChange={(e) => setTitle(e.target.value)}
                style={{ fontSize: '1.2rem', borderColor: '#645CBB' ,borderWidth: '2px' }}
              />
            </div>
            <div className='form-group'>
            <label style={{ fontSize: '20px', color: '#645CBB',fontWeight:'bolder' }}>
                Enter description:{' '}
              </label>
              <input
                type='text'
                placeholder='description'
                onChange={(e) => setDescription(e.target.value)}
                className='form-control'
                style={{ fontSize: '1.2rem',borderColor: '#645CBB' ,borderWidth: '2px' }}
              />
            </div>

            <br />
            <div className='d-grid'>
            <center><button className='form-btn'  type='submit'value='Submit' style={{ backgroundColor: '#645CBB', height: '40px', marginLeft: '30px', border: 'none',color:'white',borderRadius: '5px' }}>submit</button>
            </center> {/* <input
                type='submit'
                value='Submit'
                
                style={{ backgroundColor: '#9e91a8',borderRadius: '25px',
                fontWeight: 'bold',
                color: 'black',
                height:'40px' }}
              /> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
