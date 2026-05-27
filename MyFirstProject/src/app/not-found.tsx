import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center p-8 text-center">
      <span className="mb-2 text-sm text-slate-500">Page not found</span>
      <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-4">Oops.</h1>
      <p className="max-w-xl text-base text-slate-600 mb-6">
        The page you are looking for does not exist. Use the button below to return to the homepage.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
