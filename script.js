
const userProfile = {
  name: "Amir",
  birthYear: 2003,
  isDeveloper: true,
  hobbies: ["coding", "gaming", "reading"]
};
const currentYear = 2026; 

function showProfile() {
  const age = currentYear - userProfile.birthYear;
  const monthsOld = age * 12;
  console.log("Name:", userProfile.name, "| Age:", age, "| Months:", monthsOld);

  const div = document.getElementById("profile-display");
  div.innerHTML = `
    <p><b>Name:</b> ${userProfile.name}</p>
    <p><b>Birth Year:</b> ${userProfile.birthYear}</p>
    <p><b>Age:</b> ${age}</p>
    <p><b>Months old:</b> ${monthsOld}</p>
    <p><b>Is Developer:</b> ${userProfile.isDeveloper}</p>
    <p><b>Hobbies:</b> ${userProfile.hobbies.join(", ")}</p>
  `;
}

showProfile();
document.getElementById("submit-btn").addEventListener("click", function() {
  const nameInput = document.getElementById("username-input").value;
  const yearInput = Number(document.getElementById("birthyear-input").value);

  if (nameInput) userProfile.name = nameInput;
  if (yearInput) userProfile.birthYear = yearInput; 
        
  showProfile();
  document.getElementById("profile-display").style.color = "darkblue";
});
const list = document.getElementById("hobby-list");

document.getElementById("add-btn").addEventListener("click", function() {
  const input = document.getElementById("item-input");

  if (input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;           
    list.appendChild(li);                   
    input.value = "";                       
  }
});

document.getElementById("remove-btn").addEventListener("click", function() {
  if (list.lastElementChild) {
    list.lastElementChild.remove();         
  }
});