var app = new Vue({
    el: '#app',
    data: {

        // complete : document.getElementById('verifica'),
        // barraIncremento : document.getElementById('progress'),
        // testo : document.getElementById('percentuale'),
        // incremento : 10,
        todos: [
            'Fare spesa',
            'Andare in Banca',
            'Corso Yoga', 
            'Visita Medica'
        ],
        todoDelete: [],
        countColor: 0,
        //newNote mi serve per input da parte di utente
        newNote: '',
        valore: 10,
        statistic: '%',
        rewrite: ''
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


        deletedVerifica(indice){
            
            
                // this.barraIncremento = this.incremento;
                // this.testo.innerHTML = this.incremento;
                // if (this.incremento === 100) {
                //     this.incremento = 0 ;
                // }
                // else if(this.incremento < 100){
                //     this.incremento +=10 ; 
                // }

                
            

        this.todos.splice(indice, 1);


        },


        ripristinateTodo(indice){
            this.todos.push(this.todoDelete[indice]);
            this.todoDelete.splice(indice, 1);
        },


        removeNotes(indice){
            this.todoDelete.pop(indice);
            alert('stai cancellando definitivamente il tuo elemento');
        },

            //*                         
        deleteAllTodo(){
            for(    i=0 ;   i<this.todos.length;    i++){
                if (this.todos.length > 0) {
                    this.todoDelete.push(this.todos[i]);
                }
            }
            this.todos = [];
        },
            //*                      
        deleteAllTodoTrash(){
            if(this.todoDelete.length > 0){
                this.todoDelete = [];
            }
            else{
                alert('Non ci sono To do da eliminare')
            }
        },
        alertAttivita(){
            alert('Inserisci una nuova attivitá');
        },
        reWrite(indice){
            this.rewrite = prompt('Modifica il tuo obbiettivo giornaliero', this.todos[indice]);
            if(this.rewrite.length < 4){
                alert('Devi inserire almeno 4 caratteri');
            }
            else{
                this.todos.splice(indice, 1, this.rewrite);
            }
        }
    }
});

// complete is equal of my id verifica
// barraIncrementoo is equal of my id progress
// testo is equal of my id percentuale
var complete = document.getElementById('verifica');
var barraIncremento = document.getElementById('progress');
var testo = document.getElementById('percentuale');
var incremento = 10;
// // incremento sta alla larghezza della barraIncremento bar
// // Increase the width of the bar by 10 percent(10%)
complete.addEventListener('click', () => {
    barraIncremento.style.width = incremento + '%';
    testo.innerHTML = incremento + '%';
    if (incremento === 100) {
        incremento = 0;
    }
    else {
        incremento += 10;
        console.log('verifica');
    }
});

