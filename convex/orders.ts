import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

//create orders

export const createOrder = mutation({
  args: {
    userId: v.id("users"),
    addressId: v.optional(
    v.id("addresses")
  ),

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

  let addressId = args.addressId;

  if (!addressId) {
    const firstAddress = await ctx.db
      .query("addresses")
      .filter((q) =>
        q.eq(
          q.field("userId"),
          args.userId
        )
      )
      .first();

    addressId = firstAddress?._id;
  }

  const orderData: any = {
    userId: args.userId,
    total,
    status: "Pending Payment Approval",
  };

  if (addressId) {
    orderData.addressId = addressId;
  }

  const orderId = await ctx.db.insert(
    "orders",
    orderData
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

       const address = order.addressId
  ? await ctx.db.get(order.addressId)
  : null;

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
  address,
};

        // return {
        //   ...order,
        //   products,
        // };
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
      const order = await ctx.db.get(
  args.orderId
);

await ctx.db.insert(
  "notifications",
  {
    userId: order!.userId,
    title: "Order Update",
    message: `Your order is now ${args.status}`,
    read: false,
    createdAt: Date.now(),
  }
);
    },
  });

  // export const getNotifications =
  // query({
  //   args: {
  //     userId: v.id("users"),
  //   },

  //   handler: async (
  //     ctx,
  //     args
  //   ) => {
  //     return await ctx.db
  //       .query("notifications")
  //       .filter((q) =>
  //         q.eq(
  //           q.field("userId"),
  //           args.userId
  //         )
  //       )
  //       .order("desc")
  //       .collect();
  //   },
  // });
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

export const getDashboardStats = query({
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

    const totalOrders =
      orders.length;

    const pendingOrders =
      orders.filter(
        (o) =>
          o.status ===
            "Pending Payment Approval" ||
          o.status ===
            "Processing"
      ).length;

    const deliveredOrders =
      orders.filter(
        (o) =>
          o.status ===
          "Delivered"
      ).length;

    const totalSpent =
      orders
        .filter(
          (o) =>
            o.status !==
            "Payment Rejected"
        )
        .reduce(
          (sum, order) =>
            sum + order.total,
          0
        );

    return {
      totalOrders,
      pendingOrders,
      deliveredOrders,
      totalSpent,
    };
  },
});


export const cancelOrder = mutation({
  args: {
    orderId: v.id("orders"),
  },

  handler: async (ctx, args) => {
    const order = await ctx.db.get(
      args.orderId
    );

    if (!order) {
      throw new Error(
        "Order not found"
      );
    }

    if (
      order.status === "Delivered" ||
      order.status === "Shipped"
    ) {
      throw new Error(
        "Order can no longer be cancelled"
      );
    }

    await ctx.db.patch(
      args.orderId,
      {
        status: "Cancelled",
      }
    );
  },
});