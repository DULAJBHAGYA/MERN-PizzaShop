import React, { useState, useEffect } from 'react';
import AdminNav from '../components/AdminNav';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AddCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    retrieveCategories();
  }, []);

  const retrieveCategories = () => {
    axios.get("http://localhost:8000/categories").then(res => {
      if (res.data.success) {
        setCategories(res.data.existingPosts);
      }
    });
  };

  return (
    <section>
      <AdminNav />
      <div className="max-width-2xl container mx-auto xl:px-24 px-4 relative flex flex-col shadow-lg  mt-4" >
        <h1 className='text-4xl font-bold text-black text-start' style={{ fontFamily: 'Poppins' }}>ADD CATEGORY</h1>

        <table className='w-auto mt-10'>
          <thead>
            <tr>
              <th scope='col' className='text-md px-6 py-3'>ID</th>
              <th scope='col' className='text-md px-6 py-3'>NAME</th>
              <th scope='col' className='text-md px-6 py-3'>DESCRIPTION</th>
              <th scope='col' className='text-md px-6 py-3 '>IMG URL</th>
              <th scope='col' className='text-md px-6 py-3'>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category._id}>
                <td scope='row' className='text-md px-6 py-3'>{category.category_id}</td>
                <td className='text-md px-6 py-3'>{category.category_name}</td>
                <td className='text-md px-6 py-3'>{category.category_desc}</td>
                <td className='text-md px-6 py-3'>{category.category_img}</td>
                <td className='text-md px-6 py-3'>
                <div className='flex'>
                  <a className='btn btn-warning' href='#'>
                    <FaEdit/>Edit
                  </a>
                  <a className='btn btn-danger' href='#'>
                    <MdDelete/>Delete
                  </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AddCategory;
