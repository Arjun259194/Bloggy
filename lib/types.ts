import { Category, Subcategory } from "@prisma/client";

export type Cat = Category & { subcategories: Subcategory[] };