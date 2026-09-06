import Bot from "../..";

// Standardize API response handling and error management
async function builder(
  this: Bot,
  method: string,
  input: object = {},
): Promise<any> {
  try {
    const response: any = await this.network.request(method, input);

    // Handle network-level failures
    if (response === false) {
      this.logger.error(`[API Error] Network failure for method: ${method}`);
      return { status_message: "NETWORK_ERROR", status: "Failed" };
    }

    // Handle successful responses
    if (response?.status === "OK") {
      return { ...response.data, status_message: "OK", status: "Done" };
    }

    // Special handling for authentication errors
    if (method === "getMe" && response.status === "INVALID_ACCESS") {
      this.logger.error(`[Auth Error] Invalid token detected for method: ${method}`);
      
      return { status_message: "INVALID_TOKEN", status: "Failed" };
    }

    // Log warnings for non-OK statuses
    this.logger.warn(`[API Warning] Method: ${method} returned status: ${response.status}`);
    
    if (response.status_message) {
      this.logger.warn(`[API Detail] ${response.status_message}`);
    }

    // Return formatted error response
    return { 
      status_message: response.status || "UNKNOWN_ERROR", 
      status: "Failed",
      original_response: response 
    };

  } catch (error) {
    // Handle unexpected exceptions
    this.logger.error(`[Critical Error] Exception in builder for method ${method}:` + error);

    return { 
      status_message: "INTERNAL_EXCEPTION", 
      status: "Failed",
      error_details: error instanceof Error ? error.message : String(error)
    };
  }
}

export default builder;