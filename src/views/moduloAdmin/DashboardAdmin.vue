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
            <div class="text-2xl font-bold">{{ isLoading ? '...' : totalCompanies }}</div>
            <div class="flex items-center text-xs text-green-600">
              <span
                class="material-icons text-green-600 mr-1"
                style="font-size: 16px"
              ></span>
              Total en el sistema
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
import { ref, onMounted } from "vue";
import GraficoPostulaciones from "@/components/GraficoPostulaciones.vue";
import GraficoUsuarios from "@/components/GraficoUsuarios.vue";
import SidebarAdmin from "../../components/SidebarAdmin.vue";
import { getUserDistribution, getJobOffersByMonth, getTotalCompanies } from "@/config/api.js";

const selectedPeriod = ref("30d");
const monthlyData = ref([]);
const userDistribution = ref([]);
const totalCompanies = ref(0);
const isLoading = ref(true);

const monthNames = {
  '01': 'Ene', '02': 'Feb', '03': 'Mar', '04': 'Abr',
  '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Ago',
  '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dic'
};

const loadDashboardData = async () => {
  try {
    isLoading.value = true;

    // Cargar distribución de usuarios
    const userDistData = await getUserDistribution();
    userDistribution.value = userDistData;

    // Cargar ofertas por mes
    const jobOffersData = await getJobOffersByMonth();
    monthlyData.value = jobOffersData.map(item => {
      const [year, month] = item.month.split('-');
      return {
        month: monthNames[month] || month,
        postulaciones: item.job_offers,
        empresas: 0,
        estudiantes: 0
      };
    });

    // Cargar total de empresas
    const companiesData = await getTotalCompanies();
    totalCompanies.value = companiesData.total;

    console.log('Dashboard data loaded:', { userDistribution: userDistribution.value, monthlyData: monthlyData.value, totalCompanies: totalCompanies.value });
  } catch (error) {
    console.error('Error loading dashboard data:', error);
    alert(`Error al cargar datos del dashboard: ${error.message}`);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  loadDashboardData();
});
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
