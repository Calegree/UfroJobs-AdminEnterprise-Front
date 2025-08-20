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
            ¡Bienvenido a UFRO Laboral!
          </h2>
          <p class="text-xl text-blue-100 leading-relaxed">
            Tu cuenta ha sido creada exitosamente. Ahora puedes comenzar a
            publicar ofertas laborales y conectar con el mejor talento
            universitario.
          </p>
        </div>

        <!-- Next Steps -->
        <div>
          <h3 class="text-2xl font-semibold mb-6">Próximos pasos</h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div
                class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold"
              >
                1
              </div>
              <span class="text-lg">Completa tu perfil empresarial</span>
            </div>
            <div class="flex items-center space-x-3">
              <div
                class="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm font-bold"
              >
                2
              </div>
              <span class="text-lg">Publica tu primera oferta laboral</span>
            </div>
            <div class="flex items-center space-x-3">
              <div
                class="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm font-bold"
              >
                3
              </div>
              <span class="text-lg">Explora candidatos disponibles</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-blue-200 text-sm">
        <p>© 2024 Universidad de La Frontera. Todos los derechos reservados.</p>
      </div>
    </div>

    <!-- Right Side - Success Content -->
    <div
      class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50"
    >
      <div class="w-full max-w-md text-center">
        <!-- Mobile Logo -->
        <div class="lg:hidden flex items-center justify-center space-x-3 mb-8">
          <div class="bg-blue-600 text-white p-3 rounded-lg">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
              />
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-gray-900">UFRO Laboral</h1>
        </div>

        <!-- Success Animation -->
        <div class="mb-8">
          <div
            class="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse"
          >
            <svg
              class="w-12 h-12 text-green-600"
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
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            ¡Registro Exitoso!
          </h2>
          <p class="text-lg text-gray-600 mb-6">
            Tu cuenta empresarial ha sido creada y verificada correctamente.
          </p>
        </div>

        <!-- Account Details -->
        <div
          class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8"
        >
          <h3 class="text-lg font-semibold text-gray-900 mb-4">
            Detalles de tu cuenta
          </h3>
          <div class="space-y-3 text-left">
            <div class="flex justify-between">
              <span class="text-gray-600">Empresa:</span>
              <span class="font-medium text-gray-900">Western Digital</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Email:</span>
              <span class="font-medium text-gray-900"
                >ruben02.wd@westerndigital.com</span
              >
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Estado:</span>
              <span
                class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
              >
                Verificado
              </span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Fecha de registro:</span>
              <span class="font-medium text-gray-900">{{
                formatDate(new Date())
              }}</span>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="space-y-4">
          <button
            @click="goToDashboard"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-log-in-icon lucide-log-in"
            >
              <path d="m10 17 5-5-5-5" />
              <path d="M15 12H3" />
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            </svg>
            <span>Iniciar sesión</span>
          </button>
          <!-- 
          <button 
            @click="completeProfile"
            class="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <span>Completar Perfil</span>
          </button>
          
          <button 
            @click="createFirstJob"
            class="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            <span>Crear Primera Oferta</span>
          </button>
          -->

          <!-- 
        <div class="mt-8 p-4 bg-blue-50 rounded-lg">
          <h4 class="font-semibold text-blue-900 mb-2">¿Necesitas ayuda?</h4>
          <p class="text-sm text-blue-700 mb-3">
            Nuestro equipo está aquí para ayudarte a aprovechar al máximo la plataforma.
          </p>
          <div class="flex space-x-3">
            <button 
              @click="openGuide"
              class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm font-medium transition-colors"
            >
              Guía de inicio
            </button>
            <button 
              @click="contactSupport"
              class="flex-1 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 py-2 px-3 rounded text-sm font-medium transition-colors"
            >
              Contactar soporte
            </button>
          </div>
        </div>
            Help Section -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
// Methods
const formatDate = (date) => {
  return date.toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const goToDashboard = () => {
  console.log("Navigate to dashboard");
  router.push('/inicioSesion');
};

const completeProfile = () => {
  console.log("Navigate to profile completion");
  // Aquí iría la navegación al perfil
};

const createFirstJob = () => {
  console.log("Navigate to job creation");
  // Aquí iría la navegación a crear oferta
};

const openGuide = () => {
  console.log("Open user guide");
  // Aquí iría la lógica para abrir la guía
};

const contactSupport = () => {
  console.log("Contact support");
  // Aquí iría la lógica para contactar soporte
};
</script>
