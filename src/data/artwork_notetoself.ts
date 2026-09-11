import notetoself1 from "@/assets/notetoself-1.png";
import notetoself2 from "@/assets/notetoself-2.png";
import notetoself3 from "@/assets/notetoself-3.png";
import notetoself4 from "@/assets/notetoself-4.png";
import notetoself5 from "@/assets/notetoself-5.png";

export interface Artwork {
  id: string;
  title: string;
  year: string;
  medium: string;
  image: string;
  description: string;
  tool?: string;
  dimensions?: string;
}

export const artworks: Artwork[] = [
  {
    id: "what_was_the_rush",
    title: "what was the rush",
    year: "2026",
    medium: "Digital Painting",
    image: notetoself1,
    tool: "Microsoft 3D Paint",
    description: "This painting is about that moment after graduation when you finally have the freedom you always wanted, only to realize that figuring out what to do with that freedom is a whole different hustle. Sometimes I find myself asking, what was the rush to finish school? I thought I was ready for the real world, but the reality has been overwhelming in ways I didn't expect. There's so much to figure out, you realize you have to work twice as hard, stretch yourself, and still try to keep up. It can be overwhelming, especially when it feels like everyone else is moving ahead of you. But I'm still trying. Still learning. Still pushing. Maybe that's what this season is about — figuring it out as I go and trusting the process.",
  },
  {
    id: "wake_up_call",
    title: "wake up call",
    year: "2026",
    medium: "Digital Painting",
    image: notetoself2,
    tool: "Microsoft 3D Paint",
    description: "Some days, there's so much to do, but you're simply overwhelmed and anxious to what the day might bring and what you have to do so you do nothing. You're not sleeping anymore but you are not awake. This painting talks about those days you fall into that deep tiredness but you happen to have someone that gives you a wake up call and helps keep you pushing.",
  },
  {
    id: "stay_ready",
    title: "stay ready",
    year: "2026",
    medium: "Digital Painting",
    image: notetoself3,
    tool: "Microsoft 3D Paint",
    description: "A painting about the uncertainty of waiting for your turn, your opportunity, your calling to call back. They say, 'If it's your calling, it will keep calling.' This piece is a reminder to stay ready, even through the doubt, disappointment, and emotional rollercoaster of waiting. Keep your head down. Keep working. Keep praying. And when the opportunity comes, be ready to answer.",
  },
  {
    id: "prayer",
    title: "prayer",
    year: "2026",
    medium: "Digital Painting",
    image: notetoself4,
    tool: "Microsoft 3D Paint",
    description: "A quiet moment of a family beginning their day in prayer. Mum leads, while the children are still a little sleepy — tells you it was one of those long morning devotion kind of days. This painting is a frozen moment I can always return to when life feels hard or confusing — a reminder that, in prayer, there is strength, peace, and home. 'A family that prays together stays together.'",
  },
  {
    id: "to_each_his_cross",
    title: "to each his cross",
    year: "2026",
    medium: "Digital Painting",
    image: notetoself5,
    tool: "Microsoft 3D Paint",
    description: "A painting about the individuality of the struggles we all face in our daily lives. No matter how young or mature we may be, each of us carries a burden. Some burdens are visible, while others remain hidden beneath the surface. Just as our faces are different, so are our challenges and struggles. The cross serves as a symbol of the burdens, worries, and stresses that weigh on us — our own experiences, fears, responsibilities, and silent battles. Yet, despite the weight, we continue to carry them and move forward. A reflection on our shared humanity: different lives, different struggles, but a common understanding of what it means to endure and keep going.",
  },
];

export default artworks;