export const metaAdsContent = {
  id: 'meta-ads',
  slug: 'meta-ads',
  title: 'Meta Ads',
  subtitle: 'Complete Meta Advertising & Digital Marketing Guide',
  category: 'Digital Marketing',
  description:
    'Comprehensive Meta Ads guide covering Meta Business ecosystem, Facebook and Instagram advertising, campaign objectives, audience targeting, ad formats, CPC, CPM, CTR, CPA, ROAS, campaign setup, Business Portfolio, Facebook Pages, Instagram Professional Accounts, Ad Accounts, payment settings, optimization, and practical advertising strategies.',

  sections: [
    {
      id: 'introduction-to-meta-ads',
      title: '1. Introduction to Meta Ads',
      content: [
        {
          type: 'paragraph',
          text: 'Meta Ads is the advertising platform provided by Meta that allows businesses, creators, organizations, and marketers to promote products, services, content, apps, websites, and other business objectives across platforms such as Facebook and Instagram.'
        },
        {
          type: 'heading',
          text: 'What Are Meta Ads?'
        },
        {
          type: 'paragraph',
          text: 'Meta Ads are paid advertisements that businesses create through Meta advertising tools. Advertisers select an objective, define an audience, set a budget, create an advertisement, and measure the resulting performance.'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Facebook advertising',
            'Instagram advertising',
            'Audience targeting',
            'Campaign management',
            'Budget management',
            'Ad creative management',
            'Conversion tracking',
            'Performance measurement',
            'Remarketing',
            'Business asset management'
          ]
        },
        {
          type: 'heading',
          text: 'Simple Meta Ads Flow'
        },
        {
          type: 'code',
          language: 'text',
          code: `Business
   ↓
Meta Business Portfolio
   ↓
Ad Account
   ↓
Campaign
   ↓
Ad Set
   ↓
Ad
   ↓
Audience + Budget + Creative
   ↓
Facebook / Instagram
   ↓
Users
   ↓
Clicks / Leads / Purchases
   ↓
Performance Data`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Core Idea',
          text: 'Meta Ads is not simply about creating an advertisement. Successful advertising involves selecting the right objective, audience, budget, creative, placement, measurement system, and optimization strategy.'
        }
      ]
    },

    {
      id: 'meta-ads-vs-organic-marketing',
      title: '2. Organic Marketing vs Paid Marketing',
      content: [
        {
          type: 'paragraph',
          text: 'Digital marketing can broadly be divided into organic marketing and paid marketing. The source guide explains that organic marketing focuses on unpaid reach and relationship building, while paid marketing uses advertising budgets to reach targeted audiences.'
        },
        {
          type: 'table',
          headers: ['Feature', 'Organic Marketing', 'Paid Marketing'],
          rows: [
            ['Cost', 'No direct advertising cost', 'Requires advertising budget'],
            ['Reach', 'Usually grows gradually', 'Can reach targeted users quickly'],
            ['Targeting', 'More limited', 'Advanced audience targeting'],
            ['Speed', 'Usually slower', 'Usually faster'],
            ['Content', 'Posts, videos, community content', 'Sponsored advertisements'],
            ['Measurement', 'Engagement and reach', 'Clicks, conversions, CPA, ROAS'],
            ['Scaling', 'Depends heavily on organic growth', 'Budget can be increased strategically']
          ]
        },
        {
          type: 'heading',
          text: 'Organic Marketing Examples'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Facebook posts',
            'Instagram posts',
            'Instagram Reels',
            'Community engagement',
            'Search engine optimization',
            'Educational content',
            'User-generated content',
            'Email content'
          ]
        },
        {
          type: 'heading',
          text: 'Paid Marketing Examples'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Facebook Ads',
            'Instagram Ads',
            'Lead generation campaigns',
            'Website traffic campaigns',
            'Conversion campaigns',
            'Retargeting campaigns',
            'Product advertisements'
          ]
        },
        {
          type: 'code',
          language: 'text',
          code: `Organic Marketing
Content → Audience → Engagement → Trust → Growth

Paid Marketing
Budget → Ad → Target Audience → Click/Action → Conversion`
        }
      ]
    },

    {
      id: 'meta-business-ecosystem',
      title: '3. Meta Business Ecosystem',
      content: [
        {
          type: 'paragraph',
          text: 'The Meta advertising ecosystem contains several connected business assets. A business may manage its Facebook Page, Instagram account, Ad Account, people, partners, payment methods, and advertising campaigns from Meta business tools.'
        },
        {
          type: 'heading',
          text: 'Main Meta Business Components'
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Meta Business Portfolio',
            'Facebook Page',
            'Instagram Professional Account',
            'Ad Account',
            'Ads Manager',
            'Payment Method',
            'People and Permissions',
            'Business Settings',
            'Campaigns',
            'Ad Sets',
            'Ads'
          ]
        },
        {
          type: 'code',
          language: 'text',
          code: `Meta Business Portfolio
        │
        ├── Facebook Page
        │
        ├── Instagram Account
        │
        ├── Ad Account
        │      │
        │      ├── Campaign
        │      │     └── Ad Set
        │      │           └── Ad
        │
        ├── People
        ├── Partners
        ├── Payment Methods
        └── Business Settings`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Why the Ecosystem Matters',
          text: 'Understanding the relationship between business assets helps prevent configuration problems when multiple people, pages, Instagram accounts, and advertising accounts are managed together.'
        }
      ]
    },

    {
      id: 'meta-business-portfolio',
      title: '4. Meta Business Portfolio',
      content: [
        {
          type: 'paragraph',
          text: 'A Meta Business Portfolio is used to organize and manage business assets such as Facebook Pages, Instagram accounts, Ad Accounts, people, partners, and permissions.'
        },
        {
          type: 'heading',
          text: 'Why Use a Business Portfolio?'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Manage multiple business assets',
            'Control access and permissions',
            'Manage employees and partners',
            'Connect Facebook Pages',
            'Connect Instagram accounts',
            'Manage Ad Accounts',
            'Manage payment settings',
            'Centralize business operations'
          ]
        },
        {
          type: 'heading',
          text: 'Business Assets'
        },
        {
          type: 'table',
          headers: ['Asset', 'Purpose'],
          rows: [
            ['Facebook Page', 'Represents the business on Facebook'],
            ['Instagram Account', 'Represents the business on Instagram'],
            ['Ad Account', 'Used to create and manage advertising campaigns'],
            ['People', 'Employees or team members who need access'],
            ['Partners', 'External agencies or collaborators'],
            ['Payment Method', 'Used for advertising charges'],
            ['Business Settings', 'Controls business-level configuration']
          ]
        },
        {
          type: 'code',
          language: 'text',
          code: `Business
   ↓
Business Portfolio
   ↓
Assets + People + Permissions
   ↓
Advertising Operations`
        }
      ]
    },

    {
      id: 'facebook-page-setup',
      title: '5. Facebook Page Setup',
      content: [
        {
          type: 'paragraph',
          text: 'A Facebook Page provides a public presence for a business, organization, creator, or brand. It can be connected with Meta advertising tools and used as an identity for advertisements.'
        },
        {
          type: 'heading',
          text: 'Important Facebook Page Information'
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Page name',
            'Category',
            'Bio',
            'Profile picture',
            'Cover photo',
            'Contact information',
            'Website',
            'Business description',
            'Location if applicable',
            'Action button',
            'Business information'
          ]
        },
        {
          type: 'heading',
          text: 'Facebook Page Quality Checklist'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use a clear business name',
            'Choose a relevant category',
            'Upload a professional profile image',
            'Use a suitable cover image',
            'Add a useful description',
            'Add contact information',
            'Add website URL',
            'Keep business information updated',
            'Publish useful content',
            'Connect the page to appropriate Meta business assets'
          ]
        },
        {
          type: 'code',
          language: 'text',
          code: `Facebook Page
├── Page Name
├── Category
├── Bio / Description
├── Profile Picture
├── Cover Photo
├── Contact Information
├── Website
└── Business Content`
        }
      ]
    },

    {
      id: 'instagram-professional-account',
      title: '6. Instagram Professional Account',
      content: [
        {
          type: 'paragraph',
          text: 'An Instagram Professional Account provides additional business and creator features compared with a standard personal account. It can be connected to Meta business tools and used for advertising.'
        },
        {
          type: 'heading',
          text: 'Professional Account Types'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Business account',
            'Creator account'
          ]
        },
        {
          type: 'heading',
          text: 'Important Profile Information'
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Username',
            'Profile picture',
            'Bio',
            'Category',
            'Contact information',
            'Website',
            'Business details',
            'Professional account settings'
          ]
        },
        {
          type: 'heading',
          text: 'Connecting Instagram With Meta'
        },
        {
          type: 'code',
          language: 'text',
          code: `Instagram Professional Account
          ↓
       Connect to Meta
          ↓
Facebook Page / Business Portfolio
          ↓
       Ad Account
          ↓
       Advertising`
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Profile Optimization',
          text: 'A professional profile should clearly communicate what the business offers and provide useful information such as a website, contact method, category, and relevant content.'
        }
      ]
    },

    {
      id: 'ad-account',
      title: '7. Meta Ad Account',
      content: [
        {
          type: 'paragraph',
          text: 'An Ad Account is the advertising workspace where campaigns are created, budgets are managed, payment methods are configured, and advertising performance is measured.'
        },
        {
          type: 'heading',
          text: 'Important Ad Account Information'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Ad Account name',
            'Account ID',
            'Currency',
            'Time zone',
            'Payment method',
            'Account roles',
            'Campaigns',
            'Billing information',
            'Ad account status'
          ]
        },
        {
          type: 'heading',
          text: 'Ad Account Roles'
        },
        {
          type: 'table',
          headers: ['Role', 'General Responsibility'],
          rows: [
            ['Admin', 'Manage account and permissions'],
            ['Advertiser', 'Create and manage advertisements'],
            ['Analyst', 'View advertising performance and reports']
          ]
        },
        {
          type: 'code',
          language: 'text',
          code: `Business Portfolio
      ↓
   Ad Account
      ↓
 Campaigns
      ↓
   Ad Sets
      ↓
     Ads
      ↓
Performance Data`
        }
      ]
    },

    {
      id: 'meta-ads-fundamentals',
      title: '8. Meta Ads Fundamentals',
      content: [
        {
          type: 'paragraph',
          text: 'Meta advertising uses campaign structure, audience targeting, creative assets, budget, bidding, placements, and optimization to deliver advertisements to users.'
        },
        {
          type: 'heading',
          text: 'Basic Advertising Structure'
        },
        {
          type: 'code',
          language: 'text',
          code: `Campaign
│
├── Objective
│
└── Ad Set
     │
     ├── Audience
     ├── Budget
     ├── Schedule
     ├── Placement
     └── Optimization
          │
          └── Ad
               ├── Image / Video
               ├── Primary Text
               ├── Headline
               └── Call To Action`
        },
        {
          type: 'heading',
          text: 'Common Advertising Objectives'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Awareness',
            'Traffic',
            'Engagement',
            'Leads',
            'App promotion',
            'Sales'
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Choose the Objective Carefully',
          text: 'The campaign objective should match the business goal. For example, a business looking for customer inquiries may need a lead-focused strategy, while an online store may focus on sales or conversion-related objectives.'
        }
      ]
    },

    {
      id: 'facebook-vs-instagram-ads',
      title: '9. Facebook Ads vs Instagram Ads',
      content: [
        {
          type: 'paragraph',
          text: 'Facebook and Instagram are both part of the Meta advertising ecosystem. Advertisers can select placements based on campaign requirements, audience behavior, creative format, and advertising objectives.'
        },
        {
          type: 'table',
          headers: ['Feature', 'Facebook', 'Instagram'],
          rows: [
            ['Main Strength', 'Broad communication and community features', 'Visual content and engagement'],
            ['Common Formats', 'Feed, Stories, Reels, Marketplace and other placements', 'Feed, Stories, Reels, Explore and other placements'],
            ['Content Style', 'Text, image, video, community content', 'Highly visual image and video content'],
            ['Audience', 'Broad range of users', 'Strong visual and creator-oriented audience'],
            ['Useful For', 'Branding, community, leads, traffic', 'Visual branding, engagement, products, creators']
          ]
        },
        {
          type: 'heading',
          text: 'Facebook Ad Placements'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Facebook Feed',
            'Stories',
            'Marketplace',
            'Groups',
            'Other eligible Meta placements'
          ]
        },
        {
          type: 'heading',
          text: 'Instagram Ad Placements'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Instagram Feed',
            'Instagram Stories',
            'Instagram Reels',
            'Explore',
            'Other eligible Instagram placements'
          ]
        },
        {
          type: 'code',
          language: 'text',
          code: `One Meta Campaign
       ↓
Eligible Placements
       ├── Facebook
       └── Instagram`
        }
      ]
    },

    {
      id: 'meta-ad-metrics',
      title: '10. Important Meta Ads Metrics',
      content: [
        {
          type: 'paragraph',
          text: 'Advertising metrics help marketers understand how much they are paying, how users interact with advertisements, and whether campaigns are producing the desired business results.'
        },
        {
          type: 'heading',
          text: 'CPM — Cost Per 1,000 Impressions'
        },
        {
          type: 'paragraph',
          text: 'CPM represents the cost associated with one thousand ad impressions.'
        },
        {
          type: 'code',
          language: 'text',
          code: `CPM = (Ad Spend / Impressions) × 1000

Example:
Ad Spend = ₹500
Impressions = 50,000

CPM = (500 / 50,000) × 1000
CPM = ₹10`
        },
        {
          type: 'heading',
          text: 'CPC — Cost Per Click'
        },
        {
          type: 'code',
          language: 'text',
          code: `CPC = Ad Spend / Link Clicks

Example:
Ad Spend = ₹600
Clicks = 200

CPC = 600 / 200
CPC = ₹3`
        },
        {
          type: 'heading',
          text: 'CTR — Click-Through Rate'
        },
        {
          type: 'code',
          language: 'text',
          code: `CTR = (Clicks / Impressions) × 100

Example:
Clicks = 400
Impressions = 20,000

CTR = (400 / 20,000) × 100
CTR = 2%`
        },
        {
          type: 'heading',
          text: 'CPA — Cost Per Acquisition'
        },
        {
          type: 'code',
          language: 'text',
          code: `CPA = Total Ad Spend / Number of Conversions

Example:
Ad Spend = ₹1,000
Conversions = 20

CPA = 1000 / 20
CPA = ₹50`
        },
        {
          type: 'heading',
          text: 'ROAS — Return On Ad Spend'
        },
        {
          type: 'code',
          language: 'text',
          code: `ROAS = Revenue Generated / Ad Spend

Example:
Revenue = ₹4,000
Ad Spend = ₹1,000

ROAS = 4000 / 1000
ROAS = 4

Meaning:
₹1 spent on advertising generated ₹4 in revenue.`
        },
        {
          type: 'table',
          headers: ['Metric', 'Meaning', 'Formula'],
          rows: [
            ['CPM', 'Cost per 1,000 impressions', '(Spend / Impressions) × 1000'],
            ['CPC', 'Cost per click', 'Spend / Clicks'],
            ['CTR', 'Percentage of impressions generating clicks', '(Clicks / Impressions) × 100'],
            ['CPA', 'Cost per acquisition', 'Spend / Conversions'],
            ['ROAS', 'Revenue generated for advertising spend', 'Revenue / Spend']
          ]
        }
      ]
    },

    {
      id: 'campaign-creation-workflow',
      title: '11. How Meta Ads Campaigns Work',
      content: [
        {
          type: 'paragraph',
          text: 'A Meta advertising campaign generally follows a hierarchical structure where the campaign defines the broader objective, the ad set defines delivery and audience settings, and the ad contains the creative that users see.'
        },
        {
          type: 'heading',
          text: 'Step-by-Step Campaign Flow'
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Open Ads Manager',
            'Create a new campaign',
            'Select campaign objective',
            'Configure campaign settings',
            'Create an Ad Set',
            'Select audience',
            'Set budget',
            'Configure schedule',
            'Select placements',
            'Configure optimization',
            'Create the advertisement',
            'Upload image or video',
            'Write primary text',
            'Add headline',
            'Select call-to-action',
            'Review the campaign',
            'Publish the campaign',
            'Monitor performance',
            'Optimize based on data'
          ]
        },
        {
          type: 'code',
          language: 'text',
          code: `1. Campaign
   ↓
2. Objective
   ↓
3. Ad Set
   ↓
4. Audience
   ↓
5. Budget
   ↓
6. Placement
   ↓
7. Ad Creative
   ↓
8. Publish
   ↓
9. Measure
   ↓
10. Optimize`
        }
      ]
    },

    {
      id: 'campaign-objectives',
      title: '12. Campaign Objectives',
      content: [
        {
          type: 'paragraph',
          text: 'The campaign objective communicates the result that the advertiser wants the advertising system to optimize toward.'
        },
        {
          type: 'table',
          headers: ['Objective', 'Typical Goal', 'Example'],
          rows: [
            ['Awareness', 'Increase awareness', 'Introduce a new brand'],
            ['Traffic', 'Drive visits', 'Send users to a website'],
            ['Engagement', 'Increase interactions', 'Promote social content'],
            ['Leads', 'Generate prospects', 'Collect customer inquiries'],
            ['App Promotion', 'Promote an app', 'Increase app activity or installs'],
            ['Sales', 'Generate purchases', 'Promote products in an online store']
          ]
        },
        {
          type: 'heading',
          text: 'Objective Selection Example'
        },
        {
          type: 'code',
          language: 'text',
          code: `Goal: Generate customer inquiries
        ↓
Objective: Leads

Goal: Send visitors to website
        ↓
Objective: Traffic

Goal: Sell products
        ↓
Objective: Sales

Goal: Promote content
        ↓
Objective: Engagement`
        }
      ]
    },

    {
      id: 'audience-targeting',
      title: '13. Audience Targeting',
      content: [
        {
          type: 'paragraph',
          text: 'Audience targeting allows advertisers to define which users should be considered for an advertising campaign.'
        },
        {
          type: 'heading',
          text: 'Common Audience Factors'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Location',
            'Age',
            'Gender where applicable',
            'Interests',
            'Behaviors',
            'Custom audiences',
            'Website activity',
            'Customer lists',
            'Engagement activity',
            'Lookalike audiences where available'
          ]
        },
        {
          type: 'heading',
          text: 'Audience Example'
        },
          {
          type: 'code',
          language: 'text',
          code: `Business:
Online Clothing Store

Possible Audience:
Location → India
Age → 18–35
Interest → Fashion
Behavior → Online shoppers

Ad
↓
Selected Audience
↓
Landing Page
↓
Purchase`
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Avoid Unnecessary Narrowing',
          text: 'Overly restrictive targeting can reduce the available audience. Audience settings should be aligned with the campaign objective and business requirements.'
        }
      ]
    },

    {
      id: 'budget-and-schedule',
      title: '14. Budget & Schedule',
      content: [
        {
          type: 'paragraph',
          text: 'Budget determines how much money is allocated to advertising. Scheduling controls when the campaign or ad set can run.'
        },
        {
          type: 'heading',
          text: 'Common Budget Concepts'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Daily budget',
            'Lifetime budget',
            'Campaign budget',
            'Ad set budget',
            'Schedule',
            'Start date',
            'End date'
          ]
        },
        {
          type: 'table',
          headers: ['Budget Type', 'Concept'],
          rows: [
            ['Daily Budget', 'Average amount allocated per day according to the configured campaign settings'],
            ['Lifetime Budget', 'Total budget allocated across a defined schedule'],
            ['Campaign-Level Budget', 'Budget managed at campaign level where applicable'],
            ['Ad Set Budget', 'Budget controlled at the ad set level']
          ]
        },
        {
          type: 'code',
          language: 'text',
          code: `Campaign
   ↓
Budget
   ↓
Schedule
   ↓
Audience
   ↓
Ads
   ↓
Delivery`
        }
      ]
    },

    {
      id: 'ad-creative',
      title: '15. Ad Creative',
      content: [
        {
          type: 'paragraph',
          text: 'The creative is the actual advertising content presented to users. It may contain images, videos, text, headlines, links, and a call-to-action.'
        },
        {
          type: 'heading',
          text: 'Common Creative Components'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Image',
            'Video',
            'Primary text',
            'Headline',
            'Description where applicable',
            'Destination URL',
            'Call-to-action',
            'Brand identity'
          ]
        },
        {
          type: 'heading',
          text: 'Basic Creative Structure'
        },
          {
          type: 'code',
          language: 'text',
          code: `Visual
  ↓
Attention

Primary Text
  ↓
Explain Value

Headline
  ↓
Reinforce Offer

CTA
  ↓
Ask User To Act`
        },
        {
          type: 'heading',
          text: 'Creative Checklist'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use clear visual content',
            'Communicate one primary message',
            'Show the product or service clearly',
            'Use readable text',
            'Make the call-to-action understandable',
            'Ensure the destination matches the advertisement',
            'Test different creative variations'
          ]
        }
      ]
    },

    {
      id: 'ad-placements',
      title: '16. Ad Placements',
      content: [
        {
          type: 'paragraph',
          text: 'Placements determine where eligible advertisements can appear across Meta platforms and surfaces.'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Facebook Feed',
            'Instagram Feed',
            'Facebook Stories',
            'Instagram Stories',
            'Instagram Reels',
            'Facebook Reels',
            'Marketplace',
            'Explore',
            'Other eligible placements'
          ]
        },
        {
          type: 'heading',
          text: 'Creative and Placement Relationship'
        },
        {
          type: 'code',
          language: 'text',
          code: `Creative
   ↓
Placement
   ├── Feed
   ├── Stories
   ├── Reels
   ├── Marketplace
   └── Other eligible surfaces`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Placement Consideration',
          text: 'Creative dimensions, presentation style, and user behavior can vary between placements. Prepare creative assets appropriate for the placements used by the campaign.'
        }
      ]
    },

    {
      id: 'meta-ads-optimization',
      title: '17. Meta Ads Optimization',
      content: [
        {
          type: 'paragraph',
          text: 'Optimization means using campaign performance data to improve advertising results. The source guide emphasizes measuring results, learning from data, and continuously improving campaigns.'
        },
        {
          type: 'heading',
          text: 'Optimization Areas'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Audience',
            'Creative',
            'Campaign objective',
            'Budget',
            'Placements',
            'Landing page',
            'Call-to-action',
            'Offer',
            'Conversion experience',
            'Performance metrics'
          ]
        },
        {
          type: 'heading',
          text: 'Optimization Loop'
        },
        {
          type: 'code',
          language: 'text',
          code: `Launch
  ↓
Collect Data
  ↓
Analyze Metrics
  ↓
Identify Weakness
  ↓
Test Change
  ↓
Measure Result
  ↓
Keep / Improve
  ↓
Repeat`
        },
        {
          type: 'heading',
          text: 'Useful Metrics During Optimization'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'CPM',
            'CPC',
            'CTR',
            'CPA',
            'Conversions',
            'Conversion rate',
            'ROAS',
            'Reach',
            'Impressions',
            'Frequency'
          ]
        }
      ]
    },

    {
      id: 'meta-ads-metrics-example',
      title: '18. Practical Metrics Example',
      content: [
        {
          type: 'paragraph',
          text: 'Suppose a campaign spends ₹2,000, receives 40,000 impressions, generates 800 clicks, and produces 40 conversions with ₹8,000 revenue.'
        },
        {
          type: 'code',
          language: 'text',
          code: `Ad Spend = ₹2,000
Impressions = 40,000
Clicks = 800
Conversions = 40
Revenue = ₹8,000

CPM
= (2000 / 40000) × 1000
= ₹50

CPC
= 2000 / 800
= ₹2.50

CTR
= (800 / 40000) × 100
= 2%

CPA
= 2000 / 40
= ₹50

ROAS
= 8000 / 2000
= 4`
        },
        {
          type: 'table',
          headers: ['Metric', 'Result'],
          rows: [
            ['Ad Spend', '₹2,000'],
            ['Impressions', '40,000'],
            ['Clicks', '800'],
            ['Conversions', '40'],
            ['Revenue', '₹8,000'],
            ['CPM', '₹50'],
            ['CPC', '₹2.50'],
            ['CTR', '2%'],
            ['CPA', '₹50'],
            ['ROAS', '4']
          ]
        }
      ]
    },

    {
      id: 'payment-settings',
      title: '19. Payment Settings',
      content: [
        {
          type: 'paragraph',
          text: 'Advertising accounts require appropriate payment configuration for campaigns that incur advertising charges. Payment settings are managed through Meta business and advertising tools.'
        },
        {
          type: 'heading',
          text: 'Payment Configuration Concepts'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Payment method',
            'Billing information',
            'Currency',
            'Payment history',
            'Account spending information',
            'Billing status',
            'Payment issues'
          ]
        },
        {
          type: 'code',
          language: 'text',
          code: `Ad Account
    ↓
Payment Settings
    ↓
Payment Method
    ↓
Campaign Spending
    ↓
Billing / Payment History`
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Payment Information',
          text: 'Use valid business and payment information and keep billing details updated to reduce interruptions caused by payment problems.'
        }
      ]
    },

    {
      id: 'account-roles-permissions',
      title: '20. Account Roles & Permissions',
      content: [
        {
          type: 'paragraph',
          text: 'Meta business tools support permission management so organizations can control which people and partners can access specific assets.'
        },
        {
          type: 'heading',
          text: 'Permission Concepts'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Business admin access',
            'Page access',
            'Ad account access',
            'Instagram access',
            'Analyst access',
            'Advertiser access',
            'Partner access',
            'Asset-specific permissions'
          ]
        },
        {
          type: 'heading',
          text: 'Example Team Structure'
        },
        {
          type: 'code',
          language: 'text',
          code: `Business Owner
      │
      ├── Admin
      │
      ├── Marketing Manager
      │       └── Campaign Management
      │
      ├── Advertiser
      │       └── Ads Management
      │
      └── Analyst
              └── Reports / Analysis`
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Security',
          text: 'Give team members only the access they require. Avoid sharing passwords and use appropriate account permissions instead.'
        }
      ]
    },

    {
      id: 'business-settings',
      title: '21. Meta Business Settings',
      content: [
        {
          type: 'paragraph',
          text: 'Business Settings provide centralized controls for business assets, people, partners, permissions, and other business configuration.'
        },
        {
          type: 'heading',
          text: 'Common Business Settings Areas'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Business information',
            'People',
            'Partners',
            'Pages',
            'Instagram accounts',
            'Ad Accounts',
            'Payment settings',
            'Security settings',
            'Data sources',
            'Permissions'
          ]
        },
        {
          type: 'code',
          language: 'text',
          code: `Business Settings
│
├── Business Info
├── People
├── Partners
├── Pages
├── Instagram Accounts
├── Ad Accounts
├── Payment
├── Security
└── Data / Asset Settings`
        }
      ]
    },

    {
      id: 'complete-meta-ads-workflow',
      title: '22. Complete Meta Ads Workflow',
      content: [
        {
          type: 'paragraph',
          text: 'A complete advertising workflow connects business setup, audience research, campaign creation, creative production, launch, measurement, and optimization.'
        },
        {
          type: 'code',
          language: 'text',
          code: `STEP 1
Create / Configure Business Portfolio
        ↓
STEP 2
Create Facebook Page
        ↓
STEP 3
Create / Connect Instagram Professional Account
        ↓
STEP 4
Create Ad Account
        ↓
STEP 5
Configure Payment
        ↓
STEP 6
Define Business Goal
        ↓
STEP 7
Choose Campaign Objective
        ↓
STEP 8
Define Audience
        ↓
STEP 9
Set Budget & Schedule
        ↓
STEP 10
Select Placements
        ↓
STEP 11
Create Ad Creative
        ↓
STEP 12
Review & Publish
        ↓
STEP 13
Collect Data
        ↓
STEP 14
Analyze CPM / CPC / CTR / CPA / ROAS
        ↓
STEP 15
Optimize
        ↓
STEP 16
Scale Carefully`
        },
        {
          type: 'heading',
          text: 'Practical Example'
        },
        {
          type: 'code',
          language: 'text',
          code: `Business:
Online Fashion Store

Goal:
Generate purchases

Campaign:
Sales

Audience:
Relevant target customers

Creative:
Product video + product image

Placement:
Eligible Facebook + Instagram placements

Budget:
Defined daily/lifetime budget

Measure:
CTR + CPC + CPA + ROAS

Optimize:
Creative + audience + landing page + budget`
        }
      ]
    },

    {
      id: 'meta-ads-best-practices',
      title: '23. Meta Ads Best Practices',
      content: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Define the business goal before creating the campaign.',
            'Select an objective aligned with the desired outcome.',
            'Use clear and relevant audience targeting.',
            'Create high-quality visual content.',
            'Keep the advertising message simple.',
            'Use a clear call-to-action.',
            'Make sure the landing page matches the advertisement.',
            'Track important performance metrics.',
            'Test multiple creative variations.',
            'Avoid changing too many variables simultaneously when analyzing results.',
            'Monitor advertising costs.',
            'Review conversion performance.',
            'Use appropriate permissions for team members.',
            'Keep payment and business information updated.',
            'Review campaigns regularly.',
            'Use data instead of assumptions for optimization.'
          ]
        },
        {
          type: 'heading',
          text: 'Simple Rule'
        },
        {
          type: 'code',
          language: 'text',
          code: `Right Goal
   +
Right Audience
   +
Right Creative
   +
Right Offer
   +
Right Measurement
   =
Better Advertising Decisions`
        }
      ]
    },

    {
      id: 'meta-ads-common-mistakes',
      title: '24. Common Meta Ads Mistakes',
      content: [
        {
          type: 'list',
          ordered: false,
          items: [
            'Running advertisements without a clear business objective',
            'Choosing an unrelated campaign objective',
            'Targeting an unsuitable audience',
            'Using poor-quality creative',
            'Ignoring mobile-first presentation',
            'Not tracking conversions',
            'Ignoring landing page performance',
            'Making decisions from very limited data',
            'Changing campaigns too frequently without analysis',
            'Using unclear calls-to-action',
            'Ignoring advertising costs',
            'Giving unnecessary account permissions',
            'Failing to maintain payment information',
            'Not testing creative variations',
            'Focusing on clicks without considering business outcomes'
          ]
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Important',
          text: 'A campaign can receive clicks and still fail to produce useful business results. Always connect advertising metrics with the actual business objective.'
        }
      ]
    },

    {
      id: 'meta-ads-quick-reference',
      title: '25. Meta Ads Quick Reference',
      content: [
        {
          type: 'table',
          headers: ['Term', 'Meaning'],
          rows: [
            ['Meta Ads', 'Paid advertising system across Meta platforms'],
            ['Business Portfolio', 'Container for managing business assets'],
            ['Facebook Page', 'Public Facebook business presence'],
            ['Instagram Professional Account', 'Business or creator Instagram account'],
            ['Ad Account', 'Workspace used to manage advertising'],
            ['Campaign', 'Top-level advertising structure'],
            ['Ad Set', 'Controls audience, budget, placement and delivery settings'],
            ['Ad', 'Actual creative shown to users'],
            ['CPM', 'Cost per 1,000 impressions'],
            ['CPC', 'Cost per click'],
            ['CTR', 'Click-through rate'],
            ['CPA', 'Cost per acquisition'],
            ['ROAS', 'Return on ad spend'],
            ['Audience', 'Users targeted by advertising'],
            ['Placement', 'Location where an advertisement can appear'],
            ['Creative', 'Visual and textual advertisement content'],
            ['Conversion', 'Desired user action'],
            ['Optimization', 'Improving campaigns using performance data']
          ]
        },
        {
          type: 'code',
          language: 'text',
          code: `Campaign
  └── Ad Set
       └── Ad

Ad Set:
Audience + Budget + Placement + Schedule

Ad:
Creative + Text + Headline + CTA

Metrics:
CPM + CPC + CTR + CPA + ROAS`
        }
      ]
    },

    {
      id: 'meta-ads-faq',
      title: '26. Meta Ads Interview & FAQ',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'What are Meta Ads?',
              answer: 'Meta Ads are paid advertisements managed through Meta advertising tools and can be delivered across eligible Meta platforms such as Facebook and Instagram.'
            },
            {
              question: 'What is a Meta Business Portfolio?',
              answer: 'A Meta Business Portfolio is used to organize and manage business assets, people, partners, and permissions.'
            },
            {
              question: 'What is an Ad Account?',
              answer: 'An Ad Account is the advertising workspace where campaigns, budgets, billing, and advertising performance are managed.'
            },
            {
              question: 'What is a campaign?',
              answer: 'A campaign is the top-level structure of a Meta advertising setup and contains the campaign objective and associated ad sets.'
            },
            {
              question: 'What is an Ad Set?',
              answer: 'An Ad Set contains settings such as audience, budget, schedule, placement, and optimization configuration.'
            },
            {
              question: 'What is an advertisement?',
              answer: 'An advertisement is the actual creative shown to users, including components such as images or videos, text, headlines, links, and calls-to-action.'
            },
            {
              question: 'What is CPM?',
              answer: 'CPM means Cost Per 1,000 Impressions and is calculated as advertising spend divided by impressions, multiplied by 1,000.'
            },
            {
              question: 'What is CPC?',
              answer: 'CPC means Cost Per Click and is calculated by dividing advertising spend by clicks.'
            },
            {
              question: 'What is CTR?',
              answer: 'CTR means Click-Through Rate and represents the percentage of impressions that generated clicks.'
            },
            {
              question: 'What is CPA?',
              answer: 'CPA means Cost Per Acquisition and represents the advertising cost associated with each conversion.'
            },
            {
              question: 'What is ROAS?',
              answer: 'ROAS means Return On Ad Spend and compares revenue generated with advertising spend.'
            },
            {
              question: 'What is audience targeting?',
              answer: 'Audience targeting is the process of defining which users an advertising campaign should attempt to reach.'
            },
            {
              question: 'What is an ad placement?',
              answer: 'A placement is a location or surface where an advertisement may appear, such as a feed, story, reel, or other eligible Meta placement.'
            },
            {
              question: 'What is a campaign objective?',
              answer: 'A campaign objective represents the primary business result that the advertiser wants the campaign to optimize toward.'
            },
            {
              question: 'What is organic marketing?',
              answer: 'Organic marketing focuses on unpaid reach, content, community engagement, and relationship building.'
            },
            {
              question: 'What is paid marketing?',
              answer: 'Paid marketing uses advertising budget to distribute promotional content to selected audiences.'
            },
            {
              question: 'Why connect Instagram with Meta business tools?',
              answer: 'Connecting the account allows businesses to manage relevant business assets and advertising activities through Meta business tools.'
            },
            {
              question: 'Why is a Facebook Page important for Meta advertising?',
              answer: 'A Facebook Page provides a public business presence and can serve as a connected business asset for advertising.'
            },
            {
              question: 'What is campaign optimization?',
              answer: 'Campaign optimization is the process of analyzing performance data and making informed changes to improve campaign results.'
            },
            {
              question: 'Why should advertising metrics be tracked?',
              answer: 'Metrics help advertisers understand cost, engagement, conversions, and financial performance so they can make data-informed decisions.'
            }
          ]
        }
      ]
    }
  ]
};

export default metaAdsContent;
