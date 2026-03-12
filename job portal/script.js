const addBtn = document.querySelector("#addBtn");
const jobList = document.querySelector("#jobList");
addBtn.addEventListener("click", function () {
    const title = document.querySelector("#title").value;
    const company = document.querySelector("#company").value;
    const location = document.querySelector("#location").value;
    const salary = document.querySelector("#salary").value;
    const description = document.querySelector("#description").value;

    if (title === "" || company === "") {
        alert("Title and Company are required!");
        return;
    }

    const jobCard = document.createElement("div");

    jobCard.innerHTML = `
        <h3>${title}</h3>
        <p>Company: ${company}</p>
        <p>Location: ${location}</p>
        <p>Salary: ${salary}</p>
        <p>${description}</p>
        <button class="deleteBtn">Delete</button>
    `;

    jobCard.style.border = "1px solid black";
    jobCard.style.padding = "10px";
    jobCard.style.margin = "10px";
    jobCard.style.backgroundColor = "white";

    jobList.appendChild(jobCard);

    const deleteBtn = jobCard.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", function () {
        jobCard.remove();
    });

    document.querySelector("#title").value = "";
    document.querySelector("#company").value = "";
    document.querySelector("#location").value = "";
    document.querySelector("#salary").value = "";
    document.querySelector("#description").value = "";
});
