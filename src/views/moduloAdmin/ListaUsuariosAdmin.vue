<template>
  <div class="flex h-screen">
    <SidebarAdmin />
    <div class="flex-1 p-6">
      <div class="flex"></div>

      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">
          Gestión de Usuarios
        </h1>
        <p class="text-gray-600">
          Administra todos los usuarios registrados en la plataforma
        </p>
      </div>

      <!-- Barra de busqueda y filtros -->
      <div
        class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6"
      >
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <input
              v-model="searchTerm"
              type="text"
              placeholder="Buscar usuarios..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            v-model="statusFilter"
            class="pr-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Todos los estados</option>
            <option value="active">Activos</option>
            <option value="suspended">Suspendidos</option>
          </select>
          <select
            v-model="typeFilter"
            class="pr-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Todos los tipos</option>
            <option value="student">Estudiantes</option>
            <option value="company">Empresas</option>
          </select>
        </div>
      </div>

      <!-- Tabla de usuarios -->
      <div
        class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
      >
        <div class="overflow-x-auto">
          <table class="w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Usuario
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tipo
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Estado
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Registro
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Último acceso
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                v-for="user in filteredUsers"
                :key="user.id"
                class="hover:bg-gray-50 cursor-pointer"
                @click="openUserModal(user)"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <div
                        class="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center"
                      >
                        <svg
                          class="h-6 w-6 text-gray-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ user.name }}
                      </div>
                      <div class="text-sm text-gray-500">{{ user.email }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    :class="[
                      'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                      user.type === 'student'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800',
                    ]"
                  >
                    {{ user.type === "student" ? "Estudiante" : "Empresa" }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    :class="[
                      'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                      user.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800',
                    ]"
                  >
                    {{ user.status === "active" ? "Activo" : "Suspendido" }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ formatDate(user.createdAt) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {{ formatDate(user.lastLogin) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    @click.stop="openUserModal(user)"
                    class="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    Ver detalles
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Modal de detalle de usuario -->
      <div
        v-if="showModal"
        class="pt-24 fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
        @click="closeModal"
      >
        <div
          class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white"
          @click.stop
        >
          <!-- Modal Header -->
          <div class="flex items-center justify-between pb-4 border-b">
            <h3 class="text-lg font-semibold text-gray-900">
              Detalles del Usuario
            </h3>
            <button
              @click="closeModal"
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

          <div v-if="selectedUser" class="mt-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Informacion del usuario -->
              <div>
                <h4 class="text-md font-semibold text-gray-900 mb-3">
                  Información Personal
                </h4>
                <div class="space-y-3">
                  <div>
                    <label class="text-sm font-medium text-gray-500"
                      >Nombre completo</label
                    >
                    <p id="user-name" class="text-sm text-gray-900">
                      {{ selectedUser.name }}
                    </p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500"
                      >Email</label
                    >
                    <p id="user-email" class="text-sm text-gray-900">
                      {{ selectedUser.email }}
                    </p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500"
                      >Teléfono</label
                    >
                    <p id="user-phone" class="text-sm text-gray-900">
                      {{ selectedUser.phone || "No especificado" }}
                    </p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500"
                      >Tipo de usuario</label
                    >
                    <p id="user-type" class=" text-sm text-gray-900">
                      {{
                        selectedUser.type === "student"
                          ? "Estudiante"
                          : "Empresa"
                      }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Informacion de la cuenta -->
              <div>
                <h4 class="text-md font-semibold text-gray-900 mb-3">
                  Información de Cuenta
                </h4>
                <div class="space-y-3">
                  <div>
                    <label class="text-sm font-medium text-gray-500"
                      >Estado</label
                    >
                    <p class="text-sm">
                      <span
                        :class="[
                          'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                          selectedUser.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800',
                        ]"
                      >
                        {{
                          selectedUser.status === "active"
                            ? "Activo"
                            : "Suspendido"
                        }}
                      </span>
                    </p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500"
                      >Fecha de registro</label
                    >
                    <p class="text-sm text-gray-900">
                      {{ formatDate(selectedUser.createdAt) }}
                    </p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500"
                      >Último acceso</label
                    >
                    <p class="text-sm text-gray-900">
                      {{ formatDate(selectedUser.lastLogin) }}
                    </p>
                  </div>
                  <div v-if="selectedUser.type === 'student'">
                    <label class="text-sm font-medium text-gray-500"
                      >Postulaciones</label
                    >
                    <p class="text-sm text-gray-900">
                      {{ selectedUser.applications || 0 }}
                    </p>
                  </div>
                  <div v-if="selectedUser.type === 'company'">
                    <label class="text-sm font-medium text-gray-500"
                      >Ofertas publicadas</label
                    >
                    <p class="text-sm text-gray-900">
                      {{ selectedUser.jobOffers || 0 }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- botones de accion -->
            <div class="mt-6 pt-4 border-t flex flex-wrap gap-3">
              <button
                v-if="!isEditing"
                @click="editUser(selectedUser)"
                class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Editar Usuario
              </button>
              <button
                v-if="isEditing"
                @click="saveUserEdits"
                class="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Guardar Cambios
              </button>
              <button
                @click="toggleUserStatus(selectedUser)"
                :class="[
                  'px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2',
                  selectedUser.status === 'active'
                    ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
                    : 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
                ]"
              >
                {{
                  selectedUser.status === "active"
                    ? "Suspender Usuario"
                    : "Activar Usuario"
                }}
              </button>
              <!--  <button
                @click="resetPassword(selectedUser)"
                class="px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Resetear Contraseña
              </button> -->
              <!-- <button
                @click="viewUserActivity(selectedUser)"
                class="px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Ver Actividad
              </button>  -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarAdmin from "@/components/SidebarAdmin.vue";
import { ref, computed, onMounted } from "vue";

export default {
  name: "AdminUsersList",
  components: {
    SidebarAdmin,
  },
  setup() {
    const users = ref([]);
    const searchTerm = ref("");
    const statusFilter = ref("");
    const typeFilter = ref("");
    const showModal = ref(false);
    const selectedUser = ref(null);
    const isEditing = ref(false);

    // Sample data
    const sampleUsers = [
      {
        id: 1,
        name: "Juan Pérez González",
        email: "juan.perez@ufrontera.cl",
        phone: "+56 9 8765 4321",
        type: "student",
        status: "active",
        createdAt: "2024-01-15",
        lastLogin: "2024-04-20",
        applications: 5,
      },
      {
        id: 2,
        name: "Western Digital SPA",
        email: "rrhh@westerndigital.com",
        phone: "+56 9 1234 5678",
        type: "company",
        status: "active",
        createdAt: "2024-02-10",
        lastLogin: "2024-04-19",
        jobOffers: 12,
      },
      {
        id: 3,
        name: "María González Silva",
        email: "maria.gonzalez@ufrontera.cl",
        phone: "+56 9 9876 5432",
        type: "student",
        status: "suspended",
        createdAt: "2024-03-05",
        lastLogin: "2024-04-10",
        applications: 2,
      },
      {
        id: 4,
        name: "TechCorp Ltda",
        email: "contacto@techcorp.cl",
        phone: "+56 2 2345 6789",
        type: "company",
        status: "active",
        createdAt: "2024-03-20",
        lastLogin: "2024-04-18",
        jobOffers: 8,
      },
    ];

    const filteredUsers = computed(() => {
      return users.value.filter((user) => {
        const matchesSearch =
          user.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.value.toLowerCase());
        const matchesStatus =
          !statusFilter.value || user.status === statusFilter.value;
        const matchesType = !typeFilter.value || user.type === typeFilter.value;

        return matchesSearch && matchesStatus && matchesType;
      });
    });

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("es-CL", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    const openUserModal = (user) => {
      selectedUser.value = user;
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
      selectedUser.value = null;
    };

    const editUser = (user) => {
      isEditing.value = true;
      setTimeout(() => {
        // Cambia los campos a inputs
        const fields = [
          { selector: "#user-name", value: user.name },
          { selector: "#user-email", value: user.email },
          { selector: "#user-phone", value: user.phone || "" },
          { selector: "#user-type", value: user.type },
        ];
        fields.forEach((field) => {
          const el = document.querySelector(field.selector);
          if (el) {
            if (field.selector === "#user-type") {
              // Cambia a select
              const select = document.createElement("select");
              select.className =
                "text-sm text-gray-900 border rounded px-2 py-1 w-full";
              ["student", "company"].forEach((type) => {
                const option = document.createElement("option");
                option.value = type;
                option.textContent = type === "student" ? "Estudiante" : "Empresa";
                if (type === field.value) {
                  option.selected = true;
                }
                select.appendChild(option);
              });
              el.innerHTML = "";
              el.appendChild(select);
            } else {
              // Cambia a input
              const input = document.createElement("input");
              input.type = "text";
              input.value = field.value;
              input.className =
                "text-sm text-gray-900 border rounded px-2 py-1 w-full";
              el.innerHTML = "";
              el.appendChild(input);
            }
          }
        });
      }, 0);
    };
    const toggleUserStatus = (user) => {
      const newStatus = user.status === "active" ? "suspended" : "active";
      const action = newStatus === "active" ? "activar" : "suspender";

      if (confirm(`¿Estás seguro de que quieres ${action} a ${user.name}?`)) {
        user.status = newStatus;
        alert(
          `Usuario ${
            newStatus === "active" ? "activado" : "suspendido"
          } exitosamente`
        );
      }
    };

    const resetPassword = (user) => {
      if (
        confirm(
          `¿Estás seguro de que quieres resetear la contraseña de ${user.name}?`
        )
      ) {
        alert("Contraseña reseteada. Se ha enviado un email al usuario.");
      }
    };
    const saveUserEdits = () => {
      // Obtén los valores de los inputs
      const nameInput = document.querySelector("#user-name input");
      const emailInput = document.querySelector("#user-email input");
      const phoneInput = document.querySelector("#user-phone input");
      if (selectedUser.value && nameInput && emailInput && phoneInput) {
        selectedUser.value.name = nameInput.value;
        selectedUser.value.email = emailInput.value;
        selectedUser.value.phone = phoneInput.value;
      }
      isEditing.value = false;
    };

    const viewUserActivity = (user) => {
      alert(`Ver actividad de: ${user.name}`);
      // Implementar vista de actividad
    };

    onMounted(() => {
      users.value = sampleUsers;
    });

    return {
      users,
      searchTerm,
      statusFilter,
      typeFilter,
      showModal,
      selectedUser,
      filteredUsers,
      formatDate,
      openUserModal,
      closeModal,
      editUser,
      toggleUserStatus,
      resetPassword,
      viewUserActivity,
    };
  },
};
</script>
