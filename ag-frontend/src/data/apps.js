import questionable from '../assets/questionable/questionable.png';
import screen1 from '../assets/questionable/screen_1.png';
import screen2 from '../assets/questionable/screen_2.png';

/**
 * Global list of applications.
 * Add new apps here to display them on the website.
 */
export const apps = [
  {
    id: 'questionable',
    title: 'Questionable: Icebreaker Game',
    description: '180+ deep questions to spark great conversations and break the ice with friends',
    longDescription: `Tired of small talk? Questionable is the ultimate icebreaker tool designed to help you connect with friends, family, or partners on a deeper level. Whether you're at a party, on a first date, or just hanging out, our curated list of 180+ thought-provoking questions will help you discover things you never knew about the people around you.

    Why choose Questionable?

    • 180+ Unique Questions: Carefully selected to avoid boring "yes/no" answers.
    • Multiple Categories: From lighthearted fun to deep life philosophy.
    • Minimalist Design: No distractions, just the questions that matter.
    • Dark Mode Support: Perfect for late-night campfire talks.
    • 100% Free: All questions are available right from the start.

    Stop asking "How was your day?" and start asking something Questionable. Download now and start the conversation!`,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.abozsgroup.questionable',
    iconGradient: 'linear-gradient(135deg, #3b82f6, #a855f7)',
    icon: questionable,
    screenshots: [screen1, screen2],
    policy: {
      effectiveDate: '2026-02-05',
      content: `
        <p>This privacy policy applies to the Questionable app (hereby referred to as "Application") created by AbozsGroup (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".</p>
        
        <h3>Information Collection and Use</h3>
        <p>The Application collects information when you download and use it. This may include your device's IP address, pages visited, time spent on the app, and the operating system used.</p>
        
        <h3>Third Party Access</h3>
        <p>Only aggregated, anonymized data is periodically transmitted to external services. The Application utilizes third-party services that have their own Privacy Policies:</p>
        <ul>
          <li><a href="https://www.google.com/policies/privacy/" target="_blank">Google Play Services</a></li>
          <li><a href="https://support.google.com/admob/answer/6128543" target="_blank">AdMob</a></li>
        </ul>

        <h3>Children</h3>
        <p>The Application does not address anyone under the age of 13. If the Service Provider discovers a child under 13 provided personal information, it will be deleted immediately.</p>

        <h3>Contact Us</h3>
        <p>If you have questions regarding privacy, contact the Service Provider via email at <strong>abozsgroup@gmail.com</strong>.</p>
      `
    }
  },
];