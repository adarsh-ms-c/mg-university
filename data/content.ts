export const official = 'https://www.mgu.ac.in';
export const siteLinks = {
  apply: 'https://cap.mgu.ac.in/executive/',
  admissions: 'https://admission.mgu.ac.in/',
  virtualTour: `${official}/virtual-tour/`,
  contact: `${official}/about/contact-us/`,
  onlineServices: 'https://assist.mgu.ac.in/onlineservices/',
};

export const navigation = [
  { label: 'About', href: `${official}/about/overview/` }, { label: 'Administration', href: `${official}/administration/statutory-bodies/` },
  { label: 'Academics', href: `${official}/academics/programmes/` }, { label: 'Admissions', href: 'https://admission.mgu.ac.in/' },
  { label: 'Examinations', href: `${official}/exam-category/exam-notifications/` }, { label: 'Research', href: 'https://research.mgu.ac.in/' },
  { label: 'Student Life', href: 'https://dsw.mgu.ac.in/' }, { label: 'Picture Gallery', href: `${official}/gallery/inaugurations/` },
  { label: 'Info Corner', href: `${official}/infodesk/calendar/` }, { label: 'Alumni', href: 'https://alumni.mgu.ac.in/' },
];

export const stats = [
  { value: 31, suffix: '', label: 'Academic Schools' }, { value: 7, suffix: '', label: 'Inter University Centres' },
  { value: 7, suffix: '', label: 'Inter School Centres' }, { value: 260, suffix: '+', label: 'Affiliated Institutions' },
];

export const tickerItems = [
  'Re-notification 2: Applications invited – Course Mentor (Online MBA) on contract at CDOE',
  'Assistant Professor on contract at NIPST, Botany',
  'Re-notification 1: Assistant Professor on contract at IIRBS, Chemistry',
];

export const quickAccess = [
  { label: 'Admissions', detail: 'Programmes, prospectus and applications', href: siteLinks.admissions, icon: '↗' },
  { label: 'Online Services', detail: 'Access university online services', href: siteLinks.onlineServices, icon: '⌘' },
  { label: 'Examinations', detail: 'Exam notifications and student services', href: 'https://www.mgu.ac.in/exam-category/exam-notifications/', icon: '▤' },
  { label: 'Results', detail: 'Find examination results and updates', href: 'https://www.mgu.ac.in/examinations/results/', icon: '✓' },
];

export const news = [
  { category: 'Research', title: 'ANRF-PAIR project heads visit MGU for review', description: 'Representatives from the University of Hyderabad visited MGU to review progress and discuss research collaboration.', href: `${official}/anrf-pair-project-heads-visit-mgu-for-review/`, date: 'Research update' },
  { category: 'Campus', title: 'Mental Health Exhibition at Mahatma Gandhi University', description: 'Lehar, a two-day exhibition by the School of Behavioural Sciences, brings mental health awareness to campus.', href: `${official}/mental-health-exhibition-at-mahatma-gandhi-university/`, date: 'Campus news' },
  { category: 'Community', title: 'Free medical camp in Puthuppally', description: 'MGU’s biomedical research centre organised health screenings and awareness sessions for the community.', href: `${official}/free-medical-camp-and-awareness-programme-in-puthuppally/`, date: 'Community outreach' },
];

export const latest = [
  { category: 'Academics', title: 'Four-Year Undergraduate Programme review committee visits MGU', description: 'The review committee visited the university as part of its assessment of the programme.', href: `${official}/four-year-undergraduate-programme-review-committee-visits-mahatma-gandhi-university/` },
  { category: 'Research', title: 'Three MGU scholars receive travel grants for Neuroscience 2026', description: 'Three IUCBR scholars received travel support to present Parkinson’s disease research at the Society for Neuroscience annual meeting.', href: `${official}/three-mgu-scholars-receive-travel-grants-to-present-parkinsons-disease-research-at-neuroscience-2026/` },
];

export const highlights = [
  { tag: 'Recognition', title: 'Indu C. V. wins state award', description: 'The Assistant Section Officer received the Bharana Bhasha Sevana Puraskaram for promoting Malayalam in administration.', href: `${official}/indu-c-v-from-mahatma-gandhi-university-wins-state-award/` },
  { tag: 'Scholarship', title: 'Reshma C. S. receives the Queen Elizabeth II Diamond Jubilee Scholarship', description: 'The M.Tech Energy Science and Technology student was awarded the scholarship by the Government of Canada.', href: `${official}/mgu-student-receives-queen-elizabeth-ii-diamond-jubilee-scholarship/` },
];

export const announcements = [
  { title: 'Re-notification: Course Mentor (Online MBA) on contract at CDOE', href: `${official}/uploads/2026/11/Re-Notification-2-Applications-Invited-Course-MentorOnline-MBA-on-contract-at-CDO.pdf` },
  { title: 'Assistant Professor on contract at NIPST for Botany', href: `${official}/uploads/2026/11/NIPST-Botany-Notification.pdf` },
  { title: 'Re-notification: Assistant Professor at IIRBS for Chemistry', href: `${official}/uploads/2026/11/Chemistry-Renotification-1.pdf` },
  { title: 'Examination notifications and schedules', href: `${official}/exam-category/exam-notifications/` },
  { title: 'Academic calendar and important dates', href: `${official}/infodesk/calendar/academic/` },
  { title: 'Student support and online services', href: 'https://assist.mgu.ac.in/onlineservices/' },
];

export const quickLinks = [
  ['Reports', `${official}/about/reports/`], ['Public Self Disclosure', `${official}/about/disclosure/`], ['Students’ Welfare', 'https://dsw.mgu.ac.in/'], ['Minutes of Meetings', `${official}/infodesk/minutes/`],
  ['Story Archives', `${official}/blog/`], ['Placement & Training', `${official}/placement-and-training-cell/`], ['MGU Green Lab', 'https://mgugreenlab.com/'], ['MOOC on Organic Farming', `${official}/mooc-on-organic-farming/`],
  ['Faculty Portal', 'https://www.iqacmgu.org/'], ['Employees Portal', 'https://employee.mgu.ac.in/'], ['Pensioners Portal', 'https://employee.mgu.ac.in/Pensioner/'], ['College Authorities', 'https://projects.mgu.ac.in/'],
  ['Calendar', `${official}/infodesk/calendar/`], ['Anti-Ragging Committee', `${official}/administration/other-offices/university-level-anti-ragging-cell/`], ['Scholarships', `${official}/infodesk/scholarships-financial-assistance/`], ['Faculty Registration', 'https://ums.mgu.ac.in/'],
].map(([label, href]) => ({ label, href }));

export const footerLinks = [
  ['Terms of Use', `${official}/terms-of-use/`], ['RTI', `${official}/infodesk/rti/`], ['Model Question Papers', `${official}/model-question-papers/`], ['FAQ', `${official}/faq/`],
  ['National Academic Depository', 'https://nad.digitallocker.gov.in/'], ['Quotations & Tenders', `${official}/orders-notifications-category/tenders/`], ['Contact Us', `${official}/about/contact-us/`],
].map(([label, href]) => ({ label, href }));
