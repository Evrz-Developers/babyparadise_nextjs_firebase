import Dashboard from "@/components/shop/Dashboard";
import BlurFade from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <div className="">
      <section id="header">
        <BlurFade delay={0.25} inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Baby Paradise
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <span className="text-lg text-pretty tracking-tighter sm:text-xl xl:text-xl/none">
            A one stop shop for all your kids&apos; needs.
          </span>
          <Dashboard />
        </BlurFade>

      </section>
    </div>
  );
}
