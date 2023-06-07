export type Step = typeof step

export const step = {
  create: {
    name: "Personal Information",
    step: 1,
    nextStep: "/create/experience",
    prevStep: "",
  },
  experience: {
    name: "Experience",
    step: 2,
    nextStep: "/create/education",
    prevStep: "/create",
  },
  education: {
    name: "Education",
    step: 3,
    nextStep: "/create/organization",
    prevStep: "/create/experience",
  },
  organization: {
    name: "Organization",
    step: 4,
    nextStep: "/create/finalize",
    prevStep: "/create/education",
  },
  finalize: {
    name: "Finalize",
    step: 5,
    nextStep: "",
    prevStep: "/create/organization",
  },
}
