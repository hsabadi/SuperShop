import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import BrowserRouter from react-router-dom حذفها من هنا
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import OrderTracking from "./pages/OrderTracking";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* حذف BrowserRouter من هنا */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
