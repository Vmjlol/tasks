<template>
    <ModalTask :modalTitle="currentTitle" v-model:showModal="showModal">
        <p>teste</p>
    </ModalTask>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Main</title>
        <link rel="stylesheet" href="css.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">

    </head>

    <body>
        <ModalTask modalTitle="Teste" v-model:showModal="showModal">
            <p>-webkit-text-stroke</p>
        </ModalTask>
        <nav class="navbar navbar-expand-lg bg-black sticky-top" data-bs-theme="dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <a class="navbar-brand" href="#"><i class="bi bi-yin-yang text-white fs-4 ms-3"></i></a>
                    </ul>
                    <form class="d-flex gap-5 me-3">
                        <i class="bi bi-plus text-white pointer fs-3" @mouseenter="showAddTask = !showAddTask"
                            @mouseleave="showAddTask = !showAddTask"><span class="fs-5"
                                style="vertical-align: text-top;" v-show="showAddTask">Nova Tarefa</span></i>
                        <i class="bi bi-info-circle text-white pointer fs-3"></i>
                        <i class="bi bi-bell text-white pointer fs-3"></i>
                        <div class="circle">
                            <span class="text-white fs-3">V</span>
                        </div>
                    </form>
                </div>
            </div>
        </nav>

        <div class="d-flex" style="gap:200px;">
            <div>
                <div class="ms-5 mt-5 leftmenu">
                    <div class="submenu">
                        <p class="pointer" @click="selectEntry()"><i class="bi bi-inbox me-3"></i><span>Entrada</span><span v-show="selected1">*</span></p>
                        <p class="pointer" @click="selectToday()"><i class="bi bi-calendar4 me-3"></i><span>Tarefas de hoje</span><span v-show="selected2">*</span></p>
                        <p class="pointer" @click="selectPast()"><i class="bi bi-exclamation-triangle me-3"></i><span>Vencidos</span><span v-show="selected3">*</span></p>
                    </div>
                </div>
            </div>
            <div class="w-70 mt-5">
                <h4 class="fw-bold mb-5">{{ title }}</h4>



                <div class="tasks p-3 d-flex mb-3 border" v-for="task in tasks" :key="task.id">
                    <div class="mainbox d-grid gap-0">
                        <label class="container">{{ task.titulo }}
                            <input type="checkbox" name="taskid" id="taskid" class="me-3">
                            <span class="checkmark"></span></label>
                        <span class="fs-5" @click="showModal = true"></span>
                        <p class="fs-6 task-comment ms-5 mb-1">{{ task.descricao }}</p>
                        <p class="fundodata ms-5 mt-0"><i class="bi bi-calendar4 me-3"></i><span>{{ new
                            Date(task.data_vencimento).toLocaleDateString('pt-BR') }}</span></p>
                    </div>
                    <div class="optionsTask">
                        <div class="options">
                            <i title="Editar Tarefa" class="bi bi-pencil pointer fs-5 ms-2 me-2"></i>
                        </div>
                        <div>
                            <i title="Definir Vencimento" class="bi bi-calendar4 pointer fs-5 ms-2 me-2"></i>
                        </div>
                        <div>
                            <i title="Excluir Tarefa" class="bi bi-trash pointer fs-5 ms-2 me-2"></i>
                        </div>
                    </div>

                </div>

                <div>
                    <a href="add.html"><i class="bi bi-plus fs-3 ms-2"></i> <span>Criar tarefa</span> </a>
                </div>
            </div>
        </div>

    </body>







</template>

<script>
import axios from 'axios';
import ModalTask from '@/components/ModalTask.vue';

export default {
    data() {
        return {
            tasks: [],
            showAddTask: false,
            selected1: true,
            selected2: false,
            selected3: false,
            title: "Entrada"
        }
    },
    components: {
        ModalTask,
    },
    mounted() {
        axios.get('http://localhost:80/crud-tasks/public/tasks')
            .then(response => {
                this.tasks = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {
        selectEntry() {
            this.selected1 = true
            this.selected2 = false
            this.selected3 = false
            this.title = "Entrada"
        },
        selectToday() {
            this.selected1 = false
            this.selected2 = true
            this.selected3 = false
            this.title = "Tarefas de hoje"
        },
        selectPast() {
            this.selected1 = false
            this.selected2 = false
            this.selected3 = true
            this.title = "Vencidos"
        }
    },
}
</script>




<style>
body {
    background-color: white !important;
}

.circle {
    background: #009488;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    text-align-last: center;
}

.leftmenu {
    -webkit-text-stroke: .5px;
    height: 100vh;
}

.tasks {
    display: flex;
    justify-content: space-between;
    width: 678px;
    height: 109px;
    top: 179px;
    left: 458px;
    gap: 0px;
    opacity: 0px;

}

.fundodata {
    width: fit-content;
    margin-top: 0px;
    font-size: 13px;
    padding: 2px;
    background: rgba(233, 171, 171, 0.425);
    color: darkred;
}

.task-comment {
    font-size: 10px;
    color: gray;

}

.optionsTask {
    display: flex;
    align-items: center;
    visibility: hidden;
}

.mainbox {
    align-content: center;
}

.tasks:hover .optionsTask {
    visibility: visible;
}

.pointer {
    cursor: pointer;
}

.submenu {
    display: grid;
    height: 200px;
    width: 150px;
}

.container {
    margin-top: 15px;
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 0px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    align-self: self-end;

}

.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    margin-top: 5px;
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border: solid gray 1px;

    border-radius: 15px;
}

.container:hover input~.checkmark {
    background-color: #ccc;
}

.container input:checked~.checkmark {
    background-color: #000000;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.container input:checked~.checkmark:after {
    display: block;
}

.container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>