import { MagneticButton } from "@/components/site/MagneticButton";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-ink px-6 text-cream">
      <div className="max-w-md text-center">
        <p className="font-serif text-6xl text-bronze">404</p>
        <h1 className="mt-4 font-serif text-3xl">Page not found</h1>
        <p className="mt-3 text-cream/70">That page is not on the Bunno's Diner site.</p>
        <div className="mt-8 flex justify-center">
          <MagneticButton href="/">Back to Bunno's</MagneticButton>
        </div>
      </div>
    </div>
  );
}
