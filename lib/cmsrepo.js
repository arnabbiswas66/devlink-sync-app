import { WebflowClient } from 'webflow-api';

const token = process.env.WF_AUTH;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: 'Bearer 1883887f3157b1fc9318721b505e1eb93ca37fa5a1c42d0cc035f2b87e3b3662'
    }
  };



export async function getBlogs() {
    const collectionItems = await fetch('https://api.webflow.com/v2/collections/66f83703418ca91d08df30c1/items', options);
    const {items} = await collectionItems.json();
    return items;
    
}

export async function getBlog(slug) {
    const blogItems = await getBlogs();
    const postFromPage = blogItems.find((blog)=> blog.fieldData.slug===slug)
    
    return postFromPage;
    
}

export async function getSlugs() {
    const blogItems = await getBlogs();
    return blogItems.map((blog)=> blog.fieldData.slug);
}