/*$(document).ready(function () {
    const todoList = $("#todo-list");
    const searchInput = $("#search");

    // 保存按钮的点击事件
    $("#save-button").click(function () {
        const deadline = $("#deadline").val();
        const category = $("#category").val();
        const description = $("#description").val();
        const todoItem = `${deadline},${category},${description}`;
        localStorage.setItem(new Date().getTime(), todoItem);
        refreshTodoList();
        $("#todo-form")[0].reset();
    });

    // 搜索栏的输入事件
    searchInput.on("input", function () {
        refreshTodoList();
    });

    // 页面加载时刷新待办事项列表
    refreshTodoList();

    // 刷新待办事项列表的函数
    function refreshTodoList() {
        const searchQuery = searchInput.val().toLowerCase();
        todoList.empty();
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const todoItem = localStorage.getItem(key);
            const [deadline, category, description] = todoItem.split(",");
            
            if (deadline.includes(searchQuery) || category.toLowerCase() === searchQuery || description.toLowerCase().includes(searchQuery)) {
                const listItem = `<li class="todo-item">${deadline}, ${category}, ${description} <button data-key="${key}">删除</button></li>`;
                todoList.append(listItem);
            }
        }
    }

    // 删除按钮的点击事件（事件委托）
    todoList.on("click", ".todo-item button", function () {
        const key = $(this).data("key");
        localStorage.removeItem(key);
        refreshTodoList();
    });
});
*/
$(document).ready(function () {
    const todoList = $("#todo-list");
    const searchInput = $("#search");

    // 保存按钮的点击事件
    $("#save-button").click(function () {
        const deadline = $("#deadline").val();
        const category = $("#category").val();
        const description = $("#description").val();
        const todoItem = `${deadline},${category},${description}`;
        localStorage.setItem(new Date().getTime(), todoItem);

        // 将数据保存到Cookie
        document.cookie = "deadline=" + deadline + ";";
        document.cookie = "category=" + category + ";";
        document.cookie = "description=" + description + ";";

        // 跳转到新的页面
        window.location.href = "display_data.html";
    });

    // 搜索栏的输入事件
    searchInput.on("input", function () {
        refreshTodoList();
    });

    // 页面加载时刷新待办事项列表
    refreshTodoList();

    // 刷新待办事项列表的函数
    function refreshTodoList() {
        const searchQuery = searchInput.val().toLowerCase();
        todoList.empty();

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const todoItem = localStorage.getItem(key);
            const [deadline, category, description] = todoItem.split(",");

            if (deadline.includes(searchQuery) || category.toLowerCase() === searchQuery || description.toLowerCase().includes(searchQuery)) {
                const listItem = `<li class="todo-item">${deadline}, ${category}, ${description} <button data-key="${key}">删除</button></li>`;
                todoList.append(listItem);
            }
        }
    }

    // 删除按钮的点击事件（事件委托）
    todoList.on("click", ".todo-item button", function () {
        const key = $(this).data("key");
        localStorage.removeItem(key);
        refreshTodoList();
    });
});
