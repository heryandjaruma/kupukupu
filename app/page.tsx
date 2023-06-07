import Link from "next/link"
import { Check } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import SiteFooter from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <div>
      <SiteHeader />

      <section className="container grid place-items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
          <h1 className="font-semibold">AI Resume Writer</h1>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Automate your CV creation <br className="hidden sm:inline" />
            with our AI resume builder
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Some people simply don&apos;t enjoy writing resumes as much as we
            do. That&apos;s okay. Our AI Resume Writer is for you.
          </p>
        </div>

        <div className="flex gap-4">
          <Button asChild>
            <Link href="/auth">Start for Free</Link>
          </Button>

          {/* <Link
            // href={siteConfig.links.docs}
            href={`/dashboard/home`}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Dashboard
          </Link> */}

          {/* <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link> */}
        </div>
      </section>

      <Separator />

      <div
        id="open-ai"
        className="grid grid-cols-1 place-items-center px-4 py-16 md:grid-cols-2 md:px-10"
      >
        <div className="flex w-full max-w-lg flex-col items-center justify-center space-y-4 text-start text-gray-700 dark:text-white">
          <div>
            <h1 className="font-normal">AI CV Builder</h1>
            <h1 className="mt-4 text-5xl font-semibold md:max-w-lg">
              Powered by OpenAI&apos;s GPT-3.5 NLP model
            </h1>
          </div>

          <p className="max-w-lg">
            GPT-3.5 is an AI language model so powerful, it was at first deemed
            too dangerous to unleash on the world. Now you can use it to write
            your resume. And while that may seem like an overkill, GPT- 3.5 is
            uniquely well-suited for generating structured documents such as
            resumes. Try it for free and see the results for yourself.
          </p>

          <Separator />

          <div className="flex w-full max-w-lg flex-col items-center space-y-5 md:items-start">
            <div>
              <div className="flex flex-row space-x-3">
                <Check className="text-green-500" />

                <p>
                  The world&apos;s most powerful natural language processing
                  model
                </p>
              </div>

              <div className="flex flex-row space-x-3">
                <Check className="text-green-500" />

                <p>Trained on hundreds of billions of words</p>
              </div>
            </div>

            {/* <Button>
              <Link href="/auth"> Try CV Writer</Link>
            </Button> */}
          </div>
        </div>

        <div className="">
          {/* <Image
            src={`/images/landing/open-ai.png`}
            alt="open-ai"
            width={640}
            height={640}
            className="rounded-lg object-cover"
          /> */}
        </div>
      </div>

      <div
        id="feature-1"
        className="grid grid-cols-1 place-items-center px-10 py-16 md:grid-cols-2"
      >
        <div>
          {/* <Image
            src={`/images/landing/feature.png`}
            alt="open-ai"
            width={640}
            height={640}
            className="rounded-lg object-cover"
          /> */}
        </div>

        <div className="flex w-full max-w-lg flex-col items-center justify-center space-y-4 text-start text-gray-700 dark:text-white">
          <div>
            <h1 className="font-normal">Automatic Resume Writer</h1>
            <h1 className="mt-4 text-5xl font-semibold md:max-w-lg">
              How does the AI Resume Writer work?
            </h1>
          </div>

          <p className="max-w-lg">
            You can use our AI-powered resume builder to automatically generate
            your entire resume. The AI Resume Writer can write professional
            sections for your resume summary, work experience, and education,
            with a consistent tone throughout the document. Try it for free and
            get your AI-generated CV ready in seconds.
          </p>

          <Separator />

          <div className="w-full max-w-lg space-y-5">
            <div>
              <div className="flex flex-row space-x-3">
                <Check className="text-green-500" />

                <p>Automatically writes great bullet points for your resume</p>
              </div>

              <div className="flex flex-row space-x-3">
                <Check className="text-green-500" />

                <p>Quick & easy resume generator</p>
              </div>
            </div>

            {/* <Button>
              <Link href="/auth"> Try our CV Builder</Link>
            </Button> */}
          </div>
        </div>
      </div>

      <div
        id="feature-2"
        className="grid grid-cols-1 place-items-center px-10 py-16 md:grid-cols-2"
      >
        <div className="flex w-full max-w-lg flex-col items-center justify-center space-y-4 text-start text-gray-700 dark:text-white">
          <div>
            <h1 className="font-normal">AI Cover Letter Generator</h1>
            <h1 className="mt-4 text-5xl font-semibold md:max-w-lg">
              Use AI to generate a matching cover letter
            </h1>
          </div>

          <p className="max-w-lg">
            Once you&apos;ve polished your resume, you can use our AI Cover
            Letter Writer to quickly generate a great cover letter that visually
            matches your resume. The AI Writer takes into consideration the
            content of your resume and generates a full-fledged cover letter in
            seconds.{" "}
            <Link href={`/`}>Learn more about the AI Cover Letter Writer.</Link>
          </p>

          <Separator />

          <div className="w-full max-w-lg space-y-5">
            <div>
              <div className="flex flex-row space-x-3">
                <Check className="text-green-500" />

                <p>Let AI generate the first draft of your cover letter</p>
              </div>

              <div className="flex flex-row space-x-3">
                <Check className="text-green-500" />

                <p>Customizable templates to match your resume</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          {/* <Image
            src={`/images/landing/feature-2.png`}
            alt="open-ai"
            width={640}
            height={640}
            className="rounded-lg object-cover"
          /> */}
        </div>
      </div>

      <div
        id="showcase"
        className="flex w-full flex-col items-center justify-center bg-indigo-950 py-8 text-white"
      >
        <div className="max-w-2xl select-none space-y-3 pb-8 text-center">
          <h1 className="font-semibold">AI Generated Resume</h1>
          <h1 className="text-5xl">AI-Generated Resume Examples</h1>

          <p>
            What does an AI-generated resume look like? See for yourself! These
            resumes were generated by our AI resume builder.
          </p>
        </div>

        <div className="grid max-w-4xl grid-cols-2 place-items-center gap-4 px-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton className="aspect-[3/4] w-48 rounded-lg" />
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
