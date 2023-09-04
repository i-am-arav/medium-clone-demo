import React from "react";
import { createPost, fetchCategories, uploadImage } from "../client";
import Pill from "../components/Pill";

const NewPost = () => {
  const [newPost, setNewPost] = React.useState({});
  const [categories, setCategories] = React.useState([]);
  const [disableButton, setDisableButton] = React.useState(false);

  const onChangeofPost = (key, value) => {
    setNewPost((prev) => ({ ...prev, [key]: value }));
  };

  const onChangeCategory = (value) => {
    setNewPost((prev) => {
      const oldCategories = prev.categories;
      let categories = [];
      if (oldCategories) {
        categories = !oldCategories.includes(value)
          ? [...oldCategories, value]
          : oldCategories;
      } else {
        categories = [value];
      }

      return { ...prev, categories };
    });
    
  };

  const getCategories = async () => {
    try {
      const res = await fetchCategories();
      setCategories(res);
    } catch (e) {
      console.log(e);
    }
  };

  const createPostAfterImage = async () => {
    setDisableButton(true);
    const imageDoc = await uploadImage(newPost.image);
    const post = {...newPost};
    post.image = {
      _type:'image',
      asset: {
        _type: 'reference',
        _ref: imageDoc?._id
      }
    }

   await createPost(post);
   setDisableButton(false);
    
  }

  React.useEffect(() => {
    getCategories();
  }, []);

  //title, subTitle, author, image, categories, publishedAt, body
  return (
    <div className="border border-black flex flex-col space-y-4 px-4 py-2">
      <label>Title</label>
      <input
        className="border"
        name="title"
        value={newPost.title}
        placeholder="Title"
        onChange={(e) => onChangeofPost("title", e.target.value)}
      />
      <label>subTitle</label>
      <input
        name="subTitle"
        vaue={newPost.subtitle}
        placeholder="SubTitle"
        onChange={(e) => onChangeofPost("subTitle", e.target.value)}
      />
      <label>Author</label>
      <input
        name="author"
        value={newPost.author}
        placeholder="author"
        onChange={(e) => onChangeofPost("author", e.target.value)}
      />
      <label>Image</label>
      {newPost.image && (
        <img
          alt="not found"
          width={"250px"}
          src={URL.createObjectURL(newPost.image)}
        />
      )}

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          onChangeofPost("image", event.target.files[0]);
        }}
      />
      <label>Categories</label>
      <select
        onChange={(e) => {
          const selected = JSON.parse(e.target.value);
          onChangeCategory(selected.title);
        }}
      >
        {categories.map((category) => (
          <option value={JSON.stringify(category)}>{category.title}</option>
        ))}
      </select>
      <div className="flex space-x-4">
        {newPost?.categories?.length > 0 &&
          newPost.categories.map((category) => <Pill text={category} />)}
      </div>

      <label>Body</label>
      <input
        name="body"
        value={newPost.body}
        placeholder="body"
        onChange={(e) => onChangeofPost("body", e.target.value)}
      />

      <button className={`bg-green-300 py-4 rounded-lg px-5 ${disableButton && 'bg-red-500'}`} disabled={disableButton} onClick={() => {createPostAfterImage()}}>Submit</button>
    </div>
  );
};

export default NewPost;
