import { PrismaPg } from "@prisma/adapter-pg";
import { config } from "dotenv";
import { PrismaClient } from "../src/generated/prisma/client";

config({ path: ".env.local" });

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

const offerings = [
  {
    slug: "registered-massage-therapy",
    name: "Registered Massage Therapy (RMT)",
    summary: "Relieve pain, reduce tension, restore mobility.",
    bullets: [
      "Relieve pain and muscle tension",
      "Improve mobility and function",
      "Support injury recovery",
      "Reduce stress and promote relaxation",
    ],
    imageUrl: "/images/services/rmt.jpg",
    iconKey: "lotus",
    sortOrder: 1,
  },
  {
    slug: "spa-massage",
    name: "Massage / Spa Massage",
    summary: "Relax, rejuvenate and restore your natural balance.",
    bullets: [
      "Relax, rejuvenate and de-stress",
      "Improve circulation",
      "Release tension and restore balance",
      "Support your overall well-being",
    ],
    imageUrl: "/images/services/spa-massage.jpg",
    iconKey: "leaf",
    sortOrder: 2,
  },
  {
    slug: "certified-acupuncture",
    name: "Certified Acupuncture",
    summary: "Support your health, balance your energy.",
    bullets: [
      "Support your natural healing",
      "Balance your energy (Qi)",
      "Relieve pain and reduce stress",
      "Improve overall health and wellness",
    ],
    imageUrl: "/images/services/acupuncture.jpg",
    iconKey: "face",
    sortOrder: 3,
  },
  {
    slug: "facial-beauty-treatments",
    name: "Facial & Beauty Treatments",
    summary: "Refresh your skin, reveal your natural glow.",
    bullets: [
      "Refresh and revitalize your skin",
      "Improve skin tone and texture",
      "Support a healthy, radiant glow",
      "Personalized treatments for your goals",
    ],
    imageUrl: "/images/services/facial.jpg",
    iconKey: "calendar",
    sortOrder: 4,
  },
];

const categories = [
  { slug: "massage-therapy", name: "Massage Therapy", sortOrder: 1 },
  { slug: "acupuncture", name: "Acupuncture", sortOrder: 2 },
  { slug: "day-spa", name: "Day Spa", sortOrder: 3 },
  { slug: "medical-aesthetics", name: "Medical Aesthetics", sortOrder: 4 },
];

const bookableServices = [
  {
    slug: "rmt-60",
    name: "Registered Massage Therapy (RMT)",
    durationMin: 60,
    priceCents: 12000,
    imageUrl: "/images/booking/rmt.jpg",
    sortOrder: 1,
  },
  {
    slug: "hot-stone-75",
    name: "Hot Stone Massage",
    durationMin: 75,
    priceCents: 15000,
    imageUrl: "/images/booking/hot-stone.jpg",
    sortOrder: 2,
  },
  {
    slug: "deep-tissue-60",
    name: "Deep Tissue Massage",
    durationMin: 60,
    priceCents: 13000,
    imageUrl: "/images/booking/deep-tissue.jpg",
    sortOrder: 3,
  },
  {
    slug: "relaxation-60",
    name: "Relaxation Massage",
    durationMin: 60,
    priceCents: 12000,
    imageUrl: "/images/booking/relaxation.jpg",
    sortOrder: 4,
  },
  {
    slug: "prenatal-60",
    name: "Prenatal Massage",
    durationMin: 60,
    priceCents: 12000,
    imageUrl: "/images/booking/prenatal.jpg",
    sortOrder: 5,
  },
];

// title 取自客户 Jane 站各人实际开诊的科别
const practitioners = [
  {
    slug: "chen-zhou",
    name: "Chen Zhou",
    title: "Acupuncturist",
    photoUrl: "/images/practitioners/chen-zhou.png",
  },
  {
    slug: "jennifer-kung",
    name: "Jennifer Kung",
    title: "Facial & Beauty Specialist",
    photoUrl: "/images/practitioners/jennifer-kung.jpg",
  },
  {
    slug: "julia-zhuang",
    name: "Julia Zhuang",
    title: "RMT & Acupuncturist",
    photoUrl: "/images/practitioners/julia-zhuang.jpg",
  },
  {
    slug: "sherry-pu",
    name: "Sherry Pu",
    title: "Registered Social Worker",
    photoUrl: "/images/practitioners/sherry-pu.png",
  },
  {
    slug: "qian-feng",
    name: "Qian Feng",
    title: "Acupuncturist",
    photoUrl: "/images/practitioners/qian-feng.jpg",
  },
  {
    slug: "vinna-sun",
    name: "Vinna Sun",
    title: "Facial & Beauty Specialist",
    photoUrl: "/images/practitioners/vinna-sun.jpg",
  },
  {
    slug: "yang-yuan-li",
    name: "Yang Yuan Li",
    title: "Acupuncturist",
    photoUrl: "/images/practitioners/yang-yuan-li.png",
  },
];

const testimonials = [
  {
    id: "primary",
    quote:
      "Professional, calming and truly restorative. I always leave feeling better — body and mind.",
    sortOrder: 1,
  },
  {
    id: "about",
    quote:
      "Soul Beauty is my go-to for self care. Professional, kind, and truly healing.",
    sortOrder: 2,
  },
  {
    id: "contact",
    quote:
      "Wellness begins with a conversation. We're here to support you on your journey.",
    sortOrder: 3,
  },
];

async function main() {
  await prisma.siteSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      address: "2900 Steeles Ave E Unit 26A, Thornhill, ON L3T 4X1",
      phone1: "437-669-2077",
      phone2: "905-762-8887",
      email: "info.soulbeautyheal@gmail.com",
      hours: "Tue–Sun 10:00 AM – 6:00 PM",
      hours2: "Closed Monday",
    },
  });

  for (const offering of offerings) {
    await prisma.serviceOffering.upsert({
      where: { slug: offering.slug },
      update: offering,
      create: offering,
    });
  }

  for (const category of categories) {
    await prisma.serviceCategory.upsert({
      where: { slug: category.slug },
      update: category,
      create: category,
    });
  }

  const massage = await prisma.serviceCategory.findUniqueOrThrow({
    where: { slug: "massage-therapy" },
  });

  for (const service of bookableServices) {
    await prisma.bookableService.upsert({
      where: { slug: service.slug },
      update: { ...service, categoryId: massage.id },
      create: { ...service, categoryId: massage.id },
    });
  }

  for (const [index, practitioner] of practitioners.entries()) {
    await prisma.practitioner.upsert({
      where: { slug: practitioner.slug },
      update: { ...practitioner, sortOrder: index + 1 },
      create: { ...practitioner, sortOrder: index + 1 },
    });
  }

  for (const testimonial of testimonials) {
    const shared = {
      rating: 5,
      headline: "A Trusted Wellness Destination",
      subline: "Compassionate care. Lasting results. A healthier, brighter you.",
    };
    await prisma.testimonial.upsert({
      where: { id: testimonial.id },
      update: { ...testimonial, ...shared },
      create: { ...testimonial, ...shared },
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
