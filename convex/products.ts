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