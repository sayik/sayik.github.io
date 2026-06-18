
"use client";

import { useState } from "react";
import { synthesizeImpactPoints } from "@/ai/flows/synthesize-impact-points";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Sparkles, ArrowRight, CheckCircle2, Loader2, GitPullRequest } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ImpactSynthesizer() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [points, setPoints] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSynthesize = async () => {
    if (!url) return;
    setLoading(true);
    try {
      const result = await synthesizeImpactPoints({ githubUrl: url });
      setPoints(result.impactPoints);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Synthesis Failed",
        description: "Could not analyze the provided GitHub URL.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-headline uppercase tracking-widest">GenAI Assistant</span>
          </div>
          <h2 className="text-4xl font-bold font-headline leading-tight">Impact Synthesizer</h2>
          <p className="text-lg text-muted-foreground">
            Paste a GitHub Pull Request or Repository URL to generate high-impact, 
            technical summaries of your contributions.
          </p>
          
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Input
                placeholder="https://github.com/owner/repo/pull/123"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="pl-10 h-12 bg-card border-border font-body"
              />
              <GitPullRequest className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
            <Button 
              onClick={handleSynthesize} 
              disabled={loading || !url} 
              className="h-12 font-headline group"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Synthesize Impact
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="md:col-span-7">
          <Card className="border-2 border-dashed border-border bg-card/50 min-h-[300px] flex flex-col justify-center">
            {points.length > 0 ? (
              <CardContent className="p-10 space-y-6">
                <div className="space-y-4">
                  {points.map((point, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="mt-1">
                        <CheckCircle2 className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-lg leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            ) : (
              <div className="text-center p-12 space-y-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto opacity-50">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground font-headline">Resulting impact points will appear here</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
