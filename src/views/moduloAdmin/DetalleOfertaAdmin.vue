<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-blue-600 text-white shadow-lg">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <button 
              @click="goBack"
              class="p-2 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <div>
              <h1 class="text-xl font-bold">UFRO Laboral</h1>
              <p class="text-sm opacity-90">Detalle de Oferta</p>
            </div>
          </div>
          <nav class="hidden md:flex items-center space-x-6">
            <a href="#" class="hover:text-blue-200 transition-colors">Inicio</a>
            <a href="#" class="hover:text-blue-200 transition-colors">Ofertas Laborales</a>
            <a href="#" class="hover:text-blue-200 transition-colors">Mi Perfil</a>
          </nav>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-4 py-8">
      <!-- Breadcrumb -->
      <nav class="flex mb-8" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a href="#" class="text-gray-700 hover:text-blue-600 inline-flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              Inicio
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
              <a href="#" class="ml-1 text-gray-700 hover:text-blue-600 md:ml-2">Ofertas Laborales</a>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
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
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
            <div class="flex items-start space-x-6">
              <!-- Company Logo -->
              <div class="flex-shrink-0">
                <img 
                  :src="job.company.logo" 
                  :alt="job.company.name"
                  class="w-20 h-20 rounded-xl object-cover border border-gray-200"
                >
              </div>

              <!-- Job Info -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center space-x-3 mb-3">
                  <h1 class="text-3xl font-bold text-gray-900">{{ job.title }}</h1>
                  <span 
                    :class="getStatusClass(job.status)"
                    class="px-3 py-1 text-sm font-medium rounded-full"
                  >
                    {{ job.status }}
                  </span>
                </div>
                
                <h2 class="text-xl font-semibold text-blue-600 mb-4">{{ job.company.name }}</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>{{ job.location }}</span>
                  </div>
                  
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"/>
                    </svg>
                    <span>{{ job.workType }}</span>
                  </div>
                  
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{{ job.schedule }}</span>
                  </div>
                  
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                    </svg>
                    <span>{{ job.applicants }} postulantes</span>
                  </div>
                </div>

                <div class="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                  <span>Publicado el {{ formatDate(job.publishedDate) }}</span>
                  <span>•</span>
                  <span>Vence el {{ formatDate(job.expiryDate) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Job Description -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Descripción del puesto</h3>
            
            <div class="prose max-w-none">
              <p class="text-gray-700 leading-relaxed mb-6">{{ job.description }}</p>
              
              <h4 class="text-lg font-semibold text-gray-900 mb-4">Responsabilidades principales:</h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li v-for="responsibility in job.responsibilities" :key="responsibility">
                  {{ responsibility }}
                </li>
              </ul>
              
              <h4 class="text-lg font-semibold text-gray-900 mb-4">Requisitos:</h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li v-for="requirement in job.requirements" :key="requirement">
                  {{ requirement }}
                </li>
              </ul>
              
              <h4 class="text-lg font-semibold text-gray-900 mb-4">Beneficios:</h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li v-for="benefit in job.benefits" :key="benefit">
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Company Information -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Acerca de {{ job.company.name }}</h3>
            <p class="text-gray-700 leading-relaxed mb-6">{{ job.company.description }}</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Industria</h4>
                <p class="text-gray-600">{{ job.company.industry }}</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Tamaño de la empresa</h4>
                <p class="text-gray-600">{{ job.company.size }}</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Sitio web</h4>
                <a :href="job.company.website" class="text-blue-600 hover:text-blue-800 transition-colors">
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
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8 sticky top-8">
            <div class="space-y-4">
          
              
           
              <div class="border-t pt-4">
                <h4 class="font-semibold text-gray-900 mb-3">Acciones de Administrador</h4>
                <div class="space-y-2">
                  <button 
                    @click="editJob"
                    class="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                    <span>Editar</span>
                  </button>
                  
                  <button 
                    @click="toggleJobStatus"
                    :class="job.isActive ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'"
                    class="w-full text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg v-if="job.isActive" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{{ job.isActive ? 'Desactivar' : 'Activar' }}</span>
                  </button>
                  
                  <button 
                    @click="deleteJob"
                    class="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                    <span>Eliminar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Job Stats -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h4 class="font-semibold text-gray-900 mb-4">Estadísticas de la oferta</h4>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Visualizaciones</span>
                <span class="font-semibold text-gray-900">{{ job.views }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Postulaciones</span>
                <span class="font-semibold text-gray-900">{{ job.applicants }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Guardado por</span>
                <span class="font-semibold text-gray-900">{{ job.saved }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Días restantes</span>
                <span class="font-semibold text-gray-900">{{ daysRemaining }}</span>
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
          </div>
          Share Job -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Reactive data
const hasApplied = ref(false)
const isSaved = ref(false)

// Sample job data
const job = ref({
  id: 1,
  title: 'Analista de Sistemas',
  company: {
    name: 'Western Digital',
    logo: '/placeholder.svg?height=80&width=80',
    description: 'Western Digital es una empresa líder mundial en soluciones de almacenamiento de datos. Nos dedicamos a crear tecnologías que permiten a las personas y organizaciones crear, preservar, acceder y transformar una gama cada vez mayor de datos.',
    industry: 'Tecnología',
    size: '10,000+ empleados',
    website: 'https://westerndigital.com',
    founded: '1970'
  },
  location: 'Temuco, Región de la Araucanía',
  workType: 'Presencial',
  schedule: 'Tiempo Parcial',
  status: 'Activa',
  publishedDate: '2024-01-15',
  expiryDate: '2024-02-15',
  applicants: 15,
  views: 234,
  saved: 8,
  isActive: true,
  description: 'Buscamos un Analista de Sistemas motivado para unirse a nuestro equipo de tecnología. El candidato ideal tendrá experiencia en análisis de sistemas, desarrollo de software y trabajo en equipos multidisciplinarios.',
  responsibilities: [
    'Analizar y documentar requerimientos de sistemas',
    'Diseñar soluciones técnicas eficientes',
    'Colaborar con equipos de desarrollo y testing',
    'Mantener documentación técnica actualizada',
    'Participar en reuniones de seguimiento de proyectos'
  ],
  requirements: [
    'Título en Ingeniería Informática o carrera afín',
    'Conocimientos en metodologías ágiles',
    'Experiencia con bases de datos SQL',
    'Habilidades de comunicación y trabajo en equipo',
    'Conocimientos básicos de programación'
  ],
  benefits: [
    'Seguro de salud complementario',
    'Capacitación y desarrollo profesional',
    'Ambiente de trabajo colaborativo',
    'Flexibilidad horaria',
    'Oportunidades de crecimiento'
  ]
})

// Computed properties
const daysRemaining = computed(() => {
  const today = new Date()
  const expiry = new Date(job.value.expiryDate)
  const diffTime = expiry - today
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays > 0 ? diffDays : 0
})

// Methods
const getStatusClass = (status) => {
  switch (status) {
    case 'Activa':
      return 'bg-green-100 text-green-800'
    case 'Inactiva':
      return 'bg-red-100 text-red-800'
    case 'Pausada':
      return 'bg-yellow-100 text-yellow-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const goBack = () => {
  window.history.back()
}

const applyToJob = () => {
  if (!hasApplied.value) {
    hasApplied.value = true
    job.value.applicants++
    // Aquí iría la lógica para enviar la postulación
    console.log('Postulación enviada')
  }
}

const saveJob = () => {
  isSaved.value = !isSaved.value
  if (isSaved.value) {
    job.value.saved++
  } else {
    job.value.saved--
  }
}

const editJob = () => {
  console.log('Editar trabajo')
  // Aquí iría la navegación al formulario de edición
}

const toggleJobStatus = () => {
  job.value.isActive = !job.value.isActive
  job.value.status = job.value.isActive ? 'Activa' : 'Inactiva'
}

const deleteJob = () => {
  if (confirm('¿Estás seguro de que quieres eliminar esta oferta?')) {
    console.log('Eliminar trabajo')
    // Aquí iría la lógica para eliminar
  }
}

const shareJob = (platform) => {
  console.log(`Compartir en ${platform}`)
  // Aquí iría la lógica para compartir
}

const copyJobLink = () => {
  navigator.clipboard.writeText(window.location.href)
  console.log('Enlace copiado')
  // Aquí podrías mostrar una notificación
}

onMounted(() => {
  // Incrementar contador de visualizaciones
  job.value.views++
})
</script>