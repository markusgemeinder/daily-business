import { useRouter } from 'next/router';
import { mutate } from 'swr';
import { useState } from 'react';

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = 'ml_default';

async function uploadImage(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);
  const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body: formData,
  });
  const { url, width, height } = await response.json();
  return { url, width, height };
}

async function createPost(data) {
  return await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export default function NewPage() {
  const router = useRouter();

  //==================== added for preview (start)
  const [previewUrl, setPreviewUrl] = useState(null); // Define previewUrl using useState hook
  //==================== added for preview (end)

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const cover = await uploadImage(event.target.cover.files[0]);

      await createPost({
        ...Object.fromEntries(new FormData(event.target)),
        cover,
      });

      mutate('/api/posts');
      router.push('/');
    } catch (error) {
      console.log(error);
      alert('Error creating post');
    }
  }
  //==================== added for preview (start)
  function handlePreview(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  //==================== added for preview (end)

  return (
    <>
      <h1>New Post</h1>
      <form onSubmit={onSubmit}>
        <label>
          Title
          <input name='title' required placeholder='Enter the post title' />
        </label>
        {/* <label>
          Cover
          <input name="cover" type="file" required />
        </label> */}

        <label>
          Cover
          <input
            name='cover'
            type='file'
            required
            onChange={handlePreview} // Call handlePreview on file change
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt='Preview'
              style={{ maxWidth: '100px', maxHeight: '100px' }} // Set max width and height for preview image
            />
          )}
        </label>
        <label>
          Content
          <textarea name='content' required placeholder='Enter the post content' />
        </label>
        <button>Create Post</button>
      </form>
    </>
  );
}
