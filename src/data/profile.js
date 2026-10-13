// Profile & Portfolio Configuration for Saiphh
// You can edit texts, avatar URL, images, and links anytime here!

export const profileData = {
  name: "Saiphh",
  role: "Roblox Studio Builder",
  experience: "5+ Years of Experience",
  tagline: "Roblox Studio Builder | 5+ Years of Experience",
  
  // Default Discord Avatar
  defaultAvatarUrl: "https://cdn.discordapp.com/avatars/1334249431993942036/3abcca88b9899bf68800861c1ba549f3.png?size=4096",
  localAvatarFallback: "/avatar.png",

  // Complete Description (Centered, readable & clean)
  description: {
    intro: "Hey! I'm a Roblox Studio Builder with over 5 years of building experience, specializing in Studs-style builds while being adaptable to a wide variety of building styles.",
    vision: "I'm passionate about creating detailed, visually appealing environments and bringing ideas to life through creative building. While Studs-style building is my main specialty, I'm comfortable adapting to different styles, themes, and project requirements to achieve the desired result.",
    quality: "I'm always focused on delivering quality builds, paying attention to detail, and making sure each project meets the client's vision.",
    specialties: [
      "Studs-style building",
      "Custom environments and structures",
      "Creative and detailed builds",
      "Adaptability to different building styles",
      "Client-focused projects"
    ]
  },

  // Gallery images for the 2-row infinite marquee carousel
  // Any image you add here will automatically appear in the carousel!
  galleryImages: [
    { id: 1, src: "/showcase/lowpoly-simulator-spawn-structure.png", title: "LowPoly Simulator Spawn Structure", alt: "LowPoly Simulator Spawn Structure" },
    { id: 2, src: "/showcase/lowpoly-spawn-for-arcade-car-game.png", title: "LowPoly Spawn For Arcade Car Game", alt: "LowPoly Spawn For Arcade Car Game" },
    { id: 3, src: "/showcase/obby-map-structure-fully-decorated.png", title: "Obby Map Structure Fully Decorated", alt: "Obby Map Structure Fully Decorated" },
    { id: 4, src: "/showcase/showcase-pads-for-vfx-gamepass.png", title: "ShowCase Pads for VFX-Gamepass", alt: "ShowCase Pads for VFX-Gamepass" },
    { id: 5, src: "/showcase/stud-style-convert-stand.png", title: "Stud Style Convert Stand", alt: "Stud Style Convert Stand" },
    { id: 6, src: "/showcase/stud-style-nature-background.png", title: "Stud Style Nature BackGround", alt: "Stud Style Nature BackGround" },
    { id: 7, src: "/showcase/stud-style-teleport-desert-biome.png", title: "Stud Style Teleport Desert Biome", alt: "Stud Style Teleport Desert Biome" },
    { id: 8, src: "/showcase/stud-style-simulator-map.png", title: "Stud Style Simulator Map", alt: "Stud Style Simulator Map" },
  ],

  // 5 Alternating Portfolio Parts (Right / Left layout)
  parts: [
    {
      id: "part-1",
      number: "01",
      badge: "Experience & Specialty",
      title: "Roblox Studio Builder & Studs-Style Specialist",
      // Text requested by user:
      content: "Hey! I'm a Roblox Studio Builder with over 5 years of building experience, specializing in **Studs-style builds** while being adaptable to a wide variety of building styles.",
      image: "/showcase/lowpoly-simulator-spawn-structure.png",
      imageAlt: "LowPoly Simulator Spawn Structure",
      align: "right", // Text on Right, Image on Left
      stats: [
        { label: "Experience", value: "5+ Years" },
        { label: "Core Style", value: "Studs" },
      ],
      tags: ["Roblox Studio", "Studs-Style", "Architecture", "Precision Alignment"]
    },
    {
      id: "part-2",
      number: "02",
      badge: "Vision & Environments",
      title: "Detailed & Visually Appealing Environments",
      // Text requested by user:
      content: "I'm passionate about creating detailed, visually appealing environments and bringing ideas to life through creative building.",
      image: "/showcase/lowpoly-spawn-for-arcade-car-game.png",
      imageAlt: "LowPoly Spawn For Arcade Car Game",
      align: "left", // Text on Left, Image on Right
      stats: [
        { label: "World Building", value: "Custom" },
        { label: "Atmosphere", value: "Immersive" },
      ],
      tags: ["Environment Design", "Atmospheric Lighting", "Scenery", "Creative World"]
    },
    {
      id: "part-3",
      number: "03",
      badge: "Versatility & Styles",
      title: "Adaptability to Diverse Building Styles",
      // Text requested by user:
      content: "While Studs-style building is my main specialty, I'm comfortable adapting to different styles, themes, and project requirements to achieve the desired result.",
      image: "/showcase/obby-map-structure-fully-decorated.png",
      imageAlt: "Obby Map Structure Fully Decorated",
      align: "right", // Text on Right, Image on Left
      stats: [
        { label: "Styles", value: "Versatile" },
        { label: "Themes", value: "Any Concept" },
      ],
      tags: ["Multi-Style", "Sci-Fi & Fantasy", "Modern & Classic", "Custom Themes"]
    },
    {
      id: "part-4",
      number: "04",
      badge: "Quality & Execution",
      title: "Delivering Quality Builds & Client Vision",
      // Text requested by user:
      content: "I'm always focused on delivering quality builds, paying attention to detail, and making sure each project meets the client's vision.",
      image: "/showcase/showcase-pads-for-vfx-gamepass.png",
      imageAlt: "ShowCase Pads for VFX-Gamepass",
      align: "left", // Text on Left, Image on Right
      stats: [
        { label: "Quality Focus", value: "100%" },
        { label: "Client Goal", value: "Top Priority" },
      ],
      tags: ["Attention to Detail", "High Polish", "Client Vision", "Game-Ready"]
    },
    {
      id: "part-5",
      number: "05",
      badge: "Skill Set",
      title: "My Specialities",
      // Text requested by user:
      content: "Here is a breakdown of what I specialize in when crafting Roblox worlds:",
      specialitiesList: [
        {
          title: "Studs-style building",
          desc: "Expertise in both retro and modern stud architecture, creating clean, recognizable aesthetics with flawless alignment."
        },
        {
          title: "Custom environments and structures",
          desc: "From expansive landscapes and terrain to unique landmarks, castles, futuristic hubs, and themed maps."
        },
        {
          title: "Creative and detailed builds",
          desc: "Rich textures, custom lighting setups, depth, and atmospheric balance that captivate players."
        },
        {
          title: "Adaptability to different building styles",
          desc: "Able to seamlessly transition between low-poly, realistic, cyberpunk, medieval, and stylized looks."
        },
        {
          title: "Client-focused projects",
          desc: "Transparent communication, regular visual progress updates, and builds aligned strictly with your design doc."
        }
      ],
      image: "/showcase/stud-style-convert-stand.png",
      imageAlt: "Stud Style Convert Stand",
      align: "right", // Text on Right, Image on Left
      stats: [
        { label: "Specialities", value: "5 Pillars" },
        { label: "Satisfaction", value: "Guaranteed" },
      ],
      tags: ["Custom Builds", "Studs Master", "Client-Focused", "End-to-End"]
    }
  ],

  // Contacts Section
  contact: {
    heading: "Get in Touch",
    // Exact user requirement text:
    message: "Looking for a builder who can bring your ideas to life? Feel free to contact me — I'm always open to new projects and collaborations!",
    links: [
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@saiphhz",
        handle: "@saiphhz",
        title: "𝔰𝔞𝔦𝔭𝔥𝔥 on TikTok",
        color: "#fe2c55"
      },
      {
        platform: "Discord",
        url: "https://discord.gg/bnPYZMvABA",
        handle: "Infinity Wonderful",
        title: "Infinity Wonderful on Discord",
        color: "#5865f2"
      },
      {
        platform: "GitHub",
        url: "https://github.com/saiphh-dev",
        handle: "saiphh-dev",
        title: "saiphh-dev on GitHub",
        color: "#f0f6fc"
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@fligoflego",
        handle: "@fligoflego",
        title: "Saiphh / fligoflego on YouTube",
        color: "#ff0000"
      },
      {
        platform: "Roblox",
        url: "https://www.roblox.com/communities/33742489/Infinity-Project-Studios#!/about",
        handle: "Infinity Project Studio's",
        title: "Infinity Project Studio's on Roblox",
        color: "#00a2ff"
      }
    ]
  }
};
