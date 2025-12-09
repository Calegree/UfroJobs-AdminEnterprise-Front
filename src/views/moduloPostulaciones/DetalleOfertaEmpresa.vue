<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />

    <!-- Loading State -->
    <div v-if="isLoading" class="container mx-auto px-4 py-8">
      <div class="flex justify-center items-center h-64">
        <svg class="animate-spin h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
        </svg>
      </div>
    </div>

    <div v-else class="container mx-auto px-4 py-8">
      <!-- Breadcrumb -->
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
          <li>
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
              <a 
                @click="$router.push('/empresa/listaOfertas')" 
                class="ml-1 text-gray-700 hover:text-blue-600 md:ml-2 cursor-pointer"
              >
                Ofertas Laborales
              </a>
            </div>
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
              <span class="ml-1 text-gray-500 md:ml-2">{{ job.title }}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Job Header -->
          <div
            class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8"
          >
            <div class="flex items-start space-x-6">
              <!-- Company Logo -->
              <div class="flex-shrink-0">
                <img
                  :src="job.company.logo"
                  :alt="job.company.name"
                  class="w-20 h-20 rounded-xl object-cover border border-gray-200"
                />
              </div>

              <!-- Job Info -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center space-x-3 mb-3">
                  <h1 class="text-3xl font-bold text-gray-900">
                    {{ job.title }}
                  </h1>
                  <span
                    :class="getStatusClass(job.status)"
                    class="px-3 py-1 text-sm font-medium rounded-full"
                  >
                    {{ job.status }}
                  </span>
                </div>

                <h2 class="text-xl font-semibold text-blue-600 mb-4">
                  {{ job.company.name }}
                </h2>

                <div
                  class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600"
                >
                  <div class="flex items-center space-x-2">
                    <svg
                      class="w-5 h-5 text-gray-400"
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

                  <div class="flex items-center space-x-2">
                    <svg
                      class="w-5 h-5 text-gray-400"
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

                  <div class="flex items-center space-x-2">
                    <svg
                      class="w-5 h-5 text-gray-400"
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

                  <div class="flex items-center space-x-2">
                    <svg
                      class="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                    <span>{{ job.applicants }} postulantes</span>
                  </div>
                </div>

                <div
                  class="mt-4 flex items-center space-x-4 text-sm text-gray-500"
                >
                  <span>Publicado el {{ formatDate(job.publishedDate) }}</span>
                  <span>•</span>
                  <span>Vence el {{ formatDate(job.expiryDate) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Job Description -->
          <div
            class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8"
          >
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              Descripción del puesto
            </h3>

            <div class="prose max-w-none">
              <p class="text-gray-700 leading-relaxed mb-6">
                {{ job.description }}
              </p>

              <h4 class="text-lg font-semibold text-gray-900 mb-4">
                Responsabilidades principales:
              </h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li
                  v-for="responsibility in job.responsibilities"
                  :key="responsibility"
                >
                  {{ responsibility }}
                </li>
              </ul>

              <h4 class="text-lg font-semibold text-gray-900 mb-4">
                Requisitos:
              </h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li v-for="requirement in job.requirements" :key="requirement">
                  {{ requirement }}
                </li>
              </ul>

              <h4 class="text-lg font-semibold text-gray-900 mb-4">
                Beneficios:
              </h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li v-for="benefit in job.benefits" :key="benefit">
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Company Information -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              Acerca de {{ job.company.name }}
            </h3>
            <p class="text-gray-700 leading-relaxed mb-6">
              {{ job.company.description }}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Industria</h4>
                <p class="text-gray-600">{{ job.company.industry }}</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">
                  Tamaño de la empresa
                </h4>
                <p class="text-gray-600">{{ job.company.size }}</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Sitio web</h4>
                <a
                  :href="job.company.website"
                  class="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {{ job.company.website }}
                </a>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Fundada</h4>
                <p class="text-gray-600">{{ job.company.founded }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Action Buttons -->
          <div
            class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8 sticky top-8"
          >
            <div class="space-y-4">
              <!--    <button 
                @click="applyToJob"
                :disabled="hasApplied"
                :class="hasApplied ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'"
                class="w-full text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <svg v-if="!hasApplied" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>{{ hasApplied ? 'Ya postulaste' : 'Postularme' }}</span>
              </button>
              
              <button 
                @click="saveJob"
                :class="isSaved ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-500 hover:bg-gray-600'"
                class="w-full text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
                <span>{{ isSaved ? 'Guardado' : 'Guardar oferta' }}</span>
              </button> -->

              <div class="border-t pt-4">
                <h4 class="font-semibold text-gray-900 mb-3">
                  Acciones de empresa
                </h4>
                <div class="space-y-2">
                  <button
                    @click="editJob"
                    class="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
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
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <span>Editar</span>
                  </button>
                  <button
                    @click="viewApplications"
                    class="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>Ver Postulaciones</span>
                  </button>
                  <button
                    @click="toggleJobStatus"
                    :class="
                      job.isActive
                        ? 'bg-yellow-500 hover:bg-yellow-600'
                        : 'bg-green-500 hover:bg-green-600'
                    "
                    class="w-full text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg
                      v-if="job.isActive"
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <svg
                      v-else
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{{ job.isActive ? "Desactivar" : "Activar" }}</span>
                  </button>

                  <button
                    @click="deleteJob"
                    class="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span>Eliminar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Job Stats -->
          <div
            class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8"
          >
            <h4 class="font-semibold text-gray-900 mb-4">
              Estadísticas de la oferta
            </h4>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Visualizaciones</span>
                <span class="font-semibold text-gray-900">{{ job.views }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Postulaciones</span>
                <span class="font-semibold text-gray-900">{{
                  job.applicants
                }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Guardado por</span>
                <span class="font-semibold text-gray-900">{{ job.saved }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Días restantes</span>
                <span class="font-semibold text-gray-900">{{
                  daysRemaining
                }}</span>
              </div>
            </div>
          </div>

          <!-- 
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h4 class="font-semibold text-gray-900 mb-4">Compartir oferta</h4>
            <div class="flex space-x-3">
              <button 
                @click="shareJob('linkedin')"
                class="flex-1 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
              >
                LinkedIn
              </button>
              <button 
                @click="shareJob('email')"
                class="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
              >
                Email
              </button>
              <button 
                @click="copyJobLink"
                class="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
              >
                Copiar
              </button>
            </div>
          </div>Share Job -->
        </div>
      </div>
    </div>
  </div>

  <!-- Modal de edición de oferta con estilo admin -->
  <div
    v-if="showEditModal"
    class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
    @click="showEditModal = false"
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
        <button
          @click="showEditModal = false"
          class="text-gray-400 hover:text-gray-600"
        >
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
            <label class="text-sm font-medium text-gray-500 mb-1 block"
              >Título de la oferta</label
            >
            <input
              v-model="editOffer.title"
              type="text"
              required
              class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
            />
          </div>
          <div>
            <label class="text-sm font-medium text-gray-500 mb-1 block"
              >Ubicación</label
            >
            <input
              v-model="editOffer.location"
              type="text"
              required
              class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
            />
          </div>
          <div>
            <label class="text-sm font-medium text-gray-500 mb-1 block"
              >Tipo de jornada</label
            >
            <select
              v-model="editOffer.schedule"
              required
              class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
            >
              <option value="">Selecciona una opción</option>
              <option value="Tiempo Completo">Tiempo Completo</option>
              <option value="Medio Tiempo">Medio Tiempo</option>
              <option value="Por Proyecto">Por Proyecto</option>
              <option value="Práctica">Práctica</option>
            </select>
          </div>
          <div>
            <label class="text-sm font-medium text-gray-500 mb-1 block"
              >Modalidad</label
            >
            <select
              v-model="editOffer.workType"
              required
              class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
            >
              <option value="">Selecciona una opción</option>
              <option value="Presencial">Presencial</option>
              <option value="Remoto">Remoto</option>
              <option value="Mixto">Mixto</option>
            </select>
          </div>
          <div>
            <label class="text-sm font-medium text-gray-500 mb-1 block"
              >Descripción de la oferta</label
            >
            <textarea
              v-model="editOffer.description"
              required
              class="w-full border border-gray-300 rounded px-3 py-2 text-gray-900"
            ></textarea>
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

  <!-- Modal de postulaciones -->
  <div
    v-if="showApplicationsModal"
    class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
    @click="showApplicationsModal = false"
  >
    <div
      class="relative top-10 mx-auto p-5 border w-11/12 md:w-4/5 lg:w-3/4 shadow-lg rounded-md bg-white max-h-screen overflow-y-auto"
      @click.stop
    >
      <!-- Modal Header -->
      <div class="flex items-center justify-between pb-4 border-b">
        <h3 class="text-lg font-semibold text-gray-900">
          Postulaciones a la Oferta
        </h3>
        <button
          @click="showApplicationsModal = false"
          class="text-gray-400 hover:text-gray-600"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Tabla de postulantes -->
      <div class="overflow-x-auto mt-6">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
              <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Correo</th>
              <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Teléfono</th>
              <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Nacimiento</th>
              <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">RUT</th>
              <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Género</th>
              <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Nacionalidad</th>
              <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Dirección</th>
              <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Carrera</th>
              <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">CV</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="applicant in applicants" :key="applicant.rut">
              <td class="px-4 py-2 whitespace-nowrap">{{ applicant.nombre }}</td>
              <td class="px-4 py-2 whitespace-nowrap">{{ applicant.correo }}</td>
              <td class="px-4 py-2 whitespace-nowrap">{{ applicant.telefono }}</td>
              <td class="px-4 py-2 whitespace-nowrap">{{ applicant.fechaNacimiento }}</td>
              <td class="px-4 py-2 whitespace-nowrap">{{ applicant.rut }}</td>
              <td class="px-4 py-2 whitespace-nowrap">{{ applicant.genero }}</td>
              <td class="px-4 py-2 whitespace-nowrap">{{ applicant.nacionalidad }}</td>
              <td class="px-4 py-2 whitespace-nowrap">{{ applicant.direccion }}</td>
              <td class="px-4 py-2 whitespace-nowrap">{{ applicant.carrera }}</td>
              <td class="px-4 py-2 whitespace-nowrap">
                <a
                  v-if="applicant.cv"
                  :href="applicant.cv"
                  target="_blank"
                  class="text-blue-600 hover:underline"
                >Ver CV</a>
                <span v-else class="text-gray-400">No disponible</span>
              </td>
            </tr>
            <tr v-if="applicants.length === 0">
              <td colspan="10" class="px-4 py-2 text-center text-gray-500">Sin postulaciones registradas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import { getJobOfferById } from "@/config/api.js";

const route = useRoute();
const isLoading = ref(true);
// Reactive data
const hasApplied = ref(false);
const isSaved = ref(false);
const showEditModal = ref(false);
const showApplicationsModal = ref(false);

// Ejemplo de postulantes (puedes reemplazarlo por datos reales)
const applicants = ref([
  {
    nombre: "Juan Pérez",
    correo: "juan.perez@email.com",
    telefono: "+56 9 1234 5678",
    fechaNacimiento: "1998-05-12",
    rut: "12.345.678-9",
    genero: "Masculino",
    nacionalidad: "Chilena",
    direccion: "Av. Siempre Viva 123, Temuco",
    carrera: "Ingeniería Informática",
    cv: "https://ejemplo.com/cv-juan.pdf"
  },
  {
    nombre: "María López",
    correo: "maria.lopez@email.com",
    telefono: "+56 9 8765 4321",
    fechaNacimiento: "1997-08-22",
    rut: "98.765.432-1",
    genero: "Femenino",
    nacionalidad: "Chilena",
    direccion: "Calle Falsa 456, Temuco",
    carrera: "Ingeniería Comercial",
    cv: null
  }
]);

const job = ref({
  id: 1,
  title: "Analista de Sistemas",
  company: {
    name: "Western Digital",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJAIdP-dx3yg6NDUccOqQg2Bkx1BERaiFrCZido3IDJ9jeKUZUQNqun9K12giBvpeidSk&usqp=CAU",
    description:
      "Western Digital es una empresa líder mundial en soluciones de almacenamiento de datos. Nos dedicamos a crear tecnologías que permiten a las personas y organizaciones crear, preservar, acceder y transformar una gama cada vez mayor de datos.",
    industry: "Tecnología",
    size: "10,000+ empleados",
    website: "https://westerndigital.com",
    founded: "1970",
  },
  location: "Temuco, Región de la Araucanía",
  workType: "Presencial",
  schedule: "Tiempo Parcial",
  status: "Activa",
  publishedDate: "2024-01-15",
  expiryDate: "2024-02-15",
  applicants: 15,
  views: 234,
  saved: 8,
  isActive: true,
  description:
    "Buscamos un Analista de Sistemas motivado para unirse a nuestro equipo de tecnología. El candidato ideal tendrá experiencia en análisis de sistemas, desarrollo de software y trabajo en equipos multidisciplinarios.",
  responsibilities: [
    "Analizar y documentar requerimientos de sistemas",
    "Diseñar soluciones técnicas eficientes",
    "Colaborar con equipos de desarrollo y testing",
    "Mantener documentación técnica actualizada",
    "Participar en reuniones de seguimiento de proyectos",
  ],
  requirements: [
    "Título en Ingeniería Informática o carrera afín",
    "Conocimientos en metodologías ágiles",
    "Experiencia con bases de datos SQL",
    "Habilidades de comunicación y trabajo en equipo",
    "Conocimientos básicos de programación",
  ],
  benefits: [
    "Seguro de salud complementario",
    "Capacitación y desarrollo profesional",
    "Ambiente de trabajo colaborativo",
    "Flexibilidad horaria",
    "Oportunidades de crecimiento",
  ],
});

const editOffer = ref({
  title: job.value.title,
  location: job.value.location,
  schedule: job.value.schedule,
  workType: job.value.workType,
  description: job.value.description,
});

// Computed properties
const daysRemaining = computed(() => {
  const today = new Date();
  const expiry = new Date(job.value.expiryDate);
  const diffTime = expiry - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
});

// Methods
const getStatusClass = (status) => {
  switch (status) {
    case "Activa":
      return "bg-green-100 text-green-800";
    case "Inactiva":
      return "bg-red-100 text-red-800";
    case "Pausada":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const goBack = () => {
  window.history.back();
};

const applyToJob = () => {
  if (!hasApplied.value) {
    hasApplied.value = true;
    job.value.applicants++;
    // Aquí iría la lógica para enviar la postulación
    console.log("Postulación enviada");
  }
};

const saveJob = () => {
  isSaved.value = !isSaved.value;
  if (isSaved.value) {
    job.value.saved++;
  } else {
    job.value.saved--;
  }
};

const editJob = () => {
  showEditModal.value = true;
};

const saveOfferEdits = () => {
  job.value.title = editOffer.value.title;
  job.value.location = editOffer.value.location;
  job.value.schedule = editOffer.value.schedule;
  job.value.workType = editOffer.value.workType;
  job.value.description = editOffer.value.description;
  showEditModal.value = false;
};

const toggleJobStatus = () => {
  job.value.isActive = !job.value.isActive;
  job.value.status = job.value.isActive ? "Activa" : "Inactiva";
};

const deleteJob = () => {
  if (confirm("¿Estás seguro de que quieres eliminar esta oferta?")) {
    console.log("Eliminar trabajo");
    // Aquí iría la lógica para eliminar
  }
};

const shareJob = (platform) => {
  console.log(`Compartir en ${platform}`);
  // Aquí iría la lógica para compartir
};

const copyJobLink = () => {
  navigator.clipboard.writeText(window.location.href);
  console.log("Enlace copiado");
  // Aquí podrías mostrar una notificación
};

const viewApplications = () => {
  showApplicationsModal.value = true;
};

const loadJobOffer = async () => {
  try {
    isLoading.value = true;
    const jobId = route.params.id || route.query.id;
    
    if (!jobId) {
      console.warn('No se proporcionó un ID de oferta');
      isLoading.value = false;
      return;
    }
    
    const offerData = await getJobOfferById(jobId);
    
    // Mapear los datos del backend al formato del componente
    job.value = {
      id: offerData.id,
      title: offerData.title,
      company: {
        name: offerData.company?.name || 'Mi Empresa',
        logo: offerData.company?.logo || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"%3E%3Crect fill="%23f0f0f0" width="150" height="150"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%23999"%3ELogo%3C/text%3E%3C/svg%3E',
        description: offerData.company?.description || 'Empresa comprometida con la excelencia',
        industry: offerData.company?.industry || 'Tecnología',
        size: offerData.company?.size || 'N/A',
        website: offerData.company?.website || offerData.company?.web || '#',
        founded: offerData.company?.founded || 'N/A'
      },
      location: offerData.location,
      workType: offerData.modality === 'remoto' ? 'Remoto' : 
                offerData.modality === 'presencial' ? 'Presencial' : 
                offerData.modality === 'hibrido' ? 'Híbrido' : offerData.modality,
      schedule: offerData.worktime,
      salary: offerData.salary,
      description: offerData.description,
      requirements: offerData.requirements || [],
      responsibilities: offerData.responsibilities || [],
      benefits: offerData.benefits || job.value.benefits,
      publishedDate: offerData.publication_date,
      expiryDate: offerData.expiry_date,
      postedDate: offerData.publication_date,
      status: offerData.status === 'active' ? 'Activa' : 'Inactiva',
      isActive: offerData.status === 'active',
      applicants: offerData.applicants_count || 0,
      views: offerData.views_count || 0,
      saved: offerData.saved_count || 0
    };
  } catch (error) {
    console.error('Error al cargar la oferta:', error);
    alert(`Error al cargar la oferta: ${error.message}`);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  await loadJobOffer();
});
</script>
