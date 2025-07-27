class User {
    constructor(level, imageURL, points, name, description, color) {
        this.level = level;
        this.imageURL = imageURL;
        this.points = points;
        this.name = name;
        this.description = description;
        this.color = color;
    }
}

let users = [
    new User(10, "https://aras.kntu.ac.ir/wp-content/uploads/2019/05/hoodie-.png", 32145, "Manoshree", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.", "blue"),
    new User(11, "https://icon-library.com/images/icon-avatar/icon-avatar-6.jpg", 45688, "olesia", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.", "red"),
    new User(25, "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png", 3463, "ellie", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.", "purple"),
    new User(20, "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png", 4215, "Cindy", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.", "yellow")
];

// ✅ Add user card to DOM using jQuery
function addUserCardToDOM(user) {
    const $card = $(`
        <div class="card">
            <div class="left-info" style="--background-color: ${user.color}">
                <div><p class="user-level">${user.level}</p></div>
                <div><img src="${user.imageURL}"></div>
                <div><p class="user-points" id="user-points-${user.name}">${user.points} points</p></div>
                <div class="flex-wrap">
                    <div><button class="plus-minus-button decrement" data-name="${user.name}"> - </button></div>
                    <div><button class="plus-minus-button increment" data-name="${user.name}"> + </button></div>
                </div>
            </div>
            <div class="right-info">
                <header><h1>${user.name}</h1></header>
                <div><p class="user-description">${user.description}</p></div>
                <div class="linkedin-link">
                    <a href="https://www.linkedin.com/feed/"><i class="fa fa-linkedin-square"></i></a>
                </div>
            </div>
        </div>
    `);
    $("#card-container").append($card);
}

// ✅ Render all users
function renderUsersToDOM(users) {
    $("#card-container").empty();
    users.forEach(user => addUserCardToDOM(user));
}

renderUsersToDOM(users);

// ✅ Increment / Decrement points using jQuery
$(document).on("click", ".increment", function () {
    const username = $(this).data("name");
    const user = users.find(u => u.name === username);
    if (user) {
        user.points++;
        $(`#user-points-${user.name}`).text(`${user.points} points`);
    }
});

$(document).on("click", ".decrement", function () {
    const username = $(this).data("name");
    const user = users.find(u => u.name === username);
    if (user) {
        user.points--;
        $(`#user-points-${user.name}`).text(`${user.points} points`);
    }
});

// ✅ Sorting users
function sortUsers() {
    const sortProperty = $("#sortCard").val();
    users.sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));
    renderUsersToDOM(users);
}

$("#sortCard").on("change", sortUsers);
