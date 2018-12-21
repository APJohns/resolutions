export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getFunResolution() {
  const resolutions = [
    "Go to the gym twice a week.",
    "Learn how to make tiramisu.",
    "Finally get around to finishing Lost.",
    "Learn how to make sick websites like this one."
  ];

  return rando(resolutions);
}
