import ContentWrapper from "@/components/layouts/ContentWrapper";
import DefaultFooter from "@/components/layouts/DefaultFooter";
import DefaultHeader from "@/components/layouts/DefaultHeader";
import BlurFade from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <>
      <DefaultHeader />
      <ContentWrapper>
        <section id="header" className="flex flex-col items-center justify-center">
          <BlurFade delay={0.25} inView>
            <h2 className="text-2xl font-bold tracking-tighter xl:text-4xl text-center">
              Baby Paradise
            </h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <span className="text-lg text-pretty tracking-tighter xl:text-xl text-center">
              A one stop shop for all your kids&apos; needs.
            </span>
          </BlurFade>
        </section>
      </ContentWrapper>
      <DefaultFooter />
    </>
  );
}
