import AuraWave from "../presence/AuraWave";
import { getGreeting } from "../../utils/greeting";

type WelcomePanelProps = {
  isScrolled: boolean;
};

export default function WelcomePanel({
  isScrolled
}: WelcomePanelProps) {
  return (
    <section className="aura-hero">
      <div className={`welcome-copy ${isScrolled ? "is-hidden" : ""}`}>
        <h1>{getGreeting()}, Kevin.</h1>
        <p>AURA is ready to assist you.</p>
      </div>

      <div className="aura-hero-spacer" />

      <div className="aura-hero-wave">
        <AuraWave state="success" />
      </div>
    </section>
  );
}