
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build a Website in 2026 | Beginner's Guide",
  description:
    "Learn how to build and launch a modern website with Next.js, React, WordPress and web hosting.",
};

const affiliateUrl =
  "https://www.interserver.net/webhosting?id=1211999";

const steps = [
  {
    id: "planning",
    number: "01",
    icon: "🎯",
    title: "Plan Your Website",
    description:
      "Before writing code, define what you're building and who it's for.",
    details: [
      "Choose your website type: blog, portfolio, business or application.",
      "Identify your target audience and their needs.",
      "List essential pages such as Home, About and Contact.",
      "Sketch a simple website structure.",
    ],
    tip: "Start with a small website and expand as you learn.",
  },
  {
    id: "technology",
    number: "02",
    icon: "⚡",
    title: "Choose Your Technology",
    description:
      "Select the tools that best match your experience and project requirements.",
    details: [
      "WordPress — great for blogs and content-driven websites.",
      "React.js — useful for building interactive user interfaces.",
      "Next.js — a React framework with routing and rendering options.",
      "HTML & CSS — an excellent starting point for simple websites.",
    ],
    tip: "For a modern developer portfolio, Next.js is a strong option.",
  },
  {
    id: "development",
    number: "03",
    icon: "💻",
    title: "Build Your Website",
    description:
      "Turn your ideas into a responsive, easy-to-use website.",
    details: [
      "Create a clean navigation bar and homepage.",
      "Build reusable components and consistent layouts.",
      "Make every page mobile-friendly.",
      "Use clear headings, readable text and accessible controls.",
    ],
    tip: "Prioritize usability before adding animations.",
  },
  {
    id: "testing",
    number: "04",
    icon: "🧪",
    title: "Test & Optimize",
    description:
      "Make sure your website works reliably before publishing.",
    details: [
      "Test your pages across different screen sizes.",
      "Check navigation, buttons, forms and links.",
      "Optimize images and loading performance.",
      "Review SEO metadata and accessibility.",
    ],
    tip: "Test on both desktop and mobile devices.",
  },
  {
    id: "deployment",
    number: "05",
    icon: "🚀",
    title: "Deploy Your Website",
    description:
      "Choose an appropriate hosting platform and publish your project.",
    details: [
      "Static Next.js websites can be deployed to GitHub Pages.",
      "WordPress requires compatible PHP and database hosting.",
      "Dynamic Next.js applications need a compatible server runtime.",
      "Connect a domain and configure HTTPS where applicable.",
    ],
    tip: "Choose hosting based on your application's actual requirements.",
  },
];

export default function BuildWebsiteGuide() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
              🌐
            </span>
            <span className="text-base font-extrabold tracking-tight">
              Web Hosting <span className="text-blue-600">& Guides</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <a href="#guide" className="hover:text-blue-600">Tutorial</a>
            <a href="#hosting" className="hover:text-blue-600">Hosting</a>
          </div>

          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Back to Home →
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#080f27] via-[#11275b] to-[#1558d4] text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-blue-100">
              <span>✦</span> BEGINNER-FRIENDLY GUIDE
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              How to Build a
              <span className="block text-[#78c4ff]">Website in 2026</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              From your first idea to a live website. Learn how to
              plan, build, test and deploy modern websites using
              WordPress, React, Next.js and web hosting.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#guide"
                className="rounded-xl bg-white px-7 py-4 font-bold text-blue-800 shadow-lg transition hover:bg-blue-50"
              >
                Start Learning ↓
              </a>
              <a
                href="#hosting"
                className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/20"
              >
                Explore Hosting →
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 text-sm text-blue-100">
              <span>✓ 5 Practical Steps</span>
              <span>✓ Beginner Friendly</span>
              <span>✓ Free Guide</span>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <div className="overflow-hidden rounded-2xl bg-white text-slate-900">
                <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="ml-5 rounded-lg bg-slate-100 px-4 py-1 text-xs text-slate-400">
                    yourwebsite.com
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-8 sm:p-10">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-lg font-extrabold text-blue-600">
                      YourWebsite
                    </span>
                    <span className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white">
                      Get Started
                    </span>
                  </div>

                  <div className="grid items-center gap-6 sm:grid-cols-2">
                    <div>
                      <div className="mb-3 h-3 w-20 rounded-full bg-blue-200" />
                      <h3 className="text-2xl font-extrabold leading-tight">
                        Your Next Big Idea Starts Here.
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        Build something amazing with a modern,
                        responsive website.
                      </p>
                      <div className="mt-5 h-9 w-28 rounded-lg bg-blue-600" />
                    </div>
                    <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-7xl shadow-lg">
                      💻
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {["Design", "Develop", "Launch"].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-slate-100 bg-white p-3 text-center shadow-sm"
                      >
                        <div className="mb-2 text-lg text-blue-600">✦</div>
                        <span className="text-xs font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/20 bg-[#10244d] px-5 py-4 text-sm font-bold text-white shadow-xl">
              🚀 Ready to Launch
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-center sm:grid-cols-3">
          <div>
            <p className="text-2xl font-extrabold text-blue-600">5 Steps</p>
            <p className="mt-1 text-sm text-slate-500">Complete Learning Path</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-blue-600">100% Free</p>
            <p className="mt-1 text-sm text-slate-500">Educational Tutorial</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-blue-600">2026</p>
            <p className="mt-1 text-sm text-slate-500">Modern Website Guide</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section id="guide" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12">
          <span className="text-sm font-bold tracking-wider text-blue-600">
            STEP-BY-STEP TUTORIAL
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Your Website Building Roadmap
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-600">
            Follow these five practical steps to go from an idea
            to a published website.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-7">
            {steps.map((step) => (
              <article
                key={step.id}
                id={step.id}
                className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-9"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-blue-600">
                      STEP {step.number}
                    </span>
                    <h3 className="mt-2 text-2xl font-extrabold">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-7 space-y-4 border-t border-slate-100 pt-7">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                        ✓
                      </span>
                      <span className="leading-7 text-slate-600">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-7 text-blue-900">
                  <strong>💡 Pro Tip:</strong> {step.tip}
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:sticky lg:top-28 lg:block">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-extrabold">In This Guide</h3>
              <div className="mt-5 space-y-1">
                {steps.map((step) => (
                  <a
                    key={step.id}
                    href={`#${step.id}`}
                    className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    {step.number}. {step.title}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-950 p-6 text-white">
              <div className="text-4xl">🚀</div>
              <h3 className="mt-4 text-xl font-extrabold">
                Ready to Go Live?
              </h3>
              <p className="mt-3 text-sm leading-6 text-blue-100">
                Explore hosting options for your next website project.
              </p>
              <a
                href="#hosting"
                className="mt-5 inline-block rounded-lg bg-white px-5 py-3 text-sm font-bold text-blue-800"
              >
                Explore Hosting →
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Hosting */}
      <section id="hosting" className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1736] to-[#183d8b] p-8 text-white md:grid-cols-2 md:p-14">
          <div>
            <span className="text-sm font-bold tracking-wider text-blue-300">
              WEBSITE HOSTING
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Your Website Deserves Reliable Hosting
            </h2>
            <p className="mt-5 leading-8 text-blue-100">
              When your project needs traditional web hosting,
              explore InterServer's available plans and compare
              their features with your website requirements.
            </p>
            <p className="mt-5 text-sm leading-6 text-blue-200">
              Affiliate disclosure: We may earn a commission from
              qualifying purchases through this referral link,
              at no additional cost to you.
            </p>
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-7 inline-block rounded-xl bg-white px-7 py-4 font-bold text-blue-900 transition hover:bg-blue-100"
            >
              Explore InterServer Hosting ↗
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: "🌐", title: "Domain & Hosting" },
              { icon: "🔒", title: "Security & SSL" },
              { icon: "⚡", title: "Performance" },
              { icon: "🛠️", title: "Website Tools" },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur"
              >
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-4 font-bold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center text-sm text-slate-500 md:flex-row">
          <p>© 2026 Web Hosting & Website Guides</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <a
              href="https://www.pinterest.com/webhostingguides/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              Pinterest
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
