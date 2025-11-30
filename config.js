/**
 * Privacy Policy Configuration
 *
 * Centralizes all company-specific information for the privacy policy page.
 * Updates any value here to automatically reflect changes throughout the page.
 */

const CONFIG = {
  // ===========================
  // Company Information
  // ===========================
  company: {
    name: "Instagram Automation Platform",
    legalName: "Your Company Legal Name Inc.",
    website: "https://yourcompany.com",
    description: "Instagram automation and messaging platform",
  },

  // ===========================
  // Contact Information
  // ===========================
  contact: {
    // Primary contact email
    email: "privacy@yourcompany.com",

    // Data Protection Officer email
    dpoEmail: "dpo@yourcompany.com",

    // Support email
    supportEmail: "support@yourcompany.com",

    // Phone number
    phone: "+1 (555) 123-4567",

    // Physical mailing address
    address: {
      street: "1234 Tech Street, Suite 100",
      city: "Delhi",
      state: "Delhi",
      zipCode: "",
      country: "India",
    },

    // Response time for privacy inquiries (in days)
    responseTime: 30,
  },

  // ===========================
  // Legal & Compliance
  // ===========================
  legal: {
    // Last updated date for the privacy policy
    lastUpdated: "November 30, 2025",

    // Effective date (when policy takes effect)
    effectiveDate: "November 30, 2025",

    // Minimum age requirement
    minimumAge: {
      default: 13,
      eu: 16, // GDPR requirement for EU
    },

    // Data retention periods (in days)
    dataRetention: {
      activeAccount: "duration of account",
      deletedAccount: 30,
      backupSystems: 90,
      legalHold: "as required by law",
    },

    // Jurisdictions
    jurisdiction: "United States",
    euCompliant: true,
    ccpaCompliant: true,
    gdprCompliant: true,
  },

  // ===========================
  // Third-Party Services
  // ===========================
  thirdPartyServices: {
    analytics: {
      name: "Analytics Services",
      providers: ["Google Analytics", "Mixpanel"],
      purpose: "Analyzes usage patterns and improves service quality",
    },
    payment: {
      name: "Payment Processors",
      providers: ["Stripe", "PayPal"],
      purpose: "Processes payments securely",
    },
    hosting: {
      name: "Cloud Infrastructure",
      providers: ["AWS", "Google Cloud"],
      purpose: "Provides hosting and data storage",
    },
    communication: {
      name: "Communication Services",
      providers: ["SendGrid", "Twilio"],
      purpose: "Delivers email and SMS notifications",
    },
    support: {
      name: "Customer Support",
      providers: ["Zendesk", "Intercom"],
      purpose: "Manages support tickets and live chat",
    },
  },

  // ===========================
  // Social Media & Links
  // ===========================
  links: {
    termsOfService: "#",
    privacyPolicy: "#",
    cookiePolicy: "#",
    contactPage: "#",
    homepage: "https://yourcompany.com",

    // Social media profiles
    social: {
      twitter: "https://twitter.com/yourcompany",
      linkedin: "https://linkedin.com/company/yourcompany",
      facebook: "https://facebook.com/yourcompany",
      instagram: "https://instagram.com/yourcompany",
    },
  },

  // ===========================
  // Data Storage
  // ===========================
  dataStorage: {
    locations: ["United States", "European Union", "India"],
    encryptionInTransit: "TLS/SSL",
    encryptionAtRest: "AES-256",
    backupFrequency: "Daily",
    redundancy: true,
  },

  // ===========================
  // Security Features
  // ===========================
  security: {
    features: [
      "Encryption: Data in transit uses TLS/SSL encryption; data at rest uses AES-256 encryption",
      "Access Controls: Role-based access with multi-factor authentication for staff",
      "Regular Audits: Conducts periodic security assessments and vulnerability testing",
      "Secure Infrastructure: Hosts data on secure cloud servers with redundancy and backup systems",
      "Monitoring: Implements 24/7 system monitoring for suspicious activity",
    ],
  },

  // ===========================
  // Cookie Types
  // ===========================
  cookies: {
    essential: {
      name: "Essential Cookies",
      description:
        "Enables basic functionality like user authentication and security features",
      required: true,
    },
    performance: {
      name: "Performance Cookies",
      description:
        "Collects anonymous usage data to improve service performance",
      required: false,
    },
    functional: {
      name: "Functional Cookies",
      description: "Remembers your preferences and settings",
      required: false,
    },
    marketing: {
      name: "Marketing Cookies",
      description: "Tracks your activity for targeted advertising",
      required: false,
    },
  },

  // ===========================
  // User Rights
  // ===========================
  userRights: {
    access: {
      name: "Access",
      description: "Requests a copy of the personal data we hold about you",
    },
    correction: {
      name: "Correction",
      description: "Updates or corrects inaccurate or incomplete information",
    },
    deletion: {
      name: "Deletion",
      description:
        "Requests deletion of your personal data (subject to legal obligations)",
    },
    portability: {
      name: "Data Portability",
      description:
        "Receives your data in a structured, machine-readable format",
    },
    optOut: {
      name: "Opt-Out",
      description: "Unsubscribes from marketing communications at any time",
    },
    restriction: {
      name: "Restriction",
      description: "Limits how we process your personal information",
    },
  },

  // ===========================
  // Information Collection Types
  // ===========================
  dataCollected: {
    personal: {
      account: ["Name", "Email address", "Phone number", "Password"],
      instagram: [
        "Instagram username",
        "Profile information",
        "Authentication tokens",
      ],
      payment: [
        "Billing address",
        "Payment method details (processed securely through third-party payment processors)",
      ],
      communication: [
        "Messages",
        "Comments",
        "Interactions you create through our platform",
      ],
    },
    automatic: {
      usage: ["Features used", "Time spent", "Automation workflows created"],
      device: [
        "IP address",
        "Browser type",
        "Operating system",
        "Device identifiers",
      ],
      logs: ["Access times", "Pages viewed", "Error logs", "System activity"],
      tracking: ["Session cookies", "Preference cookies", "Analytics cookies"],
    },
  },

  // ===========================
  // Page Customization
  // ===========================
  ui: {
    showPrintButton: true,
    showReadingProgress: true,
    showBackToTop: true,
    enableSmoothScroll: true,
    enableCopyEmail: true,

    // Color scheme (optional - can override CSS variables)
    colors: {
      primary: "#6366f1",
      secondary: "#8b5cf6",
      accent: "#ec4899",
    },
  },

  // ===========================
  // Feature Flags
  // ===========================
  features: {
    emailCopyToClipboard: true,
    collapsibleSections: false, // Set to true to enable section collapse
    darkModeToggle: false, // Future feature
    languageSelector: false, // Future feature
    chatSupport: false, // Future feature
  },
};

// Makes config available globally
if (typeof window !== "undefined") {
  window.APP_CONFIG = CONFIG;
}

// Makes config available for Node.js/module systems
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
