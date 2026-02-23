// Grab DOM elements
const loadBtn = document.getElementById("loadBtn");
const statusText = document.getElementById("status");
const userDiv = document.getElementById("user");

// Function that RETURNS a Promise
function fetchUser() {
    return new Promise((done, issue) => {
        const success = true; // flip to false to test error

        if (success) {
            done({
                name: "Emmanuel",
                role: "Frontend Developer"
            });
        } else {
            issue("Failed to load user");
        }
    });
}

// Click handler using async / await
loadBtn.addEventListener("click", async () => {
    statusText.textContent = "Loading user...";
    statusText.className = "text-yellow-400";
    userDiv.innerHTML = "";

    try {
        const user = await fetchUser();

        statusText.textContent = "User loaded successfully!";
        statusText.className = "text-green-400";

        userDiv.innerHTML = `
      <h3 class="font-semibold">${user.name}</h3>
      <p class="text-sm text-gray-300">${user.role}</p>
    `;
    } catch (error) {
        statusText.textContent = error;
        statusText.className = "text-red-400";
    }
});







