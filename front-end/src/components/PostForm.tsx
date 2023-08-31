import axios from "axios";
import Compressor from "compressorjs";
import FsLightbox from "fslightbox-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./../App.css";
import Comments from "./Comments";

type FormValues = {
  postTitle: string;
  postDesc: string;
  // postAttachments?: File; // doesn't work
  // postAttachments?: FileList;
};

type ResponseData = {
  posts: {
    _id: string;
    title: string;
    description: string;
    files: [];
    createdAt: string;
  }[];
};

type post = {
  _id: string;
  title: string;
  description: string;
  files: [];
  createdAt: string;
};

type lightboxStates = {
  toggler: boolean;
  selectedImageIndex: number;
  postFiles: string[];
};

function PostForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const { control } = useForm();

  const [uploadedFiles, setUploadedFiles] = useState<File[] | null>(null);
  const [compressedImages, setCompressedImages] = useState<Blob[] | undefined>(
    undefined
  );
  const [uploadedFileLinks, setUploadedFileLinks] = useState<
    string[] | undefined
  >(undefined);
  const [allPosts, setAllPosts] = useState<post[] | undefined>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const [lightboxStates, setLightboxStates] = useState<lightboxStates[]>([
    {
      toggler: false,
      selectedImageIndex: 0,
      postFiles: [],
    },
  ]);

  const fetchPosts = async () => {
    const res = await axios.get<ResponseData>("/api/posts");
    // console.log("res- all posts", res.data);
    setAllPosts(res.data.posts as unknown as post[]);

    const forLightbox: lightboxStates[] =
      res.data.posts &&
      res.data.posts?.map(
        (post: post) =>
          post.files && {
            //for lightbox
            toggler: false,
            selectedImageIndex: 0,
            postFiles: [],
          }
      );

    setLightboxStates(forLightbox);
  };

  const handlePostFiles = (postIndex: number, files: [], index: number) => {
    //for lightbox
    const updatedStates: lightboxStates[] = lightboxStates.map((state, i) =>
      i === postIndex
        ? {
            ...state,
            postFiles: files.map(
              (file: string) =>
                `http://localhost:8080/uploads/${file?.filename}`
            ),
            selectedImageIndex: index,
            toggler: !state.toggler,
          }
        : state
    );
    setLightboxStates(updatedStates);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files as FileList);
    const urls = files.map((file) => URL.createObjectURL(file as Blob));
    setUploadedFileLinks(urls);
    setUploadedFiles(files);
  };

  const compressImages = async (uploadedFiles: File[]) => {
    const compressedFilesPromises: Promise<File>[] | undefined =
      uploadedFiles?.map((file) => {
        return new Promise((resolve, reject) => {
          new Compressor(file, {
            quality: 0.6,
            success: (compressedBlob) => {
              // Create a new File object from the compressed Blob

              const compressedFile = new File([compressedBlob], file.name, {
                //The file returned from the Compressor is a Blob, so we need to convert it to a File object before we can upload it to the server. Convert from Blob to File:  const file = new File([blob], fileName, { type: fileType });
                type: compressedBlob.type,
              });
              resolve(compressedFile);
            },
            error: (error) => {
              reject(error);
            },
          });
        });
      });

    Promise.all(compressedFilesPromises as Promise<File>[])
      .then((compressedFiles) => {
        setCompressedImages(compressedFiles);
      })
      .catch((error) => {
        console.error("Error compressing images:", error);
      });
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // const { postTitle, postDesc, postAttachments } = data;
    const { postTitle, postDesc } = data;

    compressImages(uploadedFiles as File[]); // moved the code in compressImages() function from here to outside and put that inside the compressImages() function and called from here.  CAuse ,  The setState function returned by the useState hook is asynchronous. so, when we log the compressedImages immediately after setting its value with setCompressedImages, we do not see the updated value immediately. But now that we have moved the code to the compressImages function, we can see the updated value of compressedImages in the console.

    console.log("compressedImages - ", compressedImages);
    console.log("uploadedFiles - ", uploadedFiles);

    const formData = new FormData();
    formData.append("postTitle", postTitle);
    formData.append("postDesc", postDesc);
    // formData.append("files", compressedImages as Blob | unknown as Blob); //as Blob | unknown as Blob solves the erorr. not sure how.
    // formData.append("files", uploadedSingleFile as File); //works as it's single file.
    // formData.append("files", uploadedSingleFile2 as File); //this works too, meaning we can upload multiples files and append them separately like this and can catch all of them with req.files as an array of files in the backend.

    uploadedFiles?.forEach((file) => {
      // formData.append(`files${index}`, file); //doesn't work
      formData.append(`files`, file); // this works. because of this I had to waster a lot of time.
    });

    reset(); //to clear the form
    setUploadedFileLinks(undefined);
    setCompressedImages(undefined);
    setUploadedFiles(null);

    const createPostEndpoint = "api/posts/create";

    const response = await axios.post<ResponseData>(
      createPostEndpoint,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("response data", response.data);
    // setServerFileLinks(response.data as unknown as string[]); // as unknown as string[]) works
    // setServerFileLinks(response.data as object); // as unknown as string[]) works
    // fetchPosts(); // this is one approach to generate all the posts in the page after adding a new post. But this is an extra api call. The other approach would be to send all the posts from the database with the response with the request to create a new post. So, we don't have to make an extra api call to fetch all the posts.
    setAllPosts(response.data?.posts as unknown as post[]); // as unknown as string[]) works
  };

  const handleDeletePost = async (postId: string) => {
    console.log("delete post");

    const response = await axios.delete(`api/posts/delete/${postId}`);
    const deletedPost = response.data.deletedPost;
    const remainingPost: post[] | undefined = allPosts?.filter(
      (post: post) => post._id !== deletedPost
    );

    console.log("remainingPost", remainingPost);
    setAllPosts(remainingPost);
  };

  return (
    <div>
      <form
        className="shadow rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-xl font-bold mb-4 text-gray-900">Create post</h3>
        <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
          Post Name :
        </label>
        <input
          type="text"
          {...register("postTitle", { required: "Title is required" })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.postTitle && <p>{errors.postTitle.message}</p>}
        <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
          post description :
        </label>
        <textarea
          rows={14}
          cols={50}
          {...register("postDesc", { required: "Description is required" })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.postDesc && <p>{errors.postDesc.message}</p>}

        <div className="mb-3 w-96">
          <label
            htmlFor="formFileMultiple"
            className="mb-2 inline-block text-slate-950 font-extrabold"
          >
            Upload Files:
          </label>

          <Controller
            control={control}
            name={"picture"}
            rules={{ required: "files are required" }}
            render={({ field: { value, ...field } }) => {
              return (
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  {...field}
                  value={value?.fileName}
                  onChange={handleFileUpload}
                  type="file"
                  id="picture"
                  multiple
                />
              );
            }}
          />
        </div>

        <div className="grid grid-cols-6 gap-4 ">
          {uploadedFileLinks &&
            uploadedFileLinks.map((file, index) => (
              <div key={index}>
                <img className="rounded h-20 w-full object-cover" src={file} />
              </div>
            ))}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rouded focus:outline-none focus:shadow-outline"
          >
            Post
          </button>
        </div>
      </form>
      <div className="pb-5">
        <div
          className="space-y-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-6 lg:space-y-0"
          style={{ cursor: "auto" }}
        >
          <div className="sm:col-span-2 " style={{ cursor: "auto" }}>
            {Array.isArray(allPosts) &&
              allPosts?.map((post, postIndex) => (
                <div
                  key={postIndex}
                  className="mt-2 pl-4 pt-4 pb-4 pr-4"
                  style={{
                    cursor: "auto",
                    backgroundColor: "rgb(245 245 245)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <h4 className="text-lg leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
                        {post?.title}
                      </h4>

                      <span className="text-xs text-gray-400 ml-2">
                        {" "}
                        {moment(post.createdAt).format(
                          "MMMM D, YYYY [at] hh:mm A"
                        )}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Edit"
                        className="text-blue-500 hover:text-blue-700 cursor-pointer"
                      >
                        <AiFillEdit />
                      </a>
                      <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Delete"
                        className="text-red-500 hover:text-red-700 cursor-pointer"
                        onClick={() => handleDeletePost(post._id)}
                      >
                        <AiFillDelete />
                      </a>
                    </div>
                  </div>

                  <p className="mt-1 mb-4 text-sm font-normal text-skin-base leading-5">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {post?.description}
                    </ReactMarkdown>
                  </p>
                  <div className="grid grid-cols-3 gap-4 ">
                    {post &&
                      post?.files?.map((file: object, index) => (
                        <>
                          <img
                            className="rounded h-52 w-full object-cover"
                            src={`http://localhost:8080/uploads/${file.filename}`}
                            onClick={() =>
                              handlePostFiles(postIndex, post?.files, index)
                            }
                          />
                        </>
                      ))}
                  </div>
                  <br />
                  <hr />
                  <Comments postId={post._id} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <>
        {/* lightbox */}
        {lightboxStates &&
          lightboxStates.map(
            ({ toggler, selectedImageIndex, postFiles }, i) => (
              <FsLightbox
                key={i}
                toggler={toggler}
                sourceIndex={selectedImageIndex}
                sources={postFiles}
              />
            )
          )}
        {/* lightbox */}
      </>
    </div>
  );
}

export default PostForm;
