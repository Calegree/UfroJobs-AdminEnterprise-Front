<template>
  <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const chartData = {
  labels: props.data.map(d => d.name),
  datasets: [
    {
      data: props.data.map(d => d.value),
      backgroundColor: props.data.map(d => d.color),
      borderWidth: 1
    }
  ]
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Distribución de Usuarios'
    }
  }
}
</script>
