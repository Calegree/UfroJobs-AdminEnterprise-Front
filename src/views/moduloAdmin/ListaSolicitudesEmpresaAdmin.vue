<template>


  
    <div class="flex h-screen" >
        <SidebarAdmin />
        <div class="flex-1 p-6">
             <!-- Header -->
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Solicitudes de Aprobación</h1>
      <p class="text-gray-600">Gestiona las solicitudes de registro de empresas pendientes de aprobación</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-500">Pendientes</p>
            <p class="text-lg font-semibold text-gray-900">{{ pendingCount }}</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-500">Aprobadas</p>
            <p class="text-lg font-semibold text-gray-900">{{ approvedCount }}</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-500">Rechazadas</p>
            <p class="text-lg font-semibold text-gray-900">{{ rejectedCount }}</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-500">Total</p>
            <p class="text-lg font-semibold text-gray-900">{{ totalCount }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Buscar solicitudes..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          v-model="statusFilter"
          class="pr-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Todos los estados</option>
          <option value="pending">Pendientes</option>
          <option value="approved">Aprobadas</option>
          <option value="rejected">Rechazadas</option>
        </select>
      </div>
    </div>

    <!-- Approvals Table -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Empresa
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr
              v-for="approval in filteredApprovals"
              :key="approval.id"
              class="hover:bg-gray-50 cursor-pointer"
              @click="openApprovalModal(approval)"
            >
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 104 0 2 2 0 00-4 0zm8-2a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{ approval.companyName }}</div>
                    <div class="text-sm text-gray-500">{{ approval.email }}</div>
                  </div>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class=" [
                    'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                    getStatusClass(approval.status)
                  ]"
                >
                  {{ getStatusLabel(approval.status) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ formatDate(approval.createdAt) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  v-if="approval.status === 'pending'"
                  @click.stop="openApprovalModal(approval)"
                  class="text-blue-600 hover:text-blue-900 mr-3"
                >
                  Revisar
                </button>
                <button
                  v-else
                  @click.stop="openApprovalModal(approval)"
                  class="text-gray-600 hover:text-gray-900 mr-3"
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

    
   

    <!-- Approval Detail Modal -->
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
            Solicitud de Aprobación
          </h3>
          <button
            @click="closeModal"
            class="text-gray-400 hover:text-gray-600"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div v-if="selectedApproval" class="mt-4">
          <!-- Status Banner -->
          <div
            v-if="selectedApproval.status !== 'pending'"
            :class="[
              'mb-4 p-4 rounded-lg',
              selectedApproval.status === 'approved' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            ]"
          >
            <div class="flex">
              <div class="flex-shrink-0">
                <svg
                  v-if="selectedApproval.status === 'approved'"
                  class="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <svg
                  v-else
                  class="h-5 w-5 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p :class="selectedApproval.status === 'approved' ? 'text-green-800' : 'text-red-800'" class="text-sm font-medium">
                  Solicitud {{ selectedApproval.status === 'approved' ? 'aprobada' : 'rechazada' }}
                </p>
                <p :class="selectedApproval.status === 'approved' ? 'text-green-700' : 'text-red-700'" class="text-sm">
                  {{ selectedApproval.reviewedAt ? `Revisada el ${formatDate(selectedApproval.reviewedAt)}` : '' }}
                  {{ selectedApproval.reviewedBy ? ` por ${selectedApproval.reviewedBy}` : '' }}
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Company Information -->
            <div class="lg:col-span-2">
              <h4 class="text-md font-semibold text-gray-900 mb-3">Información de la Empresa</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="text-sm font-medium text-gray-500">Nombre de la empresa</label>
                  <p class="text-sm text-gray-900">{{ selectedApproval.companyName }}</p>
                </div>
                <div>
                  <label class="text-sm font-medium text-gray-500">RUT</label>
                  <p class="text-sm text-gray-900">{{ selectedApproval.rut }}</p>
                </div>
                <div>
                  <label class="text-sm font-medium text-gray-500">Email</label>
                  <p class="text-sm text-gray-900">{{ selectedApproval.email }}</p>
                </div>
                <div>
                  <label class="text-sm font-medium text-gray-500">Teléfono</label>
                  <p class="text-sm text-gray-900">{{ selectedApproval.phone }}</p>
                </div>
                <div>
                  <label class="text-sm font-medium text-gray-500">Industria</label>
                  <p class="text-sm text-gray-900">{{ selectedApproval.industry }}</p>
                </div>
                <div>
                  <label class="text-sm font-medium text-gray-500">Tamaño</label>
                  <p class="text-sm text-gray-900">{{ selectedApproval.size }}</p>
                </div>
                <div class="md:col-span-2">
                  <label class="text-sm font-medium text-gray-500">Dirección</label>
                  <p class="text-sm text-gray-900">{{ selectedApproval.address }}</p>
                </div>
                <div class="md:col-span-2">
                  <label class="text-sm font-medium text-gray-500">Descripción</label>
                  <p class="text-sm text-gray-900">{{ selectedApproval.description }}</p>
                </div>
              </div>
            </div>

            <!-- Request Details -->
            <div>
              <h4 class="text-md font-semibold text-gray-900 mb-3">Detalles de la Solicitud</h4>
              <div class="space-y-4">
                <div>
                  <label class="text-sm font-medium text-gray-500">Tipo de solicitud</label>
                  <p class="text-sm text-gray-900">{{ selectedApproval.requestType }}</p>
                </div>
                <div>
                  <label class="text-sm font-medium text-gray-500">Estado</label>
                  <p class="text-sm">
                    <span
                      :class="[
                        'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                        getStatusClass(selectedApproval.status)
                      ]"
                    >
                      {{ getStatusLabel(selectedApproval.status) }}
                    </span>
                  </p>
                </div>
                <div>
                  <label class="text-sm font-medium text-gray-500">Fecha de solicitud</label>
                  <p class="text-sm text-gray-900">{{ formatDate(selectedApproval.createdAt) }}</p>
                </div>
                <div v-if="selectedApproval.notes">
                  <label class="text-sm font-medium text-gray-500">Notas adicionales</label>
                  <p class="text-sm text-gray-900">{{ selectedApproval.notes }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Documents Section -->
          <div class="mt-6 pt-4 border-t">
            <h4 class="text-md font-semibold text-gray-900 mb-3">Documentos Adjuntos</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                v-for="doc in selectedApproval.documents"
                :key="doc.id"
                class="border border-gray-200 rounded-lg p-3"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm font-medium text-gray-900">{{ doc.name }}</p>
                    <p class="text-xs text-gray-500">{{ doc.type }} • {{ doc.size }}</p>
                  </div>
                  <button class="text-blue-600 hover:text-blue-800">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Review Comments -->
          <div v-if="selectedApproval.reviewComments" class="mt-6 pt-4 border-t">
            <h4 class="text-md font-semibold text-gray-900 mb-3">Comentarios de Revisión</h4>
            <div class="bg-gray-50 rounded-lg p-4">
              <p class="text-sm text-gray-700">{{ selectedApproval.reviewComments }}</p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="mt-6 pt-4 border-t">
            <div v-if="selectedApproval.status === 'pending'" class="flex flex-wrap gap-3">
              <button
                @click="approveRequest(selectedApproval)"
                class="px-6 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Aprobar Solicitud
              </button>
              <button
                @click="rejectRequest(selectedApproval)"
                class="px-6 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Rechazar Solicitud
              </button>
              <button
                @click="requestMoreInfo(selectedApproval)"
                class="px-6 py-2 bg-yellow-600 text-white text-sm font-medium rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Solicitar Más Información
              </button>
            </div>
            <div v-else class="flex flex-wrap gap-3">
 <!--             <button
                @click="downloadReport(selectedApproval)"
                class="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Descargar Reporte
              </button>
              <button
                @click="sendMessage(selectedApproval)"
                class="px-6 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Enviar Mensaje
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Rejection Modal -->
    <div
      v-if="showRejectionModal"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
      @click="closeRejectionModal"
    >
      <div
        class="relative top-20 mx-auto p-5 border w-11/12 md:w-1/2 shadow-lg rounded-md bg-white"
        @click.stop
      >
        <div class="flex items-center justify-between pb-4 border-b">
          <h3 class="text-lg font-semibold text-gray-900">Rechazar Solicitud</h3>
          <button @click="closeRejectionModal" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Motivo del rechazo (obligatorio)
          </label>
          <textarea
            v-model="rejectionReason"
            rows="4"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Explica el motivo del rechazo..."
          ></textarea>
        </div>
        <div class="mt-6 flex justify-end space-x-3">
          <button
            @click="closeRejectionModal"
            class="px-4 py-2 bg-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            @click="confirmRejection"
            :disabled="!rejectionReason.trim()"
            class="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirmar Rechazo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarAdmin from '@/components/SidebarAdmin.vue'
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'AdminApprovalsList',
  components: {
    SidebarAdmin
  },
  setup() {
    const approvals = ref([])
    const searchTerm = ref('')
    const statusFilter = ref('')
    const showModal = ref(false)
    const showRejectionModal = ref(false)
    const selectedApproval = ref(null)
    const rejectionReason = ref('')

    // Sample data
    const sampleApprovals = [
      {
        id: 1,
        companyName: 'InnovaTech SPA',
        email: 'contacto@innovatech.cl',
        phone: '+56 2 2345 6789',
        rut: '76.111.222-3',
        industry: 'Tecnología',
        size: '50-200 empleados',
        address: 'Av. Providencia 1234, Santiago',
        description: 'Empresa de desarrollo de software especializada en soluciones empresariales.',
        requestType: 'Registro de empresa',
        priority: 'high',
        status: 'pending',
        createdAt: '2024-04-20',
        notes: 'Empresa con experiencia previa en el rubro tecnológico.',
        documents: [
          { id: 1, name: 'Certificado de Constitución', type: 'PDF', size: '2.1 MB' },
          { id: 2, name: 'RUT Empresarial', type: 'PDF', size: '1.5 MB' },
          { id: 3, name: 'Certificado Tributario', type: 'PDF', size: '980 KB' }
        ]
      },
      {
        id: 2,
        companyName: 'DataSoft Ltda',
        email: 'rrhh@datasoft.cl',
        phone: '+56 9 8765 4321',
        rut: '76.333.444-5',
        industry: 'Tecnología',
        size: '10-50 empleados',
        address: 'Av. Las Condes 5678, Santiago',
        description: 'Consultoría en análisis de datos y business intelligence.',
        requestType: 'Verificación de documentos',
        priority: 'medium',
        status: 'pending',
        createdAt: '2024-04-19',
        documents: [
          { id: 1, name: 'Certificado de Constitución', type: 'PDF', size: '1.8 MB' },
          { id: 2, name: 'Estados Financieros', type: 'PDF', size: '3.2 MB' }
        ]
      },
      {
        id: 3,
        companyName: 'CloudSystems',
        email: 'admin@cloudsystems.cl',
        phone: '+56 2 3456 7890',
        rut: '76.555.666-7',
        industry: 'Tecnología',
        size: '200-500 empleados',
        address: 'Av. Apoquindo 9876, Las Condes',
        description: 'Servicios de infraestructura en la nube y hosting.',
        requestType: 'Actualización de perfil',
        priority: 'low',
        status: 'approved',
        createdAt: '2024-04-15',
        reviewedAt: '2024-04-18',
        reviewedBy: 'Admin Principal',
        reviewComments: 'Documentación completa y empresa verificada exitosamente.',
        documents: [
          { id: 1, name: 'Certificado de Constitución', type: 'PDF', size: '2.5 MB' }
        ]
      },
      {
        id: 4,
        companyName: 'StartupTech',
        email: 'info@startuptech.cl',
        phone: '+56 9 1111 2222',
        rut: '76.777.888-9',
        industry: 'Tecnología',
        size: '1-10 empleados',
        address: 'Av. Vitacura 1111, Santiago',
        description: 'Startup enfocada en desarrollo de aplicaciones móviles.',
        requestType: 'Registro de empresa',
        priority: 'medium',
        status: 'rejected',
        createdAt: '2024-04-10',
        reviewedAt: '2024-04-12',
        reviewedBy: 'Admin Secundario',
        reviewComments: 'Documentación incompleta. Falta certificado tributario vigente.',
        documents: [
          { id: 1, name: 'Certificado de Constitución', type: 'PDF', size: '1.2 MB' }
        ]
      }
    ]

    const filteredApprovals = computed(() => {
      return approvals.value.filter(approval => {
        const matchesSearch = approval.companyName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
                            approval.email.toLowerCase().includes(searchTerm.value.toLowerCase())
        const matchesStatus = !statusFilter.value || approval.status === statusFilter.value
        
        return matchesSearch && matchesStatus
      })
    })

    const pendingCount = computed(() => approvals.value.filter(a => a.status === 'pending').length)
    const approvedCount = computed(() => approvals.value.filter(a => a.status === 'approved').length)
    const rejectedCount = computed(() => approvals.value.filter(a => a.status === 'rejected').length)
    const totalCount = computed(() => approvals.value.length)

    const getPriorityLabel = (priority) => {
      const labels = {
        high: 'Alta',
        medium: 'Media',
        low: 'Baja'
      }
      return labels[priority] || priority
    }

    const getPriorityClass = (priority) => {
      const classes = {
        high: 'bg-red-100 text-red-800',
        medium: 'bg-yellow-100 text-yellow-800',
        low: 'bg-green-100 text-green-800'
      }
      return classes[priority] || 'bg-gray-100 text-gray-800'
    }

    const getStatusLabel = (status) => {
      const labels = {
        pending: 'Pendiente',
        approved: 'Aprobada',
        rejected: 'Rechazada'
      }
      return labels[status] || status
    }

    const getStatusClass = (status) => {
      const classes = {
        pending: 'bg-yellow-100 text-yellow-800',
        approved: 'bg-green-100 text-green-800',
        rejected: 'bg-red-100 text-red-800'
      }
      return classes[status] || 'bg-gray-100 text-gray-800'
    }

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('es-CL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    const openApprovalModal = (approval) => {
      selectedApproval.value = approval
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
      selectedApproval.value = null
    }

    const closeRejectionModal = () => {
      showRejectionModal.value = false
      rejectionReason.value = ''
    }

    const approveRequest = (approval) => {
      if (confirm(`¿Estás seguro de que quieres aprobar la solicitud de ${approval.companyName}?`)) {
        approval.status = 'approved'
        approval.reviewedAt = new Date().toISOString().split('T')[0]
        approval.reviewedBy = 'Admin Actual'
        approval.reviewComments = 'Solicitud aprobada exitosamente.'
        alert('Solicitud aprobada exitosamente')
        closeModal()
      }
    }

    const rejectRequest = (approval) => {
      selectedApproval.value = approval
      showRejectionModal.value = true
    }

    const confirmRejection = () => {
      if (selectedApproval.value && rejectionReason.value.trim()) {
        selectedApproval.value.status = 'rejected'
        selectedApproval.value.reviewedAt = new Date().toISOString().split('T')[0]
        selectedApproval.value.reviewedBy = 'Admin Actual'
        selectedApproval.value.reviewComments = rejectionReason.value
        alert('Solicitud rechazada')
        closeRejectionModal()
        closeModal()
      }
    }

    const requestMoreInfo = (approval) => {
      alert(`Solicitar más información a: ${approval.companyName}`)
      // Implementar lógica para solicitar más información
    }

    const downloadReport = (approval) => {
      alert(`Descargar reporte de: ${approval.companyName}`)
      // Implementar descarga de reporte
    }

    const sendMessage = (approval) => {
      alert(`Enviar mensaje a: ${approval.companyName}`)
      // Implementar sistema de mensajería
    }

    onMounted(() => {
      approvals.value = sampleApprovals
    })

    return {
      approvals,
      searchTerm,
      statusFilter,
      showModal,
      showRejectionModal,
      selectedApproval,
      rejectionReason,
      filteredApprovals,
      pendingCount,
      approvedCount,
      rejectedCount,
      totalCount,
      getPriorityLabel,
      getPriorityClass,
      getStatusLabel,
      getStatusClass,
      formatDate,
      openApprovalModal,
      closeModal,
      closeRejectionModal,
      approveRequest,
      rejectRequest,
      confirmRejection,
      requestMoreInfo,
      downloadReport,
      sendMessage
    }
  }
}
</script>