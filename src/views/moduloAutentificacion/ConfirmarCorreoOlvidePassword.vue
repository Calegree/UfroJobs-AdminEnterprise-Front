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
            Confirma tu identidad
          </h2>
          <p class="text-xl text-blue-100 leading-relaxed">
            Por seguridad, necesitamos verificar que eres tú quien solicita el cambio de contraseña. Ingresa el código que enviamos a tu email.
          </p>
        </div>

        <!-- Security Info -->
        <div>
          <h3 class="text-2xl font-semibold mb-6">Seguridad de tu cuenta</h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span class="text-lg">Verificación de dos factores</span>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              <span class="text-lg">Protección de datos empresariales</span>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg">Código de un solo uso</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-blue-200 text-sm">
        <p>© 2025 Universidad de La Frontera. Todos los derechos reservados.</p>
      </div>
    </div>

    <!-- Right Side - Confirmation Form -->
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
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Confirma el código</h2>
          <p class="text-gray-600 mb-4">
            Hemos enviado un código de 6 dígitos a<br>
            <span class="font-medium text-gray-900">{{ maskedEmail }}</span>
          </p>
        </div>

        <!-- Confirmation Form -->
        <form @submit.prevent="handleConfirmation" class="space-y-6">
          <!-- Verification Code -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-4 text-center">
              Ingresa el código de recuperación
            </label>
            <div class="flex justify-center space-x-3">
              <input 
                v-for="(digit, index) in verificationCode" 
                :key="index"
                v-model="verificationCode[index]"
                @input="handleInput(index, $event)"
                @keydown="handleKeydown(index, $event)"
                :ref="el => codeInputs[index] = el"
                type="text"
                maxlength="1"
                class="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
          </div>

          <!-- Timer -->
          <div class="text-center">
            <p class="text-sm text-gray-600 mb-4">
              {{ timeRemaining > 0 ? `El código expira en ${formatTime(timeRemaining)}` : 'El código ha expirado' }}
            </p>
          </div>

          <!-- Confirm Button -->
          <button 
            type="submit"
            :disabled="!isCodeComplete || isLoading"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <svg v-if="isLoading" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span>{{ isLoading ? 'Verificando...' : 'Verificar Código' }}</span>
          </button>
        </form>

        <!-- Resend Code -->
        <div class="mt-8 text-center">
          <p class="text-gray-600 mb-4">¿No recibiste el código?</p>
          <button 
            @click="resendCode"
            :disabled="timeRemaining > 0 || isResending"
            class="text-blue-600 hover:text-blue-800 disabled:text-gray-400 font-medium flex items-center justify-center space-x-2 mx-auto"
          >
            <svg v-if="isResending" class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            <span>{{ isResending ? 'Enviando...' : 'Reenviar código' }}</span>
          </button>
        </div>

        <!-- Back to Login -->
        <div class="mt-8 text-center">
          <button 
            @click="goToLogin"
            class="text-gray-600 hover:text-gray-800 font-medium flex items-center justify-center space-x-2 mx-auto"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <span>Volver al inicio de sesión</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter();
// Reactive data
const verificationCode = ref(['', '', '', '', '', ''])
const codeInputs = ref([])
const isLoading = ref(false)
const isResending = ref(false)
const timeRemaining = ref(600) // 10 minutes in seconds
const timer = ref(null)

// Props (normalmente vendrían del router o store)
const email = ref('ruben02.wd@westerndigital.com')

// Computed properties
const maskedEmail = computed(() => {
  const [localPart, domain] = email.value.split('@')
  const maskedLocal = localPart.slice(0, 2) + '*'.repeat(localPart.length - 4) + localPart.slice(-2)
  return `${maskedLocal}@${domain}`
})

const isCodeComplete = computed(() => {
  return verificationCode.value.every(digit => digit !== '')
})

// Methods
const handleInput = (index, event) => {
  const value = event.target.value
  if (value && index < 5) {
    codeInputs.value[index + 1]?.focus()
  }
}

const handleKeydown = (index, event) => {
  if (event.key === 'Backspace' && !verificationCode.value[index] && index > 0) {
    codeInputs.value[index - 1]?.focus()
  }
}

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

const startTimer = () => {
  timer.value = setInterval(() => {
    if (timeRemaining.value > 0) {
      timeRemaining.value--
    } else {
      clearInterval(timer.value)
    }
  }, 1000)
}

const handleConfirmation = async () => {
  const code = verificationCode.value.join('')
  
  isLoading.value = true
  try {
    // Aquí iría la lógica de verificación
    console.log('Password reset verification code:', code)
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 2000))
     router.push('/olvidePassword/cambiarPassword')
    // Redirigir a nueva contraseña
    console.log('Redirecting to new password page')
   
  } catch (error) {
    console.error('Verification error:', error)
    alert('Código incorrecto. Inténtalo de nuevo.')
    verificationCode.value = ['', '', '', '', '', '']
    codeInputs.value[0]?.focus()
  } finally {
    isLoading.value = false
  }
}

const resendCode = async () => {
  isResending.value = true
  try {
    console.log('Resending password reset code to:', email.value)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    timeRemaining.value = 600
    startTimer()
    
    verificationCode.value = ['', '', '', '', '', '']
    codeInputs.value[0]?.focus()
    
    alert('Código reenviado exitosamente')
  } catch (error) {
    console.error('Resend error:', error)
  } finally {
    isResending.value = false
  }
}

const goToLogin = () => {
  console.log('Navigate to login')
  router.push('/inicioSesion')
}

onMounted(() => {
  startTimer()
  codeInputs.value[0]?.focus()
})

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value)
  }
})
</script>