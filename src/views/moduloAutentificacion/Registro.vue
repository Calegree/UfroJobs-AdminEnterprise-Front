<template>
  <div class="min-h-screen flex">
    <div class="hidden lg:flex lg:w-1/2 bg-blue-600 text-white p-12 flex-col justify-between">
      <div>
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

        <div class="mb-12">
          <h2 class="text-4xl font-bold mb-6 leading-tight">
            Únete a nuestra red de empresas colaboradoras
          </h2>
          <p class="text-xl text-blue-100 leading-relaxed">
            Conecta con el mejor talento de la Universidad de La Frontera y encuentra a los profesionales que tu empresa necesita.
          </p>
        </div>

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

      <div class="text-blue-200 text-sm">
        <p>© 2025 Universidad de La Frontera. Todos los derechos reservados.</p>
      </div>
    </div>

    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
      <div class="w-full max-w-md">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Registra tu empresa</h2>
          <p class="text-gray-600">Completa la información para crear tu cuenta empresarial</p>
        </div>
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


        <form v-if="currentStep === 1" @submit.prevent="nextStep" class="space-y-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Información básica</h3>
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

        <form v-if="currentStep === 2" @submit.prevent="nextStep" class="space-y-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Detalles de la empresa</h3>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
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
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
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
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Descripción de la Empresa *
            </label>
            <textarea 
              v-model="registerForm.description"
              rows="4"
              required
              placeholder="Describe tu empresa..."
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Documentos de certificación (RUT, SII, etc.) *
            </label>
            
            <input 
              ref="fileInput"
              type="file" 
              @change="handleFileUpload"
              accept=".pdf,.doc,.docx"
              class="hidden"
              multiple 
            >
            
            <button 
              type="button"
              @click="$refs.fileInput.click()"
              class="w-full flex items-center justify-center space-x-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-100"
            >
              <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
              </svg>
              <div>
                <span class="text-blue-600 font-medium">Subir documentos</span>
                <p class="text-sm text-gray-500 mt-1">PDF, DOC, DOCX hasta 10MB</p>
              </div>
            </button>
            
            <div v-if="uploadedFiles.length > 0" class="mt-4 space-y-2">
              <h4 class="font-medium text-sm text-gray-700">Archivos seleccionados:</h4>
              <div 
                v-for="(file, index) in uploadedFiles" 
                :key="index"
                class="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
              >
                <div class="flex items-center space-x-3 truncate">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span class="text-gray-800 font-medium truncate" :title="file.name">
                    {{ file.name }}
                  </span>
                </div>
                <button 
                  type="button"
                  @click="removeFile(index)"
                  class="text-red-500 hover:text-red-700 ml-4 flex-shrink-0"
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

        <form v-if="currentStep === 3" @submit.prevent="handleRegister" class="space-y-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Configurar contraseña</h3>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
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
                </button>
            </div>
            <div class="mt-2 text-sm text-gray-600">
              La contraseña debe tener al menos 8 caracteres
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
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
          <div class="flex items-start space-x-3">
            <input 
              v-model="registerForm.acceptTerms"
              type="checkbox"
              required
              class="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            >
            <label class="text-sm text-gray-700">
              Acepto los <a href="#" class="text-blue-600">Términos</a> y la <a href="#" class="text-blue-600">Política de Privacidad</a>
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
import { ref } from 'vue'
import { registerCompany, getPresignedUrl, uploadFileToS3 } from '@/config/api.js'

// --- Configuración de Estado (MODIFICADO) ---
const router = useRouter()
const currentStep = ref(1)
const showPassword = ref(false)
const isLoading = ref(false)

// Reemplazamos 'uploadedFile' por un array
const uploadedFiles = ref([]) // <--- ¡CAMBIO CLAVE!

const registerForm = ref({
  companyName: '',
  email: '',
  phone: '',
  website: '',
  rut: '',
  location: '',
  description: '',
  // 'document' ya no se usa, usaremos 'uploadedFiles'
  password: '',
  confirmPassword: '',
  acceptTerms: false
})

// --- Métodos de UI (MODIFICADOS) ---
const nextStep = () => {
  if (currentStep.value === 2) {
    // Validar que haya subido al menos un documento
    if (uploadedFiles.value.length === 0) {
      alert('Debes subir al menos un documento de certificación.')
      return
    }
  }
  if (currentStep.value < 3) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

// Lógica de subida de archivos actualizada
const handleFileUpload = (event) => {
  const files = event.target.files
  if (files) {
    // Iteramos sobre todos los archivos seleccionados
    for (const file of files) {
      // Opcional: Validar tamaño o tipo
      // if (file.size > 10 * 1024 * 1024) { // 10MB
      //   alert(`El archivo ${file.name} es demasiado grande.`)
      //   continue
      // }
      uploadedFiles.value.push(file)
    }
  }
  // Limpiar el input para permitir subir el mismo archivo de nuevo si se elimina
  event.target.value = null
}

// Lógica de eliminación de archivo actualizada
const removeFile = (index) => {
  uploadedFiles.value.splice(index, 1)
}

const goToLogin = () => {
  router.push('/inicioSesion') 
}

// --- Lógica de Conexión con Backend (¡NUEVA!) ---
const handleRegister = async () => {
  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    alert('Las contraseñas no coinciden')
    return
  }
  
  if (registerForm.value.password.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres')
    return
  }
  
  if (uploadedFiles.value.length === 0) {
    alert('Error: No hay documentos para subir.')
    return
  }

  isLoading.value = true
  const uploadedDocumentKeys = [] // Almacenará las "llaves" de S3

  try {
    // --- PASOS 1 y 2: Subir cada archivo a Minio ---
    for (const file of uploadedFiles.value) {
      const uniqueFileName = `${Date.now()}-${file.name}`

      // 1. Pedir URL firmada al backend
      const presignedUrlResponse = await fetch('/s3/presigned-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName: uniqueFileName }),
      })
      
      if (!presignedUrlResponse.ok) throw new Error(`No se pudo obtener la URL para ${file.name}`)
      
      const { url: presignedUrl } = await presignedUrlResponse.json()

      // 2. Subir el archivo directamente a Minio (S3)
      const uploadResponse = await fetch(presignedUrl, {
        method: 'PUT',
        body: file,
        headers: { 'Content-Type': file.type },
      })

      if (!uploadResponse.ok) throw new Error(`Falló la subida de ${file.name}`)
      
      // 3. Guardar la "llave" si la subida fue exitosa
      uploadedDocumentKeys.push(uniqueFileName)
    }

    // --- PASO 3: Registrar la Empresa en NestJS ---
    // (Ahora que todos los archivos están en S3)
    
    const registrationData = {
      name: registerForm.value.companyName,
      email: registerForm.value.email,
      phone: registerForm.value.phone,
      web: registerForm.value.website,
      rut: registerForm.value.rut,
      localization: registerForm.value.location,
      description: registerForm.value.description,
      password: registerForm.value.password,
      
      // ¡Aquí está la magia! Enviamos la lista de "llaves"
      documentKeys: uploadedDocumentKeys, 
    }

    const finalResponse = await fetch('/auth/register-company', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registrationData),
    })

    if (!finalResponse.ok) {
      const errorData = await finalResponse.json()
      throw new Error(errorData.message || 'Error al registrar la empresa.')
    }

    // ¡Éxito!
    router.push('/registro/confirmarCorreoVerificacion')

  } catch (error) {
    console.error('Error en el registro:', error)
    alert(`Error: ${error.message}`)
  } finally {
    isLoading.value = false
  }
}
</script>