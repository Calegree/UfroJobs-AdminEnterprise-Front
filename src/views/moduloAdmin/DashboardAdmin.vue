<template>
  <div class="flex h-screen w-full bg-neutral-100">
    <SidebarAdmin />
    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <header
        class="flex items-center justify-between h-16 px-6 border-b bg-white"
      >
        <div class="flex items-center gap-2">
          <span class="text-xl font-semibold">Dashboard de Administración</span>
        </div>
      </header>

      <!-- Main Dashboard -->
      <main class="flex-1 overflow-auto p-6">
        <!-- Métricas principales -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div class="bg-white rounded-xl border p-4 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-500"
                >Total Postulaciones</span
              >
              <span class="material-icons text-gray-400"></span>
            </div>
            <div class="text-2xl font-bold">1,247</div>
            <div class="flex items-center text-xs text-green-600">
              +12.5%
              <span class="text-gray-400 ml-1">desde el mes pasado</span>
            </div>
          </div>
          <div class="bg-white rounded-xl border p-4 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-500"
                >Empresas Registradas</span
              >
              <span class="material-icons text-gray-400"></span>
            </div>
            <div class="text-2xl font-bold">132</div>
            <div class="flex items-center text-xs text-green-600">
              <span
                class="material-icons text-green-600 mr-1"
                style="font-size: 16px"
              ></span>
              +8.2%
              <span class="text-gray-400 ml-1">desde el mes pasado</span>
            </div>
          </div>
          <div class="bg-white rounded-xl border p-4 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-500"
                >Estudiantes Activos</span
              >
              <span class="material-icons text-gray-400"></span>
            </div>
            <div class="text-2xl font-bold">256</div>
            <div class="flex items-center text-xs text-green-600">
              <span
                class="material-icons text-green-600 mr-1"
                style="font-size: 16px"
              ></span>
              +15.3%
              <span class="text-gray-400 ml-1">desde el mes pasado</span>
            </div>
          </div>
          <div class="bg-white rounded-xl border p-4 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-500"
                >Solicitudes Pendientes</span
              >
              <span class="material-icons text-gray-400"></span>
            </div>
            <div class="text-2xl font-bold text-red-600">24</div>
            <div class="flex items-center text-xs text-red-600">
              <span
                class="material-icons text-red-600 mr-1"
                style="font-size: 16px"
              ></span>
              Requieren atención
            </div>
          </div>
        </div>

        <!-- Gráficos -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="bg-white rounded-xl border p-4">
            <h2 class="text-lg font-semibold mb-2">
              Tendencia de Postulaciones
            </h2>
            <GraficoPostulaciones :data="monthlyData" />
          </div>
          <div class="bg-white rounded-xl border p-4">
            <h2 class="text-lg font-semibold mb-2">Distribución de Usuarios</h2>
            <GraficoUsuarios :data="userDistribution" />
            <div class="flex justify-center space-x-6 mt-4">
              <div
                v-for="item in userDistribution"
                :key="item.name"
                class="flex items-center"
              >
                <div
                  class="w-3 h-3 rounded-full mr-2"
                  :style="{ backgroundColor: item.color }"
                />
                <span class="text-sm text-gray-600">
                  {{ item.name }}: {{ item.value }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import GraficoPostulaciones from "@/components/GraficoPostulaciones.vue";
import GraficoUsuarios from "@/components/GraficoUsuarios.vue";
import SidebarAdmin from "../../components/SidebarAdmin.vue";

const selectedPeriod = ref("30d");

const monthlyData = [
  { month: "Ene", postulaciones: 15, empresas: 8, estudiantes: 12 },
  { month: "Feb", postulaciones: 22, empresas: 12, estudiantes: 18 },
  { month: "Mar", postulaciones: 18, empresas: 10, estudiantes: 15 },
  { month: "Abr", postulaciones: 35, empresas: 18, estudiantes: 28 },
  { month: "May", postulaciones: 42, empresas: 22, estudiantes: 35 },
  { month: "Jun", postulaciones: 38, empresas: 20, estudiantes: 32 },
];

const userDistribution = [
  { name: "Estudiantes", value: 256, color: "#3b82f6" },
  { name: "Empresas", value: 132, color: "#10b981" },
];
</script>

<style scoped>
.material-icons {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>
