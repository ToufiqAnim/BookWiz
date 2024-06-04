/* eslint-disable react/prop-types */


/* import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { RiFolderInfoLine } from "react-icons/ri";

const AllBook = ({ book, onDelete }) => {

  const token = localStorage.getItem("token");

  const { _id, name, genre, price, description, image } = book;

  const handleDelete = async () => {
    await fetch(`https://book-wiz-server.vercel.app/books/${_id}`, {
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
        <div className="hover:bg-[#5560d8] duration-300 rounded hover:p-1  flex gap-1 items-center">
        <Link to={`/books/${_id}`} className=" text-black px-4 py-2 rounded hover:text-white text-xl">
           <RiFolderInfoLine/>
          </Link>
        </div>
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

export default AllBook; */
/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { RiFolderInfoLine } from "react-icons/ri";

const AllBook = ({ book, onDelete }) => {
  const token = localStorage.getItem("token");

  const { _id, name, genre, price, image } = book;

  const handleDelete = async () => {
    await fetch(`https://book-wiz-server.vercel.app/books/${_id}`, {
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
    <tr>
      <td className="py-2">
        <img src={image} alt={name} className="w-20 h-20 object-cover" />
      </td>
      <td className="py-2">{name}</td>
      <td className="py-2">{genre}</td>
      <td className="py-2">${price}</td>
      <td className="py-2 flex justify-center gap-2 ">
        <Link to={`/books/${_id}`} className="text-blue-500 hover:text-blue-700">
          <RiFolderInfoLine size={24} />
        </Link>
        <Link to={`edit/${_id}`} className="text-green-500 hover:text-green-700">
          <FiEdit size={24} />
        </Link>
        <button onClick={confirmDelete} className="text-red-500 hover:text-red-700">
          <MdOutlineDelete size={24} />
        </button>
      </td>
    </tr>
  );
};

export default AllBook;
