import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "+ de 10 Projets Complétés",
  "+ de 3 ans d'expérience",
  "+ de 200 abonnés sur YouTube",
  "Créateur de contenu",
  "Musicien confirmé",
  "Gamer confirmé",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
