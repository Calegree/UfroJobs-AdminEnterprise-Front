// API Configuration and Helper Functions

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

/**
 * Get authorization headers with token
 */
const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

/**
 * Handle API responses
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    let errorData;
    try {
      errorData = await response.json();
    } catch {
      errorData = { message: `HTTP Error ${response.status}: ${response.statusText}` };
    }
    
    // Log más detallado para debugging
    console.error('API Error Response:', {
      status: response.status,
      statusText: response.statusText,
      errorData
    });
    
    throw new Error(errorData.message || errorData.error || `Error: ${response.status}`);
  }
  return response.json();
};

// ==================== AUTH ENDPOINTS ====================

/**
 * Login admin
 */
export const loginAdmin = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(response);
};

/**
 * Login company
 */
export const loginCompany = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/login-company`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(response);
};

/**
 * Register company
 */
export const registerCompany = async (companyData) => {
  const response = await fetch(`${API_BASE_URL}/auth/register-company`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(companyData),
  });
  return handleResponse(response);
};

// ==================== COMPANY ENDPOINTS ====================

/**
 * Get current company profile
 */
export const getCompanyProfile = async () => {
  const response = await fetch(`${API_BASE_URL}/companies/me`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Update company profile by ID
 */
export const updateCompanyProfile = async (id, companyData) => {
  const response = await fetch(`${API_BASE_URL}/companies/${id}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: JSON.stringify(companyData),
  });
  return handleResponse(response);
};

// ==================== JOB OFFERS ENDPOINTS ====================

/**
 * Create a new job offer
 */
export const createJobOffer = async (jobOfferData) => {
  const response = await fetch(`${API_BASE_URL}/job-offers`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(jobOfferData),
  });
  return handleResponse(response);
};

/**
 * Get all job offers
 */
export const getJobOffers = async () => {
  const response = await fetch(`${API_BASE_URL}/job-offers`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Get job offer by ID
 */
export const getJobOfferById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/job-offers/${id}`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Update job offer by ID
 */
export const updateJobOffer = async (id, jobOfferData) => {
  const response = await fetch(`${API_BASE_URL}/job-offers/${id}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: JSON.stringify(jobOfferData),
  });
  return handleResponse(response);
};

// ==================== APPLICATIONS ENDPOINTS ====================

/**
 * Get application by ID
 */
export const getApplicationById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/applications/${id}`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

// ==================== S3 ENDPOINTS ====================

/**
 * Get presigned URL for file upload
 */
export const getPresignedUrl = async (fileName) => {
  const response = await fetch(`${API_BASE_URL}/s3/presigned-url`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fileName }),
  });
  return handleResponse(response);
};

/**
 * Upload file to S3 using presigned URL
 */
export const uploadFileToS3 = async (presignedUrl, file) => {
  const response = await fetch(presignedUrl, {
    method: 'PUT',
    body: file,
    headers: { 'Content-Type': file.type },
  });
  
  if (!response.ok) {
    throw new Error('Failed to upload file');
  }
  
  return response;
};

// ==================== ADMIN ENDPOINTS ====================

/**
 * Get pending companies for approval
 */
export const getPendingCompanies = async () => {
  const response = await fetch(`${API_BASE_URL}/admin/dashboard/pending-companies`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Approve a company
 */
export const approveCompany = async (companyId) => {
  const response = await fetch(`${API_BASE_URL}/admin/dashboard/approve-company/${companyId}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Reject a company
 */
export const rejectCompany = async (companyId) => {
  const response = await fetch(`${API_BASE_URL}/admin/dashboard/reject-company/${companyId}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Get user distribution statistics
 */
export const getUserDistribution = async () => {
  const response = await fetch(`${API_BASE_URL}/admin/dashboard/user-distribution`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Get job offers by month statistics
 */
export const getJobOffersByMonth = async () => {
  const response = await fetch(`${API_BASE_URL}/admin/dashboard/job-offers-by-month`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Get total companies count
 */
export const getTotalCompanies = async () => {
  const response = await fetch(`${API_BASE_URL}/admin/dashboard/total-companies`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

// ==================== COMPANIES MANAGEMENT ====================

/**
 * Get all companies
 */
export const getAllCompanies = async () => {
  const response = await fetch(`${API_BASE_URL}/companies`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Get company by ID
 */
export const getCompanyById = async (companyId) => {
  const response = await fetch(`${API_BASE_URL}/companies/${companyId}`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Update company (admin)
 */
export const updateCompanyAdmin = async (companyId, companyData) => {
  const response = await fetch(`${API_BASE_URL}/companies/${companyId}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: JSON.stringify(companyData),
  });
  return handleResponse(response);
};

/**
 * Toggle company state (activo/baneado)
 */
export const toggleCompanyState = async (companyId) => {
  const response = await fetch(`${API_BASE_URL}/companies/${companyId}/toggle-state`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Delete company
 */
export const deleteCompany = async (companyId) => {
  const response = await fetch(`${API_BASE_URL}/companies/${companyId}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Get company job offers
 */
export const getCompanyJobOffers = async (companyId) => {
  const response = await fetch(`${API_BASE_URL}/companies/${companyId}/job-offers`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

// ==================== USERS MANAGEMENT ====================

/**
 * Get all students
 */
export const getAllStudents = async () => {
  const response = await fetch(`${API_BASE_URL}/users/students`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Get user by ID
 */
export const getUserById = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Update user (admin)
 */
export const updateUserAdmin = async (userId, userData) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: JSON.stringify(userData),
  });
  return handleResponse(response);
};

/**
 * Toggle user state (activo/inactivo)
 */
export const toggleUserState = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}/toggle-state`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Delete user
 */
export const deleteUser = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Get user applications
 */
export const getUserApplications = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}/applications`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

// ==================== JOB OFFERS MANAGEMENT ====================

/**
 * Get job offer applications/applicants
 */
export const getJobOfferApplications = async (jobOfferId) => {
  const response = await fetch(`${API_BASE_URL}/job-offers/${jobOfferId}/applications`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Get job offer applicants with user details
 */
export const getJobOfferApplicants = async (jobOfferId) => {
  const response = await fetch(`${API_BASE_URL}/job-offers/${jobOfferId}/applicants`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Toggle job offer state (admin)
 */
export const toggleJobOfferState = async (jobOfferId) => {
  const response = await fetch(`${API_BASE_URL}/job-offers/${jobOfferId}/toggle-state`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};

/**
 * Delete job offer (admin)
 */
export const deleteJobOffer = async (jobOfferId) => {
  const response = await fetch(`${API_BASE_URL}/job-offers/${jobOfferId}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  return handleResponse(response);
};
