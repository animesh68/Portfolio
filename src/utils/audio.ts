// Tactile mechanical cassette sound synthesizer using Web Audio API
class SoundEffects {
  private ctx: AudioContext | null = null

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

  // Soft mechanical cassette tape insert click
  playCassetteClick() {
    try {
      this.initCtx()
      if (!this.ctx) return

      const now = this.ctx.currentTime
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      const filter = this.ctx.createBiquadFilter()

      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(1200, now)

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(180, now)
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.08)

      gain.gain.setValueAtTime(0.12, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start(now)
      osc.stop(now + 0.08)

      // Second micro click for latch mechanism
      const click = this.ctx.createOscillator()
      const clickGain = this.ctx.createGain()
      click.type = 'square'
      click.frequency.setValueAtTime(800, now + 0.04)
      clickGain.gain.setValueAtTime(0.04, now + 0.04)
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07)

      click.connect(clickGain)
      clickGain.connect(this.ctx.destination)
      click.start(now + 0.04)
      click.stop(now + 0.07)
    } catch {
      // Audio context might fail silently if blocked, which is completely fine
    }
  }
}

export const soundFx = new SoundEffects()
