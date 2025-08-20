<template>
  <div class="min-h-screen flex">
    <!-- Left Side - Information Panel -->
    <div class="hidden lg:flex lg:w-1/2 bg-blue-600 text-white p-12 flex-col justify-between">
      <div>
        <!-- Logo and Header -->
        <div class="flex items-center space-x-3 mb-12">
          <div class="bg-white text-blue-600 p-3 rounded-lg">
                  <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect
                x="3"
                y="7"
                width="18"
                height="13"
                rx="2"
                fill="white"
                stroke="#2563eb"
                stroke-width="2"
              />
              <rect x="7" y="3" width="10" height="6" rx="2" fill="#2563eb" />
            </svg>
          </div>
          <h1 class="text-2xl font-bold">UFRO Laboral</h1>
        </div>

        <!-- Welcome Message -->
        <div class="mb-12">
          <h2 class="text-4xl font-bold mb-6 leading-tight">
            Únete a nuestra red de empresas colaboradoras
          </h2>
          <p class="text-xl text-blue-100 leading-relaxed">
            Conecta con el mejor talento de la Universidad de La Frontera y encuentra a los profesionales que tu empresa necesita.
          </p>
        </div>

        <!-- Benefits Section -->
        <div>
          <h3 class="text-2xl font-semibold mb-6">Beneficios para tu empresa</h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg">Acceso directo a estudiantes y egresados calificados</span>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg">Publicación gratuita de ofertas laborales</span>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg">Herramientas de gestión de candidatos</span>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg">Soporte especializado de la universidad</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-blue-200 text-sm">
        <p>© 2025 Universidad de La Frontera. Todos los derechos reservados.</p>
      </div>
    </div>

    <!-- Right Side - Register Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
      <div class="w-full max-w-md">
        <!-- Mobile Logo -->
        <div class="lg:hidden flex items-center justify-center space-x-3 mb-8">
          <div class="bg-blue-600 text-white p-3 rounded-lg">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-gray-900">UFRO Laboral</h1>
        </div>

        <!-- Form Header -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Registra tu empresa</h2>
          <p class="text-gray-600">Completa la información para crear tu cuenta empresarial</p>
        </div>

        <!-- Progress Indicator -->
        <div class="mb-8">
          <div class="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>Paso {{ currentStep }} de 3</span>
            <span>{{ Math.round((currentStep / 3) * 100) }}% completado</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div 
              :style="{ width: `${(currentStep / 3) * 100}%` }"
              class="bg-blue-600 h-2 rounded-full transition-all duration-300"
            ></div>
          </div>
        </div>

        <!-- Step 1: Basic Information -->
        <form v-if="currentStep === 1" @submit.prevent="nextStep" class="space-y-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Información básica</h3>
          
          <!-- Company Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              Nombre de Empresa *
            </label>
            <input 
              v-model="registerForm.companyName"
              type="text" 
              required
              placeholder="Western Digital"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email empresarial *
            </label>
            <input 
              v-model="registerForm.email"
              type="email" 
              required
              placeholder="ruben02.wd@westerndigital.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
          </div>

          <!-- Phone -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Teléfono *
            </label>
            <input 
              v-model="registerForm.phone"
              type="tel" 
              required
              placeholder="938854254"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
          </div>

          <!-- Website -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
              Sitio Web
            </label>
            <input 
              v-model="registerForm.website"
              type="url" 
              placeholder="https://westerndigital.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
          </div>

          <button 
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
          >
            Continuar
          </button>
        </form>

        <!-- Step 2: Company Details -->
        <form v-if="currentStep === 2" @submit.prevent="nextStep" class="space-y-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Detalles de la empresa</h3>
          
          <!-- RUT -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              RUT Empresa *
            </label>
            <input 
              v-model="registerForm.rut"
              type="text" 
              required
              placeholder="7294277-1"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
          </div>

          <!-- Location -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Localización *
            </label>
            <input 
              v-model="registerForm.location"
              type="text" 
              required
              placeholder="Argentina"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
          </div>

          <!-- Description -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
              </svg>
              Descripción de la Empresa *
            </label>
            <textarea 
              v-model="registerForm.description"
              rows="4"
              required
              placeholder="Describe tu empresa, su misión, valores y cultura organizacional..."
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>

          <!-- Company Document -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Documento de certificación de empresa *
            </label>
            <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input 
                ref="fileInput"
                type="file" 
                @change="handleFileUpload"
                accept=".pdf,.doc,.docx"
                class="hidden"
                required
              >
              <div v-if="!uploadedFile">
                <svg class="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                </svg>
                <button 
                  type="button"
                  @click="$refs.fileInput.click()"
                  class="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Subir documento
                </button>
                <p class="text-sm text-gray-500 mt-2">PDF, DOC, DOCX hasta 10MB</p>
              </div>
              <div v-else class="flex items-center justify-center space-x-3">
                <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-green-700 font-medium">{{ uploadedFile.name }}</span>
                <button 
                  type="button"
                  @click="removeFile"
                  class="text-red-500 hover:text-red-700"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="flex space-x-4">
            <button 
              type="button"
              @click="previousStep"
              class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Anterior
            </button>
            <button 
              type="submit"
              class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Continuar
            </button>
          </div>
        </form>

        <!-- Step 3: Password and Confirmation -->
        <form v-if="currentStep === 3" @submit.prevent="handleRegister" class="space-y-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Configurar contraseña</h3>
          
          <!-- Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              Contraseña *
            </label>
            <div class="relative">
              <input 
                v-model="registerForm.password"
                :type="showPassword ? 'text' : 'password'"
                required
                placeholder="••••••••"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
              <button 
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg v-if="showPassword" class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"/>
                </svg>
                <svg v-else class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>
            </div>
            <div class="mt-2 text-sm text-gray-600">
              La contraseña debe tener al menos 8 caracteres
            </div>
          </div>

          <!-- Confirm Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              Confirmar Contraseña *
            </label>
            <input 
              v-model="registerForm.confirmPassword"
              type="password"
              required
              placeholder="••••••••"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
          </div>

          <!-- Terms and Conditions -->
          <div class="flex items-start space-x-3">
            <input 
              v-model="registerForm.acceptTerms"
              type="checkbox"
              required
              class="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            >
            <label class="text-sm text-gray-700">
              Acepto los 
              <a href="#" class="text-blue-600 hover:text-blue-800">Términos y Condiciones</a> y la 
              <a href="#" class="text-blue-600 hover:text-blue-800">Política de Privacidad</a>
            </label>
          </div>

          <div class="flex space-x-4">
            <button 
              type="button"
              @click="previousStep"
              class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Anterior
            </button>
            <button 
            
              type="submit"
              :disabled="isLoading"
              class="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <svg v-if="isLoading" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              <span>{{ isLoading ? 'Registrando...' : 'Crear Cuenta' }} </span>
            </button>
          </div>
        </form>

        <!-- Login Link -->
        <div class="mt-8 text-center">
          <p class="text-gray-600">
            ¿Ya tienes una cuenta? 
            <button 
              @click="goToLogin"
              class="text-blue-600 hover:text-blue-800 font-medium"
            >
              Inicia sesión aquí
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'

// Reactive data
const currentStep = ref(1)
const showPassword = ref(false)
const isLoading = ref(false)
const uploadedFile = ref(null)

const registerForm = ref({
  companyName: '',
  email: '',
  phone: '',
  website: '',
  rut: '',
  location: '',
  description: '',
  document: null,
  password: '',
  confirmPassword: '',
  acceptTerms: false
})

// Methods
const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    uploadedFile.value = file
    registerForm.value.document = file
  }
}

const removeFile = () => {
  uploadedFile.value = null
  registerForm.value.document = null
}

const handleRegister = async () => {
  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    alert('Las contraseñas no coinciden')
    return
  }

  isLoading.value = true
  try {
    // Aquí iría la lógica de registro
    console.log('Register attempt:', registerForm.value)
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Redirigir a inicio de sesión
    router.push('/registro/confirmarCorreoVerificacion') 
  } catch (error) {
    console.error('Register error:', error)
  } finally {
    isLoading.value = false
  }
}

const goToLogin = () => {
  console.log('Navigate to login')
   router.push('/inicioSesion') 
}
</script>