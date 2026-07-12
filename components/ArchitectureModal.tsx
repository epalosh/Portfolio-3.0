'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ArchitectureModal() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <button className="proj__btn" onClick={() => setOpen(true)} aria-label="Architecture" aria-haspopup="dialog">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="6" y="1.5" width="4" height="3.4" rx="1" />
          <rect x="1.5" y="11.1" width="4" height="3.4" rx="1" />
          <rect x="10.5" y="11.1" width="4" height="3.4" rx="1" />
          <path d="M8 4.9v3.2M3.5 11.1V8.1h9v3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Architecture
      </button>

      {mounted && open &&
        createPortal(
          <div
            className="arch-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Satori Inference architecture"
            onClick={() => setOpen(false)}
          >
            <div className="arch-modal__panel" onClick={(e) => e.stopPropagation()}>
              <header className="arch-modal__bar">
                <div className="arch-modal__brand">
                  <img className="arch-modal__logo" src="/images/satori-inference-logo.png" alt="" />
                  <div>
                    <span className="arch-modal__eyebrow">Satori Inference</span>
                    <h2 className="arch-modal__title">Architecture &amp; Deployment</h2>
                  </div>
                </div>
                <button className="arch-modal__close" onClick={() => setOpen(false)} aria-label="Close">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" strokeLinecap="round" />
                  </svg>
                </button>
              </header>

              <div className="arch-modal__scroll">
                <section className="arch-section">
                  <h3 className="arch-h">Overview</h3>
                  <p className="arch-p">
                    Satori Inference lets someone who is not an engineer build an interactive data visualization by
                    describing it in plain language. A user connects a data source such as a Postgres database, a
                    warehouse, or a Google Sheet, then types a request. An AI agent then turns that into a
                    working visualization that runs live against the user&rsquo;s real data and can be shared with
                    their team.
                  </p>
                  <p className="arch-p">
                    The core engineering challenge is <strong>safety</strong>. Most of the design is therefore about drawing and enforcing boundaries:
                    between trusted and untrusted code, between one customer and the next, and between asking for
                    data and being able to reach it.
                  </p>
                </section>

                <section className="arch-section">
                  <h3 className="arch-h">Deployment topology</h3>
                  <p className="arch-p">
                    The production deployment runs on AWS. Users reach the app through Cloudflare DNS and a public
                    load balancer. The other three services run on a
                    private network and are reached over internal service discovery. Supporting infrastructure like
                    the database, queues, object storage, secrets, and monitoring sits alongside the compute inside that private network.
                  </p>

                  <figure className="arch-figure">
                    <DeploymentDiagram />
                  </figure>
                </section>

                <section className="arch-section">
                  <h3 className="arch-h">Tenant isolation</h3>
                  <p className="arch-p">
                    Each organization gets its own <strong>schema</strong>. When a request arrives, the data-access layer scopes the connection, for that
                    transaction only, to look exclusively inside the requesting organization&rsquo;s namespace. This guarantee sits below the application code, so an application bug cannot
                    disable it, much like how an operating system gives each process a separate address space.
                  </p>
                  <p className="arch-p">
                    New schemas are created automatically. When an account signs up, the authentication provider
                    sends an event and the provisioning service builds the tables that organization needs. Those
                    events can occasionally arrive more than once, so the setup takes a lock and is written to be
                    idempotent.
                  </p>
                </section>

                <section className="arch-section">
                  <h3 className="arch-h">Generating and running AI code safely</h3>
                  <p className="arch-p">
                    When a user describes what they want, the request goes to the data-access layer, which hands it
                    to an AI agent. The system uses managed agents rather than a single prompt, so the agent can act
                    before answering: it can inspect a source&rsquo;s schema, pull sample rows, and run a test
                    query. It explores the data first and writes the visualization second, instead of guessing at
                    the structure. Different tasks use different models, so the hardest ones like generation and
                    repair use the most capable model while lighter tasks use a faster, cheaper one.
                  </p>
                  <p className="arch-p">
                    The AI produces a React component that has to run in the user&rsquo;s browser, but code written
                    by a language model cannot be trusted. It is treated as untrusted software and placed in a
                    <strong> sandbox</strong>: the generated component runs inside a locked-down iframe with no
                    access to the surrounding page, so no cookies, no session, and no keys. It can only render
                    itself and request data by messaging the parent, which acts as a gatekeeper. When the component
                    asks to run a query, the parent confirms the source belongs to the user&rsquo;s organization,
                    runs the SQL through a validator, then fetches and returns the results.
                  </p>
                  <p className="arch-p">
                    The <strong>SQL validator</strong> parses each query into a syntax tree, the same kind of
                    structure a compiler builds, and walks it to confirm the query is a read-only SELECT and nothing
                    else. Anything that would modify or delete data is rejected, and the number of returned rows is
                    capped automatically. These controls are independent, so defeating one does not defeat the
                    others. One useful consequence is self-healing visualizations: if a generated component throws
                    at runtime, the page captures the error and sends it to a fixer agent that rewrites the
                    component to correct the problem.
                  </p>
                </section>

                <section className="arch-section">
                  <h3 className="arch-h">Handling slow work</h3>
                  <p className="arch-p">
                    Generating a visualization takes several seconds. Generation requests are placed on a queue and handled
                    by a fixed number of workers, a standard producer-consumer arrangement. When demand rises the
                    queue lengthens instead of the system failing, and results stream back to the browser
                    incrementally so the user sees progress rather than a frozen loading state.
                  </p>
                  <p className="arch-p">
                    Compilation results are cached. The AI&rsquo;s output is compiled into something the browser can
                    run, and that result is stored under a hash of the exact source, so identical input is never
                    compiled twice.
                  </p>
                </section>

                <section className="arch-section">
                  <h3 className="arch-h">Deployment</h3>
                  <p className="arch-p">
                    The four services run as containers on AWS ECS Fargate, so there are no servers to manage
                    directly. They sit behind a single load balancer that terminates HTTPS and forwards traffic to
                    the gateway, with a web application firewall in front that blocks internal-only routes. The
                    database is managed Postgres running across multiple availability zones, so it fails over to a
                    standby automatically if one zone has a problem.
                  </p>
                  <p className="arch-p">
                    Deployment is automated and repeatable. All secrets, including database credentials, API keys,
                    and the token services use to authenticate to each other, live in AWS Secrets Manager rather
                    than in code or images. A release is triggered by pushing a version tag to GitHub, which builds
                    each service, pushes the images to a registry, runs any pending database migrations, and rolls
                    out the new version. If a new version fails its health checks, AWS rolls back automatically.
                  </p>
                  <p className="arch-p">
                    The system is built to be observable. Structured logs go to CloudWatch, and alarms fire on
                    conditions like a service crash-looping, high database CPU, or elevated error rates. Sensitive
                    actions are recorded in an audit log archived to tamper-resistant storage, which supports the
                    SOC&nbsp;2 compliance customers expect. Much of the infrastructure is defined in Terraform, so
                    the important settings are written down and reviewable instead of configured by hand.
                  </p>
                </section>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}

/* ── AWS deployment topology ── */
function DeploymentDiagram() {
  return (
    <svg viewBox="0 0 480 662" role="img" aria-label="AWS deployment topology diagram">
      <defs>
        <marker id="arch-a2" markerWidth="7" markerHeight="7" refX="3.2" refY="3" orient="auto">
          <path className="arch-arrow" d="M0 0.5 L4.5 3 L0 5.5 Z" />
        </marker>
      </defs>

      {/* Users */}
      <rect className="arch-store" x="175" y="12" width="130" height="32" rx="8" />
      <text className="arch-t" x="240" y="32">Users (browser)</text>

      <line className="arch-line" x1="240" y1="44" x2="240" y2="52" />
      <line className="arch-line" x1="240" y1="66" x2="240" y2="74" markerEnd="url(#arch-a2)" />
      <text className="arch-flow" x="240" y="60">HTTPS · app.satori-inference.com</text>

      {/* Cloudflare */}
      <rect className="arch-box" x="160" y="78" width="160" height="34" rx="8" />
      <text className="arch-t" x="240" y="99">Cloudflare DNS</text>

      <line className="arch-line" x1="240" y1="112" x2="240" y2="140" markerEnd="url(#arch-a2)" />

      {/* AWS boundary */}
      <rect className="arch-bound" x="6" y="146" width="468" height="500" rx="12" />
      <text className="arch-tab" x="20" y="163">AWS · us-east-1</text>

      {/* ALB */}
      <rect className="arch-box" x="64" y="176" width="352" height="50" rx="10" />
      <text className="arch-t" x="240" y="197">Application Load Balancer</text>
      <text className="arch-s" x="240" y="213">443 HTTPS · ACM cert · WAF blocks internal routes</text>

      <line className="arch-line" x1="240" y1="226" x2="240" y2="234" />
      <line className="arch-line" x1="240" y1="248" x2="240" y2="254" markerEnd="url(#arch-a2)" />
      <text className="arch-flow" x="240" y="242">forward to gateway target group</text>

      {/* ECS cluster boundary */}
      <rect className="arch-bound" x="18" y="260" width="444" height="194" rx="10" />
      <text className="arch-tab" x="30" y="276">ECS cluster “satori-cluster” · Fargate</text>

      {/* Gateway */}
      <rect className="arch-public" x="140" y="286" width="200" height="46" rx="9" />
      <text className="arch-t" x="240" y="306">Gateway (Next.js)</text>
      <text className="arch-s" x="240" y="322">PUBLIC · backend-for-frontend</text>

      <line className="arch-line" x1="240" y1="332" x2="240" y2="340" />
      <line className="arch-line" x1="240" y1="354" x2="240" y2="360" markerEnd="url(#arch-a2)" />
      <text className="arch-flow" x="240" y="348">internal token + tenant headers</text>

      {/* three internal services */}
      <rect className="arch-box" x="28" y="366" width="134" height="76" rx="9" />
      <text className="arch-t" x="95" y="392">Python API</text>
      <text className="arch-s" x="95" y="411">webhooks</text>
      <text className="arch-s" x="95" y="427">provisioning</text>

      <rect className="arch-box" x="173" y="366" width="134" height="76" rx="9" />
      <text className="arch-t" x="240" y="392">Data-access</text>
      <text className="arch-s" x="240" y="411">connectors · SQL</text>
      <text className="arch-s" x="240" y="427">AI agents</text>

      <rect className="arch-box" x="318" y="366" width="134" height="76" rx="9" />
      <text className="arch-t" x="385" y="392">Thumbnail</text>
      <text className="arch-s" x="385" y="411">headless Chromium</text>
      <text className="arch-s" x="385" y="427">SQS-driven</text>

      {/* down to stores */}
      <line className="arch-line" x1="95" y1="446" x2="95" y2="500" markerEnd="url(#arch-a2)" />
      <line className="arch-line" x1="240" y1="446" x2="240" y2="500" markerEnd="url(#arch-a2)" />
      <line className="arch-line" x1="385" y1="446" x2="385" y2="500" markerEnd="url(#arch-a2)" />

      {/* stores */}
      <rect className="arch-store" x="28" y="504" width="134" height="76" rx="9" />
      <text className="arch-t" x="95" y="530">RDS Postgres 16</text>
      <text className="arch-s" x="95" y="549">Multi-AZ · encrypted</text>
      <text className="arch-s" x="95" y="565">schema-per-org</text>

      <rect className="arch-store" x="173" y="504" width="134" height="76" rx="9" />
      <text className="arch-t" x="240" y="530">SQS queues</text>
      <text className="arch-s" x="240" y="549">agent-jobs</text>
      <text className="arch-s" x="240" y="565">thumbnail-req · DLQ</text>

      <rect className="arch-store" x="318" y="504" width="134" height="76" rx="9" />
      <text className="arch-t" x="385" y="530">S3 buckets</text>
      <text className="arch-s" x="385" y="549">thumbnails · audit</text>
      <text className="arch-s" x="385" y="565">app · Object Lock</text>

      {/* cross-cutting */}
      <rect className="arch-box" x="28" y="596" width="424" height="44" rx="8" />
      <text className="arch-s" x="240" y="614" style={{ fill: 'var(--ink-2)', fontWeight: 600 }}>Cross-cutting AWS services</text>
      <text className="arch-s" x="240" y="629">Secrets Manager · KMS · CloudWatch → SNS · Cloud Map (satori.local)</text>
    </svg>
  )
}
