const getCurrentDate = (): string => {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }).format(new Date())
}

export { getCurrentDate }
