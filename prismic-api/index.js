import Prismic from "prismic-javascript";
import { ENDPOINTS } from "../config";

export async function getPosts(params) {
  try {
    // We initialise the API with Prismic's kit
    const API = await Prismic.api(ENDPOINTS.prismic);
    // Here we just query the documents with a filter of only returning
    // the type of blog_post and order them. Full docs can be found here:
    // https://github.com/prismicio/prismic-javascript#query-the-content
    const response = await API.query(
      Prismic.Predicates.at("document.type", "post"),
      {
        orderings: "[post.first_publication_date desc]",
        ...params
        // params will be extra parameters we can pass through with api calls
        // such as how many documents to return
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

export async function getSinglePost(params) {
  try {
    // We initialise the API with Prismic's kit
    const API = await Prismic.api(ENDPOINTS.prismic);
    // Here we just query the documents with a filter of only returning
    // the type of blog_post and order them. Full docs can be found here:
    // https://github.com/prismicio/prismic-javascript#query-the-content
    const response = await API.query(
      Prismic.Predicates.at("my.post.uid", params.uid)
    );
    return response.results[0];
  } catch (error) {
    return error;
  }
}
