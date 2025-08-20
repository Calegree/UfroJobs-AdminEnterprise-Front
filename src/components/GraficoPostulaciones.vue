<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale)

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const chartData = {
  labels: props.data.map(d => d.month),
  datasets: [
    {
      label: 'Postulaciones',
      data: props.data.map(d => d.postulaciones),
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      tension: 0.4,
      fill: true
    },
    {
      label: 'Empresas',
      data: props.data.map(d => d.empresas),
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.2)',
      tension: 0.4,
      fill: true
    },
    {
      label: 'Estudiantes',
      data: props.data.map(d => d.estudiantes),
      borderColor: '#f59e0b',
      backgroundColor: 'rgba(245, 158, 11, 0.2)',
      tension: 0.4,
      fill: true
    }
  ]
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Tendencia de Postulaciones'
    }
  }
}
</script>
