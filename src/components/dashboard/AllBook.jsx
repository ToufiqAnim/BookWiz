/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { RiFolderInfoLine } from "react-icons/ri";

const AllBook = ({ book, onDelete }) => {
  const token = localStorage.getItem("token");

  const { _id, name, genre,  image } = book;

  const handleDelete = async () => {
    await fetch(`https://bookwiz-server-1.onrender.com/books/${_id}`, {
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
    <tr className="border-b border-gray-200">
      <td className="py-4 text-center">
        <img src={image} alt={name} className="w-20 h-20 object-cover mx-auto" />
      </td>
      <td className="py-4 text-center">{name}</td>
      <td className="py-4 text-center">{genre}</td>
     
      <td className="py-4 flex justify-center items-center gap-4 mt-6 text-center">
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
