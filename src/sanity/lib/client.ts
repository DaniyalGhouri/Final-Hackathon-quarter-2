import { createClient } from '@sanity/client';


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your actual project ID
  dataset:process.env.NEXT_PUBLIC_SANITY_DATASET, // Replace with your dataset name
  useCdn: false,
  apiVersion: '2023-05-03',
    token:process.env.NEXT_PUBLIC_SANITY_API_TOKEN
});


export default client;