import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box, Typography } from "@mui/material";
import { BRAND } from "./theme/brand";
import CompanyRegister from "./pages/auth/CompanyRegister";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

/**
 * Trimmed down from the full app's App.tsx — only wires up the four
 * pages in scope for this test pass (Signup, Login, Forgot Password,
 * Reset Password). The original app also routes to a marketing home
 * page, onboarding, an authenticated dashboard, and a platform admin
 * console; none of that is included here.
 *
 * Post-auth redirects (resolvePostAuthRoute in lib/api.ts) point at
 * /dashboard/overview, /onboarding/plan, etc. Those routes intentionally
 * don't exist in this trimmed app — Playwright tests can still assert
 * on the resulting URL (e.g. via page.waitForURL) without those pages
 * needing to render anything.
 */
const theme = createTheme({
  palette: {
    primary: { main: BRAND.primary, dark: BRAND.primaryDark, light: BRAND.primaryLight },
    secondary: { main: BRAND.accent, dark: BRAND.accentDark },
    background: { default: BRAND.bg, paper: "#ffffff" },
    text: { primary: BRAND.ink, secondary: BRAND.muted },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Sora", "Inter", sans-serif' },
    h2: { fontFamily: '"Sora", "Inter", sans-serif' },
    h3: { fontFamily: '"Sora", "Inter", sans-serif' },
  },
  shape: { borderRadius: 12 },
});

// Minimal stand-in for the real marketing home page — AuthLayout's logo
// links here, and resolvePostAuthRoute never points here, so this just
// needs to exist, not be complete.
const HomeStub: React.FC = () => (
  <Box>
    {/* Navbar */}
    <Box
      component="nav"
      sx={{
        display: "flex",
        gap: 3,
        p: 3,
        borderBottom: "1px solid #ddd",
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 1000,
      }}
    >
      <a href="#how-it-works">How it works</a>
      <a href="#static-vs-dynamic">Static vs Dynamic</a>
      <a href="#reach">Reach</a>
      <a href="#plans">Plans</a>
      <a href="#faq">FAQ</a>
    </Box>

    {/* Home */}
    <Box sx={{ p: 6 }}>
      <Typography variant="h3">
        AgriQR
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Trusted QR Compliance for Agri-Inputs
      </Typography>
    </Box>

    {/* How It Works */}
    <Box
      id="how-it-works"
      sx={{ p: 8, minHeight: "400px" }}
    >
      <Typography variant="h4">
        How It Works
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Learn how AgriQR works from registration to QR verification.
      </Typography>
    </Box>

    {/* Static vs Dynamic */}
    <Box
      id="static-vs-dynamic"
      sx={{ p: 8, minHeight: "400px" }}
    >
      <Typography variant="h4">
        Static vs Dynamic
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Compare static and dynamic QR codes.
      </Typography>
    </Box>

    {/* Reach */}
    <Box
      id="reach"
      sx={{ p: 8, minHeight: "400px" }}
    >
      <Typography variant="h4">
        Reach
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Reach customers and improve product traceability.
      </Typography>
    </Box>

    {/* Plans */}
    <Box
      id="plans"
      sx={{ p: 8, minHeight: "400px" }}
    >
      <Typography variant="h4">
        Plans
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Choose the AgriQR plan that fits your business.
      </Typography>
    </Box>

    {/* FAQ */}
    <Box
      id="faq"
      sx={{ p: 8, minHeight: "400px" }}
    >
      <Typography variant="h4">
        FAQ
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Frequently asked questions about AgriQR.
      </Typography>
    </Box>
  </Box>
);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeStub />} />
          <Route path="/company/register" element={<CompanyRegister />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
