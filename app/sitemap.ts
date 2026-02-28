import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://heritagehomesolutions.info'

    // Add more dynamic routes here if there is a blog or dynamic pages
    const routes = ['', '/about', '/videos', '/book'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return [...routes]
}
