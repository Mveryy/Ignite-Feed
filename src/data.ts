export interface PostsProps {
  id: number;
  author: Author;
  content: Content[]
  publishedAt: Date;
};

interface Content {
    type: "paragraph" | "link";
    content: string;
}

interface Author {
    avatarUrl: string;
    name: string;
    role: string;
}

export const posts: PostsProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Yoshimivi.png",
      name: "Victor Yoshimi",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 jane.design/doctorcare"},
      { type: "link", content: "#novoprojeto #nlw #rocketseat"},
    ],
    publishedAt: new Date("2022-05-03 19:04:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rafaelkunzler.png",
      name: "Rafael Kunzler",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 jane.design/doctorcare"},
      { type: "link", content: "#novoprojeto #nlw #rocketseat"},
    ],
    publishedAt: new Date("2022-05-14 19:04:00"),
  },
];