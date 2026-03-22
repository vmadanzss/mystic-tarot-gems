import { prisma } from './prisma'

/**
 * Database utility functions for common operations
 */

// Product utilities
export const getProducts = async (category?: string) => {
  return prisma.product.findMany({
    where: {
      isActive: true,
      ...(category && { category })
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
}

export const getProductById = async (id: string) => {
  return prisma.product.findUnique({
    where: { id }
  })
}

// Blog utilities
export const getPublishedBlogPosts = async (category?: string) => {
  return prisma.blogPost.findMany({
    where: {
      isPublished: true,
      ...(category && { category })
    },
    orderBy: {
      publishedAt: 'desc'
    }
  })
}

export const getBlogPostBySlug = async (slug: string) => {
  return prisma.blogPost.findUnique({
    where: { slug }
  })
}

// User utilities
export const createUser = async (data: {
  email: string
  name: string
  phone?: string
}) => {
  return prisma.user.create({
    data
  })
}

export const getUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email }
  })
}

// Appointment utilities
export const createAppointment = async (data: {
  userId: string
  readingType: string
  scheduledDate: Date
  message?: string
  price: number
}) => {
  return prisma.appointment.create({
    data
  })
}

export const getUserAppointments = async (userId: string) => {
  return prisma.appointment.findMany({
    where: { userId },
    orderBy: {
      scheduledDate: 'desc'
    }
  })
}

// Order utilities
export const createOrder = async (data: {
  userId: string
  totalAmount: number
  shippingAddress?: any
  orderItems: Array<{
    productId: string
    quantity: number
    unitPrice: number
  }>
}) => {
  return prisma.order.create({
    data: {
      userId: data.userId,
      totalAmount: data.totalAmount,
      shippingAddress: data.shippingAddress,
      orderItems: {
        create: data.orderItems
      }
    },
    include: {
      orderItems: {
        include: {
          product: true
        }
      }
    }
  })
}

export const getUserOrders = async (userId: string) => {
  return prisma.order.findMany({
    where: { userId },
    include: {
      orderItems: {
        include: {
          product: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
}

// Health check
export const checkDatabaseConnection = async () => {
  try {
    await prisma.$queryRaw`SELECT 1`
    return { status: 'connected' }
  } catch (error) {
    return { status: 'disconnected', error }
  }
}