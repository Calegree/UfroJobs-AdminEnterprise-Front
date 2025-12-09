<template>
  <div class="min-h-screen bg-gray-50">
    
    <Navbar />
    <div class="container mx-auto px-4 py-8">
      <!-- Page Title and Actions -->
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
      >
        <div>
         <nav class="flex mb-8" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a
              href="#"
              class="text-gray-700 hover:text-blue-600 inline-flex items-center"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
              Inicio
            </a>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-1 text-gray-500 md:ml-2">Ofertas laborales</span>
            </div>
          </li>
        </ol>
      </nav>
          <p class="text-gray-600">{{ totalOffers }} ofertas disponibles</p>
        </div>
        <button
          @click="showCreateModal = true"
          class="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span>Agregar Oferta</span>
        </button>
      </div>

      <!-- Filters Section -->
      <!-- Filtros alineados -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Buscar -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Buscar</label
            >
            <input
              v-model="searchTerm"
              type="text"
              placeholder="Buscar por título, empresa o ubicación..."
              class="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <!-- Región -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Región</label
            >
            <select
              v-model="selectedRegion"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todas las regiones</option>
              <option value="araucania">Araucanía</option>
              <option value="biobio">Biobío</option>
              <option value="metropolitana">Metropolitana</option>
            </select>
          </div>
          <!-- Modalidad -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Modalidad</label
            >
            <select
              v-model="selectedWorkType"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todas</option>
              <option value="presencial">Presencial</option>
              <option value="remoto">Remoto</option>
              <option value="hibrido">Híbrido</option>
            </select>
          </div>
          <!-- Carrera -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Carrera</label
            >
            <select
              v-model="selectedCareer"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todas las carreras</option>
              <option value="informatica">Ingeniería Informática</option>
              <option value="comercial">Ingeniería Comercial</option>
              <option value="industrial">Ingeniería Industrial</option>
            </select>
          </div>
          <!-- Jornada -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Jornada</label
            >
            <select
              v-model="selectedSchedule"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todas</option>
              <option value="completa">Tiempo Completo</option>
              <option value="parcial">Tiempo Parcial</option>
              <option value="practica">Práctica Profesional</option>
            </select>
          </div>
          <!-- Espacio vacío para alinear -->
          <div></div>
        </div>
      </div>

      <!-- Job Listings -->
      <div class="space-y-4">
        <div
          v-for="job in filteredJobs"
          :key="job.id"
          class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div class="p-6">
            <div
              class="flex flex-col lg:flex-row lg:items-center lg:justify-between"
            >
              <!-- Job Info -->
              <div class="flex items-start space-x-4 mb-4 lg:mb-0">
                <!-- Company Logo -->
                <div class="flex-shrink-0">
                  <img
                    :src="job.company.logo"
                    :alt="job.company.name"
                    class="w-16 h-16 rounded-lg object-cover border border-gray-200"
                  />
                </div>

                <!-- Job Details -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-center space-x-2 mb-2">
                    <h3 class="text-xl font-semibold text-gray-900">
                      {{ job.title }}
                    </h3>
                    <span
                      :class="getJobTypeClass(job.type)"
                      class="px-2 py-1 text-xs font-medium rounded-full"
                    >
                      {{ job.type }}
                    </span>
                  </div>

                  <p class="text-lg font-medium text-blue-600 mb-2">
                    {{ job.company.name }}
                  </p>

                  <div
                    class="flex flex-wrap items-center gap-4 text-sm text-gray-600"
                  >
                    <div class="flex items-center space-x-1">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{{ job.location }}</span>
                    </div>

                    <div class="flex items-center space-x-1">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                        />
                      </svg>
                      <span>{{ job.workType }}</span>
                    </div>

                    <div class="flex items-center space-x-1">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{{ job.schedule }}</span>
                    </div>
                  </div>

                  <div
                    class="mt-3 flex items-center space-x-2 text-sm text-gray-500"
                  >
                    <span>Publicado hace {{ job.publishedDays }} días</span>
                    <span>•</span>
                    <span>{{ job.applicants }} postulantes</span>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-3 lg:flex-col lg:w-48">
                <button
                  @click="viewJobDetail(job.id)"
                  class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors text-center"
                >
                  Ver Detalle
                </button>

                <div class="flex gap-2">
                  <button
                    @click="toggleJobStatus(job.id)"
                    :class="
                      job.isActive
                        ? 'bg-yellow-500 hover:bg-yellow-600'
                        : 'bg-green-500 hover:bg-green-600'
                    "
                    class="flex-1 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center text-sm"
                  >
                    {{ job.isActive ? "Desactivar" : "Activar" }}
                  </button>

                  <button
                    @click="editJob(job.id)"
                    class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center text-sm"
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredJobs.length === 0" class="text-center py-12">
        <svg
          class="mx-auto h-12 w-12 text-gray-400 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">
          No se encontraron ofertas
        </h3>
        <p class="text-gray-500">Intenta ajustar los filtros de búsqueda</p>
      </div>

      <!-- Pagination -->
      <div
        v-if="filteredJobs.length > 0"
        class="flex items-center justify-between mt-8"
      >
        <div class="text-sm text-gray-700">
          Mostrando {{ (currentPage - 1) * itemsPerPage + 1 }} a
          {{ Math.min(currentPage * itemsPerPage, totalOffers) }} de
          {{ totalOffers }} ofertas
        </div>
        <div class="flex items-center space-x-2">
          <button
            @click="previousPage"
            :disabled="currentPage === 1"
            class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <button
            v-for="page in visiblePages"
            :key="page"
            @click="goToPage(page)"
            :class="
              page === currentPage
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-500 hover:bg-gray-50'
            "
            class="px-3 py-2 text-sm font-medium border border-gray-300 rounded-md"
          >
            {{ page }}
          </button>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>

    <!-- Modal para crear oferta con estilo admin -->
    <div
      v-if="showCreateModal"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
    >
      <div
        class="relative top-10 mx-auto p-5 border w-11/12 md:w-4/5 lg:w-1/2 shadow-lg rounded-md bg-white max-h-screen overflow-y-auto"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="flex items-center justify-between pb-4 border-b">
          <h3 class="text-lg font-semibold text-gray-900">
            Nueva Oferta Laboral
          </h3>
          <button @click="showCreateModal = false" class="text-gray-400 hover:text-gray-600">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <form @submit.prevent="submitOffer" class="mt-6">
          <div class="grid grid-cols-1 gap-4">
            <div>
              <label class="text-sm font-medium text-gray-500 mb-1 block">Título de la oferta</label>
              <input v-model="newOffer.title" type="text" required class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900" />
            </div>
            <div>
              <label class="text-sm font-medium text-gray-500 mb-1 block">Ubicación</label>
              <input v-model="newOffer.location" type="text" required class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900" />
            </div>
            <div>
              <label class="text-sm font-medium text-gray-500 mb-1 block">Tipo de jornada</label>
              <select v-model="newOffer.schedule" required class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900">
                <option value="">Selecciona una opción</option>
                <option value="Tiempo Completo">Tiempo Completo</option>
                <option value="Medio Tiempo">Medio Tiempo</option>
                <option value="Por Proyecto">Por Proyecto</option>
                <option value="Práctica">Práctica</option>
              </select>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-500 mb-1 block">Modalidad</label>
              <select v-model="newOffer.modality" required class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900">
                <option value="">Selecciona una opción</option>
                <option value="remoto">Remoto</option>
                <option value="presencial">Presencial</option>
                <option value="hibrido">Híbrido</option>
              </select>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-500 mb-1 block">Salario *</label>
              <input v-model="newOffer.salary" type="text" required placeholder="Ej: $1.500.000 - $2.000.000" class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900" />
            </div>
            <div>
              <label class="text-sm font-medium text-gray-500 mb-1 block">Requisitos (separados por comas)</label>
              <input v-model="newOffer.requirements" type="text" placeholder="Ej: React, Node.js, PostgreSQL" class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900" />
            </div>
            <div>
              <label class="text-sm font-medium text-gray-500 mb-1 block">Etiquetas (separadas por comas)</label>
              <input v-model="newOffer.tags" type="text" placeholder="Ej: desarrollo, full-stack, tecnología" class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900" />
            </div>
            <div>
              <label class="text-sm font-medium text-gray-500 mb-1 block">Descripción de la oferta</label>
              <textarea v-model="newOffer.description" required rows="4" class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"></textarea>
            </div>
          </div>
          <div class="flex justify-end mt-6 pt-4 border-t">
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Publicar Oferta
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal de edición de oferta con estilo admin -->
    <div
      v-if="showEditModal"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
    >
      <div
        class="relative top-10 mx-auto p-5 border w-11/12 md:w-4/5 lg:w-1/2 shadow-lg rounded-md bg-white max-h-screen overflow-y-auto"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="flex items-center justify-between pb-4 border-b">
          <h3 class="text-lg font-semibold text-gray-900">
            Editar Oferta Laboral
          </h3>
          <button @click="showEditModal = false" class="text-gray-400 hover:text-gray-600">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <form @submit.prevent="saveOfferEdits" class="mt-6">
          <div class="grid grid-cols-1 gap-4">
            <div>
              <label class="text-sm font-medium text-gray-500 mb-1 block">Título de la oferta</label>
              <input v-model="editOffer.title" type="text" required class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900" />
            </div>
            <div>
              <label class="text-sm font-medium text-gray-500 mb-1 block">Ubicación</label>
              <input v-model="editOffer.location" type="text" required class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900" />
            </div>
            <div>
              <label class="text-sm font-medium text-gray-500 mb-1 block">Tipo de jornada</label>
              <select v-model="editOffer.schedule" required class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900">
                <option value="">Selecciona una opción</option>
                <option value="Tiempo Completo">Tiempo Completo</option>
                <option value="Medio Tiempo">Medio Tiempo</option>
                <option value="Por Proyecto">Por Proyecto</option>
                <option value="Práctica">Práctica</option>
              </select>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-500 mb-1 block">Modalidad</label>
              <select v-model="editOffer.workType" required class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900">
                <option value="">Selecciona una opción</option>
                <option value="Presencial">Presencial</option>
                <option value="Remoto">Remoto</option>
                <option value="Mixto">Mixto</option>
              </select>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-500 mb-1 block">Descripción de la oferta</label>
              <textarea v-model="editOffer.description" required class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"></textarea>
            </div>
          </div>
          <div class="flex justify-end mt-6 pt-4 border-t">
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Navbar from "../../components/Navbar.vue";
import { useRouter } from "vue-router";
import { getJobOffers, createJobOffer, updateJobOffer } from "@/config/api.js";
const router = useRouter();

// Reactive data
const searchTerm = ref("");
const selectedRegion = ref("");
const selectedWorkType = ref("");
const selectedCareer = ref("");
const selectedSchedule = ref("");
const currentPage = ref(1);
const itemsPerPage = ref(10);
const showCreateModal = ref(false);
const showEditModal = ref(false);
const editOffer = ref({
  title: '',
  location: '',
  schedule: '',
  workType: '',
  description: ''
});
let editingJobId = null;

const newOffer = ref({
  title: '',
  location: '',
  schedule: '',
  modality: '',
  salary: '',
  requirements: '',
  tags: '',
  description: ''
});

// Sample job data
const jobs = ref([
  {
    id: 1,
    title: "Analista de Sistemas",
    company: {
      name: "Western Digital",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jo-EqS7xP7z-Bseu7eQCP4Y2AO6mfYQ4MA&s",
    },
    location: "Temuco, Región de la Araucanía",
    workType: "Presencial",
    schedule: "Tiempo Parcial",
    type: "Práctica Profesional",
    publishedDays: 2,
    applicants: 15,
    isActive: true,
    career: "informatica",
    region: "araucania",
  },
  {
    id: 2,
    title: "Desarrollador Frontend",
    company: {
      name: "TechCorp",
      logo: "https://rainbowpages.lk/uploads/listings/logo/t/techn1g.jpg",
    },
    location: "Santiago, Región Metropolitana",
    workType: "Remoto",
    schedule: "Tiempo Completo",
    type: "Empleo",
    publishedDays: 5,
    applicants: 28,
    isActive: true,
    career: "informatica",
    region: "metropolitana",
  },
  {
    id: 3,
    title: "Analista de Negocios",
    company: {
      name: "Business Solutions",
      logo: "https://img.freepik.com/premium-vector/business-solutions-logo-design-vector-logo-creation_1234492-92.jpg",
    },
    location: "Concepción, Región del Biobío",
    workType: "Híbrido",
    schedule: "Tiempo Completo",
    type: "Empleo",
    publishedDays: 1,
    applicants: 12,
    isActive: false,
    career: "comercial",
    region: "biobio",
  },
]);

// Computed properties
const filteredJobs = computed(() => {
  let filtered = jobs.value;

  if (searchTerm.value) {
    filtered = filtered.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        job.company.name
          .toLowerCase()
          .includes(searchTerm.value.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  }

  if (selectedRegion.value) {
    filtered = filtered.filter((job) => job.region === selectedRegion.value);
  }

  if (selectedWorkType.value) {
    filtered = filtered.filter(
      (job) => job.workType.toLowerCase() === selectedWorkType.value
    );
  }

  if (selectedCareer.value) {
    filtered = filtered.filter((job) => job.career === selectedCareer.value);
  }

  if (selectedSchedule.value) {
    filtered = filtered.filter((job) => {
      if (selectedSchedule.value === "completa")
        return job.schedule === "Tiempo Completo";
      if (selectedSchedule.value === "parcial")
        return job.schedule === "Tiempo Parcial";
      if (selectedSchedule.value === "practica")
        return job.type === "Práctica Profesional";
      return true;
    });
  }

  return filtered;
});

const totalOffers = computed(() => filteredJobs.value.length);
const totalPages = computed(() =>
  Math.ceil(totalOffers.value / itemsPerPage.value)
);

const visiblePages = computed(() => {
  const pages = [];
  const start = Math.max(1, currentPage.value - 2);
  const end = Math.min(totalPages.value, currentPage.value + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

// Methods
const getJobTypeClass = (type) => {
  switch (type) {
    case "Práctica Profesional":
      return "bg-blue-100 text-blue-800";
    case "Empleo":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const applyFilters = () => {
  currentPage.value = 1;
};

const viewJobDetail = (jobId) => {
  console.log("Ver detalle del trabajo:", jobId);
  router.push({ name: 'detalleOfertaEmpresa', query: { id: jobId } });
};

const toggleJobStatus = async (jobId) => {
  const job = jobs.value.find((j) => j.id === jobId);
  if (!job) return;
  
  try {
    const newStatus = job.isActive ? 'inactivo' : 'activo';
    
    await updateJobOffer(jobId, {
      state: newStatus
    });
    
    job.isActive = !job.isActive;
    alert(`Oferta ${job.isActive ? 'activada' : 'desactivada'} exitosamente`);
  } catch (error) {
    console.error('Error al cambiar estado:', error);
    alert(`Error: ${error.message}`);
  }
};

const editJob = (jobId) => {
  const job = jobs.value.find(j => j.id === jobId);
  if (job) {
    editOffer.value = {
      title: job.title,
      location: job.location,
      schedule: job.schedule,
      workType: job.workType,
      description: job.description
    };
    editingJobId = jobId;
    showEditModal.value = true;
  }
};

const saveOfferEdits = () => {
  const job = jobs.value.find(j => j.id === editingJobId);
  if (job) {
    job.title = editOffer.value.title;
    job.location = editOffer.value.location;
    job.schedule = editOffer.value.schedule;
    job.workType = editOffer.value.workType;
    job.description = editOffer.value.description;
  }
  showEditModal.value = false;
  editingJobId = null;
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goToPage = (page) => {
  currentPage.value = page;
};

const submitOffer = async () => {
  try {
    // Procesar requirements y tags desde strings separados por comas
    const requirementsArray = newOffer.value.requirements 
      ? newOffer.value.requirements.split(',').map(r => r.trim()).filter(r => r)
      : [];
    
    const tagsArray = newOffer.value.tags
      ? newOffer.value.tags.split(',').map(t => t.trim()).filter(t => t)
      : [];

    const offerData = {
      title: newOffer.value.title,
      description: newOffer.value.description,
      requirements: requirementsArray.length > 0 ? requirementsArray : ['Sin requisitos especificados'],
      location: newOffer.value.location,
      tags: tagsArray.length > 0 ? tagsArray : ['general'],
      salary: newOffer.value.salary,
      worktime: newOffer.value.schedule,
      modality: newOffer.value.modality
    };

    console.log('Datos a enviar:', offerData);
    const result = await createJobOffer(offerData);
    console.log('Oferta creada exitosamente:', result);
    
    // Recargar las ofertas
    await loadJobOffers();
    
    showCreateModal.value = false;
    newOffer.value = {
      title: '',
      location: '',
      schedule: '',
      modality: '',
      salary: '',
      requirements: '',
      tags: '',
      description: ''
    };
    
    alert('Oferta creada exitosamente');
  } catch (error) {
    console.error('Error al crear oferta:', error);
    alert(`Error: ${error.message}`);
  }
};

const loadJobOffers = async () => {
  try {
    const offers = await getJobOffers();
    // Mapear las ofertas del backend al formato del componente
    jobs.value = offers.map(offer => ({
      id: offer.id,
      title: offer.title,
      company: {
        name: offer.company?.name || 'Mi Empresa',
        logo: offer.company?.logo || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"%3E%3Crect fill="%23f0f0f0" width="150" height="150"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%23999"%3ELogo%3C/text%3E%3C/svg%3E'
      },
      location: offer.location,
      workType: offer.modality,
      schedule: offer.worktime,
      type: offer.status === 'active' ? 'Empleo' : 'Inactivo',
      description: offer.description,
      postedDate: offer.publication_date,
      applications: 0,
      isActive: offer.status === 'active',
      region: offer.location,
      career: offer.tags?.[0] || 'General'
    }));
  } catch (error) {
    console.error('Error al cargar ofertas:', error);
  }
};

onMounted(async () => {
  await loadJobOffers();
});
</script>
