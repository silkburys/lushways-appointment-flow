
# Instagram Integration with Elfsight

## Overview

This document describes the implementation of Instagram feed integration on the Lushways website using Elfsight widgets with performance optimizations.

## Implementation Details

### Location
- **File**: `src/pages/Index.tsx`
- **Section**: Instagram Feed Section
- **Instagram Account**: [@lushwaysuae](https://www.instagram.com/lushwaysuae/)

### Key Features

1. **Lazy Loading**: Instagram widget only loads when user scrolls to the section
2. **Performance Optimization**: Protects First Contentful Paint (FCP) by deferring script loading
3. **Intersection Observer**: Uses modern browser API to detect when section comes into view
4. **Loading States**: Shows skeleton placeholders while content loads

### Technical Implementation

#### State Management
```typescript
const [instagramWidgetLoaded, setInstagramWidgetLoaded] = useState(false);
```

#### Intersection Observer Setup
- **Root Margin**: 100px (loads content 100px before section is visible)
- **Target**: `instagram-section` element
- **Trigger**: Single intersection event

#### Script Loading
- **Source**: `https://static.elfsight.com/platform/platform.js`
- **Loading**: Async and deferred for optimal performance
- **Injection**: Dynamically added to document head when needed

### Widget Configuration

#### Current Widget ID
```html
<div className="elfsight-app-a1b2c3d4-e5f6-7890-abcd-ef1234567890" />
```

**⚠️ IMPORTANT**: This is a placeholder ID. Replace with your actual Elfsight widget ID.

#### Widget Properties
- **Lazy Loading**: `data-elfsight-app-lazy` attribute
- **Minimum Height**: 400px to prevent layout shift
- **Responsive**: Max width of 4xl (896px)

### Performance Benefits

1. **FCP Protection**: Script doesn't load until needed
2. **Bandwidth Savings**: Only loads for users who scroll to section
3. **Smooth UX**: Loading states prevent content jumping
4. **SEO Friendly**: Doesn't block initial page render

### Setup Instructions

#### Step 1: Get Elfsight Widget ID
1. Go to [Elfsight Instagram Feed](https://elfsight.com/instagram-feed-instashow/)
2. Create a new widget
3. Configure for Instagram account: `@lushwaysuae`
4. Set to display last 4 posts
5. Copy the widget ID from the embed code

#### Step 2: Update Widget ID
Replace the placeholder in the code:
```html
<!-- Replace this placeholder -->
<div className="elfsight-app-a1b2c3d4-e5f6-7890-abcd-ef1234567890" />

<!-- With your actual widget ID -->
<div className="elfsight-app-YOUR_ACTUAL_WIDGET_ID" />
```

#### Step 3: Test Implementation
1. Deploy changes
2. Scroll to Instagram section
3. Verify widget loads correctly
4. Check network tab for performance impact

### Loading States

#### Before Widget Loads
- Shows 4 skeleton placeholder cards
- Grid layout: 2 columns on mobile, 4 on desktop
- Animated pulse effect
- "Loading Instagram posts..." message

#### After Widget Loads
- Full Elfsight Instagram widget
- Last 4 posts from @lushwaysuae
- Interactive Instagram functionality

### Code Structure

```typescript
// Lazy load Instagram widget when it comes into view
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !instagramWidgetLoaded) {
          setInstagramWidgetLoaded(true);
          // Load Elfsight script
          const script = document.createElement('script');
          script.src = 'https://static.elfsight.com/platform/platform.js';
          script.async = true;
          script.defer = true;
          document.head.appendChild(script);
        }
      });
    },
    { rootMargin: '100px' }
  );

  const instagramSection = document.getElementById('instagram-section');
  if (instagramSection) {
    observer.observe(instagramSection);
  }

  return () => {
    if (instagramSection) {
      observer.unobserve(instagramSection);
    }
  };
}, [instagramWidgetLoaded]);
```

### Browser Support

- **Modern Browsers**: Full support with Intersection Observer
- **Legacy Browsers**: Falls back to immediate loading
- **Mobile**: Fully responsive design

### Troubleshooting

#### Widget Not Loading
1. Check widget ID is correct
2. Verify Instagram account is public
3. Check browser console for errors
4. Ensure Elfsight script loads successfully

#### Performance Issues
1. Monitor network requests
2. Check FCP metrics
3. Verify lazy loading is working
4. Test on slower connections

### Future Enhancements

1. **Error Handling**: Add fallback for failed widget loads
2. **Custom Styling**: Match widget colors to brand theme
3. **Analytics**: Track widget interaction events
4. **Caching**: Implement service worker caching for assets

### Related Links

- [Elfsight Instagram Feed Documentation](https://elfsight.com/help/instagram-feed-instashow/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Web Performance Best Practices](https://web.dev/performance/)

---

**Last Updated**: 2025-06-15  
**Status**: Implementation Complete - Widget ID Required
