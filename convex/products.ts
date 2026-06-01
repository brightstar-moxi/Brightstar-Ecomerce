// import { query } from "./_generated/server";

// export const getProducts = query({
//   handler: async (ctx) => {
//     return await ctx.db
//       .query("products")
//       .collect();
//   },
// });

//  import { mutation, query } from "./_generated/server";
// import { v } from "convex/values";

// export const createProduct = mutation({
//   args: {
//     name: v.string(),
//     description: v.string(),
//     category: v.string(),
//     price: v.number(),
//     stock: v.number(),
//     image: v.string(),
//   },

//   handler: async (ctx, args) => {
//     return await ctx.db.insert(
//       "products",
//       args
//     );
//   },
// });

// export const getProducts = query({
//   handler: async (ctx) => {
//     return await ctx.db
//       .query("products")
//       .collect();
//   },
// });

import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createProduct = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    category: v.string(),
    price: v.number(),
    stock: v.number(),
    image: v.string(),
    status: v.string(),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("products", args);
  },
});

export const getProducts = query({
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});

export const deleteProduct = mutation({
  args: {
    id: v.id("products"),
  },

  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const updateProduct = mutation({
  args: {
    id: v.id("products"),

    name: v.string(),
    description: v.string(),
    category: v.string(),
    image: v.string(),
    price: v.number(),
    stock: v.number(),
    status: v.string(),
  },

  handler: async (ctx, args) => {

    const { id, ...data } = args;

    await ctx.db.patch(
      id,
      data
    );
  },
});