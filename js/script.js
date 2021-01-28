var app = new Vue({
    el: '#app',
    data: {
        todos: [
            'Fare spesa',
            'Andare in Banca',
            'Corso Yoga', 
            'Visita Medica'
        ],
        todoDelete: [],
        //newNote mi serve per input da parte di utente
        newNote: '',
        backgroundBtn: ''
    },
    methods: {
        addTodo(){
            //qui gli dico che deve contenere piu di 4 caratteri
            if(this.newNote.length > 4){
                this.todos.push(this.newNote);
                this.backgroundBtn = 'btn';

            }
            else{
                alert('Inserisci almeno 4 caratteri');
            }
            //dopo risvuotami input text
            this.newNote = '';
        },
        deleteTodo(indice){
            this.todoDelete.push(this.todos[indice])
            this.todos.splice(indice, 1);
            alert('Stai cancellando momentaneamente il todo');
        },
        ripristinateTodo(indice){
            this.todos.push(this.todoDelete[indice]);
            this.todoDelete.splice(indice, 1);
        },
        removeNotes(indice){
            this.todoDelete.pop(indice);
            alert('stai cancellando definitivamente il tuo elemento');
        }
    }
});