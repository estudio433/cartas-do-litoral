import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/LandingPage";
import DiarioIndex from "@/pages/DiarioIndex";
import DiarioPost from "@/pages/DiarioPost";
import Cartas from "@/pages/Cartas";
import Lugares from "@/pages/Lugares";
import Comunidade from "@/pages/Comunidade";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/diario" component={DiarioIndex} />
      <Route path="/diario/:slug" component={DiarioPost} />
      <Route path="/cartas" component={Cartas} />
      <Route path="/lugares" component={Lugares} />
      <Route path="/comunidade" component={Comunidade} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="flex flex-col min-h-[100dvh]">
            <Navbar />
            <main className="flex-1 flex flex-col">
              <Router />
            </main>
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
