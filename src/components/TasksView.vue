<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Titulo</th>
          <th>Descricao</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.id }}</td>
          <td>{{ task.titulo }}</td>
          <td>{{ task.descricao }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tasks: []
    }
  },
  mounted() {
    axios.get('http://localhost:80/crud-tasks/public/tasks')
      .then(response => {
        this.tasks = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<style>
* {

  font-family: 'Montserrat', sans-serif;
  padding: 0px;
  margin: 0px;
  vertical-align: -webkit-baseline-middle;
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
  width: 678px;
  height: 109px;
  top: 179px;
  left: 458px;
}

.fundodata {
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
</style>