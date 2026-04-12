import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
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
import Feira from "@/pages/Feira";
import Presente from "@/pages/Presente";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const queryClient = new QueryClient();

const STANDALONE_ROUTES = ["/feira"];

function Layout() {
  const [location] = useLocation();
  const isStandalone = STANDALONE_ROUTES.includes(location);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {!isStandalone && <Navbar />}
      <main className="flex-1 flex flex-col">
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/diario" component={DiarioIndex} />
          <Route path="/diario/:slug" component={DiarioPost} />
          <Route path="/cartas" component={Cartas} />
          <Route path="/lugares" component={Lugares} />
          <Route path="/comunidade" component={Comunidade} />
          <Route path="/feira" component={Feira} />
          <Route path="/presente" component={Presente} />
          <Route component={NotFound} />
        </Switch>
      </main>
      {!isStandalone && <Footer />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Layout />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
