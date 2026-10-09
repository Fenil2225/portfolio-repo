import { createStart, createMiddleware } from "@tanstack/react-start";
import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error: unknown) {
    // ✅ Let native Response errors pass through (like redirects, 404, etc.)
    if (error instanceof Response) {
      throw error;
    }

    // ✅ Handle errors that may contain a status property
    if (
      error &&
      typeof error === "object" &&
      "status" in error &&
      typeof (error as { status?: unknown }).status === "number"
    ) {
      throw error;
    }

    // ✅ Log unexpected errors
    console.error("Server Error:", error);

    try {
      // ✅ Ensure renderErrorPage returns a string
      const html =
        typeof renderErrorPage === "function"
          ? await renderErrorPage()
          : "<h1>Internal Server Error</h1>";

      return new Response(html, {
        status: 500,
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      });
    } catch (renderError) {
      // ✅ Fallback if error page rendering itself fails
      console.error("Error rendering error page:", renderError);

      return new Response("<h1>Internal Server Error</h1>", {
        status: 500,
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      });
    }
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
