"use client";

import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  status: string;
  href: string;
}

const upcomingEvents: Event[] = [];

const completedEvents: Event[] = [
  {
    title: "Startup is the New Trap Masterclass",
    description: "A live masterclass on building a self-sustainable business with clarity, structure, and no wasted effort.",
    date: "Sunday, May 3rd, 2026",
    time: "6:00 PM – 8:00 PM IST",
    status: "Registration closed",
    href: "/startup-connect/startup-is-the-new-trap-masterclass-free",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="bg-white border-b border-slate-200 pt-[90px] pb-20">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-0">
            <p className="text-sm uppercase tracking-[0.35em] text-primary font-montserrat mb-4">
              Events
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-univia tracking-tight text-slate-950">
              All Events
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-slate-600 font-montserrat leading-relaxed">
              Browse upcoming and completed sessions in the same premium design system used across the site. Find what’s next, review past programs, and stay aligned with the next opportunity.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="space-y-20">
          <section className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary font-montserrat">
                  Upcoming Events
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold font-univia text-slate-950">
                  What’s next in the calendar
                </h2>
              </div>
              <Link href="/startup-connect/startup-is-the-new-trap-masterclass-free">
                <Button variant="outline" size="md" className="text-slate-900 border-slate-300 hover:border-slate-400 hover:bg-slate-50">
                  View current event
                </Button>
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {upcomingEvents.map((event: Event) => (
                <article key={event.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-primary font-montserrat">
                        Upcoming
                      </p>
                      <h3 className="mt-3 text-2xl font-bold font-univia text-slate-950">
                        {event.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
                      {event.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-montserrat">
                    {event.description}
                  </p>
                  <div className="grid gap-4 text-sm text-slate-700 sm:grid-cols-2 font-montserrat">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Date</p>
                      <p className="text-base font-semibold text-slate-950">{event.date}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Time</p>
                      <p className="text-base font-semibold text-slate-950">{event.time}</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href={event.href} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                      See event details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary font-montserrat">
                Completed Events
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold font-univia text-slate-950">
                What we have already delivered
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {completedEvents.map((event: Event) => (
                <article key={event.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-primary font-montserrat">
                        Completed
                      </p>
                      <h3 className="mt-3 text-2xl font-bold font-univia text-slate-950">
                        {event.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-green-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
                      {event.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-montserrat">
                    {event.description}
                  </p>
                  <div className="grid gap-4 text-sm text-slate-700 sm:grid-cols-2 font-montserrat">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Date</p>
                      <p className="text-base font-semibold text-slate-950">{event.date}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Time</p>
                      <p className="text-base font-semibold text-slate-950">{event.time}</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href={event.href} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                      See event details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
