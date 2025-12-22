import { Analysis } from "./components/Analysis";
import { CTASection } from "./components/CTASection";
import { EmailForm } from "./components/EmailForm";
import { Evals } from "./components/Evals";
import { FAQ } from "./components/FAQ";
import { FeatureList } from "./components/FeatureList";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { SiteNav } from "./components/SiteNav";
import {Trusted} from "./components/trusted";
import { Why } from "./components/Why";

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,_theme(colors.gray.950)_0%,_theme(colors.indigo.900)_50%,_theme(colors.gray.950)_100%)] text-white">
      <SiteNav />
      <Hero />
      <Trusted/>
      <Analysis/>
      <FeatureList />
      <Evals/>
      <Why/>
      <EmailForm/>
      <FAQ/>
      <CTASection />
      <Footer/>
    </div>
  );
}

export default App;
