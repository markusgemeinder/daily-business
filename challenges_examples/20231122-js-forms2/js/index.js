// This page shows an example of a social media post.
// Your task is to replicate the social media post with JavaScript.
// Use `document.createElement()` to generate all HTML elements separately.

{
  /* <article class="post">
  <p class="post__content">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </p>
  <footer class="post__footer">
    <span class="post__username">@username</span>
    <button type="button" class="post__button" data-js="like-button">
      ♥ Like
    </button>
  </footer>
</article>; */
}

// Use multiple calls of `document.createElement()` instead.

// Append the second social media post to the body.

// You can use the function `handleLikeButtonClick` for the event listener.

console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

likeButton.addEventListener("click", () => {
  const post = document.createElement("article");
  post.classList.add("post");
  document.body.append(post);

  const postParagraph = document.createElement("p");
  postParagraph.classList.add("post__content");
  postParagraph.textContent = "Another Social Media Post";
  // post.append(postParagraph);

  const postFooter = document.createElement("footer");
  postFooter.classList.add("post__footer");
  // post.append(postFooter);

  const postSpan = document.createElement("span");
  postSpan.classList.add("post__username");
  postSpan.textContent = "@username";
  // postFooter.append(postSpan);

  const postButton = document.createElement("button");
  postButton.classList.add("post__button");
  postButton.setAttribute("type", "button");
  postButton.setAttribute("data-js", "like-button");
  postButton.textContent = "♥ Like";
  // postFooter.append(postButton);

  post.append(postParagraph, postFooter);
  postFooter.append(postSpan, postButton);

  postButton.addEventListener("click", handleLikeButtonClick); // remember!

  console.log(post);
});
