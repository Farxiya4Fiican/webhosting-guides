
import Link from "next/link";

const hostingLink =
  "https://www.interserver.net/webhosting?id=1211999";

type Tutorial = {
  icon: string;
  category: string;
  title: string;
  description: string;
  href?: string;
};

const tutorials: Tutorial[] = [
  {
    icon: "🌐",
    category: "BEGINNER GUIDE",
    title: "How to Build a Website in 2026",
    description:
      "Learn how to create a modern website, choose the right tools, and publish it online.",
    href: "/tutorials/build-a-website",
  },
  {
    icon: "⚛️",
    category: "REACT & NEXT.JS",
    title: "Build Modern Websites with Next.js",
    description:
      "Explore React components, Next.js routing, and modern frontend development.",
  },
  {
    icon: "🖥️",
    category: "WEB HOSTING",
    title: "How to Choose the Right Web Hosting",
    description:
      "Understand shared hosting, VPS hosting, domains, SSL, and deployment.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <Link
            href="/"
            className="text-xl font-extrabold text-blue-700"
          >
            Web Hosting{" "}
            <span className="text-slate-900">& Guides</span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
            <a href="#tutorials" className="hover:text-blue-600">
              Tutorials
            </a>
            <a href="#hosting" className="hover:text-blue-600">
              Web Hosting
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </div>

          <a
            href="#tutorials"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Explore Guides
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 px-6 py-28 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <span className="rounded-full border border-blue-400/40 bg-blue-500/20 px-4 py-2 text-sm">
            Web Development • Hosting • Tutorials
          </span>

          <h1 className="mt-8 max-w-3xl text-5xl font-extrabold leading-tight md:text-6xl">
            Learn to Build & Launch Modern Websites
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Step-by-step tutorials for Next.js, React.js,
            WordPress, web hosting, and website deployment.
            From your first idea to a live website.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#tutorials"
              className="rounded-xl bg-white px-7 py-4 font-bold text-blue-800 transition hover:bg-blue-50"
            >
              Browse Tutorials →
            </a>

            <a
              href="#hosting"
              className="rounded-xl border border-white/50 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Explore Hosting
            </a>
          </div>
        </div>
      </section>

      {/* TUTORIALS SECTION */}
      <section
        id="tutorials"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <p className="font-semibold text-blue-600">
          START LEARNING
        </p>

        <h2 className="mt-3 text-4xl font-extrabold">
          Explore Our Latest Tutorials
        </h2>

        <p className="mt-4 text-slate-600">
          Practical guides to help you build, deploy, and
          manage websites.
        </p>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {tutorials.map((tutorial) => (
            <article
              key={tutorial.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">
                {tutorial.icon}
              </div>

              <p className="mt-7 text-xs font-bold tracking-wider text-blue-600">
                {tutorial.category}
              </p>

              <h3 className="mt-3 text-xl font-bold">
                {tutorial.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {tutorial.description}
              </p>

              <div className="mt-auto pt-7">
                {tutorial.href ? (
                  <Link
                    href={tutorial.href}
                    className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    Read Full Guide →
                  </Link>
                ) : (
                  <span className="inline-block text-sm font-medium text-slate-400">
                    Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WEB HOSTING SECTION */}
      <section
        id="hosting"
        className="bg-blue-50 px-6 py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-600">
              WEB HOSTING GUIDE
            </p>

            <h2 className="mt-4 text-4xl font-extrabold">
              Ready to Launch Your Website?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Choosing the right hosting is an important
              part of publishing a website. Explore
              InterServer hosting options and check
              which plan fits your project's needs.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Affiliate disclosure: We may earn a commission
              if you purchase through our referral link,
              at no additional cost to you.
            </p>

            <a
              href={hostingLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-7 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Explore InterServer Hosting →
            </a>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <div className="mb-6 text-6xl">
              🚀
            </div>

            <h3 className="text-2xl font-bold">
              Your Website Launch Checklist
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              <li>✓ Choose your website technology</li>
              <li>✓ Build and test your website</li>
              <li>✓ Register a domain if needed</li>
              <li>✓ Select suitable hosting</li>
              <li>✓ Deploy and test your live website</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <h2 className="text-3xl font-extrabold">
          About Web Hosting & Website Guides
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-slate-600">
          We share beginner-friendly web development
          tutorials, practical hosting explanations,
          and deployment guides to help people build
          and launch modern websites.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-6 py-10 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 md:flex-row">
          <p>
            © 2026 Web Hosting & Website Guides
          </p>

          <a
            href="https://www.pinterest.com/webhostingguides/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Follow us on Pinterest →
          </a>
        </div>
      </footer>
    </main>
  );
}
