
        const LoadBtn = document.getElementById("loadBtn");
        const statusText = document.getElementById("statusText");
        const userData = document.getElementById("userData");

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
                            location: `${user.location.city}, ${user.location.country}`,
                            picture: user.picture.large,
                            dateOfBirth: user.dob.date,
                            username: user.login.username,
                            password: user.login.password
                        });
                        
                    })
                    


                    .catch(error => {
                        // If there's an error, we call our "Issue" parameter (issue)
                        issue("Failed to fetch user");
                    });
            });
            
        }

        LoadBtn.addEventListener("click", async () => {
            statusText.textContent = "Connecting to API...";
            userData.innerHTML = "";
            try {
                const user = await fetchRandomUser();
                statusText.textContent = "User Found!";
                userData.innerHTML = `
                    <img src="${user.picture}" class="w-20 h-20 rounded-full mb-2 border-2 border-blue-500">
                    <h2 class="text-lg font-bold">${user.name}</h2>
                    <p class="text-gray-400 text-sm">${user.location}</p>
                    <p class="text-gray-400 text-sm">${user.dateOfBirth}</p>
                    <p class="text-gray-400 text-sm">Username: ${user.username}</p>
                    <p class="text-gray-400 text-sm">Password: ${user.password}</p> 
                `;
            } catch (error) {
                statusText.textContent = error;
                statusText.className = "text-red-500";
            }
            
        });