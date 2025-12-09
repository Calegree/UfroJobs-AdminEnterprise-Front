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
