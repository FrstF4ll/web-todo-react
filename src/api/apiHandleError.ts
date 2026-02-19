export async function apiHandleError(response: Response): Promise<Response> {
  if (response.ok) {
    return response;
  }

  let serverErrorMessage: string;
  try {
    const errorBody = await response.json();
    serverErrorMessage =
      errorBody.message || errorBody.error || JSON.stringify(errorBody);
  } catch {
    serverErrorMessage = await response.text().catch(() => response.statusText);
  }

  throw new Error(
    `Failed to access server [${response.status}]: ${serverErrorMessage}`,
  );
}
