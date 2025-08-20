<template>

    <div class="flex  h-screen">
      <SidebarAdmin />

      <div class="flex-1 p-6">
        <!-- Header -->
        <div class="mb-6">
          <h1 class="text-2xl font-bold text-gray-900 mb-2">
            Gestión de Empresas
          </h1>
          <p class="text-gray-600">
            Administra todas las empresas registradas en la plataforma
          </p>
        </div>

        <!-- Filters and Search -->
        <div
          class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6"
        >
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
              <input
                v-model="searchTerm"
                type="text"
                placeholder="Buscar empresas..."
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              v-model="statusFilter"
              class="pr-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todos los estados</option>
              <option value="active">Activas</option>
              <option value="suspended">Suspendidas</option>
              <option value="pending">Pendientes</option>
            </select>
            <select
              v-model="industryFilter"
              class="pr-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todas las industrias</option>
              <option value="technology">Tecnología</option>
              <option value="finance">Finanzas</option>
              <option value="healthcare">Salud</option>
              <option value="education">Educación</option>
            </select>
          </div>
        </div>

        <!-- Companies Table -->
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
                    Empresa
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Industria
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Estado
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Ofertas
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Registro
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
                  v-for="company in filteredCompanies"
                  :key="company.id"
                  class="hover:bg-gray-50 cursor-pointer"
                  @click="openCompanyModal(company)"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <div
                          class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center"
                        >
                          <svg
                            class="h-6 w-6 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 104 0 2 2 0 00-4 0zm8-2a2 2 0 11-4 0 2 2 0 014 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ company.name }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ company.email }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800"
                    >
                      {{ getIndustryLabel(company.industry) }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      :class="[
                        'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                        getStatusClass(company.status),
                      ]"
                    >
                      {{ getStatusLabel(company.status) }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {{ company.jobOffers }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {{ formatDate(company.createdAt) }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      @click.stop="openCompanyModal(company)"
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
      </div>
    </div>

    <!-- Company Detail Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
      @click="closeModal"
    >
      <div
        class="relative top-10 mx-auto p-5 border w-11/12 md:w-4/5 lg:w-3/4 shadow-lg rounded-md bg-white max-h-screen overflow-y-auto"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="flex items-center justify-between pb-4 border-b">
          <h3 class="text-lg font-semibold text-gray-900">
            Detalles de la Empresa
          </h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
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

        <!-- Modal Content -->
        <div v-if="selectedCompany" class="mt-4">
          <template v-if="modalView === 'details'">
            <!-- Aquí va TODO el contenido de detalles de la empresa (lo que ya tienes) -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <!-- Company Info -->
              <div class="lg:col-span-2">
                <h4 class="text-md font-semibold text-gray-900 mb-3">
                  Información de la Empresa
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="text-sm font-medium text-gray-500">Nombre de la empresa</label>
                    <p id="company-name" class="text-sm text-gray-900">{{ selectedCompany.name }}</p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500">RUT</label>
                    <p id="company-rut" class="text-sm text-gray-900">{{ selectedCompany.rut }}</p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500">Email</label>
                    <p id="company-email" class="text-sm text-gray-900">{{ selectedCompany.email }}</p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500">Teléfono</label>
                    <p id="company-phone" class="text-sm text-gray-900">{{ selectedCompany.phone }}</p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500">Industria</label>
                    <p id="company-industry" class="text-sm text-gray-900">{{ getIndustryLabel(selectedCompany.industry) }}</p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500">Tamaño</label>
                    <p id="company-size" class="text-sm text-gray-900">{{ selectedCompany.size }}</p>
                  </div>
                  <div class="md:col-span-2">
                    <label class="text-sm font-medium text-gray-500">Dirección</label>
                    <p id="company-address" class="text-sm text-gray-900">{{ selectedCompany.address }}</p>
                  </div>
                  <div class="md:col-span-2">
                    <label class="text-sm font-medium text-gray-500"
                      >Descripción</label
                    >
                    <p class="text-sm text-gray-900">
                      {{ selectedCompany.description }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Stats and Status -->
              <div>
                <h4 class="text-md font-semibold text-gray-900 mb-3">
                  Estado y Estadísticas
                </h4>
                <div class="space-y-4">
                  <div>
                    <label class="text-sm font-medium text-gray-500"
                      >Estado actual</label
                    >
                    <p class="text-sm">
                      <span
                        :class="[
                          'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                          getStatusClass(selectedCompany.status),
                        ]"
                      >
                        {{ getStatusLabel(selectedCompany.status) }}
                      </span>
                    </p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500"
                      >Fecha de registro</label
                    >
                    <p class="text-sm text-gray-900">
                      {{ formatDate(selectedCompany.createdAt) }}
                    </p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500"
                      >Último acceso</label
                    >
                    <p class="text-sm text-gray-900">
                      {{ formatDate(selectedCompany.lastLogin) }}
                    </p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500"
                      >Ofertas publicadas</label
                    >
                    <p class="text-sm text-gray-900">
                      {{ selectedCompany.jobOffers }}
                    </p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500"
                      >Postulaciones recibidas</label
                    >
                    <p class="text-sm text-gray-900">
                      {{ selectedCompany.applications }}
                    </p>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-500"
                      >Contrataciones</label
                    >
                    <p class="text-sm text-gray-900">
                      {{ selectedCompany.hires }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Documents Section -->
            <div class="mt-6 pt-4 border-t">
              <h4 class="text-md font-semibold text-gray-900 mb-3">Documentos</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  v-for="doc in selectedCompany.documents"
                  :key="doc.id"
                  class="border border-gray-200 rounded-lg p-3"
                >
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm font-medium text-gray-900">
                        {{ doc.name }}
                      </p>
                      <p class="text-xs text-gray-500">
                        {{ doc.type }} • {{ doc.size }}
                      </p>
                    </div>
                    <button class="text-blue-600 hover:text-blue-800">
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
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="mt-6 pt-4 border-t flex flex-wrap gap-3">
              <button
                v-if="!isEditing"
                @click="editCompany(selectedCompany)"
                class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Editar Empresa
              </button>
              <button
                v-if="isEditing"
                @click="saveCompanyEdits"
                class="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Guardar Cambios
              </button>
              <button
                @click="toggleCompanyStatus(selectedCompany)"
                :class="[
                  'px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2',
                  selectedCompany.status === 'active'
                    ? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
                    : 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
                ]"
              >
                {{
                  selectedCompany.status === "active"
                    ? "Suspender Empresa"
                    : "Activar Empresa"
                }}
              </button>
              <button
                @click="viewCompanyOffers(selectedCompany)"
                class="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Ver Ofertas ({{ selectedCompany.jobOffers }})
              </button>
            <!--   <button
              @click="sendMessage(selectedCompany)"
              class="px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Enviar Mensaje
            </button> -->
            </div>
          </template>
          <template v-else-if="modalView === 'offers'">
            <h4 class="text-lg font-semibold mb-4">Ofertas de {{ selectedCompany.name }}</h4>
            <div class="overflow-x-auto">
              <table class="w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Título</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Ubicación</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Postulantes</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="offer in selectedCompany.jobOffersList"
                    :key="offer.id"
                    class="hover:bg-blue-50 cursor-pointer"
                    @click="goToOfferDetail(offer)"
                  >
                    <td class="px-4 py-2 whitespace-nowrap">{{ offer.title }}</td>
                    <td class="px-4 py-2 whitespace-nowrap">{{ offer.location }}</td>
                    <td class="px-4 py-2 whitespace-nowrap">{{ offer.date }}</td>
                    <td class="px-4 py-2 whitespace-nowrap">{{ offer.type }}</td>
                    <td class="px-4 py-2 whitespace-nowrap">{{ offer.applicants }}</td>
                    <td class="px-4 py-2 whitespace-nowrap">{{ offer.status }}</td>
                  </tr>
                  <tr v-if="!selectedCompany.jobOffersList || selectedCompany.jobOffersList.length === 0">
                    <td colspan="6" class="px-4 py-2 text-center text-gray-500">Sin ofertas registradas</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              class="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              @click="modalView = 'details'"
            >
              Volver a Detalles
            </button>
          </template>
        </div>
      </div>
    </div>

</template>

<script>
import SidebarAdmin from "@/components/SidebarAdmin.vue";
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "AdminCompaniesList",
  components: {
    SidebarAdmin,
  },
  setup() {
    const companies = ref([]);
    const searchTerm = ref("");
    const statusFilter = ref("");
    const industryFilter = ref("");
    const showModal = ref(false);
    const selectedCompany = ref(null);
    const isEditing = ref(false);
    const modalView = ref("details"); // <-- NUEVO
    const router = useRouter();

    // Sample data
    const sampleCompanies = [
      {
        id: 1,
        name: "Western Digital SPA",
        email: "rrhh@westerndigital.com",
        phone: "+56 9 1234 5678",
        rut: "76.123.456-7",
        industry: "technology",
        size: "1000-5000 empleados",
        address: "Av. Providencia 1234, Santiago",
        description: "Líder mundial en soluciones de almacenamiento de datos.",
        status: "active",
        createdAt: "2024-02-10",
        lastLogin: "2024-04-19",
        jobOffers: 12,
        applications: 156,
        hires: 8,
        documents: [
          { id: 1, name: "Certificado de Constitución", type: "PDF", size: "2.4 MB" },
          { id: 2, name: "RUT Empresarial", type: "PDF", size: "1.2 MB" },
          { id: 3, name: "Certificado Tributario", type: "PDF", size: "890 KB" },
        ],
        jobOffersList: [
          {
            id: 101,
            title: "Desarrollador Frontend",
            location: "Santiago",
            date: "2024-05-01",
            type: "Tiempo completo",
            applicants: 34,
            status: "Abierta",
          },
          {
            id: 102,
            title: "Ingeniero DevOps",
            location: "Remoto",
            date: "2024-04-15",
            type: "Tiempo completo",
            applicants: 21,
            status: "Abierta",
          },
        ],
      },
      {
        id: 2,
        name: "TechCorp Ltda",
        email: "contacto@techcorp.cl",
        phone: "+56 2 2345 6789",
        rut: "76.987.654-3",
        industry: "technology",
        size: "50-200 empleados",
        address: "Av. Las Condes 5678, Santiago",
        description: "Empresa de desarrollo de software y consultoría tecnológica.",
        status: "active",
        createdAt: "2024-03-20",
        lastLogin: "2024-04-18",
        jobOffers: 8,
        applications: 89,
        hires: 5,
        documents: [
          { id: 1, name: "Certificado de Constitución", type: "PDF", size: "1.8 MB" },
          { id: 2, name: "RUT Empresarial", type: "PDF", size: "950 KB" },
        ],
        jobOffersList: [
          {
            id: 201,
            title: "QA Automation",
            location: "Temuco",
            date: "2024-03-28",
            type: "Medio tiempo",
            applicants: 12,
            status: "Cerrada",
          },
          {
            id: 202,
            title: "Project Manager",
            location: "Santiago",
            date: "2024-04-10",
            type: "Tiempo completo",
            applicants: 18,
            status: "Abierta",
          },
        ],
      },
      {
        id: 3,
        name: "FinanceGroup SPA",
        email: "rrhh@financegroup.cl",
        phone: "+56 2 3456 7890",
        rut: "76.555.444-1",
        industry: "finance",
        size: "200-500 empleados",
        address: "Av. Apoquindo 9876, Las Condes",
        description: "Servicios financieros y consultoría empresarial.",
        status: "suspended",
        createdAt: "2024-01-15",
        lastLogin: "2024-04-05",
        jobOffers: 3,
        applications: 45,
        hires: 2,
        documents: [
          {
            id: 1,
            name: "Certificado de Constitución",
            type: "PDF",
            size: "2.1 MB",
          },
        ],
      },
    ];

    const filteredCompanies = computed(() => {
      return companies.value.filter((company) => {
        const matchesSearch =
          company.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          company.email.toLowerCase().includes(searchTerm.value.toLowerCase());
        const matchesStatus =
          !statusFilter.value || company.status === statusFilter.value;
        const matchesIndustry =
          !industryFilter.value || company.industry === industryFilter.value;

        return matchesSearch && matchesStatus && matchesIndustry;
      });
    });

    const getIndustryLabel = (industry) => {
      const labels = {
        technology: "Tecnología",
        finance: "Finanzas",
        healthcare: "Salud",
        education: "Educación",
      };
      return labels[industry] || industry;
    };

    const getStatusLabel = (status) => {
      const labels = {
        active: "Activa",
        suspended: "Suspendida",
        pending: "Pendiente",
      };
      return labels[status] || status;
    };

    const getStatusClass = (status) => {
      const classes = {
        active: "bg-green-100 text-green-800",
        suspended: "bg-red-100 text-red-800",
        pending: "bg-yellow-100 text-yellow-800",
      };
      return classes[status] || "bg-gray-100 text-gray-800";
    };

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("es-CL", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    const openCompanyModal = (company) => {
      selectedCompany.value = company;
      showModal.value = true;
      modalView.value = "details"; // Siempre inicia en detalles
    };

    const closeModal = () => {
      showModal.value = false;
      selectedCompany.value = null;
      modalView.value = "details";
    };

    const editCompany = (company) => {
      isEditing.value = true;
      setTimeout(() => {
        const fields = [
          { selector: "#company-name", value: company.name },
          { selector: "#company-email", value: company.email },
          { selector: "#company-industry", value: company.industry },
          { selector: "#company-address", value: company.address },
          { selector: "#company-rut", value: company.rut },
          { selector: "#company-phone", value: company.phone },
          { selector: "#company-size", value: company.size },
        ];
        fields.forEach((field) => {
          const el = document.querySelector(field.selector);
          if (el) {
            if (field.selector === "#company-industry") {
              // Select para industria
              const select = document.createElement("select");
              select.className = "text-sm text-gray-900 border rounded px-2 py-1 w-full";
              [
                { value: "technology", label: "Tecnología" },
                { value: "finance", label: "Finanzas" },
                { value: "healthcare", label: "Salud" },
                { value: "education", label: "Educación" },
              ].forEach((opt) => {
                const option = document.createElement("option");
                option.value = opt.value;
                option.textContent = opt.label;
                if (opt.value === field.value) option.selected = true;
                select.appendChild(option);
              });
              el.innerHTML = "";
              el.appendChild(select);
            } else {
              // Input para los demás
              const input = document.createElement("input");
              input.type = "text";
              input.value = field.value;
              input.className = "text-sm text-gray-900 border rounded px-2 py-1 w-full";
              el.innerHTML = "";
              el.appendChild(input);
            }
          }
        });
      }, 0);
    };

    const saveCompanyEdits = () => {
      const nameInput = document.querySelector("#company-name input");
      const emailInput = document.querySelector("#company-email input");
      const industrySelect = document.querySelector("#company-industry select");
      const addressInput = document.querySelector("#company-address input");
      const rutInput = document.querySelector("#company-rut input");
      const phoneInput = document.querySelector("#company-phone input");
      const sizeInput = document.querySelector("#company-size input");
      if (
        selectedCompany.value &&
        nameInput &&
        emailInput &&
        industrySelect &&
        addressInput &&
        rutInput &&
        phoneInput &&
        sizeInput
      ) {
        selectedCompany.value.name = nameInput.value;
        selectedCompany.value.email = emailInput.value;
        selectedCompany.value.industry = industrySelect.value;
        selectedCompany.value.address = addressInput.value;
        selectedCompany.value.rut = rutInput.value;
        selectedCompany.value.phone = phoneInput.value;
        selectedCompany.value.size = sizeInput.value;
      }
      isEditing.value = false;
    };

    const toggleCompanyStatus = (company) => {
      const newStatus = company.status === "active" ? "suspended" : "active";
      const action = newStatus === "active" ? "activar" : "suspender";

      if (
        confirm(`¿Estás seguro de que quieres ${action} a ${company.name}?`)
      ) {
        company.status = newStatus;
        alert(
          `Empresa ${
            newStatus === "active" ? "activada" : "suspendida"
          } exitosamente`
        );
      }
    };

    const viewCompanyOffers = (company) => {
      modalView.value = "offers";
    };

    const sendMessage = (company) => {
      alert(`Enviar mensaje a: ${company.name}`);
      // Implementar sistema de mensajería
    };

    const goToOfferDetail = (offer) => {
      router.push({ path: "/admin/DetalleOferta" });
      // Si en el futuro quieres pasar un id, puedes usar:
      // router.push({ path: `/admin/DetalleOfertaAdmin/${offer.id}` });
    };

    onMounted(() => {
      companies.value = sampleCompanies;
    });

    return {
      companies,
      searchTerm,
      statusFilter,
      industryFilter,
      showModal,
      selectedCompany,
      isEditing,
      modalView,
      filteredCompanies,
      getIndustryLabel,
      getStatusLabel,
      getStatusClass,
      formatDate,
      openCompanyModal,
      closeModal,
      editCompany,
      saveCompanyEdits,
      toggleCompanyStatus,
      viewCompanyOffers,
      sendMessage,
      goToOfferDetail,
    };
  },
};
</script>
