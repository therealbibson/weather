// MAIN FUNCTION — controls the flow
function handleAction(callback) {
    console.log("Action started");

    // decision point
    callback();

    console.log("Action finished");
}

// CALLBACK FUNCTIONS (entities)
function saveData() {
    console.log("✅ Data saved");
}

function deleteData() {
    console.log("❌ Data deleted");
}

// EVENTS (environment controls timing)
document.getElementById("saveBtn").addEventListener("click", () => {
    handleAction(saveData);
});

document.getElementById("deleteBtn").addEventListener("click", () => {
    handleAction(deleteData);
});
