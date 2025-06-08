/**
 * Ensure that the response from the server is a valid JSON response.
 * @param response
 */
export function validateResponse(response: Response) {
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Invalid response from server: Expected JSON response");
  }
}
