'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  situation: z.string().min(1),
  address: z.string().optional(),
  message: z.string().optional(),
})

type LeadData = z.infer<typeof leadSchema>

const resend = new Resend(process.env.RESEND_API_KEY)
const CRM_API_URL = process.env.CRM_API_URL || 'http://localhost:3001'
const CRM_API_KEY = process.env.CRM_API_KEY || ''
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'alan@heritagehomesolutions.com'

export async function submitLead(data: LeadData) {
  try {
    // Validate data
    const validatedData = leadSchema.parse(data)

    // Send to CRM API
    const crmResponse = await fetch(`${CRM_API_URL}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CRM_API_KEY,
      },
      body: JSON.stringify({
        ...validatedData,
        status: 'new',
        priority: 'medium',
        source: 'website',
      }),
    })

    if (!crmResponse.ok) {
      console.error('CRM API error:', await crmResponse.text())
      throw new Error('Failed to save lead to CRM')
    }

    const crmResult = await crmResponse.json()

    // Send email notification to Alan
    try {
      await resend.emails.send({
        from: 'Heritage Home Solutions <notifications@heritagehomesolutions.com>',
        to: NOTIFICATION_EMAIL,
        subject: `New Lead: ${validatedData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #0070c7 0%, #064c85 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">New Lead from Website</h1>
            </div>

            <div style="padding: 30px; background: #f8f9fa;">
              <h2 style="color: #333; margin-top: 0;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Name:</td>
                  <td style="padding: 10px 0; color: #333;">${validatedData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone:</td>
                  <td style="padding: 10px 0; color: #333;">${validatedData.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
                  <td style="padding: 10px 0; color: #333;">${validatedData.email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Situation:</td>
                  <td style="padding: 10px 0; color: #333;">${validatedData.situation}</td>
                </tr>
                ${validatedData.address ? `
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Property Address:</td>
                  <td style="padding: 10px 0; color: #333;">${validatedData.address}</td>
                </tr>
                ` : ''}
              </table>

              ${validatedData.message ? `
              <div style="margin-top: 20px;">
                <h3 style="color: #333;">Additional Details:</h3>
                <p style="color: #555; line-height: 1.6; background: white; padding: 15px; border-radius: 8px;">
                  ${validatedData.message}
                </p>
              </div>
              ` : ''}

              <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid #0070c7;">
                <p style="margin: 0; color: #333;">
                  <strong>View in CRM:</strong>
                  <a href="https://heritage-crm.vercel.app/dashboard" style="color: #0070c7; text-decoration: none;">
                    Click here
                  </a>
                </p>
              </div>
            </div>

            <div style="padding: 20px; text-align: center; color: #999; font-size: 12px;">
              <p>Heritage Home Solutions | Serving Oklahoma City with Faith and Integrity</p>
            </div>
          </div>
        `,
      })
    } catch (emailError) {
      console.error('Email notification error:', emailError)
      // Don't fail the whole request if email fails
    }

    return {
      success: true,
      id: crmResult.id,
    }
  } catch (error) {
    console.error('Submit lead error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit lead',
    }
  }
}
