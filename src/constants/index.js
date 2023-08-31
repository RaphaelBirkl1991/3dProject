import {
    mobile,
    backend,
    creator,
    web,
    carrent,
    jobit,
    tripguide,
    logo
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Übersicht",
    },
    {
      id: "work",
      title: "Versionierung",
    },
    {
      id: "contact",
      title: "Kontakt",
    },
  ];
  
  const services = [
    {
      title: "präventiv",
      icon: web,
    },
    {
      title: "branchenweit",
      icon: mobile,
    },
    {
      title: "gezielt",
      icon: backend,
    },
    {
      title: "unkompliziert",
      icon: creator,
    },
  ];
  
 
  const experiences = [
    {
      title: "MVP",
      company_name: "Minimal Viable Product",
      icon: logo,
      iconBg: "#050816",
      date: "spätestens: Juli 2024",
      points: [
        "Alarmierung von Kollegen die sich in der Nähe befinden.",
        "Automatische Übertragung des Standortes",
        "Alarmierung abbrechen",
        "Rückmeldung wie viele Kollegen wurden",
        "Scope: Private Sicherheit"
      ],
    },
    {
      title: "Version 2",
      company_name: "Präventive Alarmierung",
      icon: logo,
      iconBg: "#050816",
      date: "voraussichtlich Oktober 2024",
      points: [
        "Präventive Anforderung bei sich anbahnenden Problemen",
        "Umkreiserweiterung für Mitarbeiter mit KFZ",
        "CloseBy-Vorschläge zur Stärkung des 'Wir-Gefühls",
      ],
    },
    {
      title: "Version 3",
      company_name: "weitere Kräfte",
      icon: logo,
      iconBg: "#050816",
      date: "Jan 2022 - Jan 2023",
      points: [
        "bei Erfolg; Einbindung von Kollegen aus dem Rettungsdienst",
        "CrossTrainings einpflegen (z.B. FirstResponder etc)",
        "Zwei Alarmierungsarten für RTW-Besatzung: Schutz / allg. Hilfe",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: logo,
    //   iconBg: "#050816",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, experiences, testimonials, projects };