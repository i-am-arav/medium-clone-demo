import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
  dataset: process.env.REACT_APP_SANITY_DATASET, // this is from those question during 'sanity init'
  useCdn: true,
  apiVersion: "2023-05-03",
  token:process.env.REACT_APP_SANITY_TOKEN,
};

export const client = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

//uploads image to Sanity
export const uploadImage = async (imageToUpload) => {
  const response = await client.assets.upload("image", imageToUpload, {
    contentType: imageToUpload.type,
    filename: imageToUpload.name,
  });
  if (response) {
    return response;
  }
};

const transformPost = (posts = []) => {
  return posts.map((post) => {
    const imageUrl = post.mainImage?.asset?.url;
    const slug = post.slug?.current;
    return { ...post, imageUrl, slug };
  });
};

export const fetchOnePost = async (slug) => {
  const res = await client.fetch(`*[_type == "post" && slug.current == ${slug}]{
    title,
    slug,
    mainImage{
      asset->{
      _id,
      url
    }
  }
}`);
  return res;
};

export const fetchPost = async () => {
  const res = await client.fetch(`*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`);
  return transformPost(res);
};

export const fetchCategories = async () => {
  const res = await client.fetch(`
    *[_type=="category"]{
      _id,
      title,
      description
    }
  `);
  return res;
};

export const createPost = async ({
  title,
  subTitle,
  image: mainImage,
  author,
  categories,
  body,
  publishedAt = new Date(),
}) => {
  try {
    const res = await client.create({
      _type: "post",
      title,
      subTitle,
      mainImage,
      author,
      categories,
      publishedAt,
      body,
    });
    return res;
  } catch (e) {
    console.log("Error", e);
  }
};
