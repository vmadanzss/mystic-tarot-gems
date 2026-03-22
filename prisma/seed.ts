import { PrismaClient } from '../src/generated/prisma'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:51214/template1?sslmode=disable'
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Seeding database...')

  // Seed products (healing crystals and gems)
  const products = [
    {
      name: 'Rose Quartz',
      description: 'The stone of unconditional love and infinite peace. Rose Quartz promotes self-love, friendship, and deep inner healing.',
      price: 24.99,
      category: 'Love & Relationships',
      properties: {
        chakra: 'Heart',
        element: 'Water',
        zodiac: ['Taurus', 'Libra'],
        healing: ['Emotional healing', 'Self-love', 'Compassion'],
        metaphysical: 'Attracts love and strengthens relationships'
      },
      stockQuantity: 50,
      imageUrl: '/images/crystals/rose-quartz.jpg'
    },
    {
      name: 'Amethyst',
      description: 'A powerful and protective stone with high spiritual vibration. Amethyst enhances spiritual awareness and promotes tranquility.',
      price: 32.99,
      category: 'Spiritual Growth',
      properties: {
        chakra: 'Crown',
        element: 'Air',
        zodiac: ['Pisces', 'Virgo', 'Aquarius', 'Capricorn'],
        healing: ['Stress relief', 'Insomnia', 'Addiction recovery'],
        metaphysical: 'Enhances psychic abilities and spiritual connection'
      },
      stockQuantity: 35,
      imageUrl: '/images/crystals/amethyst.jpg'
    },
    {
      name: 'Citrine',
      description: 'The merchant stone of abundance and manifestation. Citrine attracts wealth, prosperity, and success while promoting joy.',
      price: 28.99,
      category: 'Abundance & Prosperity',
      properties: {
        chakra: 'Solar Plexus',
        element: 'Fire',
        zodiac: ['Aries', 'Gemini', 'Leo', 'Libra'],
        healing: ['Depression', 'Self-esteem', 'Creativity'],
        metaphysical: 'Manifests abundance and personal power'
      },
      stockQuantity: 42,
      imageUrl: '/images/crystals/citrine.jpg'
    },
    {
      name: 'Clear Quartz',
      description: 'The master healer and amplifier of energy. Clear Quartz enhances the properties of other crystals and promotes clarity.',
      price: 19.99,
      category: 'Healing & Clarity',
      properties: {
        chakra: 'All',
        element: 'All',
        zodiac: ['All'],
        healing: ['Energy amplification', 'Mental clarity', 'Spiritual growth'],
        metaphysical: 'Universal healing and energy amplification'
      },
      stockQuantity: 60,
      imageUrl: '/images/crystals/clear-quartz.jpg'
    },
    {
      name: 'Black Tourmaline',
      description: 'A powerful protective stone that shields against negative energy and electromagnetic radiation.',
      price: 26.99,
      category: 'Protection',
      properties: {
        chakra: 'Root',
        element: 'Earth',
        zodiac: ['Capricorn'],
        healing: ['Anxiety', 'Stress', 'Negative thoughts'],
        metaphysical: 'Provides psychic protection and grounding'
      },
      stockQuantity: 38,
      imageUrl: '/images/crystals/black-tourmaline.jpg'
    },
    {
      name: 'Moonstone',
      description: 'The stone of new beginnings and divine feminine energy. Moonstone enhances intuition and promotes emotional balance.',
      price: 34.99,
      category: 'Intuition & Balance',
      properties: {
        chakra: 'Sacral',
        element: 'Water',
        zodiac: ['Cancer', 'Libra', 'Scorpio'],
        healing: ['Hormonal balance', 'Fertility', 'Emotional stability'],
        metaphysical: 'Enhances psychic abilities and feminine energy'
      },
      stockQuantity: 28,
      imageUrl: '/images/crystals/moonstone.jpg'
    }
  ]

  for (const product of products) {
    await prisma.product.create({
      data: product
    })
  }

  // Seed blog posts
  const blogPosts = [
    {
      title: 'Understanding Your Tarot Reading: A Beginner\'s Guide',
      slug: 'understanding-tarot-reading-beginners-guide',
      content: `# Understanding Your Tarot Reading: A Beginner's Guide

Tarot reading is an ancient practice that offers insight into your life's journey through symbolic imagery and intuitive interpretation. Whether you're new to tarot or looking to deepen your understanding, this guide will help you navigate your first reading experience.

## What to Expect in Your Reading

During a tarot reading, cards are drawn and arranged in specific patterns called spreads. Each card position represents different aspects of your question or situation. The reader interprets the cards' meanings in relation to your query, providing guidance and clarity.

## Types of Readings We Offer

### Love Readings
Explore matters of the heart, relationships, and emotional connections. These readings can provide insight into current relationships, potential partnerships, or self-love journeys.

### Career Readings
Gain clarity on professional paths, job opportunities, and career decisions. Understand your strengths and how to navigate workplace challenges.

### Finance Readings
Receive guidance on financial decisions, investment opportunities, and abundance manifestation. Learn how to align your energy with prosperity.

### Health Readings
Focus on overall well-being, including physical, mental, and spiritual health. These readings complement but never replace professional medical advice.

## Preparing for Your Reading

- Come with an open mind and specific questions
- Create a quiet, comfortable space for your session
- Trust your intuition and the guidance received
- Take notes during or after your reading

Remember, tarot readings are tools for guidance and self-reflection, empowering you to make informed decisions about your life's path.`,
      excerpt: 'Discover what to expect in your first tarot reading and how different types of readings can provide guidance for love, career, finance, and health.',
      category: 'Tarot',
      tags: ['beginner', 'tarot reading', 'guidance', 'spirituality'],
      isPublished: true,
      publishedAt: new Date('2024-01-15'),
      featuredImage: '/images/blog/tarot-cards-spread.jpg'
    },
    {
      title: 'The Power of Healing Crystals: Science Meets Spirituality',
      slug: 'power-of-healing-crystals-science-spirituality',
      content: `# The Power of Healing Crystals: Science Meets Spirituality

Healing crystals have been used for thousands of years across various cultures for their believed metaphysical properties. While science continues to explore the mechanisms behind crystal healing, many people report profound experiences with these beautiful gifts from the Earth.

## How Crystal Healing Works

Crystal healing is based on the principle that crystals can interact with the body's energy field, or aura. Each crystal is believed to vibrate at specific frequencies that can influence our physical, emotional, and spiritual well-being.

## Popular Healing Crystals and Their Properties

### Rose Quartz - The Love Stone
Known as the stone of unconditional love, Rose Quartz is believed to:
- Open the heart chakra
- Promote self-love and compassion
- Heal emotional wounds
- Attract loving relationships

### Amethyst - The Spiritual Stone
This purple crystal is associated with:
- Enhanced spiritual awareness
- Protection from negative energy
- Improved meditation and intuition
- Stress relief and tranquility

### Citrine - The Abundance Stone
Often called the merchant's stone, Citrine is believed to:
- Attract wealth and prosperity
- Boost confidence and creativity
- Enhance manifestation abilities
- Promote joy and optimism

## Using Crystals in Daily Life

- **Meditation**: Hold crystals during meditation to enhance focus
- **Jewelry**: Wear crystal jewelry to keep their energy close
- **Home Decor**: Place crystals in your living space for environmental harmony
- **Intention Setting**: Use crystals to amplify your goals and desires

## Caring for Your Crystals

To maintain their energy, regularly cleanse your crystals using methods such as:
- Moonlight charging
- Sage smudging
- Sound cleansing with singing bowls
- Burying in earth overnight

Whether you approach crystals from a scientific or spiritual perspective, their beauty and the mindfulness they encourage can be valuable additions to your wellness journey.`,
      excerpt: 'Explore the fascinating world of healing crystals, their properties, and how to incorporate them into your daily spiritual practice.',
      category: 'Crystals',
      tags: ['healing crystals', 'spirituality', 'wellness', 'energy healing'],
      isPublished: true,
      publishedAt: new Date('2024-01-20'),
      featuredImage: '/images/blog/healing-crystals-collection.jpg'
    },
    {
      title: 'Zodiac Signs and Their Ruling Crystals',
      slug: 'zodiac-signs-ruling-crystals',
      content: `# Zodiac Signs and Their Ruling Crystals

The connection between astrology and crystal healing runs deep, with each zodiac sign having specific crystals that resonate with their energy and characteristics. Understanding these connections can help you choose crystals that align with your astrological nature.

## Fire Signs

### Aries (March 21 - April 19)
**Ruling Crystal: Red Jasper**
- Enhances courage and leadership
- Provides grounding energy for impulsive nature
- Supports physical vitality and strength

### Leo (July 23 - August 22)
**Ruling Crystal: Sunstone**
- Amplifies natural charisma and confidence
- Encourages creativity and self-expression
- Attracts abundance and success

### Sagittarius (November 22 - December 21)
**Ruling Crystal: Turquoise**
- Enhances wisdom and spiritual growth
- Supports adventurous spirit and travel
- Promotes honest communication

## Earth Signs

### Taurus (April 20 - May 20)
**Ruling Crystal: Rose Quartz**
- Enhances love and sensuality
- Provides emotional stability
- Supports material abundance

### Virgo (August 23 - September 22)
**Ruling Crystal: Amazonite**
- Promotes clear communication
- Enhances analytical abilities
- Provides calming energy for perfectionist tendencies

### Capricorn (December 22 - January 19)
**Ruling Crystal: Garnet**
- Supports ambition and career goals
- Provides grounding and stability
- Enhances leadership qualities

## Air Signs

### Gemini (May 21 - June 20)
**Ruling Crystal: Agate**
- Enhances communication skills
- Provides mental clarity and focus
- Balances dual nature

### Libra (September 23 - October 22)
**Ruling Crystal: Lapis Lazuli**
- Promotes harmony and balance
- Enhances diplomatic abilities
- Supports artistic expression

### Aquarius (January 20 - February 18)
**Ruling Crystal: Amethyst**
- Enhances intuition and spiritual awareness
- Supports humanitarian ideals
- Promotes innovative thinking

## Water Signs

### Cancer (June 21 - July 22)
**Ruling Crystal: Moonstone**
- Enhances emotional intuition
- Provides nurturing energy
- Supports family and home life

### Scorpio (October 23 - November 21)
**Ruling Crystal: Obsidian**
- Provides protection and grounding
- Enhances transformation abilities
- Supports deep emotional healing

### Pisces (February 19 - March 20)
**Ruling Crystal: Aquamarine**
- Enhances psychic abilities
- Promotes emotional healing
- Supports spiritual connection

## Working with Your Zodiac Crystals

To maximize the benefits of your zodiac crystals:
1. Meditate with them during your birthday month
2. Carry them during challenging times
3. Place them in your bedroom or workspace
4. Use them in manifestation rituals

Remember, while zodiac crystals can be particularly powerful for your sign, trust your intuition when choosing crystals. The ones that call to you are often exactly what you need.`,
      excerpt: 'Discover which crystals align with your zodiac sign and how to use them to enhance your natural astrological traits and overcome challenges.',
      category: 'Astrology',
      tags: ['zodiac', 'astrology', 'crystals', 'spiritual guidance'],
      isPublished: true,
      publishedAt: new Date('2024-01-25'),
      featuredImage: '/images/blog/zodiac-crystals-wheel.jpg'
    }
  ]

  for (const post of blogPosts) {
    await prisma.blogPost.create({
      data: post
    })
  }

  console.log('✅ Database seeded successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Error seeding database:', e)
    await prisma.$disconnect()
    process.exit(1)
  })