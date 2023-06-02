class Task{
    constructor(userTask){
        this.description = userTask
    }

}

class UI{
        constructor(){
        this.tableBody = document.querySelector("#table-body")
        this.task = document.querySelector("#task-input")
        this.tasks = [];
        this.form = document.querySelector("#form")
        this.form.addEventListener("submit", (event) => onButtonClick(event))


        }
        

        onButtonClick(){
            console.log("We are connected");
            if(this.task.value == ""){
                return;
            }
            const task = new Task(this.task.value)
            this.tasks.push(task)

            this.renderTaskTable();

            this.task.value = ""

        }

        renderTaskTable(){
            this.tableBody.innerHTML = []
            for(let i = 0; i < this.tasks.length; i++){
                const task = this.tasks[i]

                const tr = this.createTableRow(task);
                this.tableBody.appendChild(tr);
            }
        }

        createTableRow(task){
            const tr = document.createElement('tr')

            const tdTask = document.createElement("td")
            const tdComplete = document.createElement("td")

            const completionCheck = document.createElement("input")
            completionCheck.setAttribute("type", "checkbox")
            tdComplete.appendChild(completionCheck)


            const tdAction = document.createElement("td")
            const actionButton = this.createDeleteButton(task)
            tdAction.appendChild(actionButton)
            


            

            tdTask.innerHTML = task.description;
            
            



            tr.appendChild(tdTask)
            tr.appendChild(tdComplete)
            tr.appendChild(tdAction)

            return tr
        }

        createDeleteButton(task){
            let button = document.createElement("button")
            button.setAttribute("class", "btn btn-outline-secondary")
            button.innerHTML = "DELETE"
            
            


            
            button.addEventListener("click", () => this.onDeleteButtonClicked(task))
            
            
            return button
        }

        onDeleteButtonClicked(task){
            this.tasks = this.tasks.filter((x) => {
                return x.description !== task.description
            })
            console.log(task.description)

            this.renderTaskTable()
        }

        
}

let ui = new UI;
function onButtonClick(event){
    event.preventDefault();
    ui.onButtonClick()

}
function deleteButtonClicked(task){
    ui.onDeleteButtonClicked(task)

}