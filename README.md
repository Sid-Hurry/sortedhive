# SortedHive Documentation

SortedHive is a modern URL shortener and QR code generator built using Next.js and Tailwind CSS. It enables users to create short, shareable links and generate QR codes. A basic analytics dashboard is under development.

---

## Features

- URL Shortener with custom aliases
- QR Code Generator
- Analytics Dashboard (Coming Soon)
- Open-source and customizable

---

## Technologies Used

- **Frontend:** Next.js 14+, Tailwind CSS
- **Backend:** API routes (Node.js)
- **UI Components:** Tailwind CSS
- **Deployment:** Vercel 

---

## Usage Guide

### Home Page

- Introduction to the service with call-to-action buttons.
- Navigation to the shortener tool or GitHub repository.

### URL Shortener

- Input a long URL and optionally a short alias.
- Click "Generate" to receive a shortened URL.
- Notification appears with the generated short link.

### QR Code Generator

- Enter text or a link to generate a QR code.
- Button to clear/reset the QR display.
- Mobile-friendly layout.

### Contact Page

- Simple styled form with fields for email and message.
- Placeholder logic for future backend handling.

### About Page

- Overview of features:
  - Fast Link Generation
  - Custom Short URLs
  - Open Source
  - Analytics Preview
  - QR Code Support
- FAQ section and GitHub links

---

## Folder Structure

```
/pages
 ├── index.tsx         # Home page
 ├── shorten.tsx       # URL shortener page
 ├── qr.tsx            # QR code generator
 ├── contact.tsx       # Contact form
 ├── about.tsx         # About and FAQ
 └── api/
      └── generate.ts  # API route for shortening
/public
 └── logo.png          # Site logo
/components
 └── ...               # Reusable components 
```

---

## Contributing

If you would like to contribute to SortedHive, follow these steps:

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request on GitHub for review.