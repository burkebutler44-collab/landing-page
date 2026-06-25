import type { ReactNode } from 'react'
import {
  ArrowRight,
  Check,
  Cpu,
  Database,
  Layers3,
  Mail,
  Network,
  Server,
  ShieldCheck,
} from 'lucide-react'

const products = [
  {
    name: 'Dedicated by default',
    eyebrow: 'Physical reservation',
    description: 'Run workloads on physical servers reserved for your team, not a shared cloud pool.',
    icon: Server,
  },
  {
    name: 'Cloud-like control',
    eyebrow: 'Portal and API',
    description: 'Deploy bare metal, VMs, networks, and services from one control surface.',
    icon: Layers3,
  },
  {
    name: 'Use capacity your way',
    eyebrow: 'Flexible allocation',
    description: 'Keep a host as bare metal, split it into instances, or reserve it for services.',
    icon: Cpu,
  },
  {
    name: 'Predictable cost',
    eyebrow: 'Reserved capacity',
    description: 'Reserve hardware once, then consume it across workloads with fewer surprises.',
    icon: Database,
  },
  {
    name: 'Private network fabric',
    eyebrow: 'Tenant isolation',
    description: 'Connect servers, VMs, and services inside isolated tenant networks.',
    icon: Network,
  },
  {
    name: 'Workload flexibility',
    eyebrow: 'Mixed environments',
    description: 'Place dedicated servers, GPU systems, VMs, and services in the same environment.',
    icon: ShieldCheck,
  },
]

const buildRows = [
  ['Dedicated server', 'Physical host', 'Reserved'],
  ['Virtual machines', 'Carved from host', 'Self-serve'],
  ['Private networks', 'Tenant isolated', 'Built in'],
  ['Managed services', 'Postgres first', 'Preview'],
]

const regions = ['New Jersey', 'Ashburn', 'Chicago', 'Dallas', 'Frankfurt']

const platformPoints = [
  ['Account boundary', 'Billing, permissions, projects, and infrastructure stay under the same organization.'],
  ['Project separation', 'Use projects for production, staging, internal systems, and client workloads.'],
  ['Hardware visibility', 'Inventory, assignment, networking, and service state remain understandable.'],
]

const stats = [
  ['Single tenant', 'Reserved physical capacity'],
  ['One control plane', 'Bare metal, VMs, and services'],
  ['Private networking', 'Isolated networks per environment'],
]

export function App() {
  return (
    <div className="min-h-screen bg-frost text-ink">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <Platform />
        <Locations />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 lg:px-8">
        <a href="#" className="brand-wordmark text-[14px]" aria-label="Exos home">
          EXOS
        </a>
        <nav className="hidden items-center gap-7 text-[12px] font-semibold uppercase tracking-[0.16em] text-muted md:flex">
          <a href="#products" className="transition-colors hover:text-blue-700">Capabilities</a>
          <a href="#platform" className="transition-colors hover:text-blue-700">Platform</a>
          <a href="#locations" className="transition-colors hover:text-blue-700">Locations</a>
          <a href="#waitlist" className="transition-colors hover:text-blue-700">Access</a>
        </nav>
        <a
          href="mailto:waitlist@exos.tech?subject=Exos%20access%20request"
          className="inline-flex h-9 items-center gap-2 rounded-full bg-blue-700 px-3.5 text-[12.5px] font-semibold text-white shadow-blue transition-colors hover:bg-blue-800"
        >
          Request access
          <ArrowRight size={14} />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-frost">
      <div className="absolute inset-x-0 top-0 h-[560px] bg-[linear-gradient(180deg,#ffffff_0%,#f6f8fb_58%,#eef3f8_100%)]" aria-hidden />
      <div className="absolute inset-0 exos-technical-field" aria-hidden />
      <div className="relative mx-auto grid max-w-[1180px] gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_500px] lg:items-center lg:px-8 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-700/15 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 shadow-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
            Dedicated private cloud
          </div>
          <h1 className="mt-7 max-w-[760px] text-[46px] font-extrabold leading-[0.98] tracking-normal text-ink sm:text-[64px] lg:text-[74px]">
            Private cloud, on dedicated hardware.
          </h1>
          <p className="mt-7 max-w-[620px] text-[17px] leading-8 text-steel sm:text-[18px]">
            Exos gives companies the flexibility of cloud with the economics and control of dedicated infrastructure.
          </p>
          <p className="mt-4 max-w-[650px] text-[14px] leading-7 text-muted">
            Provision bare metal, carve servers into VMs, connect workloads over private networks, and run managed services like Postgres on capacity reserved for you.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="mailto:waitlist@exos.tech?subject=Exos%20access%20request&body=Workload:%0ARegion:%0AHardware%20needs:%0ATimeline:"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-blue-700 px-5 text-[13px] font-bold text-white shadow-blue transition-colors hover:bg-blue-800"
            >
              Request access
              <ArrowRight size={15} />
            </a>
            <a
              href="#products"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-white px-5 text-[13px] font-semibold text-ink shadow-subtle transition-colors hover:border-blue-700/25 hover:bg-blue-50"
            >
              Explore platform
            </a>
          </div>
        </div>
        <ConsoleVisual />
      </div>
    </section>
  )
}

function ConsoleVisual() {
  return (
    <aside className="rounded-[18px] border border-line bg-white p-3 shadow-premium">
      <div className="overflow-hidden rounded-[14px] border border-line bg-white">
        <div className="flex items-center justify-between border-b border-line bg-soft px-4 py-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">exos console</p>
            <h2 className="mt-1 text-[15px] font-semibold text-ink">Dedicated private cloud</h2>
          </div>
          <span className="rounded-full border border-blue-700/15 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
            private preview
          </span>
        </div>

        <div className="grid gap-3 p-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <MiniStat icon={<Server size={15} />} label="Metal" value="reserved" />
            <MiniStat icon={<Cpu size={15} />} label="VMs" value="planned" />
            <MiniStat icon={<ShieldCheck size={15} />} label="Services" value="preview" />
          </div>

          <div className="rounded-xl border border-line bg-white">
            <div className="grid grid-cols-[1.15fr_1fr_0.8fr] border-b border-line bg-soft px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              <span>Layer</span>
              <span>Shape</span>
              <span>State</span>
            </div>
            <div className="divide-y divide-line">
              {buildRows.map((row) => (
                <div key={row[0]} className="grid grid-cols-[1.15fr_1fr_0.8fr] gap-2 px-3 py-3 text-[11.5px]">
                  <span className="font-semibold text-ink">{row[0]}</span>
                  <span className="text-steel">{row[1]}</span>
                  <span className="font-mono text-muted">{row[2]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1fr_0.95fr]">
            <div className="rounded-xl border border-line bg-white p-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Reserved capacity</p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-blue-100">
                <div className="h-full w-[68%] rounded-full bg-blue-700" />
              </div>
              <p className="mt-3 text-[11.5px] leading-5 text-steel">Allocated across bare metal, VMs, networks, and services.</p>
            </div>
            <div className="rounded-xl border border-line bg-soft p-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700/70">Request</p>
              <p className="mt-2 text-[13px] font-semibold text-ink">New private cloud</p>
              <p className="mt-2 text-[11.5px] leading-5 text-steel">New Jersey, GPU-ready hosts, isolated network.</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

function MiniStat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line bg-white p-3">
      <div className="text-blue-700">{icon}</div>
      <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-muted">{label}</p>
      <p className="mt-1 text-[12.5px] font-semibold text-ink">{value}</p>
    </div>
  )
}

function ProductGrid() {
  return (
    <section id="products" className="scroll-mt-20 border-b border-line bg-white py-20">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">01 / Platform</p>
            <h2 className="mt-3 max-w-2xl text-[34px] font-extrabold leading-tight tracking-normal text-ink sm:text-[46px]">
              Reserve the hardware. Use it across workloads.
            </h2>
          </div>
          <p className="max-w-sm text-[13.5px] leading-6 text-muted">
            Exos is broader than hosting and more controlled than public cloud: a dedicated private cloud for teams that need predictable infrastructure.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {products.map(({ name, eyebrow, description, icon: Icon }) => (
            <article key={name} className="rounded-[16px] border border-line bg-frost p-5 transition-all hover:-translate-y-0.5 hover:border-blue-700/25 hover:bg-white hover:shadow-premium">
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-xl border border-line bg-white p-2.5 text-blue-700 shadow-subtle">
                  <Icon size={18} />
                </div>
              </div>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted">{eyebrow}</p>
              <h3 className="mt-2 text-[18px] font-semibold text-ink">{name}</h3>
              <p className="mt-3 text-[13px] leading-6 text-steel">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={value} className="rounded-[16px] border border-line bg-white p-5 shadow-subtle">
              <p className="text-[24px] font-extrabold text-ink">{value}</p>
              <p className="mt-1 text-[12px] text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Platform() {
  return (
    <section id="platform" className="relative scroll-mt-20 overflow-hidden border-b border-line bg-frost py-20">
      <div className="relative mx-auto grid max-w-[1180px] gap-10 px-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
        <div>
          <p className="eyebrow">02 / Control model</p>
          <h2 className="mt-3 text-[34px] font-extrabold leading-tight tracking-normal text-ink sm:text-[46px]">
            Physical capacity with cloud-like controls.
          </h2>
          <p className="mt-5 max-w-md text-[13.5px] leading-6 text-muted">
            Your account reserves the hardware. Projects, VMs, private networks, and managed services decide how that capacity gets used.
          </p>
        </div>
        <div className="rounded-[18px] border border-line bg-white p-3 shadow-premium">
          <div className="divide-y divide-line rounded-[14px] border border-line">
            {platformPoints.map(([title, copy], index) => (
              <article key={title} className="grid gap-4 p-5 sm:grid-cols-[48px_1fr]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-700/15 bg-blue-50 font-mono text-[13px] font-bold text-blue-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-steel">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Locations() {
  return (
    <section id="locations" className="relative scroll-mt-20 overflow-hidden border-b border-white/10 bg-ink py-20 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#07111f_0%,#0b1728_100%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-[1180px] gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="eyebrow-dark">03 / Locations</p>
          <h2 className="mt-3 text-[34px] font-extrabold leading-tight tracking-normal sm:text-[46px]">
            Capacity scoped before it is promised.
          </h2>
          <p className="mt-5 max-w-md text-[13.5px] leading-6 text-white/62">
            Exos does not pretend there is infinite stock behind checkout. Hardware, region, network, and timing are scoped before launch.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-5 lg:grid-cols-1">
          {regions.map((region, index) => (
            <div key={region} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
              <span className="font-mono text-[11px] text-blue-300">{String(index + 1).padStart(2, '0')}</span>
              <span className="font-semibold text-white">{region}</span>
              <span className="text-[11.5px] text-white/52">made to order</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Waitlist() {
  return (
    <section id="waitlist" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[24px] border border-line bg-frost p-6 shadow-premium sm:p-8 lg:p-10">
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">04 / Private preview</p>
              <h2 className="mt-3 max-w-2xl text-[34px] font-extrabold leading-tight tracking-normal text-ink sm:text-[46px]">
                Request access to Exos.
              </h2>
              <p className="mt-5 max-w-xl text-[13.5px] leading-6 text-muted">
                Send your workload, region, hardware needs, and rough timeline. We will reply when your dedicated private cloud request fits an opening batch.
              </p>
              <div className="mt-6 grid gap-2 text-[12.5px] text-steel sm:grid-cols-2">
                {['Dedicated servers', 'GPU systems', 'Isolated environments', 'Managed Services'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <Check size={14} className="text-blue-700" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="mailto:waitlist@exos.tech?subject=Exos%20access%20request&body=Workload:%0ARegion:%0AHardware%20needs:%0ATimeline:"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-blue-700 px-5 text-[13px] font-bold text-white transition-colors hover:bg-blue-800"
            >
              <Mail size={15} />
              Request access
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-5 py-5 text-[12px] text-muted lg:px-8">
        <div className="flex items-center gap-4">
          <span className="brand-wordmark text-[12px]">EXOS</span>
          <span>exos.tech</span>
        </div>
        <div className="flex gap-5">
          <a href="#products" className="hover:text-blue-700">Products</a>
          <a href="#platform" className="hover:text-blue-700">Platform</a>
          <a href="#waitlist" className="hover:text-blue-700">Access</a>
        </div>
      </div>
    </footer>
  )
}
