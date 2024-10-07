const User = document.getElementById(`User`);
const Input = document.getElementById(`Input`);
const Add = document.getElementById(`Add`);
const Heading = document.getElementById(`Heading`);
const TaskArea = document.getElementById(`TaskArea`);

function SetUser() {
    localStorage.setItem(`User`, Name);
}

function GetUser() {
    User.textContent = localStorage.getItem(`User`);
}

function SaveData() {
    localStorage.setItem(`Data`, TaskArea.innerHTML)
}

function GetData() {
    TaskArea.innerHTML = localStorage.getItem(`Data`)
}

GetUser()

if (User.textContent === ``) {
    var Name = prompt(`Enter Your Name.`)
    switch (true) {
        case (Name === `` || Name === null):
            Name = `Guest`;
            User.textContent = Name;
            SetUser();
            break;

        case (Name !== ``):
            User.textContent = Name.charAt(0).toLocaleUpperCase() + Name.slice(1).toLowerCase();
            SetUser();
            break;
    }
}

const CreateTask = () => {
    if (Input.value === "") {
        alert('Please Enter Your Task!')
    }

    else {
        Task = document.createElement(`div`);
        Task.innerHTML = `${Input.value}<i class="bx bx-x"></i>`;

        TaskArea.prepend(Task);
        Input.value = ``;

        SaveData();
    }
}

Add.addEventListener("click", CreateTask);

TaskArea.addEventListener("click", event => {
    if (event.target.tagName === `DIV`) {
        event.target.classList.add(`done`);
        SaveData();
    }

    else if (event.target.tagName === `I`) {
        event.target.parentElement.remove();
        SaveData();
    }
})

GetData();