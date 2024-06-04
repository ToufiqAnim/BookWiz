/* eslint-disable react/prop-types */


import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
const AllBook = ({ book, onDelete }) => {
  const token = localStorage.getItem("token");
  const { _id, name, genre, price, description, image } = book;

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/books/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
        
      }
    })
      .then((res) => res.json())
      .then(() => {
        onDelete(_id);
        if (_id) {
          toast.success('Product deleted successfully!');
        }
      });
  };

  const confirmDelete = () => {
    const answer = window.confirm("Are you sure you want to delete this product?");
    if (answer) {
      handleDelete();
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <figure>
        <img src={image} alt={name} className="w-full h-64 object-cover" />
      </figure>
      <div className="p-6">
        <h2 className=" text-2xl mb-2">{name}</h2>
    
       
        <div className="flex justify-around">
          <Link to={`/books/${_id}`} className="btn bg-indigo-500 text-white px-4 py-2 rounded">
            See details
          </Link>
         <div className="hover:bg-[#55ee7b] duration-300 rounded hover:p-1  flex gap-1 items-center">
         <Link to={`edit/${_id}`} className=" text-black px-4 py-2 rounded text-xl hover:text-white">
          <FiEdit />
          </Link>
         </div>
         <div className="hover:bg-[#d15353] duration-300 rounded hover:p-1  flex gap-1 items-center">
             <button onClick={confirmDelete} className="text-black text-xl px-4 py-2 rounded hover:text-white">
          <MdOutlineDelete />
          </button>
         </div>
         
        </div>
      </div>
    </div>
  );
};

export default AllBook;