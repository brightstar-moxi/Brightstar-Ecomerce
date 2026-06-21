import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

//create orders

export const createOrder = mutation({
  args: {
    userId: v.id("users"),
  },

  handler: async (ctx, args) => {
    const cartItems = await ctx.db
      .query("carts")
      .filter((q) =>
        q.eq(q.field("userId"), args.userId)
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
    status: "Pending Payment Approval",
  }
);

    // CREATE ORDER ITEMS
    for (const item of cartItems) {
      const product = await ctx.db.get(
        item.productId
      );

      await ctx.db.insert(
        "orderItems",
        {
          orderId,
          productId: item.productId,
          quantity: item.quantity,
          price: product?.price || 0,
        }
      );
    }

    return orderId;
  },
});

export const getOrders = query({
  args: {
    userId: v.id("users"),
  },

  handler: async (ctx, args) => {
    const orders = await ctx.db
      .query("orders")
      .filter((q) =>
        q.eq(
          q.field("userId"),
          args.userId
        )
      )
      .collect();

    return await Promise.all(
      orders.map(async (order) => {
        const items = await ctx.db
          .query("orderItems")
          .filter((q) =>
            q.eq(
              q.field("orderId"),
              order._id
            )
          )
          .collect();

        const products =
          await Promise.all(
            items.map(async (item) => {
              const product =
                await ctx.db.get(
                  item.productId
                );

              return {
                ...item,
                product,
              };
            })
          );

        return {
          ...order,
          products,
        };
      })
    );
  },
});
// export const getAllOrders = query({
//   handler: async (ctx) => {
//     return await ctx.db
//       .query("orders")
//       .collect();
//   },
// });

//get orders

export const getAllOrders = query({
  handler: async (ctx) => {
    const orders = await ctx.db.query("orders").collect();

    return await Promise.all(
      orders.map(async (order) => {
        const user = await ctx.db.get(order.userId);

        const items = await ctx.db
          .query("orderItems")
          .filter((q) => q.eq(q.field("orderId"), order._id))
          .collect();

        const products = await Promise.all(
          items.map(async (item) => {
            const product = await ctx.db.get(item.productId);

            return {
              ...item,
              product,
            };
          })
        );

        return {
          ...order,
          customerName: user?.name || "Unknown User",
          products,
        };
      })
    );
  },
});

//update orders
export const updateOrderStatus =
  mutation({
    args: {
      orderId: v.id("orders"),
      status: v.string(),
    },

    handler: async (
      ctx,
      args
    ) => {

      await ctx.db.patch(
        args.orderId,
        {
          status: args.status,
        }
      );
    },
  });

  //delete order

  export const deleteOrder = mutation({
  args: {
    orderId: v.id("orders"),
  },

  handler: async (ctx, args) => {
    const items = await ctx.db
      .query("orderItems")
      .filter((q) =>
        q.eq(q.field("orderId"), args.orderId)
      )
      .collect();

    for (const item of items) {
      await ctx.db.delete(item._id);
    }

    await ctx.db.delete(args.orderId);
  },
});