<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <Navbar />

    <div class="flex">
      <!-- Sidebar -->
      <SidebarAdmin />

      <!-- Main Content -->
      <main class="flex-1 p-6 ml-64">
        <div class="max-w-7xl mx-auto">
          <!-- Header -->
          <div class="mb-6">
            <button
              @click="goBack"
              class="flex items-center text-blue-600 hover:text-blue-700 mb-4"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver
            </button>
            <h1 class="text-3xl font-bold text-gray-900">
              Postulantes de la Oferta
            </h1>
            <p class="text-gray-600 mt-2">
              Lista de todos los postulantes a esta oferta laboral
            </p>
          </div>

          <!-- Loading State -->
          <div v-if="loading" class="flex justify-center items-center py-12">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>

          <!-- Error State -->
          <div
            v-else-if="error"
            class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
          >
            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-red-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="text-red-800">{{ error }}</p>
            </div>
          </div>

          <!-- Applicants List -->
          <div v-else-if="applicants.length > 0" class="space-y-4">
            <div
              v-for="applicant in applicants"
              :key="applicant.id"
              class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div class="flex justify-between items-start">
                <div class="flex-1">
                  <!-- User Info -->
                  <div class="flex items-center mb-4">
                    <div class="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span class="text-blue-600 font-semibold text-lg">
                        {{ getInitials(applicant.user.name) }}
                      </span>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold text-gray-900">
                        {{ applicant.user.name }}
                      </h3>
                      <p class="text-gray-600">{{ applicant.user.career }}</p>
                    </div>
                  </div>

                  <!-- Contact Info -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="flex items-center text-gray-700">
                      <svg
                        class="w-5 h-5 mr-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a
                        :href="`mailto:${applicant.user.email}`"
                        class="hover:text-blue-600"
                      >
                        {{ applicant.user.email }}
                      </a>
                    </div>
                    <div class="flex items-center text-gray-700">
                      <svg
                        class="w-5 h-5 mr-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a
                        :href="`tel:${applicant.user.phone}`"
                        class="hover:text-blue-600"
                      >
                        {{ applicant.user.phone }}
                      </a>
                    </div>
                  </div>

                  <!-- Application Details -->
                  <div class="flex items-center gap-4 text-sm text-gray-600">
                    <span class="flex items-center">
                      <svg
                        class="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Postulado el {{ formatDate(applicant.applicationDate) }}
                    </span>
                    <span
                      :class="getStatusClass(applicant.status)"
                      class="px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {{ getStatusText(applicant.status) }}
                    </span>
                  </div>
                </div>

                <!-- Actions -->
                <div class="flex flex-col gap-2 ml-4">
                  <a
                    :href="applicant.cvUrl"
                    target="_blank"
                    class="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      class="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Ver CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div
            v-else
            class="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center"
          >
            <svg
              class="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              No hay postulantes
            </h3>
            <p class="text-gray-600">
              Aún no hay postulantes para esta oferta laboral.
            </p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import SidebarAdmin from '@/components/SidebarAdmin.vue';
import { getJobOfferApplicants } from '@/config/api.js';

const route = useRoute();
const router = useRouter();

const applicants = ref([]);
const loading = ref(true);
const error = ref(null);

// Get job offer ID from route query or params
const jobOfferId = ref(route.query.id || route.params.id);

onMounted(async () => {
  if (!jobOfferId.value) {
    error.value = 'No se proporcionó el ID de la oferta laboral';
    loading.value = false;
    return;
  }

  await loadApplicants();
});

const loadApplicants = async () => {
  try {
    loading.value = true;
    error.value = null;
    applicants.value = await getJobOfferApplicants(jobOfferId.value);
  } catch (err) {
    console.error('Error al cargar postulantes:', err);
    error.value = err.message || 'Error al cargar los postulantes';
  } finally {
    loading.value = false;
  }
};

const goBack = () => {
  router.back();
};

const getInitials = (name) => {
  if (!name) return '?';
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name[0].toUpperCase();
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const getStatusText = (status) => {
  const statusMap = {
    pending: 'Pendiente',
    viewed: 'Visto',
    accepted: 'Aceptado',
    rejected: 'Rechazado',
  };
  return statusMap[status] || status;
};

const getStatusClass = (status) => {
  const classMap = {
    pending: 'bg-yellow-100 text-yellow-800',
    viewed: 'bg-blue-100 text-blue-800',
    accepted: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };
  return classMap[status] || 'bg-gray-100 text-gray-800';
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
