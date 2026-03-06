export const GA_MEASUREMENT_ID = 'G-8YEXFGT96R'

// https://developers.google.com/analytics/devguides/collection/ga4/reference/events
type GtagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
  // GA4 recommended event parameters
  currency?: string
  method?: string
  content_type?: string
  content_id?: string
  // Lead-specific
  lead_source?: string
  situation_type?: string
}

/**
 * Fire a GA4 event. Safe to call server-side (no-ops gracefully).
 */
export function trackEvent({
  action,
  category,
  label,
  value,
  ...params
}: GtagEvent) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    ...params,
  })
}

/**
 * Track a successful lead form submission.
 * Uses GA4's recommended `generate_lead` event name.
 */
export function trackLeadSubmission(situation: string, source = 'website_form') {
  trackEvent({
    action: 'generate_lead',
    category: 'engagement',
    label: situation,
    value: 1,
    lead_source: source,
    situation_type: situation,
  })
}

/**
 * Track a phone number click (tap-to-call).
 * Appears as a `contact` event in GA4 reports.
 */
export function trackPhoneClick(location: string) {
  trackEvent({
    action: 'contact',
    category: 'engagement',
    label: `phone_click_${location}`,
    method: 'phone',
    content_type: 'cta',
    content_id: 'phone_4052051246',
  })
}

/**
 * Track a CTA button click (Book Consultation, Send Message, etc.)
 */
export function trackCTAClick(ctaName: string, location: string) {
  trackEvent({
    action: 'select_content',
    category: 'engagement',
    label: ctaName,
    content_type: 'cta',
    content_id: `${ctaName}_${location}`,
  })
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}
