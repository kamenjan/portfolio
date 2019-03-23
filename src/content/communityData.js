import React from 'react'

const communityData = [
  {
    docSections: [
      {
        docTag: 'name',
        type: 'paragraph',
        lineBreakAfter: true,
        content: (
          <span>
            <a
              href={
                'http://www.termitnjak.com/en/blog/dragon-sprint-2016-a-full-week-of-sprinting-on-pyramid'
              }
              target={'_blank'}
            >
              Dragon Sprint
            </a>{' '}
            2016
          </span>
        ),
      },
      {
        docTag: 'role',
        type: 'array',
        lineBreakAfter: true,
        content: [
          <span style={{ color: `var(--color-tertiary)` }}>organizer</span>,
          <span style={{ color: `var(--color-tertiary)` }}>developer</span>,
        ],
      },
      {
        docTag: 'description',
        type: 'paragraph',
        lineBreakAfter: true,
        content:
          'Sprint was focused on improving the Pyramid framework by debugging, upgrading existing features and implementing new ones. The sprinters shared the results of the sprint among the local Python community, as well as experiences on how to built software on top of Pyramid. I contributed minor frontend tweaks for Pyramid quick start tutorial but I mostly helped with organization.',
      },
    ],
  },
  {
    docSections: [
      {
        docTag: 'name',
        type: 'paragraph',
        lineBreakAfter: true,
        content: (
          <span>
            <a
              href='https://www.meetup.com/React-Development-Meetup-Slovenija/events/256143735/'
              target={'_blank'}
            >
              React Meetup
            </a>{' '}
            2018
          </span>
        ),
      },
      {
        docTag: 'role',
        type: 'array',
        lineBreakAfter: true,
        content: [
          <span style={{ color: `var(--color-tertiary)` }}>organizer</span>,
          <span style={{ color: `var(--color-tertiary)` }}>co-host</span>,
          <span style={{ color: `var(--color-tertiary)` }}>speaker</span>,
        ],
      },
      {
        docTag: 'description',
        type: 'paragraph',
        lineBreakAfter: true,
        content:
          'In November 2018 I\'ve organized and co-hosted the first React Meetup in Ljubljana. PovioLabs and Poligon helped me and supported the event by providing food and really nice location for the meetup. I also gave an intro talk titled "What can React library do for you". Response was amazing with over 50 attendees and some new friends.',
      },
    ],
  },
]
export default communityData
