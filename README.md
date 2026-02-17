# Heritage Home Solutions

Faith-based real estate solutions for seniors and distressed homeowners in Oklahoma City.

## Project Structure

```
Heritage-Home-Solutions/
├── app/                    # Website (Next.js 15, public-facing)
│   ├── layout.tsx         # Root layout with fonts & metadata
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles & Tailwind
│   └── actions/
│       └── submit-lead.ts # Server action: sends leads to CRM
│
├── components/            # Website components
│   └── sections/         # Main page sections
│       ├── Header.tsx    # Navigation
│       ├── Hero.tsx      # Hero section with CTAs
│       ├── About.tsx     # About Alan section
│       ├── Services.tsx  # Services grid
│       ├── Process.tsx   # 4-step process
│       ├── Testimonials.tsx # Client testimonials
│       ├── CTA.tsx       # Call to action
│       ├── Contact.tsx   # Contact form
│       └── Footer.tsx    # Footer
│
├── heritage-crm/         # CRM (Next.js 15, auth-protected) **NEEDS COMPLETION**
│   ├── app/
│   │   ├── api/leads/route.ts  # API endpoint (receives leads from website)
│   │   ├── dashboard/          # Kanban board & lead management
│   │   ├── login/              # Magic link authentication
│   │   └── middleware.ts       # Auth guard
│   └── supabase/
│       └── schema.sql          # Database tables (leads, notes)
│
├── doc/                  # Documentation & scripts
│   ├── partner-handoff-prd.md          # Original PRD
│   ├── action-plan.md                  # Task breakdown
│   ├── HHS-Partner-Onboarding-Stephan.docx
│   ├── dev-setup.sh                    # Automated dev setup
│   ├── pre-deploy-checklist.sh        # Pre-deploy validation
│   ├── .env.website.template
│   └── .env.crm.template
│
└── ...config files
```

## What's Been Built

### ✅ Website (100%)

- **Complete, modern design** with faith-focused aesthetic
- **Responsive** — mobile-first, works beautifully on all devices
- **All sections implemented:**
  - Hero with animated background & trust indicators
  - About Alan (placeholder for video)
  - Services grid (6 services)
  - 4-step process
  - Testimonials (placeholder content)
  - Contact form with validation
  - Header with sticky navigation
  - Footer with contact info
- **Form integration** — submits to CRM API & sends email via Resend
- **Design system** — Tailwind v4, custom color palette, reusable components
- **Accessibility** — semantic HTML, ARIA labels, keyboard navigation

### 🚧 CRM (20%)

- **Project structure** created
- **Package.json** configured
- **Still needs:**
  - Configuration files (tsconfig, next.config, tailwind)
  - Supabase client setup
  - Auth middleware
  - API endpoint (`/api/leads`)
  - Dashboard with Kanban board
  - Lead detail pages
  - Database schema

## Quick Start

### 1. Install Dependencies

```bash
# Website
npm install

# CRM
cd heritage-crm && npm install
```

### 2. Environment Variables

```bash
# Copy templates
cp doc/.env.website.template .env.local
cp doc/.env.crm.template heritage-crm/.env.local

# Fill in your values:
# - RESEND_API_KEY
# - CRM_API_KEY (shared secret)
# - CRM_API_URL
# - Supabase keys
```

### 3. Run Development Servers

```bash
# Website (in root)
npm run dev
# → http://localhost:3000

# CRM (in heritage-crm/)
cd heritage-crm && npm run dev
# → http://localhost:3001
```

## What You Need to Complete the CRM

### 1. Configuration Files

Create in `heritage-crm/`:
- `tsconfig.json` (same as website)
- `next.config.mjs` (basic config)
- `tailwind.config.ts` (copy from website or create simple version)
- `app/globals.css` (copy from website)

### 2. Supabase Setup

**Database Schema** (`heritage-crm/supabase/schema.sql`):
```sql
-- Leads table
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  situation TEXT NOT NULL,
  address TEXT,
  message TEXT,
  status TEXT DEFAULT 'new', -- new, contacted, qualified, contract, closed, lost
  priority TEXT DEFAULT 'medium', -- low, medium, high
  source TEXT DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Notes table
CREATE TABLE notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  type TEXT NOT NULL, -- call, email, meeting, status_change
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by TEXT
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

-- Policies (adjust based on your auth setup)
CREATE POLICY "Allow authenticated access" ON leads
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated access" ON notes
  FOR ALL USING (auth.role() = 'authenticated');
```

**Supabase Client** (`heritage-crm/lib/supabase.ts`):
```typescript
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

### 3. API Endpoint

**`heritage-crm/app/api/leads/route.ts`**:
```typescript
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'

const leadSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  situation: z.string(),
  address: z.string().optional(),
  message: z.string().optional(),
  status: z.string().default('new'),
  priority: z.string().default('medium'),
  source: z.string().default('website'),
})

export async function POST(request: NextRequest) {
  try {
    // Check API key
    const apiKey = request.headers.get('x-api-key')
    if (apiKey !== process.env.API_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Parse & validate
    const body = await request.json()
    const data = leadSchema.parse(body)

    // Insert into Supabase
    const { data: lead, error } = await supabase
      .from('leads')
      .insert(data)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 })
  }
}
```

### 4. Dashboard (Kanban Board)

Create `heritage-crm/app/dashboard/page.tsx` with:
- Columns for each status (new, contacted, qualified, etc.)
- Drag & drop with `@hello-pangea/dnd`
- Lead cards showing name, situation, priority
- Click to view lead details

### 5. Auth

Use Supabase Magic Link:
- Login page at `/login`
- Middleware to protect routes
- Session management

## Deployment

### Vercel Setup

1. **Website Project:**
   - Root directory: `/`
   - Build command: `npm run build`
   - Install command: `npm install`

2. **CRM Project:**
   - Root directory: `/heritage-crm`
   - Build command: `npm run build`
   - Install command: `npm install`

3. **Environment Variables:**
   - Set in Vercel dashboard for each project
   - Never commit .env files to git

## Design System

### Colors

- **Primary Blue** (trust, professionalism):
  - 50-950 scale
  - Main: `primary-600` (#0070c7)

- **Accent Red** (warmth, compassion):
  - 50-950 scale
  - Main: `accent-600` (#cd4433)

### Typography

- **Headings:** Inter (display font)
- **Body:** Inter (sans-serif)
- **Accent:** Merriweather (serif, for quotes)

### Components

- Buttons: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-accent`
- Cards: `.card`, `.card-hover`
- Forms: `.input`, `.textarea`, `.label`
- Containers: `.container-custom`
- Sections: `.section-padding`

## Scripts

```bash
# Automated dev setup
bash doc/dev-setup.sh

# Pre-deploy checklist
bash doc/pre-deploy-checklist.sh
```

## Next Steps

1. **Complete CRM** (see "What You Need to Complete" above)
2. **Add Alan's content:**
   - Real phone number
   - Professional photo/video
   - Real testimonials
3. **Domain setup:**
   - Purchase `heritagehomesolutions.com`
   - Configure DNS in Vercel
4. **Launch & test:**
   - Run pre-deploy checklist
   - Test lead flow end-to-end
   - Verify email notifications

## Contact

- **Jason Flick** — jlf301@gmail.com
- **Stephan Eum** — (add email)
- **Client:** Alan Norton
