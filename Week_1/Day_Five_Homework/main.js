class Task{
    constructor(userTask){
        this.description = userTask
        this.checked = false;
    }

    changeStatus(){
        this.checked = !this.checked

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
            tdTask.setAttribute("class", "text-danger")
            const tdComplete = document.createElement("td")

            const completionCheck = document.createElement("input")
            completionCheck.setAttribute("type", "checkbox")
            
            tdComplete.appendChild(completionCheck)
            
            
            const tdAction = document.createElement("td")
            const actionButton = this.createDeleteButton(task)
            tdAction.appendChild(actionButton)
            
            
            
            
            
            tdTask.innerHTML = task.description;
            completionCheck.addEventListener("change", () => this.strikeThrough(task, completionCheck, tdTask))
            this.checkStatus(task, completionCheck, tdTask)
            
            
            
           


            tr.appendChild(tdTask)
            tr.appendChild(tdComplete)
            tr.appendChild(tdAction)

            return tr
        }
        checkStatus(task, completionCheck, tdTask){
            if(task.checked){
                console.log("hi")
                completionCheck.checked = true

                const strike = document.createElement("s")
                strike.innerHTML = task.description
                tdTask.setAttribute("class", "text-success")
                tdTask.innerHTML = ""
                tdTask.appendChild(strike)

                
            }

        }

        

        strikeThrough(task, completionCheck, tdTask){
            console.log(completionCheck.checked)
            task.changeStatus()
            
            if (completionCheck.checked){
                const strike = document.createElement("s")
                strike.innerHTML = task.description
                tdTask.setAttribute("class", "text-success")
                tdTask.innerHTML = ""
                tdTask.appendChild(strike)
                

            }
            else{
                tdTask.setAttribute("class", "text-danger")
                tdTask.innerHTML = ""
                tdTask.innerHTML = task.description
            }

        }

        createDeleteButton(task){
            let button = document.createElement("button")
            button.setAttribute("class", "btn btn-danger fa-solid fa-trash-can")
            
            
            
            


            
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