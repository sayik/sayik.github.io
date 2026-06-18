import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

export function CvCta() {
  return (
    <section className="border-t">
      <div className="bg-primary text-primary-foreground py-20 px-6 md:py-32 flex flex-col items-center text-center space-y-8">
        <div className="w-16 h-16 bg-background/10 rounded-full flex items-center justify-center mb-4">
          <FileText className="w-8 h-8 text-primary-foreground" />
        </div>
        <h2 className="text-4xl md:text-7xl font-bold font-headline tracking-tighter uppercase leading-[0.9] max-w-4xl">
          Interested in my <br /> technical journey?
        </h2>
        <p className="text-xl md:text-2xl font-body max-w-2xl opacity-90">
          Download my full curriculum vitae to see my backend engineering experience and Python expertise.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-none bg-background text-foreground hover:bg-background/90 font-headline px-12 h-16 text-lg uppercase tracking-widest group border-none">
            <a href="/cv.pdf" target="_blank">
              Download CV
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-none bg-transparent text-primary-foreground hover:bg-primary-foreground/10 border-2 border-primary-foreground font-headline px-12 h-16 text-lg uppercase tracking-widest group">
            <a href="mailto:sayi_pk@outlook.com">
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
