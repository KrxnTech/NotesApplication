// CHECKBOX FUNCTIONALITY

// ACESS
let INPUT = document.querySelectorAll("input")
let SPAN = document.querySelectorAll("span")

// ADDING A LOOP
INPUT.forEach((button, index) => {
    button.addEventListener("click", () => {
        if(button.checked){
            SPAN[index].style.color = "green";
        } else {
            SPAN[index].style.color = "red";
        }
    });
});


async function deleteNote(id) {
    try {
        const res = await fetch(`/notes/${id}`, { method: "DELETE" });

        if (res.ok) {
            // Remove the note div instantly from the page
            const noteDiv = document.querySelector(`a[onclick="deleteNote('${id}')"]`).closest(".note-item");
            noteDiv.remove();
            console.log("Note deleted:", id);
        } else {
            alert("Failed to delete note ❌");
        }
    } catch (err) {
        console.error("Error:", err);
    }
}