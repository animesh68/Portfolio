// Tactile mechanical cassette sound synthesizer using Web Audio API
class SoundEffects {
  private ctx: AudioContext | null = null
  private lastPlayTime: number = 0
  public enabled: boolean = false

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  public setEnabled(val: boolean) {
    this.enabled = val
    if (val) {
      this.initCtx()
    }
  }

  // Soft mechanical cassette tape insert click
  playCassetteClick() {
    if (!this.enabled) return

    // Debounce to prevent overlapping chaotic sounds on rapid clicks
    const nowMs = Date.now()
    if (nowMs - this.lastPlayTime < 180) return
    this.lastPlayTime = nowMs

    try {
      this.initCtx()
      if (!this.ctx) return

      const now = this.ctx.currentTime

      // 1. Soft mechanical plastic thump
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      const filter = this.ctx.createBiquadFilter()

      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(1000, now)

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(160, now)
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.06)

      // Very low volume, soft tactile click
      gain.gain.setValueAtTime(0.08, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start(now)
      osc.stop(now + 0.06)

      // 2. Secondary micro mechanical latch click
      const click = this.ctx.createOscillator()
      const clickGain = this.ctx.createGain()
      click.type = 'sine'
      click.frequency.setValueAtTime(950, now + 0.03)
      click.frequency.exponentialRampToValueAtTime(350, now + 0.06)
      clickGain.gain.setValueAtTime(0.03, now + 0.03)
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06)

      click.connect(clickGain)
      clickGain.connect(this.ctx.destination)
      click.start(now + 0.03)
      click.stop(now + 0.06)
    } catch {
      // Audio context fails gracefully without interrupting UI
    }
  }
}

export const soundFx = new SoundEffects()
