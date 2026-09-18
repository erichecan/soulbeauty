export const JANE_BOOKING_URL = "https://soulbeautyhealing.janeapp.com";

const janeDisciplineSlugs = new Set([
  "massage-therapy",
  "acupuncture",
  "day-spa",
  "medical-aesthetics",
  "social-work",
]);

const janeStaffIds: Record<string, number> = {
  "julia-zhuang": 2,
  "vinna-sun": 3,
  "jennifer-kung": 4,
  "chen-zhou": 5,
  "sherry-pu": 11,
  "yang-yuan-li": 13,
  "qian-feng": 18,
};

export function janeCategoryUrl(categorySlug: string) {
  return janeDisciplineSlugs.has(categorySlug)
    ? `${JANE_BOOKING_URL}/#/${categorySlug}`
    : JANE_BOOKING_URL;
}

export function janePractitionerUrl(practitionerSlug: string) {
  const staffId = janeStaffIds[practitionerSlug];
  return staffId ? `${JANE_BOOKING_URL}/#/staff_member/${staffId}` : JANE_BOOKING_URL;
}

export const janeLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
