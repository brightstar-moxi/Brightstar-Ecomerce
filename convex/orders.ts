import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createOrder = mutation({
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

    if (cartItems.length === 0) {
      throw new Error("Cart is empty");
    }

    let total = 0;

    for (const item of cartItems) {
      const product = await ctx.db.get(
        item.productId
      );

      total +=
        (product?.price || 0) *
        item.quantity;
    }

    const orderId = await ctx.db.insert(
      "orders",
      {
        userId: args.userId,
        total,
        status: "Pending",
      }
    );

    return orderId;
  },
});

export const getOrders = query({
  args: {
    userId: v.id("users"),
  },

  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .filter((q) =>
        q.eq(
          q.field("userId"),
          args.userId
        )
      )
      .collect();
  },
});