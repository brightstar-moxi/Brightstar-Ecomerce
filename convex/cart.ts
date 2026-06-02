import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addToCart = mutation({
  args: {
    userId: v.id("users"),
    productId: v.id("products"),
  },

  handler: async (ctx, args) => {

    const existingCartItem = await ctx.db
      .query("carts")
      .filter((q) =>
        q.and(
          q.eq(q.field("userId"), args.userId),
          q.eq(q.field("productId"), args.productId)
        )
      )
      .first();

    if (existingCartItem) {

      await ctx.db.patch(
        existingCartItem._id,
        {
          quantity:
            existingCartItem.quantity + 1,
        }
      );

      return;
    }

    await ctx.db.insert("carts", {
      userId: args.userId,
      productId: args.productId,
      quantity: 1,
    });
  },
});

// export const getCart = query({
//   args: {
//     userId: v.id("users"),
//   },

//   handler: async (ctx, args) => {

//     return await ctx.db
//       .query("carts")
//       .filter((q) =>
//         q.eq(
//           q.field("userId"),
//           args.userId
//         )
//       )
//       .collect();
//   },
// });
export const getCart = query({
  args: {
    userId: v.id("users"),
  },

  handler: async (ctx, args) => {
    const cartItems = await ctx.db
      .query("carts")
      .filter((q) =>
        q.eq(
          q.field("userId"),
          args.userId
        )
      )
      .collect();

    return await Promise.all(
      cartItems.map(async (item) => {
        const product = await ctx.db.get(
          item.productId
        );

        return {
          ...item,
          product,
        };
      })
    );
  },
});