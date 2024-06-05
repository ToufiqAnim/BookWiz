import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AddBooks = () => {
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const genre = form.genre.value;
    const author = form.genre.value;
    const publicationDate = form.publicationDate.value;

    const description = form.description.value;
    const image = form.image.value;

    const data = { name, genre,  description ,image,author,publicationDate};
    completeAddBooks(data, form);
  };

  const completeAddBooks = async (data, form) => {
    const answer = window.confirm("Are you sure you want to add this product?");
    if (answer) {
      await fetch("https://bookwiz-server-1.onrender.com/books", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          form.reset();
          if (data) {
            toast.success("Product added successfully!");
          }
        });
    }
  };
  return (
    <div className="w-full p-16 text-black border border-slate-300 mx-auto container">
      <div className="text-sm breadcrumbs items-start mb-4">
        <ul>
          <li className="text-red-500">
            <Link to={"/dashbord"}>Home</Link>
          </li>

          <li>
            <Link to={"/dashbord/manage-recipes"}>Add Book</Link>
          </li>
        </ul>
      </div>
      <h1 className="text-4xl mb-8">Add Book</h1>

   
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="input input-bordered w-full p-4 -md text-md  "
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="input input-bordered w-full p-4 -md text-md "
          type="text"
          name="author"
          placeholder="Author"
          required
        />
        <input
          className="input input-bordered w-full p-4 -md text-md "
          type="text"
          name="publicationDate"
          placeholder="Publication Date"
          required
        />
        <input
          className="input input-bordered w-full p-4 -md text-md "
          type="text"
          name="genre"
          placeholder="Genre"
          required
        />
     
        <input
          className="input input-bordered w-full p-4 -md text-md "
          type="text"
          name="description"
          placeholder="Description"
          required
        />
        <input
          className="input input-bordered w-full p-4 -md text-md  "
          type="text"
          name="image"
          placeholder="Image"
          required
        />
        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary w-full md:w-auto">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
