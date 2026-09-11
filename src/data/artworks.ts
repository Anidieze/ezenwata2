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


export interface Artwork {
  id: string;
  title: string;
  year: string;
  medium: string;
  image: string;
  status: "new" | "sold";
  price: number;
  description: string;
  tool?: string;
  dimensions?: string;
}

export const artworks: Artwork[] = [
        {
    id: "trance",
    title: "After The Trance Print",
    year: "2023",
    medium: "Digital Painting",
    image: artwork15,
    status: "new",
    price: 550,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
     {
    id: "withouthisvices",
    title: "Whats a Man without his vices Print",
    year: "2023",
    medium: "Digital Painting",
    image: artwork14,
    status: "new",
    price: 500,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },

    {
    id: "trust-the-process",
    title: "Trust the Process Print",
    year: "2024",
    medium: "Digital Painting",
    image: artwork1,
    status: "new",
    price: 400,
    description: "A vibrant exploration of patience and growth through layered digital textures. This piece invites the viewer to embrace uncertainty and find beauty in the journey rather than the destination.",
    dimensions: '24" x 36"',
  },

       {
    id: "inofollow",
    title: "I no Follow Print",
    year: "2024",
    medium: "Mixed Media",
    image: artwork16,
    status: "new",
    price: 400,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },

              {
    id: "newman",
    title: "Homo Novus 'New Man' Print ",
    year: "2024",
    medium: "Digital Painting",
    image: artwork17,
    status: "new",
    price: 550,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },

  {
    id: "decolonizingthemind",
    title: "Decolonizing The Mind",
    year: "2023",
    medium: "Mixed Media",
    image: artwork2,
    status: "sold",
    price: 600,
    description: "An energetic celebration of African nightlife and cultural rhythms. Bold colors clash and harmonize, evoking the pulsating energy of a continent in motion.",
    dimensions: '30" x 40"',
  },
    {
    id: "lockedin",
    title: "Locked In Print",
    year: "2025",
    medium: "Digital Painting",
    image: artwork18,
    status: "new",
    price: 650,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
     
            {
    id: "treeofknowles",
    title: "Tree of Knowles Print",
    year: "2026",
    medium: "Print",
    image: artwork19,
    status: "new",
    price: 10000,
    description: "An invitation to intimacy and shared experience. This piece explores the quiet power of presence — the simple act of sitting beside someone and sharing space, breath, and silence.",
    dimensions: '28" x 36"',
  },
  
];
