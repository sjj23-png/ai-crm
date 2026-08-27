import { Outlet } from "react-router-dom";



export function AuthLayout() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">

      <div className="grid min-h-screen lg:grid-cols-1">

        {/* Branding Section */}


        {/* Auth Form */}
        <section className="flex items-center justify-center  ">
          <div className="w-full">


            <Outlet />
          </div>
        </section>
      </div>
    </main>
  );
}