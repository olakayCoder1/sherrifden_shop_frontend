import React, { useState } from 'react';
import { supabase } from './lib/helper/supabaseClient'

function ImageUploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const { data, error } = await supabase.storage
      .from('carve_storage') // Replace with your bucket name
      .upload(`images/${file.name}`, file);

    if (error) {
      console.error('Error uploading file:', error.message);
    } else {
      console.log('File uploaded successfully:', data);
      // Handle success, maybe update state or show a success message
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ImageUploader;
