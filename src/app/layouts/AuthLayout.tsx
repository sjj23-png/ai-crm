import { Outlet } from "react-router-dom";



export function AuthLayout() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Branding Section */}
        <section className="hidden lg:flex flex-col justify-between bg-primary-600 p-12 text-white">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Enterprise AI CRM
            </h1>

            <p className="mt-4 max-w-md text-primary-100">
              Intelligent customer relationship management platform for
              enterprise organizations.
            </p>
          </div>

          <div>
            <p className="text-sm text-primary-200">
              © 2026 Enterprise AI CRM
            </p>
          </div>
        </section>

        {/* Auth Form */}
        <section className="flex items-center justify-center p-1 sm:p-8 lg:p-12 ">
          <div className="w-full">
            <Outlet />
          </div>
        </section>
      </div>
    </main>
  );
}