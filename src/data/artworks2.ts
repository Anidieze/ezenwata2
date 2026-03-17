import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.png";
import artwork6 from "@/assets/artwork-6.jpg";
import artwork7 from "@/assets/artwork-7.jpeg";
import artwork9 from "@/assets/artwork-9.png";
import artwork10 from "@/assets/artwork-10.png";
// import artwork11 from "@/assets/artwork-11.heif";
import artwork12 from "@/assets/artwork-12.jpg";
import artwork13 from "@/assets/artwork-13.png";
import artwork14 from "@/assets/artwork-14.png";
import artwork15 from "@/assets/artwork-15.jpeg";
import artwork16 from "@/assets/artwork-16.jpeg";
import artwork17 from "@/assets/artwork-17.jpeg";
import artwork18 from "@/assets/artwork-18.jpeg";
import artwork19 from "@/assets/artwork-19.jpeg";
import artwork20 from "@/assets/artwork-20.jpeg";
import artwork21 from "@/assets/artwork-21.jpeg";


export interface Artwork {
  id: string;
  title: string;
  year: string;
  medium: string;
  image: string;
  // status: "new" | "sold";
  // price: number;
  description: string;
  dimensions?: string;
}

export const artworks: Artwork[] = [
  {
    id: "trust-the-process",
    title: "Trust the Process",
    year: "2024",
    medium: "Digital Painting",
    image: artwork1,
    // status: "new",
    // price: 450,
    description: "A vibrant exploration of patience and growth through layered digital textures. This piece invites the viewer to embrace uncertainty and find beauty in the journey rather than the destination.",
    dimensions: '24" x 36"',
  },
  {
    id: "decolonizingthemind",
    title: "Decolonizing The Mind",
    year: "2021",
    medium: "Mixed Media",
    image: artwork2,
    // status: "sold",
    // price: 600,
    description: "An energetic celebration of African nightlife and cultural rhythms. Bold colors clash and harmonize, evoking the pulsating energy of a continent in motion.",
    dimensions: '30" x 40"',
  },
  {
    id: "family-dance-the-first-dance",
    title: "Family Dance the First Dance",
    year: "2024",
    medium: "Digital Painting",
    image: artwork3,
    // status: "new",
    // price: 350,
    description: "An intimate portrayal of familial bonds expressed through movement. The figures intertwine in a dance that speaks to tradition, love, and the passing of culture from one generation to the next.",
    dimensions: '20" x 28"',
  },
  {
    id: "genesis",
    title: "Genesis",
    year: "2025",
    medium: "Digital Painting",
    image: artwork4,
    // status: "sold",
    // price: 800,
    description: "The origin story reimagined through an African lens. Rich earth tones and celestial elements merge to create a narrative about beginnings, identity, and the sacred nature of creation.",
    dimensions: '36" x 48"',
  },
  {
    id: "demo-crazy",
    title: "Demo Crazy",
    year: "2025",
    medium: "Digital Painting",
    image: artwork5,
    // status: "new",
    // price: 500,
    description: "A bold political commentary on the state of democracy across the continent. Sharp lines and fragmented forms reflect the chaos and hope that coexist in the pursuit of true governance.",
    dimensions: '24" x 24"',
  },
  {
    id: "tukwunyewe-mu",
    title: "Tukwunyewe mu (Sit Beside Me)",
    year: "2021",
    medium: "Mixed Media",
    image: artwork6,
    // status: "new",
    // price: 550,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
    
      {
    id: "HeartofAnartist",
    title: "Heart of an Artist I",
    year: "2024",
    medium: "Digital Painting",
    image: artwork10,
    // status: "new",
    // price: 550,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
      {
    id: "NaSituationMakeCrayfishBend",
    title: "Na Situation Make Crayfish Bend",
    year: "2022",
    medium: "Installation",
    image: artwork12,
    // status: "new",
    // price: 550,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
      {
    id: "nwatakwochaaka",
    title: "Nwata Kwocha Aka",
    year: "2025",
    medium: "Digital Painting",
    image: artwork13,
    // status: "new",
    // price: 550,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
      {
    id: "withouthisvices",
    title: "Whats a Man without his vices",
    year: "2023",
    medium: "Digital Painting",
    image: artwork14,
    // status: "new",
    // price: 550,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
        {
    id: "trance",
    title: "After The Trance",
    year: "2023",
    medium: "Digital Painting",
    image: artwork15,
    // status: "new",
    // price: 550,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
          {
    id: "inofollow",
    title: "I no Follow",
    year: "2024",
    medium: "Digital Painting",
    image: artwork16,
    // status: "new",
    // price: 550,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
            {
    id: "newman",
    title: "Homo Novus 'New Man' ",
    year: "2024",
    medium: "Digital Painting",
    image: artwork17,
    // status: "new",
    // price: 550,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
  {
    id: "lockedin",
    title: "Locked In",
    year: "2025",
    medium: "Digital Painting",
    image: artwork18,
    // status: "new",
    // price: 550,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
            {
    id: "treeofknowles",
    title: "Tree of Knowles",
    year: "2026",
    medium: "Digital Painting",
    image: artwork19,
    // status: "new",
    // price: 10000,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
      {
    id: "deje",
    title: "Deje",
    year: "2024",
    medium: "Digital Painting",
    image: artwork20,
    // status: "new",
    // price: 10000,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
      {
    id: "grit",
    title: "Grit",
    year: "2024",
    medium: "Digital Painting",
    image: artwork21,
    // status: "new",
    // price: 10000,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
  
];
