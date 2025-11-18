// src/pages/Products.jsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Table from '../components/ui/Table';
import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';
import {BASE_API_URL} from '../util/Url.js';

const initialFormState = {
  productName: '',
  description: '',
  price: '', 
  stock: '', 
  category: '',
  imageFile: null,
};

const getStockColor = (status) => {
  return status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
};

// --- Main Products Component ---
const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const headers = ['ID', 'Product Name', 'Category', 'Price', 'Stock', 'Status', 'Actions'];

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setFetchError(null);
    try {
      const response = await axios.get(`${BASE_API_URL}/products`);

      const mappedProducts = response.data.map(product => ({
        ...product,
        productName: product.name,
        status: product.stock > 0 ? 'In Stock' : 'Out of Stock'
      }));

      setProducts(mappedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      setFetchError("Failed to load products. Please check server connection.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // --- Form Handlers ---
  const handleInputChange = (e) => {
    setSubmitError(null);
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({ ...prev, imageFile: files[0] }));
    } else {
      if (name === 'price' || name === 'stock') {
        setFormData(prev => ({ ...prev, [name]: value === '' ? '' : parseFloat(value) }));
      } else {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    }
  };
  const handleAddProduct = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    
    if (
      !formData.productName ||
      formData.price === '' ||
      formData.stock === '' ||
      (Number(formData.price) <= 0) ||
      (Number(formData.stock) < 0) || 
      !formData.imageFile
    ) {
      setSubmitError('Product Name, a positive Price, non-negative Stock, and an Image are all required.');
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();

      data.append('productName', formData.productName);
      data.append('description', formData.description || '');
      // Send numerical state values as strings
      data.append('price', String(formData.price));
      data.append('stock', String(formData.stock));
      data.append('category', formData.category || '');
      data.append('imageFile', formData.imageFile);

      const response = await axios.post(`${BASE_API_URL}/products`, data);

      alert(`Product "${response.data.name || formData.productName}" created successfully!`);
      setIsModalOpen(false);
      setFormData(initialFormState); // Reset to empty strings
      fetchProducts();

    } catch (error) {
      console.error("Product creation failed:", error);
      const errorMessage = error.response?.data?.error || error.response?.data?.message || 'Failed to connect to server or create product.';
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Row Renderer (Remains the same) ---
  const renderRow = (product) => (
    <>
      <td className="px-6 py-4 text-sm font-medium text-blue-600">{product.id}</td>
      <td className="px-6 py-4 text-sm text-gray-900">{product.productName}</td>
      <td className="px-6 py-4 text-sm text-gray-500">{product.category}</td>
      <td className="px-6 py-4 text-sm text-gray-900">${product.price.toFixed(2)}</td>
      <td className="px-6 py-4 text-sm text-gray-900">{product.stock}</td>
      <td className="px-6 py-4">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStockColor(product.status)}`}
        >
          {product.status}
        </span>
      </td>
      <td className="px-6 py-4 text-sm font-medium">
        <button onClick={() => alert(`Editing ${product.productName}`)} className="text-indigo-600 hover:text-indigo-900 mr-3">
          Edit
        </button>
      </td>
    </>
  );

  // ----------------------------------------

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold text-gray-800">Product Catalog</h1>

      {/* Control Panel: Add Product Button */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md">
        Time to grow? Click here to add a new product.
        <Button
          onClick={() => {
            setFormData(initialFormState);
            setSubmitError(null);
            setIsModalOpen(true);
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
        >
          + Add New Product
        </Button>
      </div>

      {/* Products Table Area */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        {fetchError && (
          <div className="text-center p-4 bg-red-100 text-red-700 border border-red-200 rounded-md mb-4">{fetchError}</div>
        )}

        {isLoading ? (
          <div className="text-center p-8 text-gray-500">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="text-center p-8 text-gray-500">No products found. Add a new product to begin.</div>
        ) : (
          <Table headers={headers} data={products} renderRow={renderRow} />
        )}
      </div>

      {/* Add/Edit Product Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => !isSubmitting && setIsModalOpen(false)}
        title="Create New Product"
      >
        <form onSubmit={handleAddProduct} className="space-y-4">
          {/* Error Display */}
          {submitError && (
            <div className="p-3 bg-red-100 text-red-700 border border-red-200 rounded-md">
              <p className="font-semibold">Error:</p>
              <p className="text-sm">{submitError}</p>
            </div>
          )}

          {/* Form Fields */}
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
            <input type="text" name="productName" id="productName" value={formData.productName} onChange={handleInputChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description (Optional)</label>
            <textarea name="description" id="description" rows="3" value={formData.description} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price ($)</label>
              <input type="number" name="price" id="price" value={formData.price} onChange={handleInputChange} min="0.01" step="0.01" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
              <input type="number" name="stock" id="stock" value={formData.stock} onChange={handleInputChange} min="0" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category (Optional)</label>
              <input type="text" name="category" id="category" value={formData.category} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
          </div>
          <div>
            <label htmlFor="imageFile" className="block text-sm font-medium text-gray-700">Product Image (File Upload)</label>
            <input type="file" name="imageFile" id="imageFile" accept="image/*" onChange={handleInputChange} required className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            {formData.imageFile && <p className="mt-1 text-xs text-gray-500">Selected: {formData.imageFile.name}</p>}
          </div>

          {/* Footer/Actions */}
          <div className="flex justify-end space-x-2 border-t pt-4">
            <Button type="button" onClick={() => setIsModalOpen(false)} disabled={isSubmitting} className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg disabled:opacity-50">Cancel</Button>
            <Button type="submit" disabled={isSubmitting} className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg disabled:opacity-50">
              {isSubmitting ? 'Adding...' : 'Save Product'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Products;