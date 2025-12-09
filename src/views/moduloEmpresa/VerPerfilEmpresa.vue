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
              <span class="ml-1 text-gray-500 md:ml-2">Mi Perfil</span>
            </div>
          </li>
        </ol>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Profile Information -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Company Header -->
          <div
            class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <!-- Cover Image -->
            <div class="h-32 bg-gradient-to-r from-blue-500 to-blue-600"></div>

            <!-- Profile Content -->
            <div class="p-8">
              <div
                class="flex flex-col sm:flex-row sm:items-start sm:space-x-6"
              >
                <!-- Company Logo -->
                <div class="flex-shrink-0 -mt-16 mb-4 sm:mb-0">
                  <img
                    :src="company.logo"
                    :alt="company.name"
                    class="w-24 h-24 rounded-xl object-cover border-4 border-white shadow-lg bg-white"
                  />
                </div>

                <!-- Company Info -->
                <div class="flex-1 min-w-0">
                  <div
                    class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"
                  >
                    <div>
                      <h1 class="text-3xl font-bold text-gray-900 mb-2">
                        {{ company.name }}
                      </h1>
                      <p class="text-lg text-blue-600 font-medium">
                        {{ company.industry }}
                      </p>
                    </div>
                    <div class="flex items-center space-x-2 mt-4 sm:mt-0">
                      <span
                        :class="
                          company.isActive
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        "
                        class="px-3 py-1 text-sm font-medium rounded-full"
                      >
                        {{
                          company.isActive ? "Cuenta Activa" : "Cuenta Inactiva"
                        }}
                      </span>
                    </div>
                  </div>

                  <p class="text-gray-700 leading-relaxed mb-6">
                    {{ company.description }}
                  </p>

                  <!-- Quick Stats -->
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="text-center p-4 bg-gray-50 rounded-lg">
                      <div class="text-2xl font-bold text-blue-600">
                        {{ company.stats.activeJobs }}
                      </div>
                      <div class="text-sm text-gray-600">Ofertas Activas</div>
                    </div>
                    <div class="text-center p-4 bg-gray-50 rounded-lg">
                      <div class="text-2xl font-bold text-green-600">
                        {{ company.stats.totalApplications }}
                      </div>
                      <div class="text-sm text-gray-600">Postulaciones</div>
                    </div>
                    <div class="text-center p-4 bg-gray-50 rounded-lg">
                      <div class="text-2xl font-bold text-purple-600">
                        {{ company.stats.hiredCandidates }}
                      </div>
                      <div class="text-sm text-gray-600">Contratados</div>
                    </div>
                    <div class="text-center p-4 bg-gray-50 rounded-lg">
                      <div class="text-2xl font-bold text-orange-600">
                        {{ company.stats.profileViews }}
                      </div>
                      <div class="text-sm text-gray-600">Visualizaciones</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Company Information -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold text-gray-900">
                Información de la Empresa
              </h2>
              <button
                @click="editMode = !editMode"
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
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
                <span>{{ editMode ? "Cancelar" : "Editar Perfil" }}</span>
              </button>
            </div>

            <form @submit.prevent="saveProfile" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Company Name -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    <svg
                      class="w-4 h-4 inline mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Nombre de Empresa
                  </label>
                  <input
                    v-model="company.name"
                    :disabled="!editMode"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                <!-- Phone -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    <svg
                      class="w-4 h-4 inline mr-2"
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
                    Teléfono
                  </label>
                  <input
                    v-model="company.phone"
                    :disabled="!editMode"
                    type="tel"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    <svg
                      class="w-4 h-4 inline mr-2"
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
                    Email
                  </label>
                  <input
                    v-model="company.email"
                    :disabled="!editMode"
                    type="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                <!-- Website -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    <svg
                      class="w-4 h-4 inline mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    Sitio Web
                  </label>
                  <input
                    v-model="company.website"
                    :disabled="!editMode"
                    type="url"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                <!-- RUT -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    <svg
                      class="w-4 h-4 inline mr-2"
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
                    RUT Empresa
                  </label>
                  <input
                    v-model="company.rut"
                    :disabled="!editMode"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>

                <!-- Location -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    <svg
                      class="w-4 h-4 inline mr-2"
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
                    Localización
                  </label>
                  <input
                    v-model="company.location"
                    :disabled="!editMode"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
              </div>

              <!-- Description -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  <svg
                    class="w-4 h-4 inline mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                  Descripción de la Empresa
                </label>
                <textarea
                  v-model="company.description"
                  :disabled="!editMode"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  placeholder="Describe tu empresa, su misión, valores y cultura organizacional..."
                ></textarea>
              </div>

              <!-- Documents Section -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-4">
                  <svg
                    class="w-4 h-4 inline mr-2"
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
                  Documentos
                </label>
                <div class="space-y-3">
                  <div
                    v-for="document in company.documents"
                    :key="document.id"
                    class="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div class="flex items-center space-x-3">
                      <svg
                        class="w-8 h-8 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p class="font-medium text-gray-900">
                          {{ document.name }}
                        </p>
                        <p class="text-sm text-gray-500">
                          {{ document.size }} • Subido {{ document.uploadDate }}
                        </p>
                      </div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <a
                        v-if="document.url"
                        :href="document.url"
                        target="_blank"
                        class="text-blue-600 hover:text-blue-800 transition-colors"
                        title="Descargar documento"
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
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </a>
                      <button
                        v-if="editMode"
                        @click="removeDocument(document.id)"
                        class="text-red-600 hover:text-red-800 transition-colors"
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div
                    v-if="editMode"
                    class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
                  >
                    <input
                      ref="fileInput"
                      type="file"
                      multiple
                      @change="handleFileUpload"
                      class="hidden"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    <button
                      @click="$refs.fileInput.click()"
                      class="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg
                        class="w-8 h-8 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <span class="text-sm font-medium">Subir documentos</span>
                    </button>
                    <p class="text-xs text-gray-500 mt-2">
                      PDF, DOC, DOCX, JPG, PNG hasta 10MB
                    </p>
                  </div>
                </div>
              </div>

              <!-- Save Button -->
              <div v-if="editMode" class="flex justify-end space-x-4">
                <button
                  type="button"
                  @click="editMode = false"
                  class="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1 space-y-8">
          <!-- Company Card -->
          <div
            class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center"
          >
            <img
              :src="company.logo"
              :alt="company.name"
              class="w-20 h-20 rounded-xl object-cover mx-auto mb-4 border border-gray-200"
            />
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ company.name }}
            </h3>
            <p class="text-gray-600 mb-2">{{ company.industry }}</p>
            <p v-if="company.size" class="text-sm text-gray-500 mb-4">{{ company.size }}</p>

            <div class="space-y-2 text-sm text-gray-600 mb-6">
              <div class="flex items-center justify-center space-x-2">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Último inicio: {{ formatDate(company.lastLogin) }}</span>
              </div>
              <div class="flex items-center justify-center space-x-2">
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
                <span>Miembro desde {{ formatDate(company.memberSince) }}</span>
              </div>
            </div>
          </div>

          <!--    
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
            <div class="space-y-3">
              <button 
                @click="createNewJob"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
                <span>Nueva Oferta</span>
              </button> -->

          <!-- <button 
                @click="viewAnalytics"
                class="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                <span>Analíticas</span>
              </button>
            </div>
          </div>  -->

          <!-- Account Settings -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">
              Configuración
            </h3>
            <div class="space-y-3">
              <button
                @click="changePassword"
                class="w-full text-left px-4 py-3 text-gray-700 hover:bg-yellow-700 rounded-lg transition-colors flex items-center space-x-3"
              >
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
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                <span>Cambiar Contraseña</span>
              </button>

              <button
                @click="notificationSettings"
                class="w-full text-left px-4 py-3 text-gray-700 hover:text-white hover:bg-red-700 rounded-lg transition-colors flex items-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3H9.75m0 0l3-3m-3 3l3 3"
                  />
                </svg>

                <span>Cerrar sesión</span>
              </button>

              <!--  <button 
                @click="notificationSettings"
                class="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center space-x-3"
              >
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM4 19h6v-7a1 1 0 011-1h4a1 1 0 011 1v7h6M4 19V9a1 1 0 011-1h14a1 1 0 011 1v10"/>
                </svg>
                <span>Notificaciones</span>
              </button>
              
              <button 
                @click="privacySettings"
                class="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center space-x-3"
              >
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <span>Privacidad</span>
              </button>

              -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import { getCompanyProfile, updateCompanyProfile } from "@/config/api.js";

const isLoading = ref(true);
// Reactive data
const editMode = ref(false);

// Sample company data
const company = ref({
  name: "Western Digital",
  logo: "https://ui-avatars.com/api/?name=WD&background=0D8ABC&color=fff&size=80",
  industry: "Ingeniería Informática",
  phone: "938854254",
  email: "ruben02.wd@westerndigital.com",
  website: "https://westerndigital.com",
  rut: "7294277-1",
  location: "Argentina",
  description:
    "Western Digital es una empresa líder mundial en soluciones de almacenamiento de datos. Nos dedicamos a crear tecnologías que permiten a las personas y organizaciones crear, preservar, acceder y transformar una gama cada vez mayor de datos.",
  lastLogin: "2025-04-17",
  memberSince: "2023-01-15",
  isActive: true,
  stats: {
    activeJobs: 12,
    totalApplications: 156,
    hiredCandidates: 8,
    profileViews: 1247,
  },
  documents: [
    {
      id: 1,
      name: "Certificado de Constitución.pdf",
      size: "2.4 MB",
      uploadDate: "hace 2 meses",
    },
    {
      id: 2,
      name: "RUT Empresa.pdf",
      size: "1.1 MB",
      uploadDate: "hace 3 meses",
    },
  ],
});

// Methods
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const saveProfile = async () => {
  try {
    if (!company.value.id) {
      alert('Error: No se encontró el ID de la empresa');
      return;
    }

    // Preparar los datos para enviar
    const updateData = {
      name: company.value.name,
      rut: company.value.rut,
      phone: company.value.phone,
      email: company.value.email,
      localization: company.value.location,
      description: company.value.description,
      web: company.value.website,
    };

    // Solo agregar password si se ha modificado (deberías tener un campo para esto)
    // if (newPassword.value) {
    //   updateData.password = newPassword.value;
    // }

    // Extraer las URLs de documentos si existen
    if (company.value.documents && company.value.documents.length > 0) {
      updateData.documents = company.value.documents
        .map(doc => doc.url || doc)
        .filter(url => url);
    }

    console.log('Datos a actualizar:', updateData);

    await updateCompanyProfile(company.value.id, updateData);
    
    editMode.value = false;
    alert('Perfil actualizado exitosamente');
    
    // Recargar el perfil para obtener los datos actualizados
    await loadCompanyProfile();
  } catch (error) {
    console.error('Error al actualizar perfil:', error);
    alert(`Error: ${error.message}`);
  }
};

const handleFileUpload = (event) => {
  const files = Array.from(event.target.files);
  files.forEach((file) => {
    // Aquí iría la lógica para subir archivos
    console.log("Subiendo archivo:", file.name);
    // Simular subida exitosa
    company.value.documents.push({
      id: Date.now(),
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      uploadDate: "hace unos segundos",
    });
  });
  event.target.value = "";
};

const downloadDocument = (documentId) => {
  console.log("Descargando documento:", documentId);
  // Aquí iría la lógica para descargar
};

const removeDocument = (documentId) => {
  if (confirm("¿Estás seguro de que quieres eliminar este documento?")) {
    company.value.documents = company.value.documents.filter(
      (doc) => doc.id !== documentId
    );
  }
};

const createNewJob = () => {
  console.log("Crear nueva oferta");
  // Aquí iría la navegación al formulario de creación
};

const viewApplications = () => {
  console.log("Ver postulaciones");
  // Aquí iría la navegación a las postulaciones
};

const viewAnalytics = () => {
  console.log("Ver analíticas");
  // Aquí iría la navegación a las analíticas
};

const changePassword = () => {
  console.log("Cambiar contraseña");
  // Aquí iría la lógica para cambiar contraseña
};

const notificationSettings = () => {
  console.log("Configuración de notificaciones");
  // Aquí iría la navegación a configuración de notificaciones
};

const privacySettings = () => {
  console.log("Configuración de privacidad");
  // Aquí iría la navegación a configuración de privacidad
};

const loadCompanyProfile = async () => {
  try {
    isLoading.value = true;
    const profile = await getCompanyProfile();
    
    console.log('Perfil cargado:', profile);
    
    // Mapear documentos si existen
    const mappedDocuments = profile.documents && Array.isArray(profile.documents)
      ? profile.documents.map((doc, index) => ({
          id: index + 1,
          name: doc.split('/').pop() || `Documento ${index + 1}`,
          url: doc,
          size: 'N/A',
          uploadDate: 'N/A'
        }))
      : company.value.documents;
    
    // Actualizar los datos de la empresa con la respuesta del backend
    company.value = {
      ...company.value,
      id: profile.id,
      name: profile.name || company.value.name,
      logo: profile.logo || company.value.logo,
      rut: profile.rut || company.value.rut,
      phone: profile.phone || company.value.phone,
      email: profile.email || company.value.email,
      location: profile.localization || company.value.location,
      website: profile.web || company.value.website,
      description: profile.description || company.value.description,
      documents: mappedDocuments,
      isActive: profile.state === 'activo',
      industry: profile.industry || company.value.industry,
      size: profile.size || company.value.size
    };
  } catch (error) {
    console.error('Error al cargar el perfil:', error);
    alert(`Error: ${error.message}`);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  await loadCompanyProfile();
});
</script>
