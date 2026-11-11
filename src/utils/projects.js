import { portfolioProjects } from "../data/profile";
import { toSlug } from "./slug";

export const mergeProjects = (records = []) => {
  const result = [...portfolioProjects];
  for (const record of Array.isArray(records) ? records : []) {
    const title = record?.Title || record?.title;
    if (!title) continue;
    const project = {
      ...record,
      id: String(record.id ?? toSlug(title)),
      Title: title,
      Img: record.Img || record.img,
      Description: record.Description || record.description || "",
      Link: record.Link || record.link || "",
      Github: record.Github || record.github || "",
      TechStack: record.TechStack || record.tech_stack || [],
      Features: record.Features || record.features || [],
    };
    if (!result.some((item) => String(item.id) === project.id || toSlug(item.Title) === toSlug(project.Title) || item.Aliases?.includes(toSlug(project.Title)))) {
      result.push(project);
    }
  }
  return result;
};

export const readCachedProjects = () => {
  try {
    return mergeProjects(JSON.parse(localStorage.getItem("projects")));
  } catch {
    return mergeProjects();
  }
};

export const findProjectBySlug = (slug) => readCachedProjects().find(
  (project) => toSlug(project.Title) === slug || project.Aliases?.includes(slug),
);
