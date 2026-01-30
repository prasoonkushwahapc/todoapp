const inputBox = document.getElementById("input_box")
const listContainer = document.getElementById("list_container")
const  BASE_URL = "https://todoapp-7xna.onrender.com"
const  LOCAL_URL = "http://localhost:8000"

function addTask(){
    console.log(inputBox.value)
    inputBox.value=""
}

async function getTodo() {
    console.log("button clicked")
    const res = await fetch(`${BASE_URL}/api/todo`)
    const todos = await res.json()
    console.log(todos)
}