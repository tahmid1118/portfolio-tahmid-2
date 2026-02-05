# Customization Guide

## Step-by-Step Customization

### Step 1: Personal Information (REQUIRED)

Open `lib/data.ts` and update the `personalInfo` object:

```typescript
export const personalInfo = {
  name: "Your Full Name",
  title: "Your Job Title",
  tagline: "Your Tagline or Motto",
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  location: "Your City, Country",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};
```

### Step 2: About Section

Update the `aboutMe` object:

```typescript
export const aboutMe = {
  introduction: "Write a brief introduction about yourself...",
  description: "Describe your approach and expertise...",
};
```

### Step 3: Skills

Modify the `skills` array. Each skill has a `level` (0-100):

```typescript
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

### Step 4: Work Experience

Update the `experiences` array:

```typescript
export const experiences = [
  {
    company: "Company Name",
    position: "Your Position",
    duration: "Start - End Date",
    location: "City, Country",
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
      // Add more points...
    ],
  },
  // Add more experiences...
];
```

### Step 5: Projects

Customize the `projects` array:

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Brief project description...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    image: "/projects/image.jpg", // Optional
    github: "https://github.com/yourusername/project",
    demo: "https://your-project-demo.com",
    featured: true, // Show in featured section
  },
  // Add more projects...
];
```

### Step 6: Education

Update the `education` array:

```typescript
export const education = [
  {
    degree: "Your Degree",
    institution: "University Name",
    duration: "Year - Year",
    location: "City, Country",
    description: "Additional details...",
  },
];
```

### Step 7: Certifications

Modify the `certifications` array:

```typescript
export const certifications = [
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "Year",
  },
  // Add more certifications...
];
```

## Advanced Customization

### Change Colors

Edit `app/globals.css` to modify the color scheme:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #3b82f6; /* Main accent color */
  --primary-foreground: #ffffff;
  --secondary: #f3f4f6;
  --accent: #8b5cf6; /* Secondary accent */
  /* ... other colors */
}
```

For dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
    --primary: #60a5fa;
    /* ... other colors */
  }
}
```

### Modify Gradient Colors

The gradient is used in several places. Search and replace these classes:

- `from-blue-600 to-purple-600` → Your colors
- `from-blue-500 to-purple-500` → Your colors

### Change Fonts

Edit `app/layout.tsx` to import different Google Fonts:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

### Add/Remove Sections

In `app/page.tsx`, comment out or add sections:

```typescript
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      {/* <Skills /> */}  {/* Comment out to hide */}
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
```

### Modify Animations

Edit `lib/animations.ts` to customize animation speeds and effects:

```typescript
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Slower animation
    },
  },
};
```

### Add Your Photo

Replace the placeholder in `components/Hero.tsx`:

1. Add your photo to `/public/images/profile.jpg`
2. Replace the placeholder div:

```tsx
<Image
  src="/images/profile.jpg"
  alt="Your Name"
  fill
  className="object-cover rounded-full"
/>
```

### Customize Contact Form

The form in `components/Contact.tsx` currently simulates submission. To make it functional:

#### Option 1: Formspree

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch("https://formspree.io/f/your-form-id", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  });
  // Handle response...
};
```

#### Option 2: EmailJS

```typescript
import emailjs from "@emailjs/browser";

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    formData,
    "YOUR_PUBLIC_KEY",
  );
};
```

### Add Resume Download

1. Add your resume to `/public/resume.pdf`
2. The download button in Hero section will work automatically

### SEO Optimization

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your portfolio description",
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Your Title",
    description: "Your description",
    images: ["/og-image.jpg"],
    url: "https://yourwebsite.com",
  },
};
```

### Add Google Analytics

1. Get your GA tracking ID
2. Add to `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Mobile Menu Customization

Edit `components/Navigation.tsx` to modify mobile menu behavior and styling.

## Tips

1. **Test Changes**: Run `pnpm dev` and check http://localhost:3000 after each change
2. **Commit Often**: Use Git to track changes
3. **Mobile First**: Test on mobile devices
4. **Performance**: Keep images optimized (use WebP format)
5. **Accessibility**: Maintain proper alt texts and ARIA labels

## Common Issues

### Tailwind Classes Not Working

- Make sure class names are correct
- Restart dev server: `pnpm dev`

### Images Not Loading

- Check file path (case-sensitive)
- Ensure images are in `/public` folder

### Build Errors

- Run `pnpm lint` to check for issues
- Check console for specific errors

## Need More Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
