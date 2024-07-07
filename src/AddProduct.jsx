import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import { supabase } from './lib/helper/supabaseClient';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadedImage(URL.createObjectURL(e.target.files[0])); // Preview uploaded image
  };

  const handleUpload = async () => {
    if (!file || !title || !description) return;

    // Generate a unique filename using UUID
    const fileId = uuidv4();
    const filename = `${fileId}-${file.name}`;

    // Upload the image to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('carve_storage') // Replace with your bucket name
      .upload(`main/${filename}`, file);

    if (uploadError) {
      console.error('Error uploading file:', uploadError.message);
      return;
    }

    const uploadedImageUrl = `${supabaseUrl}/storage/v1/object/public/${uploadData.fullPath}`;
    setImageUrl(uploadedImageUrl);
    console.log(imageUrl)

    // Insert product data into the products table
    const { data: productData, error: productError } = await supabase
      .from('images')
      .insert([{ title, description, is_featured: isFeatured, image_url: uploadedImageUrl }]);

    if (productError) {
      console.error('Error inserting product:', productError.message);
    } else {
      console.log('Product inserted successfully:', productData);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>
        Featured:
        <input
          type="checkbox"
          checked={isFeatured}
          onChange={(e) => setIsFeatured(e.target.checked)}
        />
      </label>
      <input type="file" onChange={handleFileChange} />
      {uploadedImage && <img src={uploadedImage} alt="Uploaded Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
      {imageUrl && <div>
        <img src={imageUrl} alt="Uploaded Image" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        <p>Title: {title}</p>
      </div>}
      <button onClick={handleUpload}>Add Product</button>
    </div>
  );
}

export default AddProduct;
