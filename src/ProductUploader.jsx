import React, { useState } from 'react';
import { supabase } from './lib/helper/supabaseClient'

function ProductUploader() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !name || !price) return;

    // Upload the image to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('carve_storage') // Replace with your bucket name
      .upload(`public/${file.name}`, file);

    if (uploadError) {
      console.error('Error uploading file:', uploadError.message);
      return;
    }

    const imageUrl = supabase.storage.from('product_images').getPublicUrl(`public/${file.name}`).publicURL;

    // Insert product data into the products table
    const { data: productData, error: productError } = await supabase
      .from('products')
      .insert([{ name, image_url: imageUrl, price: parseFloat(price) }]);

    if (productError) {
      console.error('Error inserting product:', productError.message);
    } else {
      console.log('Product inserted successfully:', productData);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Product Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Product</button>
    </div>
  );
}

export default ProductUploader;
