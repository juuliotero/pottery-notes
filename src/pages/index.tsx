export default function Presentation() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-gray-900 text-4xl font-bold tracking-tight">
            Bienvenido a tu cuaderno
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-8">
            ¿En qué te gustaría trabajar hoy?
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="bg-brand rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              Ver mis recetas
            </a>
            <a href="#" className="text-brand text-sm font-semibold leading-6">
              Crear nueva receta <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
