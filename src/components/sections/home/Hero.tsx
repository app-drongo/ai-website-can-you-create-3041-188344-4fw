'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Navigate to home for demo
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true); // Open demo video modal
  };

  const handleBadgeAction = () => {
    router.push('/'); // Navigate to home for updates
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleBadgeAction}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              data-action-type="badge-link"
            >
              <Zap className="size-4 mr-2" />
              New: Lightning-Fast Deployment Engine
              <ArrowRight className="ml-2 size-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Deploy Applications
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                In Seconds
              </span>
              Not Hours
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              QuickLaunch revolutionizes deployment with AI-powered optimization and zero-config
              setup. Ship faster, scale smarter, and focus on what matters most - your code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                Deploy Your First App
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                See Live Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-2 border-background" />
                </div>
                <span className="ml-2">
                  <Users className="inline size-4 mr-1" />
                  25,000+ developers trust us
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">4.8/5 developer rating</span>
              </div>
            </div>
          </div>

          {/* Hero Dashboard Mockup */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-5xl">
              <div className="rounded-2xl border bg-card p-2 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-br from-muted/50 to-muted aspect-video flex items-center justify-center relative overflow-hidden">
                  {/* Mock Terminal Interface */}
                  <div className="absolute inset-4 bg-background/90 rounded-lg p-4 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-muted">
                      <div className="flex gap-1">
                        <div className="size-3 rounded-full bg-red-500/60" />
                        <div className="size-3 rounded-full bg-yellow-500/60" />
                        <div className="size-3 rounded-full bg-green-500/60" />
                      </div>
                      <span className="text-muted-foreground">QuickLaunch Terminal</span>
                    </div>
                    <div className="space-y-2 text-foreground">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">$</span>
                        <span>quicklaunch deploy</span>
                      </div>
                      <div className="text-muted-foreground">✓ Analyzing codebase...</div>
                      <div className="text-muted-foreground">✓ Optimizing build process...</div>
                      <div className="text-primary">
                        🚀 Deployed to https://your-app.quicklaunch.dev
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Performance Metrics */}
              <div className="absolute -top-4 -left-4 bg-card border rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Deploy Time</div>
                <div className="text-lg font-bold text-primary">12s</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card border rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Success Rate</div>
                <div className="text-lg font-bold text-primary">99.9%</div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-card border rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Global CDN</div>
                <div className="text-lg font-bold text-primary">180+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border rounded-2xl p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-foreground">QuickLaunch Demo</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(false)}>
                ✕
              </Button>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="size-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Demo video would play here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
