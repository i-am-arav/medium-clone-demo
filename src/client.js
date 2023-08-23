import {createClient} from '@sanity/client'

export const client =  createClient({
  projectId: "xpvj5hrb", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
  apiVersion: '2023-05-03',
});


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
    return res;
}