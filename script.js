const projectList = document.getElementById("projectList");

fetch("http://localhost:5000/projects")
.then(res => res.json())
.then(data => {

    data.forEach(project => {

        const div = document.createElement("div");

        div.className = "project";

        div.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.category}</p>
            <p>${project.description}</p>
            <button>View Project</button>
        `;

        projectList.appendChild(div);
    });

});

document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch("http://localhost:5000/contact", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            message
        })

    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
    });

});