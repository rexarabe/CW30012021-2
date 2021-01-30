const users = [
    {
        id: 1,
        name: "name1",
        surname: "surname1",
        imageSrc: "#"
    },
    {
        id: 2,
        name: "name2",
        surname: "surname2",
        imageSrc: "#"
    },
    {
        id: 3,
        name: "name3",
        surname: "surname3",
        imageSrc: "#"
    },

];


const userListElem = document.getElementById('userList');

users.forEach(
    (user) => {
        userListElem.append(createUserListElem(user));
    }
)

function createUserListElem(user){
    const userListItemElem= document.createElement("li");

    const userCardWrapperElem = document.createElement('div');
    //userCardWrapperElem.setAttribute("class", "userCardWrapper");
    userCardWrapperElem.classList.add('userCardWrapper');

    const userImageContainerElem = document.createElement('div');
    userImageContainerElem.classList.add('userImageContainer');

    const userImageElem = document.createElement('img');
    userImageElem.classList.add('userImage');
    userImageElem.setAttribute('src', imageSrc);
    userImageElem.setAttribute('alt','user photo');

    userImageContainerElem.append(userImageElem);
    userCardWrapperElem.append(userImageContainerElem);

    const userFullNameElem = document.createElement('h1');
    userFullNameElem.innerText = `${user.name} ${user.surname}`;
    userCardWrapperElem.append(userFullNameElem);

}