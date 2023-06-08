const breadCrumbsAllowedPaths = new Map([
  ["ugolok-studenta", "Уголок студента"],
  ["prices", "Услуги"],
  ["about_us", "О нас"],
  ["work", "Стать автором"],
]);

export const parseUrlToCrumbs = (url: string, activeItem?: string, includeBase = true) => {
  let tempUrl = url;
  const crumbs: Crumb[] = [];

  if (activeItem) {
    crumbs.unshift({ name: activeItem, url: "" });
  }

  while (tempUrl) {
    const path = tempUrl.slice(tempUrl.lastIndexOf("/") + 1);
    crumbs.unshift({ name: breadCrumbsAllowedPaths.get(path) ?? path, url: tempUrl });
    tempUrl = url.slice(0, tempUrl.lastIndexOf("/"));
  }

  if (includeBase) {
    crumbs.unshift({ name: "Главная", url: "/" });
  }

  return crumbs;
};

export const generateJsonLdFromCrumbs = (crumbs: Crumb[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(index < crumbs.length - 1 && { item: "https://bezperesdach.ru" + crumb.url }),
    })),
  };
};
