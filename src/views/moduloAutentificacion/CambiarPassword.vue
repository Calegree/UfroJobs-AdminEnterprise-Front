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
            Crea una nueva contraseña
          </h2>
          <p class="text-xl text-blue-100 leading-relaxed">
            Tu identidad ha sido verificada. Ahora puedes establecer una nueva contraseña segura para tu cuenta empresarial.
          </p>
        </div>

        <!-- Security Tips -->
        <div>
          <h3 class="text-2xl font-semibold mb-6">Consejos de seguridad</h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg">Usa al menos 8 caracteres</span>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg">Combina letras, números y símbolos</span>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg">Evita información personal</span>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-lg">No reutilices contraseñas anteriores</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-blue-200 text-sm">
        <p>© 2025 Universidad de La Frontera. Todos los derechos reservados.</p>
      </div>
    </div>

    <!-- Right Side - New Password Form -->
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
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Nueva contraseña</h2>
          <p class="text-gray-600">
            Crea una contraseña segura para proteger tu cuenta
          </p>
        </div>

        <!-- New Password Form -->
        <form @submit.prevent="handlePasswordReset" class="space-y-6">
          <!-- New Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              Nueva contraseña
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <input 
                v-model="newPassword"
                :type="showNewPassword ? 'text' : 'password'"
                required
                placeholder="••••••••"
                class="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
              <button 
                type="button"
                @click="showNewPassword = !showNewPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg v-if="showNewPassword" class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"/>
                </svg>
                <svg v-else class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>
            </div>
            
            <!-- Password Strength Indicator -->
            <div class="mt-2">
              <div class="flex items-center space-x-2 mb-2">
                <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    :class="passwordStrengthClass"
                    :style="{ width: `${passwordStrength}%` }"
                    class="h-full transition-all duration-300"
                  ></div>
                </div>
                <span :class="passwordStrengthTextClass" class="text-xs font-medium">
                  {{ passwordStrengthText }}
                </span>
              </div>
            </div>
          </div>

          <!-- Confirm Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              Confirmar contraseña
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <input 
                v-model="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                required
                placeholder="••••••••"
                class="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
              <button 
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg v-if="showConfirmPassword" class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"/>
                </svg>
                <svg v-else class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>
            </div>
            
            <!-- Password Match Indicator -->
            <div v-if="confirmPassword" class="mt-2 flex items-center space-x-2">
              <svg v-if="passwordsMatch" class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <svg v-else class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
              <span :class="passwordsMatch ? 'text-green-600' : 'text-red-600'" class="text-sm">
                {{ passwordsMatch ? 'Las contraseñas coinciden' : 'Las contraseñas no coinciden' }}
              </span>
            </div>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit"
            :disabled="!canSubmit || isLoading"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <svg v-if="isLoading" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span>{{ isLoading ? 'Actualizando...' : 'Actualizar contraseña' }}</span>
          </button>
        </form>

        <!-- Success Message -->
        <div v-if="passwordUpdated" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div class="flex items-center space-x-3">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <div>
              <h4 class="font-medium text-green-900">¡Contraseña actualizada!</h4>
              <p class="text-sm text-green-700">
                Tu contraseña ha sido cambiada exitosamente. Serás redirigido al inicio de sesión.
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

// Reactive data
const newPassword = ref('')
const confirmPassword = ref('')
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)
const isLoading = ref(false)
const passwordUpdated = ref(false)

// Computed properties
const passwordStrength = computed(() => {
  const password = newPassword.value
  let strength = 0
  
  if (password.length >= 8) strength += 25
  if (/[a-z]/.test(password)) strength += 25
  if (/[A-Z]/.test(password)) strength += 25
  if (/[0-9]/.test(password)) strength += 12.5
  if (/[^A-Za-z0-9]/.test(password)) strength += 12.5
  
  return Math.min(strength, 100)
})

const passwordStrengthClass = computed(() => {
  if (passwordStrength.value < 25) return 'bg-red-500'
  if (passwordStrength.value < 50) return 'bg-yellow-500'
  if (passwordStrength.value < 75) return 'bg-blue-500'
  return 'bg-green-500'
})

const passwordStrengthText = computed(() => {
  if (passwordStrength.value < 25) return 'Débil'
  if (passwordStrength.value < 50) return 'Regular'
  if (passwordStrength.value < 75) return 'Buena'
  return 'Fuerte'
})

const passwordStrengthTextClass = computed(() => {
  if (passwordStrength.value < 25) return 'text-red-600'
  if (passwordStrength.value < 50) return 'text-yellow-600'
  if (passwordStrength.value < 75) return 'text-blue-600'
  return 'text-green-600'
})

const passwordsMatch = computed(() => {
  return newPassword.value === confirmPassword.value && confirmPassword.value !== ''
})

const canSubmit = computed(() => {
  return newPassword.value.length >= 8 && passwordsMatch.value && passwordStrength.value >= 50
})

// Methods
const handlePasswordReset = async () => {
  if (newPassword.value !== confirmPassword.value) {
    alert('Las contraseñas no coinciden.');
    return;
  }

  // Aquí puedes agregar validaciones adicionales si lo deseas

  // Simular delay de API (puedes quitar esto si tienes backend)
  isLoading.value = true;
  try {
    // Aquí iría la lógica para actualizar la contraseña en el backend
    // await api.updatePassword(newPassword.value);

    // Mostrar mensaje de éxito y redirigir
    alert('Se ha cambiado tu contraseña con éxito.');
    goToLogin();
  } catch (error) {
    alert('Error al actualizar la contraseña. Inténtalo de nuevo.');
  } finally {
    isLoading.value = false;
  }
}

const goToLogin = () => {
  console.log('Navigate to login')
  router.push('/inicioSesion')
}
</script>