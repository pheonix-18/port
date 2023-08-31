import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { blogs } from "../data";
import { social_media } from "../data";
export default function Blogs() {
  return (
    <section id="blogs" className="text-gray-400 bg-gray-900 body-font">
      
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Blogs I've Written
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Writing technical blogs is a great way to share knowledge and expertise
           with others in the field. It can help others learn and grow, and can also establish the author as a thought leader in their area of expertise.
          </p>
        </div>

        <div className="flex flex-row -m-4 space-x-4 ">
          {blogs.map((blog) => (
            <div class="max-w-sm border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5">
                <a href={blog.url}>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{blog.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray">{blog.description}</p>
                <a href={blog.url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </div>
          ))}
          <a href={social_media.medium} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    More Medium Blogs
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
        </div>
      </div>
    </section>
  );
}