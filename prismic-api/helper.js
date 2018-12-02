export function linkResolver(doc) {
  if (doc.type === "post") {
    return `/writing/${doc.uid}`;
  }
  return "/";
}
