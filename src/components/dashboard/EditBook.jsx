



import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditBook = () => {
  const token = localStorage.getItem("token");
  const books = useLoaderData();
  
  const [name, setName] = useState(books.name);
  const [price, setPrice] = useState(books.price);
  const [genre, setGenre] = useState(books.genre);
  const [description, setDescription] = useState(books.description);
  const [image, setImage] = useState(books.image);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const genre = form.genre.value;
    const price = form.price.value;
    const description = form.description.value;
    const image = form.image.value;

    const data = { name,  genre, price, description,  image };
    confirmEdit(data);
  };

  const confirmEdit = async (data) => {
    const answer = window.confirm("Are you sure to Edit this Book?");
    if (answer) {
      await fetch(`http://localhost:3000/books/${books._id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log( data);
          if (data) {
            toast.success('Book edited successfully!');
          }
        });
    }
  };

  return (
    <div className="p-10 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Edit Book</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="input input-bordered  w-full p-4 rounded-md text-md "
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input input-bordered  w-full p-4 rounded-md text-md "
            type="text"
            name="genre"
            placeholder="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <input
            className="input input-bordered  w-full p-4 rounded-md text-md "
            type="text"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            className="input input-bordered  w-full p-4 rounded-md text-md "
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="input input-bordered  w-full p-4 rounded-md text-md "
            type="text"
            name="image"
            placeholder="Image "
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <div className="flex justify-center">
            <input
              type="submit"
              value="Edit book"
              className="btn btn-primary w-full md:w-auto"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;