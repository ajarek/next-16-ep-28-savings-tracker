import { Button } from "@/components/ui/button"
import { Forward } from "lucide-react"

export default function Home() {
  return (
    <div className='min-h-screen w-full max-w-8xl mx-auto p-4'>
      <main className='flex-1 w-full flex flex-col gap-4'>
        <section className='max-w-7xl mx-auto  flex flex-col items-center relative gap-8'>
          <div className='text-center z-10'>
            <span className="font-['Inter'] text-sm uppercase tracking-[0.3em] text-primary mb-4 block">
              Redefining Private Wealth
            </span>
            <h1 className='text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] max-w-4xl mx-auto mb-8'>
              Command Your <br className="hidden sm:block" /> Financial Future
            </h1>
            <p className='text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed px-4 sm:px-0'>
              The obsidian ledger for the modern investor. Secure your assets in
              the vault of tomorrow with precision tracking and absolute
              clarity.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0'>
              <Button className='w-full sm:w-auto bg-linear-to-br from-primary to-primary/80 px-10 h-16 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all'>
                Open Your Vault
              </Button>
              <Button className='w-full sm:w-auto flex justify-center items-center gap-2 px-10 h-16 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all group'>
                Live Demo{" "}
                <span className=' group-hover:translate-x-1 transition-transform'>
                  <Forward className='size-8' />
                </span>
              </Button>
            </div>
          </div>

          <div className='w-full max-w-5xl relative z-20 group'>
            <div className='absolute -inset-1 bg-linear-to-r from-primary/30 to-transparent rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000'></div>
            <div className=' rounded-[2rem] p-4 border border-white/5 overflow-hidden shadow-2xl'>
              <div className='-low rounded-2xl overflow-hidden aspect-auto sm:aspect-16/8 flex flex-col min-h-[300px]'>
                <div className='p-4 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0'>
                  <div>
                    <p className='text-muted-foreground text-xs sm:text-sm font-label uppercase tracking-widest mb-1'>
                      Total Vault Value
                    </p>
                    <p className='text-4xl sm:text-5xl font-bold tracking-tighter'>
                      $1,248,392.00
                    </p>
                  </div>
                  <div className='flex gap-2'>
                    <span className='bg-tertiary/10 text-tertiary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap'>
                      +12.4%
                    </span>
                  </div>
                </div>

                <div className='grow relative flex items-end px-4 sm:px-8 pb-4 gap-1 sm:gap-2 pt-10 sm:pt-0'>
                  <div className='flex-1  h-[40%] rounded-t-lg relative overflow-hidden'>
                    <div className='absolute bottom-0 w-full h-[60%] bg-primary'></div>
                  </div>

                  <div className='flex-1  h-[60%] rounded-t-lg relative overflow-hidden'>
                    <div className='absolute bottom-0 w-full h-[80%] bg-primary opacity-80'></div>
                  </div>

                  <div className='flex-1  h-[55%] rounded-t-lg relative overflow-hidden'>
                    <div className='absolute bottom-0 w-full h-[70%] bg-primary'></div>
                  </div>

                  <div className='flex-1  h-[90%] rounded-t-lg relative overflow-hidden'>
                    <div className='absolute bottom-0 w-full h-full bg-linear-to-t from-primary to-primary/80'></div>
                    <div className='absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]'></div>
                  </div>

                  <div className='flex-1  h-[75%] rounded-t-lg relative overflow-hidden'>
                    <div className='absolute bottom-0 w-full h-[85%] bg-primary opacity-90'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 border-y border-white/5 -low/30'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8'>
            <div className='text-muted-foreground font-label tracking-widest uppercase text-xs text-center md:text-left'>
              Trusted by over <span className=' font-bold'>12,000</span> wealth
              builders
            </div>
            <div className='flex flex-wrap justify-center gap-6 sm:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700'>
              <div className=' font-black text-xl sm:text-2xl tracking-tighter'>
                SOLSTICE
              </div>
              <div className=' font-black text-xl sm:text-2xl tracking-tighter'>
                AETHER
              </div>
              <div className=' font-black text-xl sm:text-2xl tracking-tighter'>
                ORACLE
              </div>
              <div className=' font-black text-xl sm:text-2xl tracking-tighter'>
                VOID.CAPITAL
              </div>
            </div>
          </div>
        </section>

        <section className='max-w-7xl mx-auto px-4 sm:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
            <div className='p-8 sm:p-10 rounded-[2rem] -low border border-white/5 transition-all duration-300 group'>
              <div className='w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform'>
                <span className='material-symbols-outlined text-primary text-3xl'>
                  analytics
                </span>
              </div>
              <h3 className=' text-2xl font-bold  mb-4'>Precision Tracking</h3>
              <p className='text-muted-foreground leading-relaxed'>
                Every cent accounted for with granular detail. Real-time updates
                across all your disparate accounts consolidated into a single
                obsidian view.
              </p>
            </div>
            <div className='p-8 sm:p-10 rounded-[2rem] border border-primary/20 shadow-2xl shadow-primary/5 group'>
              <div className='w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8'>
                <span
                  className='material-symbols-outlined  text-3xl'
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  security
                </span>
              </div>
              <h3 className=' text-2xl font-bold  mb-4'>Obsidian Security</h3>
              <p className='text-muted-foreground leading-relaxed'>
                Military-grade encryption and biometric vault keys. Your data
                never leaves your control, protected by our proprietary
                zero-knowledge architecture.
              </p>
            </div>
            <div className='p-8 sm:p-10 rounded-[2rem] -low border border-white/5 transition-all duration-300 group'>
              <div className='w-14 h-14 bg-tertiary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform'>
                <span className='material-symbols-outlined text-tertiary text-3xl'>
                  trending_up
                </span>
              </div>
              <h3 className=' text-2xl font-bold  mb-4'>Strategic Growth</h3>
              <p className='text-muted-foreground leading-relaxed'>
                Advanced predictive modeling and automated rebalancing
                suggestions. Watch your net worth evolve with data-driven
                strategic insights.
              </p>
            </div>
          </div>
        </section>

        <section className='-low py-12 sm:py-16 overflow-hidden'>
          <div className='max-w-7xl mx-auto px-4 sm:px-8'>
            <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center'>
              <div className='w-full md:w-5/12 text-center md:text-left'>
                <span className='text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block'>
                  The Interface
                </span>
                <h2 className='text-4xl sm:text-5xl font-extrabold mb-6 sm:mb-8 leading-tight'>
                  Mastery Over Your Assets
                </h2>
                <p className='text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 sm:mb-10'>
                  We&apos;ve eliminated the clutter of traditional banking apps.
                  Our dashboard uses dynamic weighting to highlight what matters
                  most: your goals, your trajectory, and your peace of mind.
                </p>
                <div className='space-y-6'>
                  <div className='flex gap-4 items-start'>
                    <div className='mt-1 text-tertiary'>
                      <span className='material-symbols-outlined'>
                        check_circle
                      </span>
                    </div>
                    <div>
                      <h4 className=' font-bold'>Customizable Bento Widgets</h4>
                      <p className='text-muted-foreground text-sm'>
                        Arrange your financial world exactly how you think about
                        it.
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-4 items-start'>
                    <div className='mt-1 text-tertiary'>
                      <span className='material-symbols-outlined'>
                        check_circle
                      </span>
                    </div>
                    <div>
                      <h4 className=' font-bold'>Smart Liquidity Heatmaps</h4>
                      <p className='text-muted-foreground text-sm'>
                        Instantly visualize where your capital is parked and how
                        it&apos;s performing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-7/12 relative mt-8 md:mt-0'>
                <div className='bg-[#1a1a1a] rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative z-10'>
                  <div className='flex justify-between items-center mb-6 sm:mb-10'>
                    <div className='flex gap-2'>
                      <div className='w-3 h-3 rounded-full bg-error-dim'></div>
                      <div className='w-3 h-3 rounded-full bg-[#ffcc00]'></div>
                      <div className='w-3 h-3 rounded-full bg-tertiary-dim'></div>
                    </div>
                    <div className='px-3 sm:px-4 py-1 rounded-full text-[10px] text-muted-foreground uppercase tracking-widest font-bold'>
                      Main Dashboard
                    </div>
                  </div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    <div className='col-span-1 sm:col-span-2 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/5'>
                      <div className='flex justify-between items-center'>
                        <h5 className=' font-bold'>Growth Momentum</h5>
                        <span className='text-primary material-symbols-outlined'>
                          bolt
                        </span>
                      </div>
                      <div className='mt-4 h-32 w-full flex items-end gap-1'>
                        <div className='flex-1 bg-primary/20 h-[30%] rounded-sm'></div>
                        <div className='flex-1 bg-primary/20 h-[45%] rounded-sm'></div>
                        <div className='flex-1 bg-primary/20 h-[40%] rounded-sm'></div>
                        <div className='flex-1 bg-primary/20 h-[60%] rounded-sm'></div>
                        <div className='flex-1 bg-primary/20 h-[55%] rounded-sm'></div>
                        <div className='flex-1 bg-primary/40 h-[70%] rounded-sm'></div>
                        <div className='flex-1 bg-primary/40 h-[85%] rounded-sm'></div>
                        <div className='flex-1 bg-primary h-full rounded-sm'></div>
                      </div>
                    </div>
                    <div className='rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/5'>
                      <p className='text-xs text-muted-foreground font-bold uppercase mb-2'>
                        Vaulted
                      </p>
                      <p className='text-xl sm:text-2xl font-bold tracking-tight'>
                        $842k
                      </p>
                      <div className='mt-4 w-full h-1  rounded-full overflow-hidden'>
                        <div className='w-[85%] h-full bg-primary'></div>
                      </div>
                    </div>
                    <div className='rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/5'>
                      <p className='text-xs text-muted-foreground font-bold uppercase mb-2'>
                        Liquidity
                      </p>
                      <p className='text-xl sm:text-2xl font-bold tracking-tight'>
                        $158k
                      </p>
                      <div className='mt-4 w-full h-1  rounded-full overflow-hidden'>
                        <div className='w-[40%] h-full bg-tertiary'></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='absolute -right-10 -bottom-10 w-64 h-64  rounded-3xl p-6 border border-white/10 z-20 hidden lg:block shadow-2xl'>
                  <h6 className='  font-bold mb-4'>Top Asset</h6>
                  <div className='flex items-center gap-4'>
                    <div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center'>
                      <span className='material-symbols-outlined text-primary'>
                        diamond
                      </span>
                    </div>
                    <div>
                      <p className=' font-bold text-sm'>Obsidian Stock</p>
                      <p className='text-tertiary text-xs font-bold'>+24.5%</p>
                    </div>
                  </div>
                  <div className='mt-6 flex flex-col gap-2'>
                    <div className='w-full h-2 bg-white/5 rounded-full'></div>
                    <div className='w-4/5 h-2 bg-white/5 rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='max-w-7xl mx-auto px-4 sm:px-8 '>
          <div className='bg-linear-to-br from-surface-container-high to-surface-container-lowest rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center relative overflow-hidden border border-white/5'>
            <div className='absolute inset-0 obsidian-gradient opacity-50'></div>
            <div className='absolute top-0 right-0 w-[400px] h-[400px] rounded-full -translate-y-1/2 translate-x-1/2'></div>
            <div className='relative z-10'>
              <h2 className='text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 sm:mb-8 tracking-tighter'>
                Your Future Deserves <br className="hidden sm:block" /> A Better Foundation.
              </h2>
              <p className='text-lg sm:text-xl max-w-xl mx-auto mb-8 sm:mb-12'>
                Join the next generation of private wealth management. Secure
                your spot in the vault.
              </p>
              <Button className='w-full sm:w-auto bg-linear-to-br from-primary to-primary/80  px-8 sm:px-12 h-14 sm:h-16 rounded-xl sm:rounded-2xl font-black text-lg sm:text-xl shadow-[0_20px_50px_rgba(255,143,111,0.3)] hover:scale-105 active:scale-95 transition-all duration-300'>
                Open Your Vault
              </Button>
              <p className='mt-8  font-label text-xs uppercase tracking-widest'>
                No credit card required • Secure Onboarding
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className='w-full py-6 sm:py-4 px-4 sm:px-8 border-t relative z-20 text-center md:text-left'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto'>
          <div className='flex flex-col items-center md:items-start gap-2'>
            <div className='text-xl font-black'>Ember Vault</div>
            <p className="font-['Inter'] text-sm uppercase tracking-widest text-muted-foreground">
              © 2026 Ember Vault. The Obsidian Ledger.
            </p>
          </div>
          <div className='flex flex-wrap justify-center gap-8'>
            <a
              className="font-['Inter'] text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors opacity-80 hover:opacity-100"
              href='#'
            >
              Privacy Policy
            </a>
            <a
              className="font-['Inter'] text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors opacity-80 hover:opacity-100"
              href='#'
            >
              Terms of Service
            </a>
            <a
              className="font-['Inter'] text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors opacity-80 hover:opacity-100"
              href='#'
            >
              Financial Disclosure
            </a>
            <a
              className="font-['Inter'] text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors opacity-80 hover:opacity-100"
              href='#'
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
