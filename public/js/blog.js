$(document).ready(() => {
  /* global moment */

  // blogContainer holds all of our posts
  const blogContainer = $(".blog-container");
  const postCategorySelect = $("#category");
  // Variable to hold our posts
  let posts;

  // The code below handles the case where we want to get blog posts for a specific author
  // Looks for a query param in the url for author_id
  const url = window.location.search;
  const userId;
  // if (url.indexOf("?author_id=") !== -1) {
  //   authorId = url.split("=")[1];
  //   getPosts(authorId);
  // }
  // // If there's no authorId we just get all posts as usual
  // else {
  getPosts();
  // }

  // This function grabs posts from the database and updates the view
  function getPosts(user) {
    userId = user || "";
    if (userId) {
      userId = "/?user_id=" + userId;
    }
    $.get("/api/posts" + userId, (data) => {
      console.log("Posts", data);
      posts = data;
      initializeRows();
    });
  }
  // InitializeRows handles appending all of our constructed post HTML inside blogContainer
  function initializeRows() {
    blogContainer.empty();
    const postsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i]));
    }
    blogContainer.append(postsToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {
    var formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var newPostCard = $("<div>");
    newPostCard.addClass("card");
    var newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    var newPostAuthor = $("<h5>");
    newPostAuthor.text("Written by: " + post.user.name);
    newPostAuthor.css({
      float: "right",
      color: "blue",
      "margin-top":
      "-10px"
    });
    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    var newPostBody = $("<p>");
    // newPostTitle.text(post.title + " ");
    newPostBody.text(post.body);
    newPostDate.text(formattedDate);
    newPostTitle.append(newPostDate);
    newPostCardHeading.append(newPostAuthor);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    return newPostCard;
  }
});
