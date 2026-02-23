const loadBtn = document.querySelectorAll(".loadBtn");

// This function is in the EXACT format as your Emmanuel example
function fetchRandomUser() {
    return new Promise((done, issue) => {
        // We call a real API (Random User Generator)
        fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(data => {
                // If we get data, we call our "Success" parameter (done)
                const user = data.results[0];
                done({
                    name: `${user.name.first} ${user.name.last}`,
                    email: user.email,
                    image: user.picture.large,
                    gender: user.gender,
                    dateOfBirth: user.dob.date
                });
            })
            .catch(err => {
                // If the internet fails, we call our "Failure" parameter (issue)
                issue("Network Error: Could not reach API");
            });
    });
}


// The Boss (Click Handler) - Stays exactly the same!
loadBtn.forEach((btn) => {
    btn.addEventListener("click", async () => {
        const card = btn.closest(".card");
        const statusText = card.querySelector(".statusText");
        const userData = card.querySelector(".userData");

        statusText.textContent = "Connecting to API...";
        userData.innerHTML = "";

        try {
            // We 'await' the result of our manual promise
            const user = await fetchRandomUser();

            statusText.textContent = "User Found!";
            userData.innerHTML = `

                <img src="${user.image}" class="w-20 h-20 rounded-full mb-2 border-2 border-blue-500">
                <h2 class="text-lg font-bold">${user.name}</h2>
                <p class="text-gray-400 text-sm">${user.email}</p>
                <p class="text-gray-400 text-sm">${user.gender}</p>
                <p class="text-gray-400 text-sm">${user.dateOfBirth}</p>
            `;

        } 
        catch (error) {
            // If 'issue' was called, we end up here
            statusText.textContent = error;
            statusText.className = "text-red-500";
        }
    });
});