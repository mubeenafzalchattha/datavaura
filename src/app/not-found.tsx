import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <section className="aurora grain flex min-h-[70vh] items-center pt-32 text-sand">
      <Container>
        <p className="font-mono text-gold">404</p>
        <h1 className="mt-4 font-serif text-5xl">This page is not on the map.</h1>
        <p className="mt-4 max-w-xl text-sand/70">
          Try the homepage, the UAE e-invoicing page, or book a consultation.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/">Home</Button>
          <Button href="/solutions/uae-e-invoicing" variant="ghost">
            UAE E-Invoicing
          </Button>
        </div>
      </Container>
    </section>
  );
}
