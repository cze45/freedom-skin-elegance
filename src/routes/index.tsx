import { createFileRoute } from "@tanstack/react-router";

import heroSkin from "../assets/hero-skin.jpg";
import tretmanLice from "../assets/tretman-lice.jpg";
import tretmanRuke from "../assets/tretman-ruke.jpg";
import tretmanNoge from "../assets/tretman-noge.jpg";
import tretmanTelo from "../assets/tretman-telo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Libertad Laserski centar | Laserska epilacija Novi Sad" },
      {
        name: "description",
        content:
          "Vrhunska bezbolna laserska epilacija u Novom Sadu. Rezultati vidljivi već od prvog tretmana. Ocena 4.9★ na Google-u. Zakažite besplatne konsultacije: 063 7070936.",
      },
      {
        property: "og:title",
        content: "Libertad Laserski centar | Laserska epilacija Novi Sad",
      },
      {
        property: "og:description",
        content:
          "Bezbolna laserska epilacija sa rezultatima već od prvog tretmana. Petefi Šandora 172, Novi Sad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "063 7070936";
const PHONE_LINK = "tel:+381637070936";


const tretmani = [
  { naziv: "Lice i brada", slika: tretmanLice, alt: "Nežan tretman lica — orhideja" },
  { naziv: "Ruke", slika: tretmanRuke, alt: "Tretman ruku — mekana nega" },
  { naziv: "Noge", slika: tretmanNoge, alt: "Tretman nogu — laserski aparat u salonu" },
  { naziv: "Celo telo", slika: tretmanTelo, alt: "Celo telo — opuštajući ambijent salona" },
];

const faq = [
  {
    pitanje: "Da li tretman boli?",
    odgovor:
      "Ne. Zahvaljujući sistemu hlađenja najnovije generacije, naši klijenti tretman opisuju kao potpuno bezbolan — oseća se tek blago peckanje. Bezbolnost važi čak i za najosetljivije regije.",
  },
  {
    pitanje: "Koliko tretmana je potrebno?",
    odgovor:
      "Broj tretmana je individualan i zavisi od tipa kože i dlačica, ali se u proseku preporučuje 6 do 8 tretmana za trajne rezultate. Prve promene primetićete već nakon prvog tretmana.",
  },
  {
    pitanje: "Kako se pripremiti za tretman?",
    odgovor:
      "Regiju koju tretiramo potrebno je obrijati brijačem 24h pre dolaska. Četiri nedelje pre tretmana izbegavajte depilaciju voskom i čupanje dlačica pincetom, kao i intenzivno sunčanje.",
  },
  {
    pitanje: "Da li je laserska epilacija bezbedna?",
    odgovor:
      "Apsolutno. Koristimo sertifikovanu opremu poslednje generacije, a svaki tretman izvode obučeni stručnjaci koji pre početka analiziraju vaš tip kože i podešavaju aparat posebno za vas.",
  },
  {
    pitanje: "Koliko traje jedan tretman?",
    odgovor:
      "Zavisi od regije — manje regije poput lica traju 10–15 minuta, dok tretman celog tela traje do sat vremena. Uz svaki tretman vas čeka besplatna kafa i prijatna atmosfera.",
  },
];

function Index() {
  return (
    <div className="font-sans text-foreground bg-background">
      {/* Navigacija */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
          <a href="/" className="text-2xl font-serif tracking-widest uppercase">
            Libertad
          </a>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#o-nama" className="hover:text-primary transition-colors">
              O nama
            </a>
            <a href="#tretmani" className="hover:text-primary transition-colors">
              Tretmani
            </a>
            <a href="#iskustva" className="hover:text-primary transition-colors">
              Iskustva
            </a>
            <a href="#kontakt" className="hover:text-primary transition-colors">
              Kontakt
            </a>
          </div>
          <a
            href={PHONE_LINK}
            className="bg-foreground text-background px-6 py-3 rounded-full text-xs uppercase tracking-wider hover:bg-primary transition-colors shadow-xl"
          >
            Zakažite termin
          </a>

        </nav>
      </header>

      {/* Hero */}
      <section className="relative px-6 py-12 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center space-x-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-sm">
            <span className="text-primary tracking-tight">★★★★★</span>
            <span className="text-xs font-semibold tracking-wide">
              4.9/5 na osnovu 65+ Google recenzija
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] italic">
            Sloboda koju pruža{" "}
            <span className="not-italic text-primary">savršeno glatka</span>{" "}
            koža.
          </h1>
          <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
            Iskusite najsavremeniju lasersku epilaciju u Novom Sadu. Potpuno
            bezbolno, delotvorno već od prvog tretmana — uz vrhunsku kafu i
            atmosferu u koju ćete se zaljubiti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_LINK}
              className="inline-flex justify-center items-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg italic"
            >
              Zakažite besplatne konsultacije
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroSkin}
            alt="Svilena tkanina i orhideja — simbol glatke kože u Libertad salonu"
            width={800}
            height={1000}
            className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl max-w-[200px] hidden lg:block">
            <p className="text-sm italic text-primary font-medium mb-1">
              "Efekti vidljivi odmah"
            </p>
            <p className="text-[10px] uppercase tracking-widest text-foreground/50">
              Garantovan rezultat
            </p>
          </div>
        </div>
      </section>

      {/* Zašto Libertad */}
      <section id="o-nama" className="bg-card py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 italic">
              Zašto Libertad?
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              Jer glatka koža ne mora da bude kompromis — kod nas je iskustvo
              koje se pamti.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">Prijatna atmosfera</h3>
              <p className="text-foreground/60 leading-relaxed">
                Zaboravite na hladne klinike. Kod nas vas čeka miris sveže
                kafe, opuštajuća muzika i posvećenost svakom detalju vašeg
                komfora — od prvog koraka do poslednjeg.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">Vrhunska tehnologija</h3>
              <p className="text-foreground/60 leading-relaxed">
                Koristimo najnoviju generaciju lasera sa naprednim sistemom
                hlađenja, koji omogućava potpuno bezbolan tretman čak i na
                najosetljivijim regijama.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">Stručan pristup</h3>
              <p className="text-foreground/60 leading-relaxed">
                Naš tim čine sertifikovani stručnjaci koji pažljivo analiziraju
                vaš tip kože i dlačica, kako bi svaki tretman bio prilagođen
                baš vama — za maksimalne i trajne rezultate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tretmani */}
      <section id="tretmani" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Tretmani epilacije
          </h2>
          <p className="text-foreground/60 italic">
            Individualni pristup svakoj regiji
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {tretmani.map((t) => (
            <div key={t.naziv} className="group cursor-pointer">
              <img
                src={t.slika}
                alt={t.alt}
                width={600}
                height={600}
                loading="lazy"
                className="w-full aspect-square object-cover rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-95"
              />
              <h4 className="text-center font-medium">{t.naziv}</h4>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-foreground/50 mt-10 max-w-lg mx-auto">
          Tretman je bezbolan, bezbedan i trajan — dlačice se uklanjaju iz
          korena, a koža ostaje glatka i bez iritacija mesecima unapred.
        </p>
      </section>

      {/* Utisci klijenata */}
      <section id="iskustva" className="bg-foreground text-background py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-8 py-2">
                <p className="text-xl italic mb-4">
                  "Delotvorna epilacija već nakon prvog tretmana, prezadovoljna
                  sam uslugom i ambijentom!"
                </p>
                <p className="text-sm uppercase tracking-widest text-primary">
                  Valentina
                </p>
              </div>
              <div className="border-l-2 border-primary/40 pl-8 py-2">
                <p className="text-xl italic mb-4">
                  "Great treatment, pleasant atmosphere, free coffee — sve
                  preporuke za Libertad!"
                </p>
                <p className="text-sm uppercase tracking-widest text-primary">
                  Jelena
                </p>
              </div>
              <div className="border-l-2 border-primary/40 pl-8 py-2">
                <p className="text-xl italic mb-4">
                  "Konačno tretman koji ne boli. Osoblje je izuzetno ljubazno i
                  stručno, a rezultati su fantastični."
                </p>
                <p className="text-sm uppercase tracking-widest text-primary">
                  Milica
                </p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-serif text-5xl mb-6 italic">
                Reč naših klijenata
              </h2>
              <p className="text-background/60 mb-8">
                Ponosni smo na ocenu 4.9 od 5, zasnovanu na preko 65 recenzija
                na Google-u — ona odražava našu posvećenost vašoj lepoti i
                samopouzdanju.
              </p>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 italic"
              >
                Pridružite se zadovoljnim klijentima
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-4xl text-center mb-16">
          Često postavljana pitanja
        </h2>
        <div className="space-y-6">
          {faq.map((item) => (
            <div key={item.pitanje} className="border-b border-border pb-6">
              <h4 className="font-semibold mb-2">{item.pitanje}</h4>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {item.odgovor}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-card py-24 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-4xl md:text-5xl italic">
            Vaša glatka koža počinje ovde.
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Pozovite nas — zakazaćemo vaše besplatne konsultacije i odgovorićemo
            na sva pitanja.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={PHONE_LINK}
              className="inline-flex justify-center items-center bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg italic"
            >
              Pozovite: {PHONE}
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 border-b border-foreground/10 pb-16">
            <div className="space-y-4">
              <div className="text-2xl font-serif tracking-widest uppercase">
                Libertad
              </div>
              <p className="text-sm text-foreground/60">
                Petefi Šandora 172, Novi Sad
                <br />
                Vaša oaza mira i glatke kože.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-foreground/40">
                Radno vreme
              </p>
              <p className="text-sm">Otvoreno do 19:00h</p>
              <p className="text-sm">Subota: po zakazivanju</p>
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-foreground/40">
                Kontakt & zakazivanje
              </p>
              <a href={PHONE_LINK} className="block text-xl font-medium">
                {PHONE}
              </a>
              <div className="flex space-x-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline italic hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="viber://chat?number=%2B381637070936"
                  className="text-sm underline italic hover:text-primary transition-colors"
                >
                  Viber
                </a>
                <a
                  href="https://www.google.com/maps/search/Libertad+Laserski+centar+Petefi+%C5%A0andora+172+Novi+Sad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline italic hover:text-primary transition-colors"
                >
                  Lokacija
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-foreground/40">
            <p>&copy; 2026 Libertad Laserski centar. Sva prava zadržana.</p>
            <p>Glatka koža bez kompromisa</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
