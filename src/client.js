import {createClient} from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: 'xpvj5hrb', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // this is from those question during 'sanity init'
  useCdn: true,
  apiVersion: '2023-05-03',
  token: 'skrKOZgJc6ylyE8qPGr0fKmJsBhzZ88EDoUTeR9Zt4TXVXtKbt7RkH5yYRfJ1s066RfT4Y7r4jwwI90D7mvNE2q9A5Nu1P3fNamLujjKw5qXgGol50B5TvKQXLglWB3QH20V7arhD7GMK1yhQCVbMzwQXCeP3J4Hi9TKpiDUgNw6ZfEk7Hqt'
}

export const client =  createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

const transformPost = (posts = []) => {
  return posts.map((post) => {
    const imageUrl = post.mainImage?.asset?.url;
    const slug = post.slug?.current;
    return {...post, imageUrl, slug}
  })
}

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
}

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
}

export const fetchCategories = async () => {
  const res = await client.fetch(`
    *[_type=="category"]{
      _id,
      title,
      description
    }
  `)
  return res;
}

export const createPost = async ({title, subTitle, image:mainImage, author,categories, publishedAt, body }) => {
  try {
    const res = await client.create({
      _type:'post',
      title, subTitle, mainImage, author,categories: {
        _type:'category',

      }, publishedAt, body
    })
    return res;
  }
  catch(e) {
    console.log('Error',e)
  }
  

  
}