import { prisma } from "@/lib/db/client";

export function getServiceOfferings() {
  return prisma.serviceOffering.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}

export function getPractitioners() {
  return prisma.practitioner.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}

export function getFeaturedTestimonial() {
  return prisma.testimonial.findFirst({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}

export function getSiteSettings() {
  return prisma.siteSettings.findUnique({ where: { id: "default" } });
}

export function getBookingCategories() {
  return prisma.serviceCategory.findMany({
    orderBy: { sortOrder: "asc" },
    include: {
      services: {
        where: { isActive: true },
        orderBy: { sortOrder: "asc" },
      },
    },
  });
}
