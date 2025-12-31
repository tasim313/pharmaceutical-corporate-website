"use client"

export default function AccessDenied() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center animate-fade-in">
        <h1 className="text-red-600 text-6xl font-extrabold mb-6 animate-slide-down">
          <code>Access Denied</code>
        </h1>

        <hr className="border-white mx-auto mb-6 w-1/2 animate-slide-left" />

        <h3 className="text-xl mb-4 animate-slide-right">
          You don&apos;t have permission to view this site.
        </h3>

        <h3 className="text-3xl mb-4 animate-zoom">
          🚫 🚫 🚫 🚫
        </h3>

        <h6 className="text-red-500 underline animate-zoom">
          error code: 403 forbidden
        </h6>
      </div>
    </div>
  )
}
