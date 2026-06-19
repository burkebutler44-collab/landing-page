import type { ReactNode } from 'react'
import {
  ArrowRight,
  Check,
  Cpu,
  Database,
  Layers3,
  LockKeyhole,
  Mail,
  Network,
  Server,
  ShieldCheck,
} from 'lucide-react'

const products = [
  {
    name: 'Dedicated by default',
    eyebrow: 'Physical reservation',
    description: 'Run workloads on physical servers reserved for your team, not a shared public-cloud pool.',
    icon: Server,
    meta: 'single tenant',
  },
  {
    name: 'Cloud-like control',
    eyebrow: 'One portal and API',
    description: 'Deploy bare metal, VMs, private networks, and managed services from one portal/API.',
    icon: Layers3,
    meta: 'one platform',
  },
  {
    name: 'Use capacity your way',
    eyebrow: 'Flexible allocation',
    description: 'Keep a server as bare metal, split it into instances, or allocate resources to managed services.',
    icon: Cpu,
    meta: 'metal / VMs / services',
  },
  {
    name: 'Predictable infrastructure cost',
    eyebrow: 'Capacity reservation',
    description: 'Reserve hardware capacity once, then consume it across workloads without surprise cloud sprawl.',
    icon: Database,
    meta: 'reserved capacity',
  },
  {
    name: 'Private network fabric',
    eyebrow: 'Tenant networking',
    description: 'Connect bare-metal servers, VMs, and services inside isolated tenant networks.',
    icon: Network,
    meta: 'isolated networks',
  },
]

const buildRows = [
  ['bare metal', 'Dedicated server', 'physical host', 'reserved'],
  ['instances', 'Virtual machines', 'carved from host', 'self-serve'],
  ['networks', 'Private fabric', 'tenant isolated', 'built in'],
  ['postgres', 'Managed service', 'on reserved capacity', 'preview'],
]

const regions = ['New Jersey', 'Ashburn', 'Chicago', 'Dallas', 'Frankfurt']

const platformPoints = [
  ['Organization owns the resources', 'Billing, permissions, projects, and infrastructure stay under the same account boundary.'],
  ['Projects separate the work', 'Use projects for dev, staging, production, client workloads, and internal systems.'],
  ['Hardware is still visible', 'Server inventory, assignment, networking, and service state remain understandable.'],
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
    <header className="sticky top-0 z-30 border-b border-line bg-frost/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 lg:px-8">
        <a href="#" className="inline-flex items-center gap-2.5 text-[14px] font-semibold text-ink" aria-label="Exos home">
          <ExosMark className="h-7 w-7 shrink-0" />
          <span>Exos</span>
        </a>
        <nav className="hidden items-center gap-7 text-[12.5px] font-medium text-muted md:flex">
          <a href="#products" className="transition-colors hover:text-ink">Capabilities</a>
          <a href="#platform" className="transition-colors hover:text-ink">Platform</a>
          <a href="#locations" className="transition-colors hover:text-ink">Locations</a>
          <a href="#waitlist" className="transition-colors hover:text-ink">Waitlist</a>
        </nav>
        <a
          href="mailto:waitlist@exos.tech?subject=Exos%20waitlist"
          className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-3.5 text-[12.5px] font-semibold text-white shadow-subtle transition-colors hover:bg-graphite"
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
      <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_70%_12%,rgb(37_99_235/0.14),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fafc_48%,#eef3f8_100%)]" aria-hidden />
      <div className="absolute inset-0 exos-light-field" aria-hidden />
      <div className="relative mx-auto grid max-w-[1180px] gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_500px] lg:items-center lg:px-8 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/15 bg-white/70 px-3 py-1.5 text-[11.5px] font-semibold text-blue-700 shadow-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Dedicated private cloud
          </div>
          <h1 className="mt-6 max-w-[720px] text-[48px] font-semibold leading-[0.98] tracking-normal text-ink sm:text-[70px]">
            Your own private cloud, built on dedicated hardware.
          </h1>
          <p className="mt-6 max-w-[600px] text-[17px] leading-8 text-steel sm:text-[18px]">
            Provision bare metal, carve servers into VMs, connect workloads over private networks, and run managed services like Postgres on capacity reserved for you.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="mailto:waitlist@exos.tech?subject=Exos%20waitlist&body=Workload:%0ARegion:%0AHardware%20needs:%0ATimeline:"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-blue-600 px-5 text-[13px] font-semibold text-white shadow-blue transition-colors hover:bg-blue-700"
            >
              Request access
              <ArrowRight size={15} />
            </a>
            <a
              href="#products"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-white px-5 text-[13px] font-semibold text-ink shadow-subtle transition-colors hover:border-blue-600/25 hover:bg-blue-50"
            >
              Explore platform
            </a>
            <span className="text-[12.5px] text-muted">Built to order. Access opens in batches.</span>
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
      <div className="overflow-hidden rounded-[12px] border border-line bg-panel">
        <div className="flex items-center justify-between border-b border-line bg-white px-4 py-3">
          <div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">exos console</p>
            <h2 className="mt-1 text-[15px] font-semibold text-ink">Dedicated private cloud</h2>
          </div>
          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">private preview</span>
        </div>
        <div className="grid gap-3 p-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <MiniStat icon={<Server size={15} />} label="Metal" value="reserved" />
            <MiniStat icon={<Cpu size={15} />} label="Instances" value="VMs" />
            <MiniStat icon={<ShieldCheck size={15} />} label="Services" value="Postgres" />
          </div>

          <div className="rounded-xl border border-line bg-white">
            <div className="grid grid-cols-[1fr_1.1fr_0.9fr_0.7fr] border-b border-line bg-soft px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
              <span>Class</span>
              <span>Use</span>
              <span>Shape</span>
              <span>Terms</span>
            </div>
            <div className="divide-y divide-line">
              {buildRows.map((row) => (
                <div key={row[0]} className="grid grid-cols-[1fr_1.1fr_0.9fr_0.7fr] gap-2 px-3 py-3 text-[11.5px]">
                  <span className="font-mono font-semibold text-ink">{row[0]}</span>
                  <span className="text-steel">{row[1]}</span>
                  <span className="text-steel">{row[2]}</span>
                  <span className="font-mono text-ink">{row[3]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-xl border border-line bg-white p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Project</p>
              <p className="mt-2 text-[13px] font-semibold text-ink">production</p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-soft">
                <div className="h-full w-[68%] rounded-full bg-blue-600" />
              </div>
              <p className="mt-2 text-[11.5px] text-muted">Capacity allocated across metal, VMs, and services.</p>
            </div>
            <div className="rounded-xl border border-blue-600/15 bg-blue-50 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-700/65">Request</p>
              <p className="mt-2 text-[13px] font-semibold text-ink">Private cloud request</p>
              <p className="mt-2 text-[11.5px] leading-5 text-steel">New Jersey, VMs, private network, managed Postgres.</p>
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
      <div className="text-blue-600">{icon}</div>
      <p className="mt-3 text-[10.5px] uppercase tracking-[0.14em] text-muted">{label}</p>
      <p className="mt-1 text-[12.5px] font-semibold text-ink">{value}</p>
    </div>
  )
}

function ProductGrid() {
  return (
    <section id="products" className="border-b border-line bg-white py-20">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow-light">Dedicated private cloud</p>
            <h2 className="mt-3 max-w-2xl text-[34px] font-semibold leading-tight tracking-normal text-ink sm:text-[46px]">
              Reserve the hardware. Use it across workloads.
            </h2>
          </div>
          <p className="max-w-sm text-[13.5px] leading-6 text-muted">
            Exos is broader than hosting and narrower than public cloud sprawl: a dedicated private cloud for teams that need predictable infrastructure.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {products.map(({ name, eyebrow, description, icon: Icon, meta }) => (
            <article key={name} className="group rounded-[18px] border border-line bg-frost p-5 transition-all hover:-translate-y-0.5 hover:border-blue-600/25 hover:bg-white hover:shadow-premium">
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-xl border border-line bg-white p-2.5 text-blue-600 shadow-subtle">
                  <Icon size={18} />
                </div>
                <span className="rounded-full bg-white px-2.5 py-1 font-mono text-[10.5px] text-muted shadow-subtle">{meta}</span>
              </div>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{eyebrow}</p>
              <h3 className="mt-2 text-[18px] font-semibold text-ink">{name}</h3>
              <p className="mt-3 text-[13px] leading-6 text-steel">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Platform() {
  return (
    <section id="platform" className="border-b border-line bg-page py-20">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
        <div>
          <p className="eyebrow-light">Control model</p>
          <h2 className="mt-3 text-[34px] font-semibold leading-tight tracking-normal text-ink sm:text-[46px]">
            Physical capacity with cloud-like controls.
          </h2>
          <p className="mt-5 max-w-md text-[13.5px] leading-6 text-muted">
            Your account reserves the hardware. Projects, VMs, private networks, and managed services decide how that capacity gets used.
          </p>
        </div>
        <div className="rounded-[22px] border border-line bg-white p-3 shadow-premium">
          <div className="divide-y divide-line rounded-[16px] border border-line">
            {platformPoints.map(([title, copy], index) => (
              <article key={title} className="grid gap-4 p-5 sm:grid-cols-[42px_1fr]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[13px] font-semibold text-blue-700">
                  {index + 1}
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
    <section id="locations" className="relative overflow-hidden border-b border-white/10 bg-ink py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgb(59_130_246/0.22),transparent_32%),linear-gradient(180deg,#07111F_0%,#0B1220_100%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-[1180px] gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="eyebrow-dark">Deployment regions</p>
          <h2 className="mt-3 text-[34px] font-semibold leading-tight tracking-normal sm:text-[46px]">
            Capacity scoped before it is promised.
          </h2>
          <p className="mt-5 max-w-md text-[13.5px] leading-6 text-white/58">
            Exos does not pretend there is infinite stock behind checkout. We scope hardware, region, network, and timing before launch.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-5 lg:grid-cols-1">
          {regions.map((region) => (
            <div key={region} className="grid grid-cols-[1fr_auto] items-center rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]">
              <span className="font-mono text-[12.5px] text-white">{region}</span>
              <span className="text-[11.5px] text-white/42">made to order</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Waitlist() {
  return (
    <section id="waitlist" className="bg-white py-20">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-line bg-page p-6 shadow-premium sm:p-8 lg:p-10">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow-light">Private preview</p>
              <h2 className="mt-3 max-w-2xl text-[34px] font-semibold leading-tight tracking-normal text-ink sm:text-[46px]">
                Request access to Exos.
              </h2>
              <p className="mt-5 max-w-xl text-[13.5px] leading-6 text-muted">
                Send your workload, region, hardware needs, and rough timeline. We will reply when your dedicated private cloud request fits an opening batch.
              </p>
              <div className="mt-6 grid gap-2 text-[12.5px] text-steel sm:grid-cols-2">
                {['Bare metal servers', 'VMs on reserved hosts', 'Private tenant networks', 'Managed services like Postgres'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="mailto:waitlist@exos.tech?subject=Exos%20waitlist&body=Workload:%0ARegion:%0AHardware%20needs:%0ATimeline:"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-[13px] font-semibold text-white transition-colors hover:bg-graphite"
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
    <footer className="border-t border-line bg-frost">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-5 py-5 text-[12px] text-muted lg:px-8">
        <div className="flex items-center gap-2">
          <ExosMark className="h-6 w-6 shrink-0" />
          <span className="font-semibold text-ink">Exos</span>
          <span>exos.tech</span>
        </div>
        <div className="flex gap-5">
          <a href="#products" className="hover:text-ink">Products</a>
          <a href="#platform" className="hover:text-ink">Platform</a>
          <a href="#waitlist" className="hover:text-ink">Waitlist</a>
        </div>
      </div>
    </footer>
  )
}

function ExosMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <ellipse cx="40" cy="40" rx="30" ry="10" transform="rotate(-24 40 40)" stroke="#7EA9FF" strokeWidth="5" strokeLinecap="round" />
      <circle cx="40" cy="40" r="16" fill="#255FD4" />
      <path d="M15.7 48.9C28.6 55.1 49.7 50.6 64.3 31.1" stroke="#7EA9FF" strokeWidth="5" strokeLinecap="round" />
      <path d="M33 28.4C36.2 27.1 40.4 26.7 44.2 27.7" stroke="#F8FAFC" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
