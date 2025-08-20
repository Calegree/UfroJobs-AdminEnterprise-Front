<template>
  <div class="min-h-screen flex">
    <!-- Left Side - Information Panel -->
    <div
      class="hidden lg:flex lg:w-1/2 bg-blue-600 text-white p-12 flex-col justify-between"
    >
      <div>
        <!-- Logo and Header -->
        <div class="flex items-center space-x-3 mb-12">
          <div class="bg-white text-blue-600 p-3 rounded-lg">
            <!-- Logo igual al de Navbar -->
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
            Bienvenido a la plataforma laboral de la Universidad de La Frontera
          </h2>
          <p class="text-xl text-blue-100 leading-relaxed">
            Conectamos a estudiantes y egresados con las mejores oportunidades
            laborales y prácticas profesionales.
          </p>
        </div>

        <!-- Benefits Section -->
        <div>
          <h3 class="text-2xl font-semibold mb-6">
            ¿Por qué unirte a UFRO Laboral?
          </h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <svg
                class="w-6 h-6 text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span class="text-lg"
                >Accede a ofertas exclusivas para la comunidad UFRO</span
              >
            </div>
            <div class="flex items-center space-x-3">
              <svg
                class="w-6 h-6 text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span class="text-lg"
                >Conecta con empresas que buscan específicamente tu perfil</span
              >
            </div>
            <div class="flex items-center space-x-3">
              <svg
                class="w-6 h-6 text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span class="text-lg"
                >Recibe notificaciones personalizadas según tus intereses</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-blue-200 text-sm">
        <p>© 2025 Universidad de La Frontera. Todos los derechos reservados.</p>
      </div>
    </div>

    <!-- Right Side - Login Form -->
    <div
      class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50"
    >
      <div class="w-full max-w-md">
        <!-- Mobile Logo -->
        <div class="lg:hidden flex items-center justify-center space-x-3 mb-8">
          <div class="bg-blue-600 text-white p-3 rounded-lg">
            <!-- Logo igual al de Navbar -->
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
          <h1 class="text-2xl font-bold text-gray-900">UFRO Laboral</h1>
        </div>

        <!-- Form Header -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">
            Accede a tu cuenta
          </h2>
          <p class="text-gray-600">
            Ingresa tus credenciales para iniciar sesión
          </p>
        </div>

        <!-- 
        <div class="flex mb-8 bg-gray-200 rounded-lg p-1">
          <button 
            @click="userType = 'student'"
            :class="userType === 'student' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'"
            class="flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200"
          >
            Estudiante
          </button>
          <button 
            @click="userType = 'company'"
            :class="userType === 'company' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'"
            class="flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200"
          >
            Empresa
          </button>
        </div>
User Type Tabs -->
        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email Field -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              {{
                userType === "student"
                  ? "Correo institucional"
                  : "Correo empresarial"
              }}
            </label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5 text-gray-400"
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
              </div>
              <input
                v-model="loginForm.email"
                type="email"
                required
                :placeholder="
                  userType === 'student'
                    ? 'c.iturra@ufromail.cl'
                    : 'contacto@empresa.com'
                "
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <!-- Password Field -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Contraseña</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                v-model="loginForm.password"
                :type="showPassword ? 'text' : 'password'"
                required
                placeholder="••••••••"
                class="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg
                  v-if="showPassword"
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                  />
                </svg>
                <svg
                  v-else
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Forgot Password Link -->
          <div class="flex justify-end">
            <button
              type="button"
              @click="goToForgotPassword"
              class="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              ¿Olvidó su clave?
            </button>
          </div>

          <!-- Login Button -->
          <button
            type="button"
            :disabled="isLoading"
            @click="handleLogin"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <svg
              v-if="isLoading"
              class="animate-spin h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            <span>{{
              isLoading ? "Iniciando sesión..." : "Iniciar Sesión"
            }}</span>
          </button>
        </form>

        <!-- Divider -->
        <div class="my-8">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-gray-50 text-gray-500">O CONTINÚA CON</span>
            </div>
          </div>
        </div>

        <!-- Google Login -->
        <button
          @click="loginWithGoogle"
          class="w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-3"
        >
          Iniciar sesión con Google
        </button>

        <!-- Register Link -->
        <div class="mt-8 text-center">
          <p class="text-gray-600">
            ¿No tienes una cuenta?
            <button
              @click="goToRegister"
              class="text-blue-600 hover:text-blue-800 font-medium"
            >
              Regístrate aquí
            </button>
          </p>
        </div>

        <!-- Terms and Privacy -->
        <div class="mt-6 text-center text-xs text-gray-500">
          Al iniciar sesión, aceptas nuestros
          <a href="#" class="text-blue-600 hover:text-blue-800"
            >Términos y Condiciones</a
          >
          y
          <a href="#" class="text-blue-600 hover:text-blue-800"
            >Política de Privacidad</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const userType = ref("company");
const showPassword = ref(false);
const isLoading = ref(false);

const loginForm = ref({
  email: "",
  password: "",
});

// Métodos
const handleLogin = async () => {
  isLoading.value = true;
  try {
    // Aquí iría la lógica de autenticación real
    // Simular delay de API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirigir al dashboard de admin
    router.push('/admin/dashboard');
  } catch (error) {
    console.error("Login error:", error);
  } finally {
    isLoading.value = false;
  }
};

const loginWithGoogle = () => {
  // Redirigir a la lista de ofertas de empresa
  router.push('/empresa/listaOfertas');
};
</script>
