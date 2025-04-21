// 
document.getElementById("name").addEventListener("click", function () {
    const spans = this.querySelectorAll("span");
    spans[0].style.color = "darkorange";
    spans[1].style.color = "darkcyan";
});

// bio
document.getElementById("bio-btn").addEventListener("click", function() {
    const bio = document.getElementById("bio");
    const isHidden = bio.style.display === "none" || bio.style.display === "";
    bio.style.display = isHidden ? "block" : "none";
    this.textContent = isHidden ? "Hide Bio" : "Show Bio";
});

// buttons
document.querySelectorAll(".add").forEach(btn => {
    btn.addEventListener("click", function() {
        const listId = this.dataset.target;
        const skillList = document.getElementById(listId);
        const newSkill = prompt("Enter a new skill:");
        if (newSkill && newSkill.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = newSkill;
            skillList.appendChild(li);
        }
    });
});
document.querySelectorAll(".remove").forEach(btn => {
    btn.addEventListener("click", function() {
        const listId = this.dataset.target;
        const skillList = document.getElementById(listId);
        if (skillList.children.length > 0) {
            skillList.removeChild(skillList.lastElementChild);
        
        }
    });
});
document.getElementById("add-section").addEventListener("click", function () {
    const section = document.createElement("section");
    section.innerHTML = `
        <h2>New Skills</h2>
        <ul><li>New Skill 1</li><li>New Skill 2</li></ul>
    `;
    document.querySelector("main.profile").appendChild(section);
});