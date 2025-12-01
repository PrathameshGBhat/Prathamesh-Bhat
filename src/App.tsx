import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MouseParticles from "react-mouse-particles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <MouseParticles
        g={1} // gravity
        num={10} // number of particles
        color="white" // any CSS color
        cull="footer" // optional: avoid particles over footer
        level={6} // detail level
      />

      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Your main app routes */}
        <main className="relative z-10">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
