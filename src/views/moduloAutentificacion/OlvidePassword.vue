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
            Recupera el acceso a tu cuenta
          </h2>
          <p class="text-xl text-blue-100 leading-relaxed">
            No te preocupes, es normal olvidar las contraseñas. Te ayudaremos a recuperar el acceso a tu cuenta de forma segura.
          </p>
        </div>

        <!-- Security Steps -->
        <div>
          <h3 class="text-2xl font-semibold mb-6">Proceso de recuperación</h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <span class="text-lg">Ingresa tu email empresarial</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <span class="text-lg">Recibe código de verificación</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <span class="text-lg">Crea una nueva contraseña</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-blue-200 text-sm">
        <p>© 2025 Universidad de La Frontera. Todos los derechos reservados.</p>
      </div>
    </div>

    <!-- Right Side - Forgot Password Form -->
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
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-2">¿Olvidaste tu contraseña?</h2>
          <p class="text-gray-600">
            Ingresa tu email y te enviaremos un código para restablecer tu contraseña
          </p>
        </div>

        <!-- Forgot Password Form -->
        <form @submit.prevent="handleForgotPassword" class="space-y-6">
          <!-- Email Field -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email empresarial
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <input 
                v-model="email"
                type="email" 
                required
                placeholder="contacto@empresa.com"
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit"
            :disabled="isLoading"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <svg v-if="isLoading" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
            <span>{{ isLoading ? 'Enviando...' : 'Enviar código de recuperación' }}</span>
          </button>
          
        </form>

        <!-- Success Message -->
        <div v-if="emailSent" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div class="flex items-center space-x-3">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <div>
              <h4 class="font-medium text-green-900">¡Código enviado!</h4>
              <p class="text-sm text-green-700">
                Hemos enviado un código de recuperación a tu email. Revisa tu bandeja de entrada.
              </p>
            </div>
          </div>
        </div>
            
        <!-- Back to Login -->
        <div class="mt-8 text-center">
          <button 
            @click="goToLogin"
            class="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center space-x-2 mx-auto"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <span>Volver al inicio de sesión</span>
          </button>
        </div>

        <!-- 
        <div class="mt-8 p-4 bg-gray-100 rounded-lg">
          <h4 class="font-semibold text-gray-900 mb-2">¿Necesitas ayuda adicional?</h4>
          <p class="text-sm text-gray-600 mb-3">
            Si no recibes el email o tienes problemas para acceder a tu cuenta, nuestro equipo puede ayudarte.
          </p>
          <button 
            @click="contactSupport"
            class="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
          >
            Contactar soporte técnico
          </button>
        </div>
        Help Section -->

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter();

const email = ref('')
const isLoading = ref(false)
const emailSent = ref(false)

const handleForgotPassword = async () => {
  isLoading.value = true
  try {
    // Aquí iría la lógica para enviar email de recuperación
    console.log('Sending recovery email to:', email.value)
    await new Promise(resolve => setTimeout(resolve, 2000))
    emailSent.value = true

    // Redirigir a inicio de sesión después de cargar
    router.push('/olvidePassword/codigoConfirmacion')
  } catch (error) {
    console.error('Forgot password error:', error)
    alert('Error al enviar el código. Inténtalo de nuevo.')
  } finally {
    isLoading.value = false
  }
}
</script>