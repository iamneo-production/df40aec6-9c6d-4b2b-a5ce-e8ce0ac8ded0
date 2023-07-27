import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {privateAxios} from "./../../services/helper"
function FileList({id}) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const response = await privateAxios.get(`/auth/files/students/${id}`);
      setFiles(response.data);
      console.log(files);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>File List</h2>
      {files.map((file, index) => (
        <div key={index}>
          <p>Name: {file.name}</p>
          <p>Type: {file.type}</p>
          <p>Size: {file.size}</p>
          <a href={file.url} target="_blank" rel="noopener noreferrer">
            View File
          </a>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FileList;
