const list = document.getElementById("list");
const content = document.getElementById("content");
const date = document.getElementById("date");
const time = document.getElementById("time");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deletedBtn");
//
const listContent = [];

function render() {
  let htmlStr = "";

  listContent.forEach(function (item, index) {
    htmlStr =
      htmlStr +
      `<div class="item">
        <div>
            <p>內容:${item.content}</p>
            <p>時間:${item.date} ${item.time}</p>            
        </div>
        <button class="remove" 
                    id="deletedBtn"
                    data-num=${index}>刪除
             </button>
    </div>`;
  });
  list.innerHTML = htmlStr;
}
//新增事件功能
addBtn.addEventListener("click", function () {
  listContent.unshift({
    content: content.value,
    date: date.value,
    time: time.value,
  });
  render();
});
//刪除事件功能
list.addEventListener("click", function (e) {
  if (e.target.id === "deletedBtn") {
    listContent.splice(e.target.dataset.num, 1);
    render();
  }
});
