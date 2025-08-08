$(function () {
  // your code here
  $(".accordion h3").on("click", function () {
    $(".accordion h3").not(this).next().slideUp();
    $(this).next().slideDown();
  });

  $(".todos button").on("click", function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      type: "GET",
      success: function (res) {
        const todos = res.todos;
        buildTodoList(todos);
      },
      error: function (err) {
        console.error(err);
      },
    });
  });
});

function buildTodoList(arr) {
  const list = $(".todos ul");
  let liHtml = "";

  arr.forEach((el) => {
    liHtml += `<li>${el.todo}</li>`;
  });
  list.html(liHtml);
}
