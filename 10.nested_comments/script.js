let comment_container = document.getElementById("comment_container");

function createInputBox() {
  let div = document.createElement("div");
  div.setAttribute("class", "comment_details");

  div.innerHTML += ` <input type="text" placeholder="add comment here" class="input" />
        <button class="btn submit">Submit</button>`;
  return div;
}

function addReply(text) {
  let div = document.createElement("div");
  div.setAttribute("class", "all-comment");

  div.innerHTML += `<div class="card">
    <span class="text">${text}</span>
    <span class="reply" id="reply">Add reply</span>
  </div>`;
  return div;
}

comment_container.addEventListener("click", function (e) {
  let replyClicked = e.target.classList.contains("reply");
  let submitClicked = e.target.classList.contains("submit");
  let closestCard = e.target.closest(".all-comment");
  if (replyClicked) {
    //add input box
    closestCard.appendChild(createInputBox());
  }
  if (submitClicked) {
    //add reply card
    const commentText = e.target.closest(".comment_details");
    if (commentText.children[0].value) {
      closestCard.appendChild(addReply(commentText.children[0].value));
      commentText.remove();
    }
  }
});
