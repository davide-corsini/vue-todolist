var app = new Vue({
    el: '#app',
    data: {
        todos: [
            'Fare spesa',
            'Andare in Banca',
            'Corso Yoga', 
            'Visita Medica'
        ],
        todoDelete: []
    },
    methods: {
        deleteTodo(indice){
            this.todoDelete.push(this.todos[indice])
            this.todos.splice(indice, 1);
            alert('Stai cancellando momentaneamente il todo');
        }
    }
});